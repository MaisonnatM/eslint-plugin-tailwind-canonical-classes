import { buildClassSourcesFromCallExpression } from './call-expression.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

export function collectScriptCallExpressionSources(
  node: unknown,
  ctx: CanonicalizationContext,
): ClassSource[] {
  return buildClassSourcesFromCallExpression(node, ctx);
}

export function isInsideJsxClassNameAttribute(
  node: unknown,
  sourceCode: { getAncestors(node: unknown): unknown[] },
): boolean {
  for (const ancestor of sourceCode.getAncestors(node)) {
    const attr = ancestor as {
      type?: string;
      name?: { type?: string; name?: string };
    };
    if (
      attr.type === 'JSXAttribute' &&
      attr.name?.type === 'JSXIdentifier' &&
      attr.name.name === 'className'
    ) {
      return true;
    }
  }
  return false;
}
