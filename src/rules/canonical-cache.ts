import { createHash, randomUUID } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSyncFn } from 'synckit';
import { statStamp } from './file-stamp.js';
import type { CanonicalizeInWorker, CanonicalizeResult } from './tailwind-worker.js';
import pkg from '../../package.json' with { type: 'json' };

const workerPath = fileURLToPath(new URL('./tailwind-worker.js', import.meta.url));
// The worker reports the engine's package.json among its files, so only this plugin's version is keyed here.
const { version: pluginVersion } = pkg;
// synckit waits forever by default, so a stalled stylesheet would freeze ESLint. Passing `timeout` also overrides synckit's own SYNCKIT_TIMEOUT.
const requestedTimeout = Number(process.env.TAILWIND_CANONICAL_CLASSES_TIMEOUT);
const workerTimeout =
  Number.isFinite(requestedTimeout) && requestedTimeout > 0 ? requestedTimeout : 30_000;
const timeoutMessage = `no answer within ${workerTimeout / 1000} s; set TAILWIND_CANONICAL_CLASSES_TIMEOUT (milliseconds) to wait longer`;

type CanonicalizeSync = (
  ...args: Parameters<CanonicalizeInWorker>
) => CanonicalizeResult;

// Spawned on the first cache miss so fully cached runs never start Tailwind.
let canonicalizeSync: CanonicalizeSync | undefined;

/** Mirrors the error synckit 0.11 throws when its wait runs out (`Atomics.wait() failed: timed-out` in synckit/lib/helpers.js). */
function isSynckitTimeout(error: unknown): boolean {
  return error instanceof Error && error.message.includes('Atomics.wait() failed: timed-out');
}

/**
 * Canonical forms for one stylesheet and root font size, valid while every
 * file Tailwind read to build the stylesheet is unchanged.
 */
interface StylesheetCache {
  files: string[];
  stamp: string;
  tablePath: string;
  table: Map<string, string>;
  /** The worker timed out on these files. Asking again would stall again, so a changed file reopens the entry instead. */
  stalled?: true;
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
  const hash = createHash('sha256').update(`${pluginVersion}\0${rem}`);
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
  for (const line of text.trimEnd().split('\n')) {
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

function openStylesheet(cacheDir: string, files: string[], rem: number): StylesheetCache {
  const tablePath = tablePathFor(cacheDir, files, rem);
  return { files, stamp: statStamp(files), tablePath, table: readTable(tablePath) };
}

/** Lists the files the worker last reported for `cssPath`, so a new process keys its table before Tailwind starts. */
function readManifest(cacheDir: string, cssPath: string): string[] {
  try {
    return JSON.parse(fs.readFileSync(manifestPath(cacheDir, cssPath), 'utf-8')) as string[];
  } catch {
    // No manifest yet: the list is just the stylesheet until the first worker answer.
    return [cssPath];
  }
}

function writeManifest(cacheDir: string, cssPath: string, files: string[]): void {
  const file = manifestPath(cacheDir, cssPath);
  try {
    fs.mkdirSync(cacheDir, { recursive: true });
    const tmp = `${file}.${randomUUID()}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(files));
    fs.renameSync(tmp, file);
  } catch {
    // Without a manifest, the next process re-learns the file list on its first miss.
  }
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
  const cached = stylesheets.get(id);
  let stylesheet =
    cached && statStamp(cached.files) === cached.stamp
      ? cached
      : openStylesheet(cacheDir, readManifest(cacheDir, cssPath), rem);
  stylesheets.set(id, stylesheet);

  return (candidates) => {
    if (candidates.some((candidate) => !stylesheet.table.has(candidate))) {
      if (stylesheet.stalled) {
        throw new Error(timeoutMessage);
      }
      // Asks for every candidate, not just the misses: a new file list opens a table that may lack the earlier hits.
      const unique = [...new Set(candidates)];
      canonicalizeSync ??= createSyncFn<CanonicalizeInWorker>(workerPath, { timeout: workerTimeout });
      let answer: CanonicalizeResult;
      try {
        answer = canonicalizeSync(cssPath, unique, { rem });
      } catch (error) {
        if (isSynckitTimeout(error)) {
          stylesheet.stalled = true;
          throw new Error(timeoutMessage);
        }
        throw error;
      }
      const { canonical, files } = answer;
      if (files.join('\0') !== stylesheet.files.join('\0')) {
        stylesheet = openStylesheet(cacheDir, files, rem);
        stylesheets.set(id, stylesheet);
        writeManifest(cacheDir, cssPath, files);
      }
      const answers = unique
        .map((candidate, index): [string, string] => [candidate, canonical[index]])
        .filter(([candidate]) => !stylesheet.table.has(candidate));
      for (const [candidate, value] of answers) {
        stylesheet.table.set(candidate, value);
      }
      appendTable(stylesheet.tablePath, answers);
    }
    return candidates.map((candidate) => stylesheet.table.get(candidate)!);
  };
}
