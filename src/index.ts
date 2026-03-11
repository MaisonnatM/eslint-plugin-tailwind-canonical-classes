import { createRequire } from 'node:module';
import tailwindCanonicalClasses from './rules/tailwind-canonical-classes.js';
import type { ESLint } from 'eslint';

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

export default plugin;
