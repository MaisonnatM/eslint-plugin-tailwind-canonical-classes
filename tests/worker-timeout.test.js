import { mockCanonicalizeSync, resetCanonicalizeMock } from './synckit-mock.js';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import { Linter } from 'eslint';
import plugin from '../lib/index.js';

const synckitTimeout = () => {
  throw new Error('Internal error: Atomics.wait() failed: timed-out');
};

describe('stalled Tailwind worker', () => {
  const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tailwind-canonical-stall-'));
  afterAll(() => fs.rmSync(projectDir, { recursive: true, force: true }));
  beforeEach(() => resetCanonicalizeMock());

  // A stall is remembered for the whole process, so each test lints against its own stylesheet.
  let stylesheetCount = 0;
  const newStylesheet = () => {
    const cssPath = path.join(projectDir, `tailwind-${stylesheetCount++}.css`);
    fs.writeFileSync(cssPath, '@import "tailwindcss";\n');
    return cssPath;
  };

  const lint = (cssPath, filename = 'component.jsx') =>
    new Linter({ configType: 'flat', cwd: projectDir })
      .verify(
        '<div className="w-[16px]" />',
        {
          files: ['**/*.jsx'],
          languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
          plugins: { tw: plugin },
          rules: { 'tw/tailwind-canonical-classes': ['warn', { cssPath }] },
        },
        path.join(projectDir, filename),
      )
      .map((message) => message.message);

  const stalledReport = (cssPath) =>
    `Tailwind could not canonicalize classes with ${cssPath}: no answer within 30 s; set SYNCKIT_TIMEOUT (milliseconds) to wait longer`;

  it('reports the timeout in words instead of synckit internals', () => {
    const cssPath = newStylesheet();
    mockCanonicalizeSync.mockImplementation(synckitTimeout);

    expect(lint(cssPath)).toEqual([stalledReport(cssPath)]);
  });

  it('does not wait on a stalled stylesheet again for later files', () => {
    const cssPath = newStylesheet();
    mockCanonicalizeSync.mockImplementation(synckitTimeout);
    lint(cssPath, 'first.jsx');

    for (const filename of ['a.jsx', 'b.jsx', 'c.jsx']) {
      expect(lint(cssPath, filename)).toEqual([stalledReport(cssPath)]);
    }
    expect(mockCanonicalizeSync).toHaveBeenCalledTimes(1);
  });

  it('keeps canonicalizing other stylesheets after one stalls', () => {
    const stalled = newStylesheet();
    mockCanonicalizeSync.mockImplementationOnce(synckitTimeout);
    lint(stalled);

    expect(lint(newStylesheet())).toEqual(["Class 'w-[16px]' should be 'w-4'"]);
  });

  it('asks Tailwind again once the stalled stylesheet is saved', () => {
    const cssPath = newStylesheet();
    mockCanonicalizeSync.mockImplementationOnce(synckitTimeout);
    lint(cssPath);

    fs.appendFileSync(cssPath, '/* fixed */\n');
    expect(lint(cssPath)).toEqual(["Class 'w-[16px]' should be 'w-4'"]);
  });
});
