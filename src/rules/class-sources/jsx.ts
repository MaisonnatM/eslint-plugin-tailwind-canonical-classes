import { collectClassExpressionSources } from './class-expression.js';
import { getQuoteChar, joinClasses, splitClasses } from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';
import type { Rule } from 'eslint';

interface JsxAttributeValue {
  type: string;
  value?: unknown;
  expression?: unknown;
  range?: [number, number];
}

export function collectJsxClassNameSources(
  node: unknown,
  ctx: CanonicalizationContext,
): ClassSource[] {
  // Called from the JSXAttribute visitor, which ESLint's ESTree types do not cover.
  const value = (node as { value?: JsxAttributeValue | null }).value;

  if (value?.type === 'JSXExpressionContainer') {
    return collectClassExpressionSources(value.expression, ctx);
  }

  const range = value?.range;
  if (value?.type !== 'Literal' || typeof value.value !== 'string' || !range) {
    return [];
  }

  const classes = splitClasses(value.value);
  if (classes.length === 0) {
    return [];
  }

  return [
    {
      reportNode: node as Rule.Node,
      classes,
      fixRange: range,
      buildFix: (fixedClasses) => {
        const quoteChar = getQuoteChar(ctx.sourceText, range[0], range[1]);
        return `${quoteChar}${joinClasses(fixedClasses)}${quoteChar}`;
      },
    },
  ];
}
