import { buildClassSourcesFromCallExpression } from './call-expression.js';
import {
  extractStaticValue,
  getQuoteChar,
  joinClasses,
  splitClasses,
} from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';
import type { Rule } from 'eslint';

export function collectJsxClassNameSources(
  node: unknown,
  ctx: CanonicalizationContext,
): ClassSource[] {
  const attr = node as {
    value?: unknown;
  };

  const staticValue = attr.value ? extractStaticValue(attr.value) : null;
  if (staticValue !== null) {
    const classes = splitClasses(staticValue);
    if (classes.length === 0) {
      return [];
    }

    const valueNode = attr.value as { range?: [number, number] } | undefined;
    if (!valueNode?.range) {
      return [];
    }

    const source = buildStaticJsxSource(
      node,
      valueNode,
      classes,
      ctx.sourceText,
    );
    return source ? [source] : [];
  }

  const value = attr.value as { type?: string; expression?: unknown } | undefined;
  if (value?.type === 'JSXExpressionContainer') {
    return buildClassSourcesFromCallExpression(value.expression, ctx, {
      cssNotFoundNode: node as Rule.Node,
    });
  }

  return [];
}

function buildStaticJsxSource(
  node: unknown,
  valueNode: { type?: string; range?: [number, number]; expression?: { type?: string } },
  classes: string[],
  sourceText: string,
): ClassSource | null {
  if (!valueNode.range) {
    return null;
  }

  if (valueNode.type === 'Literal') {
    return {
      reportNode: node as Rule.Node,
      classes,
      fixRange: valueNode.range,
      buildFix: (fixedClasses) => {
        const quoteChar = getQuoteChar(
          sourceText,
          valueNode.range![0],
          valueNode.range![1],
        );
        return `${quoteChar}${joinClasses(fixedClasses)}${quoteChar}`;
      },
    };
  }

  if (valueNode.type === 'JSXExpressionContainer') {
    const expr = valueNode.expression;
    if (expr?.type === 'TemplateLiteral' && valueNode.range) {
      return {
        reportNode: node as Rule.Node,
        classes,
        fixRange: valueNode.range,
        buildFix: (fixedClasses) => `{\`${joinClasses(fixedClasses)}\`}`,
      };
    }
  }

  return null;
}
