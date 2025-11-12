import fs from 'node:fs';
import path from 'node:path';
import { __unstable__loadDesignSystem } from '@tailwindcss/node';

// Cache the design system to avoid reloading on every file
let designSystemCache = null;
let designSystemPromise = null;
let designSystemError = null;
let cssPathCache = null;

function resolveCssPath(cssPath, context) {
  if (!cssPath) {
    return null;
  }

  // If absolute path, use as-is
  if (path.isAbsolute(cssPath)) {
    return cssPath;
  }

  // If relative path, resolve relative to the project root (where ESLint config is)
  // Try to find the project root by looking for common config files
  const filename = context.getFilename();
  const fileDir = path.dirname(filename);
  
  // Try to resolve relative to the current file's directory first
  const relativeToFile = path.resolve(fileDir, cssPath);
  if (fs.existsSync(relativeToFile)) {
    return relativeToFile;
  }

  // Try to resolve relative to the working directory (project root)
  const relativeToCwd = path.resolve(process.cwd(), cssPath);
  if (fs.existsSync(relativeToCwd)) {
    return relativeToCwd;
  }

  return relativeToCwd; // Return even if doesn't exist, let error handling catch it
}

function getDesignSystemSync(cssPath, context) {
  // Reset cache if CSS path changed
  if (cssPathCache !== cssPath) {
    designSystemCache = null;
    designSystemPromise = null;
    designSystemError = null;
    cssPathCache = cssPath;
  }

  if (designSystemCache) {
    return designSystemCache;
  }

  if (designSystemError) {
    return null;
  }

  if (designSystemPromise && !designSystemCache) {
    return null;
  }

  if (!designSystemPromise) {
    try {
      const resolvedPath = resolveCssPath(cssPath, context);
      if (!resolvedPath || !fs.existsSync(resolvedPath)) {
        designSystemError = new Error(`CSS file not found: ${cssPath}`);
        return null;
      }

      const cssContent = fs.readFileSync(resolvedPath, 'utf-8');
      const basePath = path.dirname(resolvedPath);

      designSystemPromise = __unstable__loadDesignSystem(cssContent, {
        base: basePath,
      })
        .then((ds) => {
          designSystemCache = ds;
          return ds;
        })
        .catch((error) => {
          designSystemError = error;
          return null;
        });
    } catch (error) {
      designSystemError = error;
      return null;
    }
  }

  return null;
}

async function getDesignSystemAsync(cssPath, context) {
  // Reset cache if CSS path changed
  if (cssPathCache !== cssPath) {
    designSystemCache = null;
    designSystemPromise = null;
    designSystemError = null;
    cssPathCache = cssPath;
  }

  if (designSystemCache) {
    return designSystemCache;
  }

  if (designSystemError) {
    return null;
  }

  if (!designSystemPromise) {
    getDesignSystemSync(cssPath, context);
  }

  if (designSystemPromise) {
    try {
      return await designSystemPromise;
    } catch (error) {
      designSystemError = error;
      return null;
    }
  }

  return null;
}

function extractClassNames(classNameValue, sourceCode) {
  const classes = [];

  if (!classNameValue) {
    return classes;
  }

  if (classNameValue.type === 'Literal' && typeof classNameValue.value === 'string') {
    const classString = classNameValue.value;
    return classString.split(/\s+/).filter((cls) => cls.trim().length > 0);
  }

  if (classNameValue.type === 'TemplateLiteral') {
    if (classNameValue.expressions && classNameValue.expressions.length > 0) {
      return [];
    }

    const parts = [];
    for (const quasi of classNameValue.quasis) {
      const cooked = quasi.value?.cooked || '';
      if (cooked.trim()) {
        parts.push(cooked.trim());
      }
    }

    const combined = parts.join(' ');
    return combined.split(/\s+/).filter((cls) => cls.trim().length > 0);
  }

  if (classNameValue.type === 'JSXExpressionContainer') {
    return extractClassNames(classNameValue.expression, sourceCode);
  }

  return classes;
}

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce canonical Tailwind CSS class names',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {
          cssPath: {
            type: 'string',
            description: 'Path to your Tailwind CSS file (relative to project root or absolute)',
          },
          rootFontSize: {
            type: 'number',
            default: 16,
            description: 'Root font size in pixels for rem calculations',
          },
        },
        required: ['cssPath'],
        additionalProperties: false,
      },
    ],
    messages: {
      nonCanonical: 'The class `{{original}}` can be written as `{{canonical}}`',
      cssNotFound: 'CSS file not found: {{path}}. Please check your cssPath configuration.',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const cssPath = options.cssPath;
    const rootFontSize = options.rootFontSize || 16;
    const sourceCode = context.getSourceCode();

    if (!cssPath) {
      context.report({
        loc: { line: 1, column: 0 },
        messageId: 'cssNotFound',
        data: { path: 'not specified' },
      });
      return {};
    }

    return {
      JSXAttribute(node) {
        if (node.name.name !== 'className') {
          return;
        }

        const value = node.value;
        if (!value) {
          return;
        }

        let classNameValue = value;
        if (value.type === 'JSXExpressionContainer') {
          classNameValue = value.expression;
        }

        if (
          classNameValue.type !== 'Literal' &&
          classNameValue.type !== 'TemplateLiteral' &&
          classNameValue.type !== 'JSXExpressionContainer'
        ) {
          return;
        }

        const classNames = extractClassNames(classNameValue, sourceCode);
        if (classNames.length === 0) {
          return;
        }

        const designSystem = getDesignSystemSync(cssPath, context);

        if (!designSystem) {
          getDesignSystemAsync(cssPath, context).catch(() => {});
          return;
        }

        if (designSystem && designSystem.canonicalizeCandidates) {
          processClasses(
            designSystem,
            classNames,
            classNameValue,
            sourceCode,
            rootFontSize,
            context,
          );
        }
      },
    };
  },
};

function processClasses(
  designSystem,
  classNames,
  classNameValue,
  sourceCode,
  rootFontSize,
  context,
) {
  const issues = [];

  for (let i = 0; i < classNames.length; i++) {
    const className = classNames[i];

    try {
      const canonicalized = designSystem.canonicalizeCandidates([className], {
        rem: rootFontSize,
      })[0];

      if (canonicalized !== className) {
        issues.push({
          original: className,
          canonical: canonicalized,
          index: i,
        });
      }
    } catch {
      continue;
    }
  }

  if (issues.length > 0) {
    const originalText = sourceCode.getText(classNameValue);

    const canonicalMap = new Map();
    issues.forEach((issue) => {
      canonicalMap.set(issue.original, issue.canonical);
    });

    const fixedClassNames = classNames.map((className) => {
      return canonicalMap.get(className) || className;
    });
    const fixedClassString = fixedClassNames.join(' ');

    let fixedText;

    const quoteMatch = originalText.match(/^(["'`])(.*)\1$/);

    if (quoteMatch) {
      fixedText = `${quoteMatch[1]}${fixedClassString}${quoteMatch[1]}`;
    } else if (classNameValue.type === 'TemplateLiteral') {
      fixedText = `\`${fixedClassString}\``;
    } else {
      const startQuoteMatch = originalText.match(/^(["'`])/);
      if (startQuoteMatch) {
        const quote = startQuoteMatch[1];
        const endQuoteIndex = originalText.lastIndexOf(quote);
        if (endQuoteIndex > 0) {
          fixedText = `${quote}${fixedClassString}${quote}`;
        } else {
          fixedText = fixedClassString;
        }
      } else {
        fixedText = fixedClassString;
      }
    }

    context.report({
      node: classNameValue,
      messageId: 'nonCanonical',
      data: {
        original: issues[0].original,
        canonical: issues[0].canonical,
      },
      fix(fixer) {
        if (fixedText !== originalText) {
          return fixer.replaceText(classNameValue, fixedText);
        }
        return null;
      },
    });

    for (let i = 1; i < issues.length; i++) {
      context.report({
        node: classNameValue,
        messageId: 'nonCanonical',
        data: {
          original: issues[i].original,
          canonical: issues[i].canonical,
        },
      });
    }
  }
}

