import {
  extractStringArgsFromCallExpression,
  getQuoteChar,
  joinClasses,
} from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

export function collectScriptCallExpressionSources(
  node: any,
  ctx: CanonicalizationContext,
): ClassSource[] {
  const callExprData = extractStringArgsFromCallExpression(
    node,
    ctx.calleeFunctions,
  );
  if (!callExprData) {
    return [];
  }

  return callExprData.args
    .filter((arg) => arg.node.range)
    .map((arg) => ({
      reportNode: arg.node,
      classes: arg.classes,
      fixRange: arg.node.range as [number, number],
      buildFix: (fixedClasses: string[]) => {
        const quoteChar = getQuoteChar(
          ctx.sourceText,
          arg.node.range[0],
          arg.node.range[1],
        );
        return `${quoteChar}${joinClasses(fixedClasses)}${quoteChar}`;
      },
    }));
}

export function isInsideJsxClassNameAttribute(
  node: any,
  sourceCode: { getAncestors(node: any): any[] },
): boolean {
  for (const ancestor of sourceCode.getAncestors(node)) {
    if (
      ancestor.type === 'JSXAttribute' &&
      ancestor.name?.type === 'JSXIdentifier' &&
      ancestor.name.name === 'className'
    ) {
      return true;
    }
  }
  return false;
}
