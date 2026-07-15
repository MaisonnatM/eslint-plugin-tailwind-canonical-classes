export function splitClasses(className: string): string[] {
  return className.trim().split(/\s+/).filter(Boolean);
}

export function joinClasses(classes: string[]): string {
  return classes.join(' ');
}

function hasTemplateExpressions(node: any): boolean {
  if (node.type !== 'TemplateLiteral') {
    return false;
  }
  return node.expressions && node.expressions.length > 0;
}

export function getQuoteChar(source: string, start: number, end: number): string {
  const quoteChars = ['"', "'", '`'];
  for (const char of quoteChars) {
    if (source[start] === char && source[end - 1] === char) {
      return char;
    }
  }
  return '"';
}

function getCalleeName(node: any): string | null {
  if (node.type === 'Identifier') {
    return node.name;
  }
  if (node.type === 'MemberExpression' && node.property.type === 'Identifier') {
    return node.property.name;
  }
  return null;
}

interface CollectedLiteral {
  value: string;
  node: any;
  classes: string[];
}

export function collectStringLiterals(node: any, result: CollectedLiteral[]): void {
  if (node.type === 'Literal' && typeof node.value === 'string') {
    const classes = splitClasses(node.value);
    if (classes.length > 0) {
      result.push({ value: node.value, node, classes });
    }
  } else if (node.type === 'ConditionalExpression') {
    collectStringLiterals(node.consequent, result);
    collectStringLiterals(node.alternate, result);
  } else if (node.type === 'LogicalExpression') {
    collectStringLiterals(node.left, result);
    collectStringLiterals(node.right, result);
  } else if (node.type === 'TemplateLiteral' && !hasTemplateExpressions(node)) {
    const value = node.quasis.map((q: any) => q.value.cooked).join('');
    const classes = splitClasses(value);
    if (classes.length > 0) {
      result.push({ value, node, classes });
    }
  }
}

export interface StringArg {
  value: string;
  index: number;
  node: any;
  classes: string[];
}

export function extractStringArgsFromCallExpression(
  node: any,
  calleeFunctions: string[],
): { calleeName: string; args: StringArg[] } | null {
  if (node.type !== 'CallExpression') {
    return null;
  }

  const calleeName = getCalleeName(node.callee);
  if (!calleeName || !calleeFunctions.includes(calleeName)) {
    return null;
  }

  const args: StringArg[] = [];

  node.arguments.forEach((arg: any, index: number) => {
    const literals: CollectedLiteral[] = [];
    collectStringLiterals(arg, literals);
    literals.forEach((lit) => {
      args.push({
        value: lit.value,
        index,
        node: lit.node,
        classes: lit.classes,
      });
    });
  });

  return args.length > 0 ? { calleeName, args } : null;
}

export function extractStaticValue(node: any): string | null {
  if (node.type === 'Literal' && typeof node.value === 'string') {
    return node.value;
  }
  if (node.type === 'JSXExpressionContainer') {
    return extractStaticValue(node.expression);
  }
  if (node.type === 'TemplateLiteral' && !hasTemplateExpressions(node)) {
    return node.quasis.map((q: any) => q.value.cooked).join('');
  }
  return null;
}
