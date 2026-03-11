import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import plugin from '../lib/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cssPath = path.resolve(__dirname, 'fixtures/tailwind.css');

const baseLanguageOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
};

describe('ESLint API integration with flat config', () => {
  it('loads the plugin via flat config and reports non-canonical classes', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: [
        {
          files: ['**/*.jsx'],
          plugins: {
            'tailwind-canonical-classes': plugin,
          },
          rules: {
            'tailwind-canonical-classes/tailwind-canonical-classes': [
              'warn',
              { cssPath },
            ],
          },
          languageOptions: baseLanguageOptions,
        },
      ],
    });

    const results = await eslint.lintText(
      '<div className="w-[16px]">Content</div>',
      { filePath: 'test.jsx' }
    );

    expect(results).toHaveLength(1);
    expect(results[0].messages.length).toBeGreaterThan(0);
    expect(results[0].messages[0].messageId).toBe('nonCanonical');
  }, 30000);

  it('loads the plugin via flat/recommended config spread', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: [
        ...plugin.configs['flat/recommended'].map((c) => ({
          ...c,
          files: ['**/*.jsx'],
        })),
        {
          files: ['**/*.jsx'],
          rules: {
            'tailwind-canonical-classes/tailwind-canonical-classes': [
              'warn',
              { cssPath },
            ],
          },
          languageOptions: baseLanguageOptions,
        },
      ],
    });

    const results = await eslint.lintText(
      '<div className="w-[16px]">Content</div>',
      { filePath: 'test.jsx' }
    );

    expect(results).toHaveLength(1);
    expect(results[0].messages.length).toBeGreaterThan(0);
    expect(results[0].messages[0].messageId).toBe('nonCanonical');
  }, 30000);

  it('auto-fixes non-canonical classes via ESLint API', async () => {
    const eslint = new ESLint({
      overrideConfigFile: true,
      fix: true,
      overrideConfig: [
        {
          files: ['**/*.jsx'],
          plugins: {
            'tailwind-canonical-classes': plugin,
          },
          rules: {
            'tailwind-canonical-classes/tailwind-canonical-classes': [
              'warn',
              { cssPath },
            ],
          },
          languageOptions: baseLanguageOptions,
        },
      ],
    });

    const results = await eslint.lintText(
      '<div className="w-[16px]">Content</div>',
      { filePath: 'test.jsx' }
    );

    expect(results).toHaveLength(1);
    expect(results[0].output).toBe('<div className="w-4">Content</div>');
  }, 30000);
});
