import './synckit-mock.js';
import { resetCanonicalizeMock } from './synckit-mock.js';
import { describe, it, expect, beforeEach } from 'vitest';
import { RuleTester } from 'eslint';
import {
  getTestCssPath,
  getRuleTesterConfig,
} from './test-utils.js';
import {
  splitClasses,
  joinClasses,
  extractStringArgsFromCallExpression,
  extractStaticValue,
} from '../lib/rules/class-sources/estree.js';

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

    it('extractStaticValue reads string literals and static template literals', () => {
      expect(extractStaticValue({ type: 'Literal', value: 'w-4 h-8' })).toBe(
        'w-4 h-8',
      );
      expect(
        extractStaticValue({
          type: 'TemplateLiteral',
          expressions: [],
          quasis: [{ value: { cooked: 'w-4' } }],
        }),
      ).toBe('w-4');
      expect(
        extractStaticValue({
          type: 'TemplateLiteral',
          expressions: [{ type: 'Identifier', name: 'x' }],
          quasis: [{ value: { cooked: 'w-4' } }],
        }),
      ).toBeNull();
    });

    it('extractStringArgsFromCallExpression collects nested string literals', () => {
      const node = {
        type: 'CallExpression',
        callee: { type: 'Identifier', name: 'cn' },
        arguments: [
          { type: 'Literal', value: 'w-[16px]' },
          {
            type: 'ConditionalExpression',
            consequent: { type: 'Literal', value: 'h-[32px]' },
            alternate: { type: 'Literal', value: 'bg-white' },
          },
        ],
      };

      const result = extractStringArgsFromCallExpression(node, ['cn']);
      expect(result?.calleeName).toBe('cn');
      expect(result?.args.map((arg) => arg.value)).toEqual([
        'w-[16px]',
        'h-[32px]',
        'bg-white',
      ]);
    });

    it('extractStringArgsFromCallExpression ignores unknown callees', () => {
      const node = {
        type: 'CallExpression',
        callee: { type: 'Identifier', name: 'unknownFn' },
        arguments: [{ type: 'Literal', value: 'w-[16px]' }],
      };

      expect(extractStringArgsFromCallExpression(node, ['cn'])).toBeNull();
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
