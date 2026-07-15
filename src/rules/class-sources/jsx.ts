import {
  extractStaticValue,
  extractStringArgsFromCallExpression,
  getQuoteChar,
  joinClasses,
  splitClasses,
} from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

export function collectJsxClassNameSources(
  node: any,
  ctx: CanonicalizationContext,
): ClassSource[] {
  const staticValue = node.value ? extractStaticValue(node.value) : null;
  if (staticValue !== null) {
    const classes = splitClasses(staticValue);
    if (classes.length === 0) {
      return [];
    }

    const valueNode = node.value;
    if (!valueNode?.range) {
      return [];
    }

    const source = buildStaticJsxSource(node, valueNode, classes, ctx.sourceText);
    return source ? [source] : [];
  }

  if (node.value?.type === 'JSXExpressionContainer') {
    const expr = node.value.expression;
    const callExprData = extractStringArgsFromCallExpression(
      expr,
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
        cssNotFoundNode: node,
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

  return [];
}

function buildStaticJsxSource(
  node: any,
  valueNode: any,
  classes: string[],
  sourceText: string,
): ClassSource | null {
  if (!valueNode.range) {
    return null;
  }

  if (valueNode.type === 'Literal') {
    return {
      reportNode: node,
      classes,
      fixRange: valueNode.range,
      buildFix: (fixedClasses) => {
        const quoteChar = getQuoteChar(
          sourceText,
          valueNode.range[0],
          valueNode.range[1],
        );
        return `${quoteChar}${joinClasses(fixedClasses)}${quoteChar}`;
      },
    };
  }

  if (valueNode.type === 'JSXExpressionContainer') {
    const expr = valueNode.expression;
    if (expr?.type === 'TemplateLiteral' && valueNode.range) {
      return {
        reportNode: node,
        classes,
        fixRange: valueNode.range,
        buildFix: (fixedClasses) => `{\`${joinClasses(fixedClasses)}\`}`,
      };
    }
  }

  return null;
}
