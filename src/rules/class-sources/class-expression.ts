import type { Rule } from 'eslint';
import type * as ESTree from 'estree';
import { getQuoteChar, joinClasses, splitClasses } from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

export function isClassCall(
  node: ESTree.Node,
  calleeFunctions: string[],
): node is ESTree.CallExpression {
  if (node.type !== 'CallExpression') {
    return false;
  }
  const { callee } = node;
  const name =
    callee.type === 'Identifier'
      ? callee.name
      : callee.type === 'MemberExpression' && callee.property.type === 'Identifier'
        ? callee.property.name
        : null;
  return name !== null && calleeFunctions.includes(name);
}

/**
 * Collects the class strings of an expression whose value is a class list,
 * such as a `className={...}` expression or a `cn(...)` argument.
 */
export function collectClassExpressionSources(
  node: ESTree.Node | null | undefined,
  ctx: CanonicalizationContext,
): ClassSource[] {
  const sources: ClassSource[] = [];
  walk(node, ctx, sources);
  return sources;
}

/**
 * Builds the source for a quoted string literal whose whole value is a class
 * list. The fix rewrites the literal and keeps its quote character.
 */
export function buildQuotedLiteralSource(
  reportNode: Rule.Node,
  value: string,
  range: [number, number] | undefined,
  sourceText: string,
): ClassSource | null {
  const classes = splitClasses(value);
  if (classes.length === 0 || !range) {
    return null;
  }
  return {
    reportNode,
    classes,
    fixRange: range,
    buildFix: (fixedClasses) => {
      const quoteChar = getQuoteChar(sourceText, range[0], range[1]);
      return `${quoteChar}${joinClasses(fixedClasses)}${quoteChar}`;
    },
  };
}

function walk(
  node: ESTree.Node | null | undefined,
  ctx: CanonicalizationContext,
  sources: ClassSource[],
): void {
  switch (node?.type) {
    case 'Literal': {
      if (typeof node.value !== 'string') {
        return;
      }
      const source = buildQuotedLiteralSource(
        node as Rule.Node,
        node.value,
        node.range,
        ctx.sourceText,
      );
      if (source !== null) {
        sources.push(source);
      }
      return;
    }
    case 'TemplateLiteral':
      node.quasis.forEach((quasi, index) => {
        pushQuasiSource(quasi, index, node.quasis.length, sources);
      });
      return;
    case 'ConditionalExpression':
      walk(node.consequent, ctx, sources);
      walk(node.alternate, ctx, sources);
      return;
    case 'LogicalExpression':
      walk(node.left, ctx, sources);
      walk(node.right, ctx, sources);
      return;
    case 'ArrayExpression':
      for (const element of node.elements) {
        walk(element, ctx, sources);
      }
      return;
    case 'ObjectExpression':
      // `clsx({ 'w-4': active })` and Vue `:class="{ 'w-4': active }"` hold classes in keys.
      for (const property of node.properties) {
        if (property.type === 'Property' && !property.computed) {
          walk(property.key, ctx, sources);
        }
      }
      return;
    case 'CallExpression':
      if (isClassCall(node, ctx.calleeFunctions)) {
        // The CallExpression visitor skips calls collected here, so each is reported once.
        ctx.walkedClassCalls.add(node);
        for (const arg of node.arguments) {
          walk(arg, ctx, sources);
        }
      }
      return;
    default:
      return;
  }
}

/**
 * Checks the static text of one template literal chunk. A class glued to a
 * `${}` expression, like `bg-${color}`, is only part of a class and is skipped.
 */
function pushQuasiSource(
  quasi: ESTree.TemplateElement,
  index: number,
  quasiCount: number,
  sources: ClassSource[],
): void {
  const { raw, cooked } = quasi.value;
  // An escape sequence such as `\n` makes the source text differ from the
  // classes it spells, so token offsets in `raw` would not match the classes.
  if (!quasi.range || raw !== cooked) {
    return;
  }

  const tokens = [...raw.matchAll(/\S+/g)].filter((match) => {
    const start = match.index;
    const end = start + match[0].length;
    const gluedBefore = index > 0 && start === 0;
    const gluedAfter = index < quasiCount - 1 && end === raw.length;
    return !gluedBefore && !gluedAfter;
  });
  if (tokens.length === 0) {
    return;
  }

  // The quasi range spans its delimiters: a backtick or `}` before, and a backtick or `${` after.
  const contentStart = quasi.range[0] + 1;
  sources.push({
    reportNode: quasi as Rule.Node,
    classes: tokens.map((match) => match[0]),
    fixRange: [contentStart, contentStart + raw.length],
    buildFix: (fixedClasses) => {
      let text = '';
      let cursor = 0;
      tokens.forEach((match, i) => {
        text += raw.slice(cursor, match.index) + fixedClasses[i];
        cursor = match.index + match[0].length;
      });
      return text + raw.slice(cursor);
    },
  });
}
