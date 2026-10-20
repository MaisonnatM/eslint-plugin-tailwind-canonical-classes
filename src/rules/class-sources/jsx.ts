import type * as ESTree from 'estree';
import { collectClassExpressionSources } from './class-expression.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

interface JsxAttribute {
  value?: ESTree.Literal | { type: 'JSXExpressionContainer'; expression: ESTree.Node } | null;
}

export function collectJsxClassNameSources(
  node: unknown,
  ctx: CanonicalizationContext,
): ClassSource[] {
  // Called from the JSXAttribute visitor, which ESLint's ESTree types do not cover.
  const { value } = node as JsxAttribute;
  return collectClassExpressionSources(
    value?.type === 'JSXExpressionContainer' ? value.expression : value,
    ctx,
  );
}
