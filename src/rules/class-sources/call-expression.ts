import {
  extractStringArgsFromCallExpression,
  getQuoteChar,
  joinClasses,
} from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';
import type { Rule } from 'eslint';

export interface CallExpressionSourceOptions {
  cssNotFoundNode?: Rule.Node;
}

export function buildClassSourcesFromCallExpression(
  node: unknown,
  ctx: CanonicalizationContext,
  options: CallExpressionSourceOptions = {},
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
      ...(options.cssNotFoundNode
        ? { cssNotFoundNode: options.cssNotFoundNode }
        : {}),
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
