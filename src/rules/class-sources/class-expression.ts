import type { Rule } from 'eslint';
import type * as ESTree from 'estree';
import { getQuoteChar, joinClasses, splitClasses } from './estree.js';
import type { CanonicalizationContext, ClassSource } from './types.js';

function getNameOf(node: ESTree.Node): string | null {
  if (node.type === 'Identifier') {
    return node.name;
  }
  return node.type === 'MemberExpression' && node.property.type === 'Identifier'
    ? node.property.name
    : null;
}

/**
 * Returns the function name when `node` calls a configured class function,
 * either as `cn(...)` or as a tagged template such as `` tw`...` `` or `` tw.div`...` ``.
 */
export function getClassFunctionName(
  node: ESTree.Node,
  calleeFunctions: string[],
): string | null {
  let name: string | null = null;
  if (node.type === 'CallExpression') {
    name = getNameOf(node.callee);
  } else if (node.type === 'TaggedTemplateExpression') {
    const { tag } = node;
    name = tag.type === 'MemberExpression' ? getNameOf(tag.object) : getNameOf(tag);
  }
  return name !== null && calleeFunctions.includes(name) ? name : null;
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
    case 'TaggedTemplateExpression': {
      const name = getClassFunctionName(node, ctx.calleeFunctions);
      if (name === null) {
        return;
      }
      // The script visitor skips class calls collected here, so each is reported once.
      ctx.walkedClassCalls.add(node);
      if (node.type === 'TaggedTemplateExpression') {
        walk(node.quasi, ctx, sources);
      } else {
        walkClassFunctionArguments(node, name, ctx, sources);
      }
      return;
    }
    default:
      return;
  }
}

function walkClassFunctionArguments(
  node: ESTree.CallExpression,
  name: string,
  ctx: CanonicalizationContext,
  sources: ClassSource[],
): void {
  if (name === 'cva') {
    // cva('base', { variants }) and cva({ base, variants })
    node.arguments.forEach((arg) => walkVariantConfig(arg, ctx, sources));
  } else if (name === 'tv') {
    // The second tv() argument configures tailwind-merge, not classes.
    walkVariantConfig(node.arguments[0], ctx, sources);
  } else {
    node.arguments.forEach((arg) => walk(arg, ctx, sources));
  }
}

function getKeyName(property: ESTree.Property): string | null {
  if (property.computed) {
    return null;
  }
  return property.key.type === 'Literal' ? String(property.key.value) : getNameOf(property.key);
}

/**
 * Walks a cva() or tv() config, where classes sit in property values:
 * `base`, `slots`, and every variant option. `defaultVariants` holds variant
 * names, and compound entries hold their classes only in `class` or `className`.
 */
function walkVariantConfig(
  node: ESTree.Node | null | undefined,
  ctx: CanonicalizationContext,
  sources: ClassSource[],
): void {
  if (node?.type === 'ArrayExpression') {
    node.elements.forEach((element) => walkVariantConfig(element, ctx, sources));
    return;
  }
  if (node?.type !== 'ObjectExpression') {
    walk(node, ctx, sources);
    return;
  }
  for (const property of node.properties) {
    const key = property.type === 'Property' ? getKeyName(property) : null;
    if (property.type !== 'Property' || key === null || key === 'defaultVariants') {
      continue;
    }
    if (key !== 'compoundVariants' && key !== 'compoundSlots') {
      walkVariantConfig(property.value, ctx, sources);
      continue;
    }
    const entries = property.value.type === 'ArrayExpression' ? property.value.elements : [];
    for (const entry of entries) {
      if (entry?.type !== 'ObjectExpression') {
        continue;
      }
      for (const field of entry.properties) {
        if (field.type === 'Property' && ['class', 'className'].includes(getKeyName(field) ?? '')) {
          walkVariantConfig(field.value, ctx, sources);
        }
      }
    }
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
