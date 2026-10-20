import { createHash } from 'node:crypto';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSyncFn } from 'synckit';
import { statStamp } from './file-stamp.js';
import type { CanonicalizeInWorker, CanonicalizeResult } from './tailwind-worker.js';

const workerPath = fileURLToPath(new URL('./tailwind-worker.js', import.meta.url));
const require = createRequire(import.meta.url);
// Answers depend on this plugin and on the Tailwind engine it runs, whatever version the project's CSS imports.
const engineVersions = [
  (require('../../package.json') as { version: string }).version,
  // @tailwindcss/node does not export its package.json; it sits one level above dist/.
  (require(path.join(path.dirname(require.resolve('@tailwindcss/node')), '../package.json')) as { version: string }).version,
].join('\0');

type CanonicalizeSync = (
  ...args: Parameters<CanonicalizeInWorker>
) => CanonicalizeResult;

// Spawned on the first cache miss so fully cached runs never start Tailwind.
let canonicalizeSync: CanonicalizeSync | undefined;

/**
 * Canonical forms for one stylesheet and root font size, valid while every
 * file Tailwind read to build the stylesheet is unchanged.
 */
interface StylesheetCache {
  files: string[];
  stamp: string;
  tablePath: string;
  table: Map<string, string>;
}

const stylesheets = new Map<string, StylesheetCache>();

/** Prefers the project's node_modules/.cache, and never creates node_modules where none exists. */
export function resolveCacheDir(cwd: string): string {
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

function tablePathFor(cacheDir: string, files: string[], rem: number): string {
  const hash = createHash('sha256').update(`${engineVersions}\0${rem}`);
  for (const file of files) {
    hash.update(`\0${file}\0`);
    try {
      hash.update(fs.readFileSync(file));
    } catch {
      hash.update('missing');
    }
  }
  return path.join(cacheDir, `${hash.digest('hex')}.jsonl`);
}

function manifestPath(cacheDir: string, cssPath: string): string {
  return path.join(cacheDir, `${createHash('sha256').update(cssPath).digest('hex')}.deps.json`);
}

/** Reads `[class, canonical]` lines; a torn line from a crashed writer is skipped. */
function readTable(file: string): Map<string, string> {
  const table = new Map<string, string>();
  let text: string;
  try {
    text = fs.readFileSync(file, 'utf-8');
  } catch {
    return table;
  }
  for (const line of text.split('\n')) {
    try {
      const [candidate, canonical] = JSON.parse(line) as [string, string];
      table.set(candidate, canonical);
    } catch {
      continue;
    }
  }
  return table;
}

/** Appends only new answers, so each miss costs its own size and concurrent linters never overwrite each other. */
function appendTable(file: string, entries: Iterable<[string, string]>): void {
  let text = '';
  for (const entry of entries) {
    text += `${JSON.stringify(entry)}\n`;
  }
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.appendFileSync(file, text);
  } catch {
    // An unwritable cache only costs later runs their warm start.
  }
}

function openStylesheet(
  cacheDir: string,
  files: string[],
  rem: number,
  table?: Map<string, string>,
): StylesheetCache {
  const tablePath = tablePathFor(cacheDir, files, rem);
  return { files, stamp: statStamp(files), tablePath, table: table ?? readTable(tablePath) };
}

/**
 * The manifest lists the files the worker last reported for `cssPath`, so a
 * new process can key its table on them before Tailwind starts. Before any
 * worker answer the list is just the stylesheet, which no table is written under.
 */
function getStylesheet(id: string, cacheDir: string, cssPath: string, rem: number): StylesheetCache {
  const cached = stylesheets.get(id);
  if (cached && statStamp(cached.files) === cached.stamp) {
    return cached;
  }
  let files: string[] = [cssPath];
  try {
    files = JSON.parse(fs.readFileSync(manifestPath(cacheDir, cssPath), 'utf-8')) as string[];
  } catch {
    // No manifest yet: the first worker answer writes it.
  }
  const stylesheet = openStylesheet(cacheDir, files, rem);
  stylesheets.set(id, stylesheet);
  return stylesheet;
}

/**
 * Returns a function mapping each class to its canonical form for `cssPath`.
 * Answers come from memory, then `cacheDir`, then the Tailwind worker; worker
 * answers are appended to `cacheDir` so concurrent linters share them.
 */
export function createClassCanonicalizer(
  cacheDir: string,
  cssPath: string,
  rem: number,
): (candidates: string[]) => string[] {
  const id = [cacheDir, cssPath, rem].join('\0');
  let stylesheet = getStylesheet(id, cacheDir, cssPath, rem);

  return (candidates) => {
    const { table } = stylesheet;
    const missing = [...new Set(candidates.filter((candidate) => !table.has(candidate)))];
    if (missing.length > 0) {
      canonicalizeSync ??= createSyncFn<CanonicalizeInWorker>(workerPath);
      const { canonical, files } = canonicalizeSync(cssPath, missing, { rem });
      const answers = missing.map((candidate, index): [string, string] => [candidate, canonical[index]]);
      answers.forEach(([candidate, value]) => table.set(candidate, value));

      if (files.join('\0') === stylesheet.files.join('\0')) {
        appendTable(stylesheet.tablePath, answers);
      } else {
        // `table` holds answers for the current files, so it moves to the table keyed on the list the worker reported.
        stylesheet = openStylesheet(cacheDir, files, rem, table);
        stylesheets.set(id, stylesheet);
        try {
          fs.mkdirSync(cacheDir, { recursive: true });
          fs.writeFileSync(manifestPath(cacheDir, cssPath), JSON.stringify(files));
        } catch {
          // Without a manifest, the next process re-learns the file list on its first miss.
        }
        appendTable(stylesheet.tablePath, table);
      }
    }
    return candidates.map((candidate) => stylesheet.table.get(candidate)!);
  };
}
