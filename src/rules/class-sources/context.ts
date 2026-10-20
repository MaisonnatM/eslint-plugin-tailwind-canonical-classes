import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import type { Rule, SourceCode } from 'eslint';
import { createClassCanonicalizer } from '../canonical-cache.js';
import type { CanonicalizationContext, RuleOptions } from './types.js';

export interface ResolvedCssPath {
  cssPath: string;
  resolvedViaWalkUp: boolean;
}

export function resolveCssPath(
  options: RuleOptions,
  cwd: string,
  filename: string | undefined,
): ResolvedCssPath {
  let cssPath: string;
  let resolvedViaWalkUp = false;

  if (path.isAbsolute(options.cssPath)) {
    cssPath = path.normalize(options.cssPath);
  } else {
    cssPath = path.normalize(path.resolve(cwd, options.cssPath));

    if (!fs.existsSync(cssPath)) {
      resolvedViaWalkUp = true;
      if (filename) {
        let dir = path.dirname(filename);
        const root = path.parse(dir).root;
        while (dir !== root) {
          const candidate = path.normalize(path.resolve(dir, options.cssPath));
          if (fs.existsSync(candidate)) {
            cssPath = candidate;
            break;
          }
          const parent = path.dirname(dir);
          if (parent === dir) break;
          dir = parent;
        }
      }
    }
  }

  return { cssPath, resolvedViaWalkUp };
}

export interface RuleSetupResult {
  disabled: boolean;
  reportCssNotFound?: { path: string };
  context?: CanonicalizationContext;
}

type LegacyRuleContext = Rule.RuleContext & {
  getSourceCode?: () => SourceCode;
  getCwd?: () => string;
  getFilename?: () => string;
};

function resolveSourceCode(context: Rule.RuleContext): SourceCode {
  const legacyContext = context as LegacyRuleContext;
  return legacyContext.sourceCode ?? legacyContext.getSourceCode!();
}

export function setupRuleContext(
  context: Rule.RuleContext,
  options: RuleOptions | undefined,
): RuleSetupResult {
  const sourceCode = resolveSourceCode(context);
  const legacyContext = context as LegacyRuleContext;
  const cwd = legacyContext.cwd ?? legacyContext.getCwd?.() ?? process.cwd();

  if (!options?.cssPath) {
    return {
      disabled: false,
      reportCssNotFound: { path: 'not specified' },
    };
  }

  const filename =
    legacyContext.filename ?? legacyContext.getFilename?.();
  const { cssPath, resolvedViaWalkUp } = resolveCssPath(options, cwd, filename);

  if (!fs.existsSync(cssPath)) {
    if (resolvedViaWalkUp) {
      return { disabled: true };
    }
    return {
      disabled: false,
      reportCssNotFound: { path: cssPath },
    };
  }

  const rootFontSize = options.rootFontSize ?? 16;
  const calleeFunctions = options.calleeFunctions ?? [
    'cn',
    'clsx',
    'classNames',
    'twMerge',
    'cva',
  ];

  return {
    disabled: false,
    context: {
      cssPath,
      rootFontSize,
      calleeFunctions,
      sourceText: sourceCode.getText(),
      canonicalizeClasses: createClassCanonicalizer(
        resolveCacheDir(cwd),
        cssPath,
        rootFontSize,
      ),
    },
  };
}

// Prefer the project's node_modules/.cache; never create node_modules where none exists.
function resolveCacheDir(cwd: string): string {
  const fromEnv = process.env.TAILWIND_CANONICAL_CLASSES_CACHE_DIR;
  if (fromEnv) {
    return path.resolve(cwd, fromEnv);
  }
  const nodeModules = path.join(cwd, 'node_modules');
  return path.join(
    fs.existsSync(nodeModules) ? path.join(nodeModules, '.cache') : os.tmpdir(),
    'eslint-plugin-tailwind-canonical-classes',
  );
}

export function getSourceCode(context: Rule.RuleContext) {
  return resolveSourceCode(context);
}
