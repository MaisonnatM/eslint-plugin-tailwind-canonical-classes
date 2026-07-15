import './synckit-mock.js';
import { resetCanonicalizeMock } from './synckit-mock.js';
import { describe, beforeEach } from 'vitest';
import { RuleTester } from 'eslint';
import {
  getTestCssPath,
  getSvelteRuleTesterConfig,
} from './test-utils.js';

import tailwindCanonicalClasses from '../lib/rules/tailwind-canonical-classes.js';

describe('tailwind-canonical-classes (Svelte)', () => {
  const cssPath = getTestCssPath();

  beforeEach(() => {
    resetCanonicalizeMock();
  });

  const ruleTester = new RuleTester(getSvelteRuleTesterConfig());
  const svelteFile = { filename: 'Component.svelte' };

  ruleTester.run('tailwind-canonical-classes (Svelte)', tailwindCanonicalClasses, {
    valid: [
      {
        ...svelteFile,
        code: '<div class="w-4 h-8">Content</div>',
        options: [{ cssPath }],
      },
      {
        ...svelteFile,
        code: '<div class="">Content</div>',
        options: [{ cssPath }],
      },
      {
        ...svelteFile,
        code: '<div class={cn("w-4", "h-8")}>Content</div>',
        options: [{ cssPath }],
      },
      {
        ...svelteFile,
        code: '<div class="w-4 {dynamic}">Content</div>',
        options: [{ cssPath }],
      },
      {
        ...svelteFile,
        code: '<div class={dynamic}>Content</div>',
        options: [{ cssPath }],
      },
      {
        ...svelteFile,
        code: `<script>
  cn("w-4");
</script>
<div class="w-4">Content</div>`,
        options: [{ cssPath }],
      },
    ],

    invalid: [
      {
        ...svelteFile,
        code: '<div class="w-[16px]">Content</div>',
        output: '<div class="w-4">Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...svelteFile,
        code: '<div class={cn("w-[16px]")}>Content</div>',
        output: '<div class={cn("w-4")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...svelteFile,
        code: '<div class="w-[16px] {dynamic}">Content</div>',
        output: '<div class="w-4 {dynamic}">Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...svelteFile,
        code: `<script>
  cn("w-[16px]");
</script>
<div>Content</div>`,
        output: `<script>
  cn("w-4");
</script>
<div>Content</div>`,
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      {
        ...svelteFile,
        code: '<div class="w-[16px] h-[32px]">Content</div>',
        output: '<div class="w-4 h-8">Content</div>',
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
        ...svelteFile,
        code: '<div class={clsx("w-[16px]", condition && "hidden")}>Content</div>',
        output: '<div class={clsx("w-4", condition && "hidden")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
    ],
  });
});
