import type { Rule } from 'eslint';
import { getSourceCode } from './context.js';
import {
  buildClassSourcesFromCallExpression,
} from './call-expression.js';
import {
  getQuoteChar,
  joinClasses,
  splitClasses,
} from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

interface VueParserServices {
  defineTemplateBodyVisitor: (
    templateBodyVisitor: Rule.RuleListener,
    scriptVisitor?: Rule.RuleListener,
  ) => Rule.RuleListener;
}

export function isVueClassAttribute(node: unknown): boolean {
  const attr = node as {
    type?: string;
    directive?: boolean;
    key?: { name?: string; argument?: { name?: string } };
  };

  if (attr.type !== 'VAttribute') {
    return false;
  }

  if (!attr.directive) {
    return attr.key?.name === 'class';
  }

  return attr.key?.argument?.name === 'class';
}

function getParserServices(
  context: Rule.RuleContext,
  sourceCode: ReturnType<typeof getSourceCode>,
): VueParserServices | undefined {
  const services =
    sourceCode.parserServices ??
    (context as Rule.RuleContext & { parserServices?: VueParserServices })
      .parserServices;

  if (
    services &&
    typeof services.defineTemplateBodyVisitor === 'function'
  ) {
    return services;
  }

  return undefined;
}

export function wireRuleVisitors(
  context: Rule.RuleContext,
  sourceCode: ReturnType<typeof getSourceCode>,
  templateBodyVisitor: Rule.RuleListener,
  scriptVisitor: Rule.RuleListener,
): Rule.RuleListener {
  const parserServices = getParserServices(context, sourceCode);
  if (parserServices) {
    return parserServices.defineTemplateBodyVisitor(
      templateBodyVisitor,
      scriptVisitor,
    );
  }

  return {
    ...templateBodyVisitor,
    ...scriptVisitor,
  };
}

export function collectVueClassAttributeSources(
  node: unknown,
  ctx: CanonicalizationContext,
): ClassSource[] {
  if (!isVueClassAttribute(node)) {
    return [];
  }

  const attr = node as {
    directive?: boolean;
    value?: { type?: string; expression?: unknown; value?: string; range?: [number, number] };
  };

  if (!attr.directive && attr.value?.type === 'VLiteral') {
    return buildStaticVueLiteralSource(node, attr.value, ctx.sourceText);
  }

  if (attr.directive && attr.value?.type === 'VExpressionContainer') {
    return buildClassSourcesFromCallExpression(
      attr.value.expression,
      ctx,
      { cssNotFoundNode: node as Rule.Node },
    );
  }

  return [];
}

function buildStaticVueLiteralSource(
  attrNode: unknown,
  valueNode: { value?: string; range?: [number, number] },
  sourceText: string,
): ClassSource[] {
  if (!valueNode.range) {
    return [];
  }

  const classes = splitClasses(valueNode.value ?? '');
  if (classes.length === 0) {
    return [];
  }

  return [
    {
      reportNode: attrNode as Rule.Node,
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
    },
  ];
}
