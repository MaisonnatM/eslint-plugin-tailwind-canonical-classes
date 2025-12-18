import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { computeFullCssHash } from "./hash-utils.js";
import {
  findProjectRoot,
  getCachePath,
  loadCacheSync,
  saveCacheSync,
  isCacheValid,
} from "./cache-manager.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory cache for the current ESLint run (avoids repeated disk reads)
let memoryCache = null;
let memoryCacheCssPath = null;
let hasLoggedCacheStatus = false;

/**
 * Resolve CSS path relative to the project
 */
function resolveCssPath(cssPath, context) {
  if (!cssPath) {
    return null;
  }

  // If absolute path, use as-is
  if (path.isAbsolute(cssPath)) {
    return cssPath;
  }

  // Try to resolve relative to the current file's directory first
  const filename = context.getFilename();
  const fileDir = path.dirname(filename);
  const relativeToFile = path.resolve(fileDir, cssPath);
  if (fs.existsSync(relativeToFile)) {
    return relativeToFile;
  }

  // Try to resolve relative to the working directory (project root)
  const relativeToCwd = path.resolve(process.cwd(), cssPath);
  if (fs.existsSync(relativeToCwd)) {
    return relativeToCwd;
  }

  return relativeToCwd;
}

/**
 * Extract class names from a JSX attribute value
 */
function extractClassNames(classNameValue, sourceCode) {
  const classes = [];

  if (!classNameValue) {
    return classes;
  }

  if (
    classNameValue.type === "Literal" &&
    typeof classNameValue.value === "string"
  ) {
    const classString = classNameValue.value;
    return classString.split(/\s+/).filter((cls) => cls.trim().length > 0);
  }

  if (classNameValue.type === "TemplateLiteral") {
    if (classNameValue.expressions && classNameValue.expressions.length > 0) {
      return [];
    }

    const parts = [];
    for (const quasi of classNameValue.quasis) {
      const cooked = quasi.value?.cooked || "";
      if (cooked.trim()) {
        parts.push(cooked.trim());
      }
    }

    const combined = parts.join(" ");
    return combined.split(/\s+/).filter((cls) => cls.trim().length > 0);
  }

  if (classNameValue.type === "JSXExpressionContainer") {
    return extractClassNames(classNameValue.expression, sourceCode);
  }

  return classes;
}

/**
 * Run the canonicalizer worker via execSync
 * This allows us to run async Tailwind API synchronously
 */
function canonicalizeViaWorker(cssPath, rootFontSize, classNames, buildFullCache = false) {
  const input = JSON.stringify({
    cssPath,
    rootFontSize,
    classNames,
    buildFullCache,
  });

  const workerPath = path.join(__dirname, "canonicalizer-worker.js");

  // The worker needs to run with cwd set to the project directory
  // so that Tailwind can resolve imports correctly
  const cssDir = path.dirname(cssPath);
  // Go up from src/ to the project root (where package.json is)
  let projectDir = cssDir;
  while (projectDir !== path.dirname(projectDir)) {
    if (fs.existsSync(path.join(projectDir, "package.json"))) {
      break;
    }
    projectDir = path.dirname(projectDir);
  }

  try {
    const result = execSync(`node "${workerPath}"`, {
      input,
      encoding: "utf-8",
      maxBuffer: 50 * 1024 * 1024, // 50MB buffer for large class lists
      timeout: 60000, // 60 second timeout
      windowsHide: true,
      cwd: projectDir, // Run from project directory for proper Tailwind resolution
      stdio: ["pipe", "pipe", "pipe"], // Capture stderr
    });

    const parsed = JSON.parse(result);
    if (parsed.error) {
      // Worker returned an error
      return { mappings: {}, cssHash: "", knownClasses: [] };
    }
    return parsed;
  } catch (error) {
    // Worker failed, return empty result
    return { mappings: {}, cssHash: "", knownClasses: [] };
  }
}

/**
 * Load cache from disk or build it if missing/invalid
 */
function loadOrBuildCache(resolvedCssPath, rootFontSize, context) {
  // Check memory cache first (already loaded this ESLint run)
  if (memoryCache && memoryCacheCssPath === resolvedCssPath) {
    const currentHash = computeFullCssHash(resolvedCssPath);
    if (isCacheValid(memoryCache, currentHash, rootFontSize)) {
      return memoryCache;
    }
  }

  // Find project root and cache path
  const filename = context.getFilename();
  const projectRoot = findProjectRoot(path.dirname(filename));
  const cachePath = getCachePath(projectRoot, resolvedCssPath);

  // Log cache check (only once per ESLint run)
  if (!hasLoggedCacheStatus) {
    console.log(`[tailwind-canonical] Checking cache...`);
  }

  // Compute current CSS hash
  const currentCssHash = computeFullCssHash(resolvedCssPath);

  // Try to load existing cache
  let cache = loadCacheSync(cachePath);

  if (cache && isCacheValid(cache, currentCssHash, rootFontSize)) {
    // Cache is valid, use it
    if (!hasLoggedCacheStatus) {
      const mappingCount = Object.keys(cache.mappings || {}).length;
      console.log(`[tailwind-canonical] Cache valid (${mappingCount} mappings). Running fast.`);
      hasLoggedCacheStatus = true;
    }
    // Convert checkedClasses array back to Set
    cache.checkedClasses = new Set(cache.checkedClasses || []);
    memoryCache = cache;
    memoryCacheCssPath = resolvedCssPath;
    return cache;
  }

  // Cache miss or invalid - build new cache via worker
  if (!hasLoggedCacheStatus) {
    console.log(`[tailwind-canonical] Building cache (this may take up to 30s on first run)...`);
    hasLoggedCacheStatus = true;
  }
  const workerResult = canonicalizeViaWorker(
    resolvedCssPath,
    rootFontSize,
    [],
    true // buildFullCache
  );

  cache = {
    cssHash: currentCssHash,
    cssPath: resolvedCssPath,
    rootFontSize,
    mappings: workerResult.mappings || {},
    knownClasses: new Set(workerResult.knownClasses || []),
    checkedClasses: new Set(Object.keys(workerResult.mappings || {})), // Pre-computed mappings are already checked
  };

  const mappingCount = Object.keys(cache.mappings).length;
  console.log(`[tailwind-canonical] Cache built (${mappingCount} mappings). Subsequent runs will be fast.`);

  // Save cache to disk
  // Convert Set to Array for JSON serialization
  const cacheToSave = {
    ...cache,
    knownClasses: Array.from(cache.knownClasses),
    checkedClasses: Array.from(cache.checkedClasses),
  };
  saveCacheSync(cachePath, cacheToSave);

  // Update memory cache
  memoryCache = cache;
  memoryCacheCssPath = resolvedCssPath;

  return cache;
}

/**
 * Check if a class is likely a Tailwind class that needs canonicalization
 * This filters out obvious non-Tailwind classes to avoid unnecessary processing
 */
function mightNeedCanonicalization(className) {
  // Classes with arbitrary values might need canonicalization
  // e.g., p-[16px] -> p-4, h-[50px] -> h-12.5
  if (className.includes("[") && className.includes("]")) {
    return true;
  }

  // Classes with explicit units might need canonicalization
  // e.g., p-4px -> p-1
  if (/\d+(px|rem|em)$/.test(className)) {
    return true;
  }

  return false;
}

export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce canonical Tailwind CSS class names",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          cssPath: {
            type: "string",
            description:
              "Path to your Tailwind CSS file (relative to project root or absolute)",
          },
          rootFontSize: {
            type: "number",
            default: 16,
            description: "Root font size in pixels for rem calculations",
          },
        },
        required: ["cssPath"],
        additionalProperties: false,
      },
    ],
    messages: {
      nonCanonical:
        "The class `{{original}}` can be written as `{{canonical}}`",
      cssNotFound:
        "CSS file not found: {{path}}. Please check your cssPath configuration.",
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const cssPath = options.cssPath;
    const rootFontSize = options.rootFontSize || 16;
    const sourceCode = context.sourceCode;

    if (!cssPath) {
      context.report({
        loc: { line: 1, column: 0 },
        messageId: "cssNotFound",
        data: { path: "not specified" },
      });
      return {};
    }

    // Resolve CSS path
    const resolvedCssPath = resolveCssPath(cssPath, context);
    if (!resolvedCssPath || !fs.existsSync(resolvedCssPath)) {
      context.report({
        loc: { line: 1, column: 0 },
        messageId: "cssNotFound",
        data: { path: cssPath },
      });
      return {};
    }

    // Load or build cache (synchronous)
    let cache;
    try {
      cache = loadOrBuildCache(resolvedCssPath, rootFontSize, context);
    } catch (error) {
      // Failed to load cache, return empty rule
      return {};
    }

    // Track unknown classes that need processing at the end
    const pendingClasses = new Set();
    const nodesByClass = new Map(); // className -> [{ node, classNames, classNameValue }]

    return {
      JSXAttribute(node) {
        if (node.name.name !== "className") {
          return;
        }

        const value = node.value;
        if (!value) {
          return;
        }

        let classNameValue = value;
        if (value.type === "JSXExpressionContainer") {
          classNameValue = value.expression;
        }

        if (
          classNameValue.type !== "Literal" &&
          classNameValue.type !== "TemplateLiteral" &&
          classNameValue.type !== "JSXExpressionContainer"
        ) {
          return;
        }

        const classNames = extractClassNames(classNameValue, sourceCode);
        if (classNames.length === 0) {
          return;
        }

        // Process each class
        for (const className of classNames) {
          // Check cache for known mapping
          if (cache.mappings[className]) {
            // Found a cached non-canonical -> canonical mapping
            // Report immediately
            reportNonCanonical(
              context,
              classNameValue,
              className,
              cache.mappings[className],
              classNames,
              sourceCode
            );
          } else if (mightNeedCanonicalization(className) && !cache.checkedClasses?.has(className)) {
            // Class might need canonicalization but isn't in cache and hasn't been checked yet
            // Queue for batch processing
            pendingClasses.add(className);
            if (!nodesByClass.has(className)) {
              nodesByClass.set(className, []);
            }
            nodesByClass.get(className).push({
              node,
              classNames,
              classNameValue,
            });
          }
          // else: Known valid class, already checked, or doesn't look like it needs canonicalization
        }
      },

      "Program:exit"() {
        // Process any pending unknown classes
        if (pendingClasses.size === 0) {
          return;
        }

        // Filter out classes that we've already checked (they're canonical as-is)
        // The cache.checkedClasses Set tracks classes we've verified don't need changes
        const trulyUnknown = Array.from(pendingClasses).filter(
          cls => !cache.checkedClasses?.has(cls)
        );

        // If all pending classes have been checked before, skip worker
        if (trulyUnknown.length === 0) {
          return;
        }

        // Batch canonicalize via worker
        const workerResult = canonicalizeViaWorker(
          resolvedCssPath,
          rootFontSize,
          trulyUnknown,
          false
        );

        // Track all checked classes (both those with mappings and those without)
        if (!cache.checkedClasses) {
          cache.checkedClasses = new Set();
        }
        for (const cls of trulyUnknown) {
          cache.checkedClasses.add(cls);
        }

        const newMappings = workerResult.mappings || {};

        // Update cache with new mappings
        Object.assign(cache.mappings, newMappings);

        // Save updated cache
        const filename = context.getFilename();
        const projectRoot = findProjectRoot(path.dirname(filename));
        const cachePath = getCachePath(projectRoot, resolvedCssPath);
        const cacheToSave = {
          ...cache,
          knownClasses: Array.isArray(cache.knownClasses)
            ? cache.knownClasses
            : Array.from(cache.knownClasses),
          checkedClasses: Array.from(cache.checkedClasses || []),
        };
        saveCacheSync(cachePath, cacheToSave);

        // Report issues for newly discovered non-canonical classes
        for (const [className, canonical] of Object.entries(newMappings)) {
          const nodes = nodesByClass.get(className) || [];
          for (const { classNames, classNameValue } of nodes) {
            reportNonCanonical(
              context,
              classNameValue,
              className,
              canonical,
              classNames,
              sourceCode
            );
          }
        }
      },
    };
  },
};

/**
 * Report a non-canonical class with fix
 */
function reportNonCanonical(
  context,
  classNameValue,
  original,
  canonical,
  allClassNames,
  sourceCode
) {
  const originalText = sourceCode.getText(classNameValue);

  // Build the fixed class string
  const fixedClassNames = allClassNames.map((cls) =>
    cls === original ? canonical : cls
  );
  const fixedClassString = fixedClassNames.join(" ");

  // Determine quote style
  let fixedText;
  const quoteMatch = originalText.match(/^(["'`])(.*)\1$/);

  if (quoteMatch) {
    fixedText = `${quoteMatch[1]}${fixedClassString}${quoteMatch[1]}`;
  } else if (classNameValue.type === "TemplateLiteral") {
    fixedText = `\`${fixedClassString}\``;
  } else {
    const startQuoteMatch = originalText.match(/^(["'`])/);
    if (startQuoteMatch) {
      const quote = startQuoteMatch[1];
      fixedText = `${quote}${fixedClassString}${quote}`;
    } else {
      fixedText = fixedClassString;
    }
  }

  // Get file info for logging
  const filename = context.getFilename();
  const loc = classNameValue.loc?.start || { line: 1, column: 0 };
  const shortFilename = path.basename(filename);

  // Check if fix mode is enabled by checking context options
  const isFixMode = context.options?.[0]?.fix !== false &&
    process.argv.includes('--fix');

  if (isFixMode) {
    console.log(`[fix] ${shortFilename}:${loc.line}:${loc.column} - "${original}" → "${canonical}"`);
  } else {
    console.log(`[found] ${shortFilename}:${loc.line}:${loc.column} - "${original}" should be "${canonical}"`);
  }

  context.report({
    node: classNameValue,
    messageId: "nonCanonical",
    data: {
      original,
      canonical,
    },
    fix(fixer) {
      if (fixedText !== originalText) {
        return fixer.replaceText(classNameValue, fixedText);
      }
      return null;
    },
  });
}
