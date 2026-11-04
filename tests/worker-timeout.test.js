import { mockCanonicalizeSync, resetCanonicalizeMock } from './synckit-mock.js';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Linter } from 'eslint';

const synckitTimeout = () => {
  throw new Error('Internal error: Atomics.wait() failed: timed-out');
};
const timeoutMessage =
  'no answer within 30 s; set TAILWIND_CANONICAL_CLASSES_TIMEOUT (milliseconds) to wait longer';

describe('stalled Tailwind worker', () => {
  let projectDir;
  let cacheDir;
  beforeEach(() => {
    projectDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tailwind-canonical-stall-'));
    cacheDir = path.join(projectDir, 'cache');
    resetCanonicalizeMock();
  });
  afterEach(() => fs.rmSync(projectDir, { recursive: true, force: true }));

  const stylesheet = (name = 'tailwind.css') => {
    const cssPath = path.join(projectDir, name);
    fs.writeFileSync(cssPath, '@import "tailwindcss";\n');
    return cssPath;
  };

  // A fresh module instance per test forgets earlier stalls and reads the default timeout whatever the shell exports.
  const fresh = (module) => {
    delete process.env.TAILWIND_CANONICAL_CLASSES_TIMEOUT;
    vi.resetModules();
    return import(module);
  };
  const freshCanonicalizer = async () =>
    (await fresh('../lib/rules/canonical-cache.js')).createClassCanonicalizer;

  it('reports the timeout in words instead of synckit internals', async () => {
    const { default: plugin } = await fresh('../lib/index.js');
    const cssPath = stylesheet();
    mockCanonicalizeSync.mockImplementation(synckitTimeout);

    const messages = new Linter({ configType: 'flat', cwd: projectDir })
      .verify(
        '<div className="w-[16px]" />',
        {
          files: ['**/*.jsx'],
          languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
          plugins: { tw: plugin },
          rules: { 'tw/tailwind-canonical-classes': ['warn', { cssPath }] },
        },
        path.join(projectDir, 'component.jsx'),
      )
      .map((message) => message.message);

    expect(messages).toEqual([
      `Tailwind could not canonicalize classes with ${cssPath}: ${timeoutMessage}`,
    ]);
  });

  it('does not wait on a stalled stylesheet again for later files', async () => {
    const createClassCanonicalizer = await freshCanonicalizer();
    const cssPath = stylesheet();
    mockCanonicalizeSync.mockImplementation(synckitTimeout);

    for (let file = 0; file < 4; file++) {
      expect(() => createClassCanonicalizer(cacheDir, cssPath, 16)(['w-[16px]'])).toThrow(
        timeoutMessage,
      );
    }
    expect(mockCanonicalizeSync).toHaveBeenCalledTimes(1);
  });

  it('keeps canonicalizing other stylesheets after one stalls', async () => {
    const createClassCanonicalizer = await freshCanonicalizer();
    mockCanonicalizeSync.mockImplementationOnce(synckitTimeout);

    expect(() =>
      createClassCanonicalizer(cacheDir, stylesheet('stalled.css'), 16)(['w-[16px]']),
    ).toThrow(timeoutMessage);
    expect(createClassCanonicalizer(cacheDir, stylesheet('healthy.css'), 16)(['w-[16px]'])).toEqual([
      'w-4',
    ]);
  });

  it('asks Tailwind again once the stalled stylesheet is saved', async () => {
    const createClassCanonicalizer = await freshCanonicalizer();
    const cssPath = stylesheet();
    mockCanonicalizeSync.mockImplementationOnce(synckitTimeout);
    expect(() => createClassCanonicalizer(cacheDir, cssPath, 16)(['w-[16px]'])).toThrow(
      timeoutMessage,
    );

    fs.appendFileSync(cssPath, '/* fixed */\n');
    expect(createClassCanonicalizer(cacheDir, cssPath, 16)(['w-[16px]'])).toEqual(['w-4']);
  });
});
