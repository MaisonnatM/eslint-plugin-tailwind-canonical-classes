import { createHash, type Hash } from 'node:crypto';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSyncFn } from 'synckit';
import type { Rule, SourceCode } from 'eslint';
import type { CanonicalizationContext, RuleOptions } from './types.js';

const workerPath = fileURLToPath(
  new URL('../tailwind-worker.js', import.meta.url),
);

type CanonicalizeSync = (
  cssPath: string,
  cssContent: string,
  basePath: string,
  candidates: string[],
  options: { rem?: number },
) => string[];

// Spawned on the first cache miss so fully cached runs never start Tailwind.
let canonicalizeSync: CanonicalizeSync | undefined;

interface CanonicalTable {
  diskFile: string;
  canonicalByClass: Map<string, string>;
}

interface CssCache {
  mtimeMs: number;
  size: number;
  tableByRem: Map<number, CanonicalTable>;
}

const cssCaches = new Map<string, CssCache>();

const require = createRequire(import.meta.url);
const tailwindPackageJson = fs.readFileSync(
  path.join(path.dirname(require.resolve('@tailwindcss/node')), '..', 'package.json'),
  'utf-8',
);
const diskCacheDir =
  process.env.TAILWIND_CANONICAL_CLASSES_CACHE_DIR ??
  path.join(process.cwd(), 'node_modules', '.cache', 'eslint-plugin-tailwind-canonical-classes');
const dirtyDiskCaches = new Map<string, Map<string, string>>();

const LOCAL_DEPENDENCY = /@(?:import|plugin|config|reference)\s+(?:url\()?["']([./][^"']*)["']/g;

// Hashes the CSS file plus every local file it pulls in, so editing an imported theme invalidates the cache.
function hashCssGraph(file: string, hash: Hash, seen: Set<string>): void {
  if (seen.has(file)) return;
  seen.add(file);
  let content: string;
  try {
    content = fs.readFileSync(file, 'utf-8');
  } catch {
    hash.update(`\0missing:${file}`);
    return;
  }
  hash.update(`\0${file}\0${content}`);
  if (!file.endsWith('.css')) return;
  for (const [, specifier] of content.matchAll(LOCAL_DEPENDENCY)) {
    hashCssGraph(path.resolve(path.dirname(file), specifier), hash, seen);
  }
}

function diskCachePath(cssPath: string, rem: number): string {
  const hash = createHash('sha256').update(`${tailwindPackageJson}\0${rem}`);
  hashCssGraph(cssPath, hash, new Set());
  return path.join(diskCacheDir, `${hash.digest('hex')}.json`);
}

function readDiskCache(file: string): Map<string, string> {
  try {
    return new Map(Object.entries(JSON.parse(fs.readFileSync(file, 'utf-8'))));
  } catch {
    return new Map();
  }
}

function flushDiskCaches(): void {
  for (const [file, canonicalByClass] of dirtyDiskCaches) {
    try {
      fs.mkdirSync(diskCacheDir, { recursive: true });
      const tmp = `${file}.${process.pid}.tmp`;
      fs.writeFileSync(tmp, JSON.stringify(Object.fromEntries(canonicalByClass)));
      fs.renameSync(tmp, file);
    } catch {
      // A cache that cannot be written only costs the next run its warm start.
    }
  }
  dirtyDiskCaches.clear();
}

process.once('exit', flushDiskCaches);

function createClassCanonicalizer(
  cssPath: string,
  cssStat: fs.Stats,
  rootFontSize: number,
): (candidates: string[]) => string[] {
  let cache = cssCaches.get(cssPath);
  if (!cache || cache.mtimeMs !== cssStat.mtimeMs || cache.size !== cssStat.size) {
    cache = { mtimeMs: cssStat.mtimeMs, size: cssStat.size, tableByRem: new Map() };
    cssCaches.set(cssPath, cache);
  }

  let table = cache.tableByRem.get(rootFontSize);
  if (!table) {
    const diskFile = diskCachePath(cssPath, rootFontSize);
    table = { diskFile, canonicalByClass: readDiskCache(diskFile) };
    cache.tableByRem.set(rootFontSize, table);
  }
  const { diskFile, canonicalByClass } = table;

  return (candidates) => {
    if (candidates.some((candidate) => !canonicalByClass.has(candidate))) {
      const missing = [
        ...new Set(candidates.filter((candidate) => !canonicalByClass.has(candidate))),
      ];
      canonicalizeSync ??= createSyncFn(workerPath) as CanonicalizeSync;
      const results = canonicalizeSync(
        cssPath,
        fs.readFileSync(cssPath, 'utf-8'),
        path.dirname(cssPath),
        missing,
        { rem: rootFontSize },
      );
      missing.forEach((candidate, index) => canonicalByClass.set(candidate, results[index]));
      dirtyDiskCaches.set(diskFile, canonicalByClass);
    }
    return candidates.map((candidate) => canonicalByClass.get(candidate)!);
  };
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

  const cssStat = fs.statSync(cssPath, { throwIfNoEntry: false });
  if (!cssStat) {
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
      canonicalizeClasses: createClassCanonicalizer(cssPath, cssStat, rootFontSize),
    },
  };
}

export function getSourceCode(context: Rule.RuleContext) {
  return resolveSourceCode(context);
}
