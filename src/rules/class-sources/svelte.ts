import { buildClassSourcesFromCallExpression } from './call-expression.js';
import { joinClasses, splitClasses } from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';
import type { Rule } from 'eslint';

export function collectSvelteClassAttributeSources(
  node: unknown,
  ctx: CanonicalizationContext,
): ClassSource[] {
  const attr = node as {
    key?: { name?: string };
    value?: unknown[];
  };

  if (attr.key?.name !== 'class' || !Array.isArray(attr.value)) {
    return [];
  }

  const sources: ClassSource[] = [];
  let literalRun: Array<{ value?: string; range?: [number, number] }> = [];

  const flushLiteralRun = () => {
    if (literalRun.length === 0) {
      return;
    }
    const source = buildStaticSvelteLiteralSource(node, literalRun);
    if (source) {
      sources.push(source);
    }
    literalRun = [];
  };

  for (const segment of attr.value) {
    const part = segment as {
      type?: string;
      value?: string;
      range?: [number, number];
      expression?: unknown;
    };
    if (part.type === 'SvelteLiteral') {
      literalRun.push(part);
      continue;
    }

    flushLiteralRun();

    if (part.type === 'SvelteMustacheTag') {
      sources.push(
        ...buildClassSourcesFromCallExpression(part.expression, ctx, {
          cssNotFoundNode: node as Rule.Node,
        }),
      );
    }
  }

  flushLiteralRun();
  return sources;
}

function buildStaticSvelteLiteralSource(
  attrNode: unknown,
  literals: Array<{ value?: string; range?: [number, number] }>,
): ClassSource | null {
  const first = literals[0];
  const last = literals[literals.length - 1];
  if (!first?.range || !last?.range) {
    return null;
  }

  const rawValue = literals.map((literal) => literal.value ?? '').join('');
  const classes = splitClasses(rawValue);
  if (classes.length === 0) {
    return null;
  }

  return {
    reportNode: attrNode as Rule.Node,
    classes,
    fixRange: [first.range[0], last.range[1]],
    buildFix: (fixedClasses) => buildStaticLiteralFix(rawValue, fixedClasses),
  };
}

function buildStaticLiteralFix(rawValue: string, fixedClasses: string[]): string {
  const leading = rawValue.match(/^\s*/)?.[0] ?? '';
  const trailing = rawValue.match(/\s*$/)?.[0] ?? '';
  return `${leading}${joinClasses(fixedClasses)}${trailing}`;
}
