import type { Rule } from 'eslint';
import type * as ESTree from 'estree';
import { getSourceCode } from './context.js';
import {
  buildQuotedLiteralSource,
  collectClassExpressionSources,
} from './class-expression.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

interface VueParserServices {
  defineTemplateBodyVisitor: (
    templateBodyVisitor: Rule.RuleListener,
    scriptVisitor?: Rule.RuleListener,
  ) => Rule.RuleListener;
}

function isVueClassAttribute(node: unknown): boolean {
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
    value?: {
      type?: string;
      expression?: ESTree.Node;
      value?: string;
      range?: [number, number];
    };
  };

  if (!attr.directive && attr.value?.type === 'VLiteral') {
    const source = buildQuotedLiteralSource(
      node as Rule.Node,
      attr.value.value ?? '',
      attr.value.range,
      ctx.sourceText,
    );
    return source === null ? [] : [source];
  }

  if (attr.directive && attr.value?.type === 'VExpressionContainer') {
    return collectClassExpressionSources(attr.value.expression, ctx);
  }

  return [];
}
