import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { runAsWorker } from 'synckit';
import { __unstable__loadDesignSystem, compile } from '@tailwindcss/node';
import { statStamp } from './file-stamp.js';

// The engine that answers lives in the tailwindcss copy @tailwindcss/node loads; its version keys the cache.
const enginePackageJson = createRequire(
  createRequire(import.meta.url).resolve('@tailwindcss/node'),
).resolve('tailwindcss/package.json');

interface DesignSystem {
  canonicalizeCandidates(candidates: string[], options?: { rem?: number }): string[];
}

export interface CanonicalizeResult {
  canonical: string[];
  /** The stylesheet, the Tailwind engine's package.json, and every file Tailwind read while loading the stylesheet. */
  files: string[];
}

export type CanonicalizeInWorker = (
  cssPath: string,
  candidates: string[],
  options: { rem: number },
) => Promise<CanonicalizeResult>;

interface LoadedStylesheet {
  files: string[];
  stamp: string;
  designSystem: DesignSystem;
}

const stylesheets = new Map<string, LoadedStylesheet>();

async function loadStylesheet(cssPath: string): Promise<LoadedStylesheet> {
  const css = fs.readFileSync(cssPath, 'utf-8');
  const base = path.dirname(cssPath);
  const dependencies: string[] = [];
  // Only compile() reports the files Tailwind reads; @tailwindcss/node exposes no design system loader that does.
  await compile(css, { base, from: cssPath, onDependency: (file) => dependencies.push(file) });
  // Plugins load in parallel, so dependencies arrive in a different order between runs; sorting keeps the cache key stable.
  const files = [cssPath, enginePackageJson, ...[...new Set(dependencies)].sort()];
  return {
    files,
    stamp: statStamp(files),
    designSystem: await __unstable__loadDesignSystem(css, { base }),
  };
}

const canonicalizeInWorker: CanonicalizeInWorker = async (cssPath, candidates, options) => {
  let stylesheet = stylesheets.get(cssPath);
  if (!stylesheet || statStamp(stylesheet.files) !== stylesheet.stamp) {
    stylesheet = await loadStylesheet(cssPath);
    stylesheets.set(cssPath, stylesheet);
  }
  const { designSystem } = stylesheet;

  return {
    // canonicalizeCandidates dedupes its output, so one call per candidate keeps indexes aligned;
    // it returns [] for an invalid candidate, which stays as written.
    canonical: candidates.map(
      (candidate) => designSystem.canonicalizeCandidates([candidate], options)[0] ?? candidate,
    ),
    files: stylesheet.files,
  };
};

runAsWorker(canonicalizeInWorker);
