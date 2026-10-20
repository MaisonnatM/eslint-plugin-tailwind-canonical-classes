import { describe } from 'vitest';
import { RuleTester } from 'eslint';
import { getTestCssPath, getRuleTesterConfig } from './test-utils.js';
import tailwindCanonicalClasses from '../lib/rules/tailwind-canonical-classes.js';

describe('tailwind-canonical-classes (Integration)', () => {
  const cssPath = getTestCssPath();

  const ruleTester = new RuleTester(getRuleTesterConfig());

  ruleTester.run('tailwind-canonical-classes', tailwindCanonicalClasses, {
    valid: [
      {
        code: '<div className="flex items-center">Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className="w-4 h-8">Content</div>',
        options: [{ cssPath }],
      },
    ],

    invalid: [
      {
        code: '<div className="w-[16px]">Content</div>',
        output: '<div className="w-4">Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
          },
        ],
      },
      {
        code: '<div className="gap-[8px] gap-2 p-2">Content</div>',
        output: '<div className="gap-2 gap-2 p-2">Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            message: "Class 'gap-[8px]' should be 'gap-2'",
          },
        ],
      },
    ],
  });
}, 30000);

