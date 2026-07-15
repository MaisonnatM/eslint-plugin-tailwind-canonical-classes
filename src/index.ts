import { createRequire } from 'node:module';
import tailwindCanonicalClasses from './rules/tailwind-canonical-classes.js';
import type { ESLint, Linter } from 'eslint';

const require = createRequire(import.meta.url);
const { name, version } = require('../package.json') as { name: string; version: string };

const plugin: ESLint.Plugin = {
  meta: {
    name,
    version,
  },
  configs: {},
  rules: {
    'tailwind-canonical-classes': tailwindCanonicalClasses,
  },
};

function loadOptionalParser(moduleName: string) {
  try {
    return require(moduleName);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Cannot load "${moduleName}" for eslint-plugin-tailwind-canonical-classes. ` +
        `Install it as a dev dependency to use this config. (${message})`,
    );
  }
}

function createFlatSvelteConfig(): Linter.Config[] {
  return [
    {
      files: ['**/*.svelte'],
      languageOptions: {
        parser: loadOptionalParser('svelte-eslint-parser'),
      },
      plugins: {
        'tailwind-canonical-classes': plugin,
      },
      rules: {
        'tailwind-canonical-classes/tailwind-canonical-classes': 'warn',
      },
    },
  ];
}

function createFlatVueConfig(): Linter.Config[] {
  return [
    {
      files: ['**/*.vue'],
      languageOptions: {
        parser: loadOptionalParser('vue-eslint-parser'),
      },
      plugins: {
        'tailwind-canonical-classes': plugin,
      },
      rules: {
        'tailwind-canonical-classes/tailwind-canonical-classes': 'warn',
      },
    },
  ];
}

Object.assign(plugin.configs!, {
  'flat/recommended': [
    {
      plugins: {
        'tailwind-canonical-classes': plugin,
      },
      rules: {
        'tailwind-canonical-classes/tailwind-canonical-classes': 'warn',
      },
    },
  ],

  recommended: {
    plugins: ['tailwind-canonical-classes'],
    rules: {
      'tailwind-canonical-classes/tailwind-canonical-classes': 'warn',
    },
  },
});

Object.defineProperties(plugin.configs!, {
  'flat/svelte': {
    enumerable: true,
    get: createFlatSvelteConfig,
  },
  'flat/vue': {
    enumerable: true,
    get: createFlatVueConfig,
  },
});

export default plugin;
