import './synckit-mock.js';
import { resetCanonicalizeMock } from './synckit-mock.js';
import { describe, it, expect, beforeEach } from 'vitest';
import { RuleTester } from 'eslint';
import {
  getTestCssPath,
  getRuleTesterConfig,
} from './test-utils.js';
import { splitClasses, joinClasses } from '../lib/rules/class-sources/estree.js';

import tailwindCanonicalClasses from '../lib/rules/tailwind-canonical-classes.js';

describe('class-sources regression', () => {
  const cssPath = getTestCssPath();

  beforeEach(() => {
    resetCanonicalizeMock();
  });

  describe('estree helpers', () => {
    it('splitClasses trims and splits on whitespace', () => {
      expect(splitClasses('  w-4  h-8  ')).toEqual(['w-4', 'h-8']);
      expect(splitClasses('')).toEqual([]);
      expect(splitClasses('   ')).toEqual([]);
    });

    it('joinClasses joins with a single space', () => {
      expect(joinClasses(['w-4', 'h-8'])).toBe('w-4 h-8');
      expect(joinClasses([])).toBe('');
    });
  });

  describe('script-level CallExpression visitor', () => {
    const ruleTester = new RuleTester(getRuleTesterConfig());

    ruleTester.run(
      'tailwind-canonical-classes (script CallExpression)',
      tailwindCanonicalClasses,
      {
        valid: [
          {
            code: 'cn("w-4", "h-8");',
            options: [{ cssPath }],
          },
          {
            code: 'function getClasses() { return clsx("bg-white", "text-black"); }',
            options: [{ cssPath }],
          },
          {
            code: 'const classes = unknownFn("w-[16px]");',
            options: [{ cssPath }],
          },
          {
            code: `
              import { cn } from "./utils";
              export function Page() {
                return cn("w-4");
              }
            `,
            options: [{ cssPath }],
          },
        ],

        invalid: [
          {
            code: 'cn("w-[16px]");',
            output: 'cn("w-4");',
            options: [{ cssPath }],
            errors: [
              {
                messageId: 'nonCanonical',
                data: { original: 'w-[16px]', canonical: 'w-4' },
              },
            ],
          },
          {
            code: 'const classes = cn("w-[16px]", "h-[32px]");',
            output: 'const classes = cn("w-4", "h-8");',
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
            code: 'clsx("w-[16px]");',
            output: 'clsx("w-4");',
            options: [{ cssPath }],
            errors: [
              {
                messageId: 'nonCanonical',
                data: { original: 'w-[16px]', canonical: 'w-4' },
              },
            ],
          },
          {
            code: 'customMerge("w-[16px]");',
            output: 'customMerge("w-4");',
            options: [{ cssPath, calleeFunctions: ['customMerge'] }],
            errors: [
              {
                messageId: 'nonCanonical',
                data: { original: 'w-[16px]', canonical: 'w-4' },
              },
            ],
          },
          {
            code: `
              cn("w-[16px]");
              <div className={cn("h-[32px]")}>Content</div>
            `,
            output: `
              cn("w-4");
              <div className={cn("h-8")}>Content</div>
            `,
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
      },
    );
  });
});
