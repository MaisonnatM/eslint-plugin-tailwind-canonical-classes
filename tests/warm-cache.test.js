import { mockCanonicalizeSync, resetCanonicalizeMock } from './synckit-mock.js';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterAll, describe, expect, it, vi } from 'vitest';
import { getTestCssPath } from './test-utils.js';

describe('warm canonical cache', () => {
  const cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tailwind-canonical-warm-'));
  afterAll(() => fs.rmSync(cacheDir, { recursive: true, force: true }));

  // A fresh module instance stands in for a new ESLint process: only the disk cache survives.
  const freshCanonicalizer = async (rem = 16) => {
    vi.resetModules();
    const { createClassCanonicalizer } = await import('../lib/rules/canonical-cache.js');
    return createClassCanonicalizer(cacheDir, getTestCssPath(), rem);
  };

  it('answers from disk without starting Tailwind', async () => {
    resetCanonicalizeMock();
    expect((await freshCanonicalizer())(['w-[16px]', 'h-8'])).toEqual(['w-4', 'h-8']);
    expect(mockCanonicalizeSync).toHaveBeenCalledTimes(1);

    mockCanonicalizeSync.mockClear();
    expect((await freshCanonicalizer())(['h-8', 'w-[16px]'])).toEqual(['h-8', 'w-4']);
    expect(mockCanonicalizeSync).not.toHaveBeenCalled();
  });

  it('finds the table on disk after re-learning a lost dependency list', async () => {
    const dependency = path.join(cacheDir, 'theme.css');
    fs.writeFileSync(dependency, '@theme {}\n');
    const answer = (cssPath, candidates) => ({
      canonical: candidates.map((candidate) => (candidate === 'w-[16px]' ? 'w-4' : candidate)),
      files: [cssPath, dependency],
    });
    mockCanonicalizeSync.mockImplementation(answer);
    (await freshCanonicalizer(20))(['w-[16px]', 'h-8']);
    for (const file of fs.readdirSync(cacheDir).filter((name) => name.endsWith('.deps.json'))) {
      fs.rmSync(path.join(cacheDir, file));
    }

    mockCanonicalizeSync.mockClear();
    const canonicalize = await freshCanonicalizer(20);
    expect(canonicalize(['w-[16px]'])).toEqual(['w-4']);
    expect(canonicalize(['h-8'])).toEqual(['h-8']);
    expect(mockCanonicalizeSync).toHaveBeenCalledTimes(1);
  });
});
