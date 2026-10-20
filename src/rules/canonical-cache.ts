import { createHash, randomUUID } from 'node:crypto';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSyncFn } from 'synckit';
import { statStamp } from './file-stamp.js';
import type { CanonicalizeInWorker, CanonicalizeResult } from './tailwind-worker.js';

const workerPath = fileURLToPath(new URL('./tailwind-worker.js', import.meta.url));
const pluginVersion = (
  createRequire(import.meta.url)('../../package.json') as { version: string }
).version;

type CanonicalizeSync = (
  ...args: Parameters<CanonicalizeInWorker>
) => CanonicalizeResult;

// Spawned on the first cache miss so fully cached runs never start Tailwind.
let canonicalizeSync: CanonicalizeSync | undefined;

/**
 * Canonical forms for one stylesheet, valid while every file Tailwind read to
 * build it (the stylesheet plus each dependency it reported) is unchanged.
 */
interface StylesheetCache {
  files: string[];
  stamp: string;
  key: string;
  canonicalByRem: Map<number, Map<string, string>>;
}

const stylesheets = new Map<string, StylesheetCache>();

function isPackageRoot(dir: string): boolean {
  const parent = path.dirname(dir);
  return (
    path.basename(parent) === 'node_modules' ||
    (path.basename(parent).startsWith('@') && path.basename(path.dirname(parent)) === 'node_modules')
  );
}

function packageVersionOf(file: string): string {
  let dir = path.dirname(file);
  while (!isPackageRoot(dir) && dir !== path.dirname(dir)) {
    dir = path.dirname(dir);
  }
  try {
    return (JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf-8')) as { version?: string }).version ?? '';
  } catch {
    return '';
  }
}

function contentKey(files: string[]): string {
  const hash = createHash('sha256').update(pluginVersion);
  for (const file of files) {
    hash.update(`\0${file}\0`);
    try {
      hash.update(fs.readFileSync(file));
    } catch {
      hash.update('missing');
    }
    if (file.includes(`${path.sep}node_modules${path.sep}`)) {
      hash.update(`\0${packageVersionOf(file)}`);
    }
  }
  return hash.digest('hex');
}

function readJson<T>(file: string): T | undefined {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8')) as T;
  } catch {
    return undefined;
  }
}

function writeJson(file: string, value: unknown): void {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const tmp = `${file}.${randomUUID()}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(value));
    fs.renameSync(tmp, file);
  } catch {
    // An unwritable cache only costs later runs their warm start.
  }
}

function loadStylesheet(cacheDir: string, cssPath: string, files: string[]): StylesheetCache {
  const cache: StylesheetCache = {
    files,
    stamp: statStamp(files),
    key: contentKey(files),
    canonicalByRem: new Map(),
  };
  stylesheets.set(cssPath, cache);
  writeJson(dependencyManifestPath(cacheDir, cssPath), files);
  return cache;
}

function dependencyManifestPath(cacheDir: string, cssPath: string): string {
  return path.join(cacheDir, `${createHash('sha256').update(cssPath).digest('hex')}.deps.json`);
}

function tablePath(cacheDir: string, key: string, rem: number): string {
  return path.join(cacheDir, `${key}-${rem}.json`);
}

function getStylesheet(cacheDir: string, cssPath: string): StylesheetCache {
  const cached = stylesheets.get(cssPath);
  if (cached && statStamp(cached.files) === cached.stamp) {
    return cached;
  }
  const known = readJson<string[]>(dependencyManifestPath(cacheDir, cssPath)) ?? [cssPath];
  return loadStylesheet(cacheDir, cssPath, known);
}

/**
 * Returns a function mapping each class to its canonical form for `cssPath`.
 * Answers come from memory, then `cacheDir`, then the Tailwind worker; worker
 * answers are written through to `cacheDir` so concurrent linters share them.
 */
export function createClassCanonicalizer(
  cacheDir: string,
  cssPath: string,
  rem: number,
): (candidates: string[]) => string[] {
  let stylesheet = getStylesheet(cacheDir, cssPath);
  let canonicalByClass = stylesheet.canonicalByRem.get(rem);
  if (!canonicalByClass) {
    canonicalByClass = new Map(
      Object.entries(readJson<Record<string, string>>(tablePath(cacheDir, stylesheet.key, rem)) ?? {}),
    );
    stylesheet.canonicalByRem.set(rem, canonicalByClass);
  }
  const table = canonicalByClass;

  return (candidates) => {
    const missing = [...new Set(candidates.filter((candidate) => !table.has(candidate)))];
    if (missing.length > 0) {
      canonicalizeSync ??= createSyncFn<CanonicalizeInWorker>(workerPath);
      const { canonical, files } = canonicalizeSync(cssPath, missing, { rem });
      missing.forEach((candidate, index) => table.set(candidate, canonical[index]));

      if (files.join('\0') !== stylesheet.files.join('\0')) {
        stylesheet = loadStylesheet(cacheDir, cssPath, files);
        stylesheet.canonicalByRem.set(rem, table);
      }
      const file = tablePath(cacheDir, stylesheet.key, rem);
      writeJson(file, {
        ...readJson<Record<string, string>>(file),
        ...Object.fromEntries(table),
      });
    }
    return candidates.map((candidate) => table.get(candidate)!);
  };
}
