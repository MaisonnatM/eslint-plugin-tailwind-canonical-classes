import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { Linter } from 'eslint';
import plugin from '../lib/index.js';

describe('canonical cache', () => {
  const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tailwind-canonical-project-'));
  const cssPath = path.join(projectDir, 'tailwind.css');
  const themePath = path.join(projectDir, 'theme.css');
  const tailwindEntry = path.resolve('node_modules/tailwindcss/index.css');
  fs.writeFileSync(cssPath, `@import "${tailwindEntry}";\n@import "./theme.css";\n`);

  afterAll(() => fs.rmSync(projectDir, { recursive: true, force: true }));

  const lint = () =>
    new Linter({ configType: 'flat', cwd: projectDir })
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

  it('picks up edits to an imported theme within one process', () => {
    fs.writeFileSync(themePath, '@theme { --spacing: 0.25rem; }\n');
    expect(lint()).toEqual(["Class 'w-[16px]' should be 'w-4'"]);

    fs.writeFileSync(themePath, '@theme { --spacing: 0.5rem;  }\n');
    expect(lint()).toEqual(["Class 'w-[16px]' should be 'w-2'"]);
  });
}, 30000);
