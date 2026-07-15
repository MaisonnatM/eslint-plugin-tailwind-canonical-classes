import { buildClassSourcesFromCallExpression } from './call-expression.js';
import type { CanonicalizationContext, ClassSource } from './types.js';
import { isVueClassAttribute } from './vue.js';

type AncestorMatcher = (ancestor: unknown) => boolean;

const CLASS_ATTRIBUTE_MATCHERS: AncestorMatcher[] = [
  (ancestor) => {
    const attr = ancestor as {
      type?: string;
      name?: { type?: string; name?: string };
    };
    return (
      attr.type === 'JSXAttribute' &&
      attr.name?.type === 'JSXIdentifier' &&
      attr.name.name === 'className'
    );
  },
  (ancestor) => {
    const attr = ancestor as { type?: string; key?: { name?: string } };
    return attr.type === 'SvelteAttribute' && attr.key?.name === 'class';
  },
  isVueClassAttribute,
];

export function collectScriptCallExpressionSources(
  node: unknown,
  ctx: CanonicalizationContext,
): ClassSource[] {
  return buildClassSourcesFromCallExpression(node, ctx);
}

export function isInsideFrameworkClassAttribute(
  node: unknown,
  sourceCode: { getAncestors(node: unknown): unknown[] },
): boolean {
  for (const ancestor of sourceCode.getAncestors(node)) {
    if (CLASS_ATTRIBUTE_MATCHERS.some((match) => match(ancestor))) {
      return true;
    }
  }
  return false;
}
