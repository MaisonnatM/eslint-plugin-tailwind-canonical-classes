import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { Linter } from 'eslint';
import plugin from '../lib/index.js';
import { createClassCanonicalizer } from '../lib/rules/canonical-cache.js';

const fixtureCssPath = path.resolve('tests/fixtures/tailwind.css');

describe('canonical cache', () => {
  const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tailwind-canonical-project-'));
  const cssPath = path.join(projectDir, 'tailwind.css');
  const themePath = path.join(projectDir, 'theme.css');
  const tailwindEntry = path.resolve('node_modules/tailwindcss/index.css');
  fs.writeFileSync(cssPath, `@import "${tailwindEntry}";\n@import "./theme.css";\n`);

  afterAll(() => fs.rmSync(projectDir, { recursive: true, force: true }));

  const lint = (code, ruleOptions) =>
    new Linter({ configType: 'flat', cwd: projectDir })
      .verify(
        code,
        {
          files: ['**/*.jsx'],
          languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
          plugins: { tw: plugin },
          rules: { 'tw/tailwind-canonical-classes': ['warn', ruleOptions] },
        },
        path.join(projectDir, 'component.jsx'),
      )
      .map((message) => message.message);

  it('picks up edits to an imported theme within one process', () => {
    const code = '<div className="w-[16px]" />';
    fs.writeFileSync(themePath, '@theme { --spacing: 0.25rem; }\n');
    expect(lint(code, { cssPath })).toEqual(["Class 'w-[16px]' should be 'w-4'"]);

    fs.writeFileSync(themePath, '@theme { --spacing: 0.5rem;  }\n');
    expect(lint(code, { cssPath })).toEqual(["Class 'w-[16px]' should be 'w-2'"]);
  });

  it('keeps canonical forms for each rootFontSize apart', () => {
    const code = '<div className="w-[20px]" />';
    const at = (rootFontSize) => lint(code, { cssPath: fixtureCssPath, rootFontSize });

    expect(at(16)).toEqual(["Class 'w-[20px]' should be 'w-5'"]);
    expect(at(20)).toEqual(["Class 'w-[20px]' should be 'w-4'"]);
    expect(at(16)).toEqual(["Class 'w-[20px]' should be 'w-5'"]);
  });

  it('keeps classes another process cached while this one was running', () => {
    const cacheDir = path.join(projectDir, 'shared-cache');
    const canonicalize = createClassCanonicalizer(cacheDir, fixtureCssPath, 16);

    const other = spawnSync(
      process.execPath,
      [
        '--input-type=module',
        '-e',
        `import { createClassCanonicalizer } from ${JSON.stringify(path.resolve('lib/rules/canonical-cache.js'))};
         createClassCanonicalizer(${JSON.stringify(cacheDir)}, ${JSON.stringify(fixtureCssPath)}, 16)(['w-[8px]']);
         process.exit(0);`,
      ],
      { encoding: 'utf-8' },
    );
    expect(other.stderr).toBe('');

    expect(canonicalize(['w-[24px]'])).toEqual(['w-6']);

    const tables = fs
      .readdirSync(cacheDir)
      .filter((file) => file.endsWith('.jsonl'))
      .map((file) =>
        Object.fromEntries(
          fs
            .readFileSync(path.join(cacheDir, file), 'utf-8')
            .trim()
            .split('\n')
            .map((line) => JSON.parse(line)),
        ),
      );
    expect(tables.find((entries) => 'w-[24px]' in entries)).toMatchObject({
      'w-[8px]': 'w-2',
      'w-[24px]': 'w-6',
    });
  });

  it('reports a Tailwind failure once per file instead of hiding it', () => {
    const brokenCssPath = path.join(projectDir, 'broken.css');
    fs.writeFileSync(brokenCssPath, '@import "package-that-does-not-exist";\n');

    const messages = lint('<><div className="w-[16px]" /><div className="p-[8px]" /></>', {
      cssPath: brokenCssPath,
    });

    expect(messages).toHaveLength(1);
    expect(messages[0]).toMatch(
      /^Tailwind could not canonicalize classes with .*broken\.css: .*package-that-does-not-exist/,
    );
  });
}, 30000);
