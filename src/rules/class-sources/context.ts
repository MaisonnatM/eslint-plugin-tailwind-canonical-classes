import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSyncFn } from 'synckit';
import type { Rule } from 'eslint';
import type { CanonicalizationContext, RuleOptions } from './types.js';

const workerPath = fileURLToPath(
  new URL('../tailwind-worker.js', import.meta.url),
);

const canonicalizeSync = createSyncFn(workerPath) as (
  cssContent: string,
  basePath: string,
  candidates: string[],
  options: { rem?: number },
) => string[];

function canonicalizeClassesFromFile(
  cssPath: string,
  candidates: string[],
  rootFontSize: number,
): string[] | null {
  if (!fs.existsSync(cssPath)) {
    return null;
  }

  const cssContent = fs.readFileSync(cssPath, 'utf-8');
  const basePath = path.dirname(cssPath);

  return canonicalizeSync(cssContent, basePath, candidates, { rem: rootFontSize });
}

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

export function setupRuleContext(
  context: Rule.RuleContext,
  options: RuleOptions | undefined,
): RuleSetupResult {
  const sourceCode = context.sourceCode ?? context.getSourceCode();
  const cwd = context.cwd ?? (context as Rule.RuleContext & { getCwd?: () => string }).getCwd?.() ?? process.cwd();

  if (!options?.cssPath) {
    return {
      disabled: false,
      reportCssNotFound: { path: 'not specified' },
    };
  }

  const filename =
    context.filename ??
    (context as Rule.RuleContext & { getFilename?: () => string }).getFilename?.();
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
      canonicalizeClasses: (candidates) =>
        canonicalizeClassesFromFile(cssPath, candidates, rootFontSize),
    },
  };
}

export function getRuleCwd(context: Rule.RuleContext): string {
  return context.cwd ?? (context as Rule.RuleContext & { getCwd?: () => string }).getCwd?.() ?? process.cwd();
}

export function getSourceCode(context: Rule.RuleContext) {
  return context.sourceCode ?? context.getSourceCode();
}
