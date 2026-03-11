import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RuleTester } from 'eslint';
import { getTestCssPath, mockCanonicalizations, getRuleTesterConfig } from './test-utils.js';

// Mock the synckit createSyncFn to return a synchronous function that mimics the worker
const mockCanonicalizeSync = vi.hoisted(() => {
  return vi.fn((cssContent, basePath, candidates, options = {}) => {
    // Simulate the worker's canonicalization logic
    return candidates.map((candidate) => {
      if (mockCanonicalizations[candidate]) {
        return mockCanonicalizations[candidate];
      }
      return candidate;
    });
  });
});

vi.mock('synckit', () => ({
  createSyncFn: vi.fn(() => mockCanonicalizeSync),
  runAsWorker: vi.fn(),
}));

import tailwindCanonicalClasses from '../lib/rules/tailwind-canonical-classes.js';

describe('tailwind-canonical-classes', () => {
  const cssPath = getTestCssPath();

  beforeEach(() => {
    mockCanonicalizeSync.mockClear();
    mockCanonicalizeSync.mockImplementation((cssContent, basePath, candidates, options = {}) => {
      return candidates.map((candidate) => {
        if (mockCanonicalizations[candidate]) {
          return mockCanonicalizations[candidate];
        }
        return candidate;
      });
    });
  });

  const ruleTester = new RuleTester(getRuleTesterConfig());

  ruleTester.run('tailwind-canonical-classes', tailwindCanonicalClasses, {
    valid: [
      {
        code: '<div className="w-4 h-8">Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className="bg-white text-black">Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className="">Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div id="test" data-test="value">Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={`w-4 ${someVar}`}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={cn("w-4", "h-8")}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={clsx("bg-white", "text-black")}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={classNames("w-4", "h-8")}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={cn("w-4", condition && "hidden")}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={cn("w-4", someVar)}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={cn("w-4", "h-8", condition && "hidden")}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: '<div className={customFn("w-4", "h-8")}>Content</div>',
        options: [{ cssPath, calleeFunctions: ['customFn'] }],
      },
      {
        code: '<div className={unknownFn("w-[16px]")}>Content</div>',
        options: [{ cssPath }],
      },
      // Ternary with canonical classes (no errors expected)
      {
        code: '<div className={cn(condition ? "w-4" : "h-8")}>Content</div>',
        options: [{ cssPath }],
      },
      // Logical AND with canonical class
      {
        code: '<div className={cn(condition && "w-4")}>Content</div>',
        options: [{ cssPath }],
      },
      // Logical OR with canonical class
      {
        code: '<div className={cn(condition || "w-4")}>Content</div>',
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
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className="w-[16px] h-[32px]">Content</div>',
        output: '<div className="w-4 h-8">Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
          {
            messageId: 'nonCanonical',
            data: {
              original: 'h-[32px]',
              canonical: 'h-8',
            },
          },
        ],
      },
      {
        code: '<div className={`w-[16px]`}>Content</div>',
        output: '<div className={`w-4`}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: "<div className='w-[16px]'>Content</div>",
        output: "<div className='w-4'>Content</div>",
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className="w-4 w-[16px] h-8">Content</div>',
        output: '<div className="w-4 w-4 h-8">Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className="w-[20px]">Content</div>',
        output: '<div className="w-5">Content</div>',
        options: [{ cssPath, rootFontSize: 20 }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[20px]',
              canonical: 'w-5',
            },
          },
        ],
      },
      {
        code: '<div className="w-4">Content</div>',
        options: [{ cssPath: '' }],
        errors: [
          {
            messageId: 'cssNotFound',
            data: {
              path: 'not specified',
            },
          },
        ],
      },
      {
        code: '<div className="w-4">Content</div>',
        options: [{ cssPath: '/non/existent/path.css' }],
        errors: [
          {
            messageId: 'cssNotFound',
            data: {
              path: '/non/existent/path.css',
            },
          },
        ],
      },
      {
        code: '<div className={cn("w-[16px]")}>Content</div>',
        output: '<div className={cn("w-4")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className={clsx("w-[16px]")}>Content</div>',
        output: '<div className={clsx("w-4")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className={classNames("w-[16px]")}>Content</div>',
        output: '<div className={classNames("w-4")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className={cn("w-[16px]", "h-[32px]")}>Content</div>',
        output: '<div className={cn("w-4", "h-8")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
          {
            messageId: 'nonCanonical',
            data: {
              original: 'h-[32px]',
              canonical: 'h-8',
            },
          },
        ],
      },
      {
        code: '<div className={cn("w-[16px] h-[32px]", "bg-white")}>Content</div>',
        output: '<div className={cn("w-4 h-8", "bg-white")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
          {
            messageId: 'nonCanonical',
            data: {
              original: 'h-[32px]',
              canonical: 'h-8',
            },
          },
        ],
      },
      {
        code: '<div className={cn("w-[16px]", condition && "hidden")}>Content</div>',
        output: '<div className={cn("w-4", condition && "hidden")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className={cn("w-[16px]", "h-[32px]", condition && "hidden", "bg-white")}>Content</div>',
        output: '<div className={cn("w-4", "h-8", condition && "hidden", "bg-white")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
          {
            messageId: 'nonCanonical',
            data: {
              original: 'h-[32px]',
              canonical: 'h-8',
            },
          },
        ],
      },
      {
        code: "<div className={cn('w-[16px]')}>Content</div>",
        output: "<div className={cn('w-4')}>Content</div>",
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className={customFn("w-[16px]")}>Content</div>',
        output: '<div className={customFn("w-4")}>Content</div>',
        options: [{ cssPath, calleeFunctions: ['customFn'] }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[16px]',
              canonical: 'w-4',
            },
          },
        ],
      },
      {
        code: '<div className={cn("w-[20px]")}>Content</div>',
        output: '<div className={cn("w-5")}>Content</div>',
        options: [{ cssPath, rootFontSize: 20 }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: {
              original: 'w-[20px]',
              canonical: 'w-5',
            },
          },
        ],
      },
      // Ternary: both branches non-canonical
      {
        code: '<div className={cn(condition ? "w-[16px]" : "h-[32px]")}>Content</div>',
        output: '<div className={cn(condition ? "w-4" : "h-8")}>Content</div>',
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
      // Ternary: one branch non-canonical
      {
        code: '<div className={cn(condition ? "w-[16px]" : "h-8")}>Content</div>',
        output: '<div className={cn(condition ? "w-4" : "h-8")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      // Logical AND with non-canonical
      {
        code: '<div className={cn(condition && "w-[16px]")}>Content</div>',
        output: '<div className={cn(condition && "w-4")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      // Logical OR with non-canonical
      {
        code: '<div className={cn(condition || "w-[16px]")}>Content</div>',
        output: '<div className={cn(condition || "w-4")}>Content</div>',
        options: [{ cssPath }],
        errors: [
          {
            messageId: 'nonCanonical',
            data: { original: 'w-[16px]', canonical: 'w-4' },
          },
        ],
      },
      // Mixed: direct literal + ternary
      {
        code: '<div className={cn("w-[16px]", condition ? "h-[32px]" : "bg-white")}>Content</div>',
        output: '<div className={cn("w-4", condition ? "h-8" : "bg-white")}>Content</div>',
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
      // Nested ternary
      {
        code: '<div className={cn(a ? (b ? "w-[16px]" : "h-8") : "bg-white")}>Content</div>',
        output: '<div className={cn(a ? (b ? "w-4" : "h-8") : "bg-white")}>Content</div>',
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
