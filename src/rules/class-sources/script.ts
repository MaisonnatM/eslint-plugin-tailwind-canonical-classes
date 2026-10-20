import type * as ESTree from 'estree';
import { collectClassExpressionSources, isClassCall } from './class-expression.js';
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
  node: ESTree.Node,
  ctx: CanonicalizationContext,
): ClassSource[] {
  return isClassCall(node, ctx.calleeFunctions)
    ? collectClassExpressionSources(node, ctx)
    : [];
}

/**
 * True when an enclosing class attribute or class utility call already
 * collects this call, so reporting it again would duplicate warnings.
 */
export function isCollectedByAncestor(
  node: unknown,
  sourceCode: { getAncestors(node: unknown): unknown[] },
  calleeFunctions: string[],
): boolean {
  return sourceCode.getAncestors(node).some(
    (ancestor) =>
      CLASS_ATTRIBUTE_MATCHERS.some((match) => match(ancestor)) ||
      isClassCall(ancestor as ESTree.Node, calleeFunctions),
  );
}
