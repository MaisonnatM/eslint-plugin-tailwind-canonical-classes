import './synckit-mock.js';
import { resetCanonicalizeMock } from './synckit-mock.js';
import { describe, it, expect, beforeEach } from 'vitest';
import { RuleTester } from 'eslint';
import { getTestCssPath, getRuleTesterConfig } from './test-utils.js';

import tailwindCanonicalClasses from '../lib/rules/tailwind-canonical-classes.js';

describe('tailwind-canonical-classes', () => {
  const cssPath = getTestCssPath();

  beforeEach(() => {
    resetCanonicalizeMock();
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
      // Non-existent relative CSS path should silently disable the rule in
      // monorepos (walk-up tried, found nothing — file is in unrelated project)
      {
        code: '<div className="w-4">Content</div>',
        options: [{ cssPath: 'non/existent/path.css' }],
      },
      {
        code: '<div className={`w-[16px]-${size} ${a}w-[16px]`}>Content</div>',
        options: [{ cssPath }],
      },
      {
        code: 'const a = css`w-[16px]`; const b = styled.div`h-[32px]`;',
        options: [{ cssPath }],
      },
    ],

    invalid: [
      {
        code: `const button = cva("w-[16px]", {
  variants: { size: { sm: "h-[32px]", lg: ["p-[4px]"] } },
  compoundVariants: [{ size: "m-[8px]", class: "bg-[#fff]" }],
  defaultVariants: { size: "w-[20px]" },
});`,
        output: `const button = cva("w-4", {
  variants: { size: { sm: "h-8", lg: ["p-1"] } },
  compoundVariants: [{ size: "m-[8px]", class: "bg-white" }],
  defaultVariants: { size: "w-[20px]" },
});`,
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
          { messageId: 'nonCanonical', data: { original: 'h-[32px]', canonical: 'h-8' } },
          { messageId: 'nonCanonical', data: { original: 'p-[4px]', canonical: 'p-1' } },
          { messageId: 'nonCanonical', data: { original: 'bg-[#fff]', canonical: 'bg-white' } },
        ],
      },
      {
        code: `const card = tv({
  base: "w-[16px]",
  slots: { title: "h-[32px]" },
  variants: { tone: { dark: { title: "bg-[#000]" } } },
  compoundSlots: [{ slots: ["title"], tone: "m-[8px]", className: "p-[4px]" }],
}, { twMergeConfig: { classGroups: { x: ["w-[20px]"] } } });`,
        output: `const card = tv({
  base: "w-4",
  slots: { title: "h-8" },
  variants: { tone: { dark: { title: "bg-black" } } },
  compoundSlots: [{ slots: ["title"], tone: "m-[8px]", className: "p-1" }],
}, { twMergeConfig: { classGroups: { x: ["w-[20px]"] } } });`,
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
          { messageId: 'nonCanonical', data: { original: 'h-[32px]', canonical: 'h-8' } },
          { messageId: 'nonCanonical', data: { original: 'bg-[#000]', canonical: 'bg-black' } },
          { messageId: 'nonCanonical', data: { original: 'p-[4px]', canonical: 'p-1' } },
        ],
      },
      {
        code: 'const a = tw`w-[16px] ${x}`; const B = tw.div`h-[32px]`; const c = <div className={tw`p-[4px]`} />;',
        output: 'const a = tw`w-4 ${x}`; const B = tw.div`h-8`; const c = <div className={tw`p-1`} />;',
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
          { messageId: 'nonCanonical', data: { original: 'h-[32px]', canonical: 'h-8' } },
          { messageId: 'nonCanonical', data: { original: 'p-[4px]', canonical: 'p-1' } },
        ],
      },
      {
        code: '<div className={active ? "w-[16px]" : "h-8"}>Content</div>',
        output: '<div className={active ? "w-4" : "h-8"}>Content</div>',
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
        ],
      },
      {
        code: '<div className={`w-[16px] bg-${color} ${size}  h-[32px]`}>Content</div>',
        output: '<div className={`w-4 bg-${color} ${size}  h-8`}>Content</div>',
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
          { messageId: 'nonCanonical', data: { original: 'h-[32px]', canonical: 'h-8' } },
        ],
      },
      {
        code: '<div className={clsx({ "w-[16px]": active, [dynamic]: true }, ["h-[32px]"])}>Content</div>',
        output: '<div className={clsx({ "w-4": active, [dynamic]: true }, ["h-8"])}>Content</div>',
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
          { messageId: 'nonCanonical', data: { original: 'h-[32px]', canonical: 'h-8' } },
        ],
      },
      {
        code: 'const classes = cn("p-[4px]", clsx("w-[16px]"));',
        output: 'const classes = cn("p-1", clsx("w-4"));',
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'p-[4px]', canonical: 'p-1' } },
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
        ],
      },
      {
        code: 'const classes = someFn(cn("w-[16px]"));',
        output: 'const classes = someFn(cn("w-4"));',
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
        ],
      },
      {
        code: '<div className={someFn(cn("w-[16px]"))}>Content</div>',
        output: '<div className={someFn(cn("w-4"))}>Content</div>',
        options: [{ cssPath }],
        errors: [
          { messageId: 'nonCanonical', data: { original: 'w-[16px]', canonical: 'w-4' } },
        ],
      },
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
