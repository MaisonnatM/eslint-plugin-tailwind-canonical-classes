import './synckit-mock.js';
import { resetCanonicalizeMock } from './synckit-mock.js';
import { describe, beforeEach } from 'vitest';
import { RuleTester } from 'eslint';
import {
  getTestCssPath,
  getVueRuleTesterConfig,
} from './test-utils.js';

import tailwindCanonicalClasses from '../lib/rules/tailwind-canonical-classes.js';

describe('tailwind-canonical-classes (Vue)', () => {
  const cssPath = getTestCssPath();

  beforeEach(() => {
    resetCanonicalizeMock();
  });

  const ruleTester = new RuleTester(getVueRuleTesterConfig());
  const vueFile = { filename: 'Component.vue' };

  ruleTester.run('tailwind-canonical-classes (Vue)', tailwindCanonicalClasses, {
    valid: [
      {
        ...vueFile,
        code: `<template><div class="w-4 h-8">Content</div></template>`,
        options: [{ cssPath }],
      },
      {
        ...vueFile,
        code: `<template><div :class="cn('w-4', 'h-8')">Content</div></template>`,
        options: [{ cssPath }],
      },
      {
        ...vueFile,
        code: `<template><div v-bind:class="cn('w-4')">Content</div></template>`,
        options: [{ cssPath }],
      },
      {
        ...vueFile,
        code: `<template><div :class="{ 'w-4': true }">Content</div></template>`,
        options: [{ cssPath }],
      },
      {
        ...vueFile,
        code: `<template><div :class="['w-4', dynamic]">Content</div></template>`,
        options: [{ cssPath }],
      },
      {
        ...vueFile,
        code: `<template><div :class="dynamic">Content</div></template>`,
        options: [{ cssPath }],
      },
      {
        ...vueFile,
        // Plain <script> instead of <script setup>: vue-eslint-parser + ESLint 10
        // RuleTester crashes on script setup (scopeManager.addGlobals). Behavior under test is the same.
        code: `<script>
cn('w-4');
</script>
<template><div>Content</div></template>`,
        options: [{ cssPath }],
      },
    ],

    invalid: [
      {
        ...vueFile,
        code: `<template><div class="w-[16px]">Content</div></template>`,
        output: `<template><div class="w-4">Content</div></template>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...vueFile,
        code: `<template><div :class="cn('w-[16px]')">Content</div></template>`,
        output: `<template><div :class="cn('w-4')">Content</div></template>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...vueFile,
        code: `<template><div v-bind:class="cn('w-[16px]')">Content</div></template>`,
        output: `<template><div v-bind:class="cn('w-4')">Content</div></template>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...vueFile,
        code: `<script>
cn('w-[16px]');
</script>
<template><div>Content</div></template>`,
        output: `<script>
cn('w-4');
</script>
<template><div>Content</div></template>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...vueFile,
        code: `<script>
function getClasses() {
  return cn('w-[16px]');
}
</script>
<template><div>Content</div></template>`,
        output: `<script>
function getClasses() {
  return cn('w-4');
}
</script>
<template><div>Content</div></template>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...vueFile,
        code: `<template><div class="w-[16px] h-[32px]">Content</div></template>`,
        output: `<template><div class="w-4 h-8">Content</div></template>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
          {
            messageId: 'nonCanonical',
            data: { original: 'h-[32px]', canonical: 'h-8' },
          },
        ],
      },
      {
        ...vueFile,
        code: `<script>
cn('w-[16px]');
</script>
<template><div :class="cn('h-[32px]')">Content</div></template>`,
        output: `<script>
cn('w-4');
</script>
<template><div :class="cn('h-8')">Content</div></template>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
          {
            messageId: 'nonCanonical',
            data: { original: 'h-[32px]', canonical: 'h-8' },
          },
        ],
      },
    ],
  });
});
