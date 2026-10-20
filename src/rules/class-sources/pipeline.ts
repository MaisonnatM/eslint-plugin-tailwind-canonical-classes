import type { Rule } from 'eslint';
import type { CanonicalizationContext, ClassSource } from './types.js';

const failedContexts = new WeakSet<CanonicalizationContext>();

export function reportClassSources(
  context: Rule.RuleContext,
  sources: ClassSource[],
  ctx: CanonicalizationContext,
): void {
  for (const source of sources) {
    if (failedContexts.has(ctx)) {
      return;
    }

    let canonicalized: string[];
    try {
      canonicalized = ctx.canonicalizeClasses(source.classes);
    } catch (error) {
      failedContexts.add(ctx);
      context.report({
        node: source.reportNode,
        messageId: 'canonicalizeFailed',
        data: {
          path: ctx.cssPath,
          error: error instanceof Error ? error.message : String(error),
        },
      });
      return;
    }

    const errors: Array<{
      original: string;
      canonical: string;
      index: number;
    }> = [];

    source.classes.forEach((className, index) => {
      const canonical = canonicalized[index];
      if (canonical !== className) {
        errors.push({ original: className, canonical, index });
      }
    });

    if (errors.length === 0) {
      continue;
    }

    const fixedClasses = [...source.classes];
    errors.forEach((error) => {
      fixedClasses[error.index] = error.canonical;
    });
    const replacementText = source.buildFix(fixedClasses);

    errors.forEach((error, errorIndex) => {
      context.report({
        node: source.reportNode,
        messageId: 'nonCanonical',
        data: {
          original: error.original,
          canonical: error.canonical,
        },
        fix:
          errorIndex === 0
            ? (fixer) =>
                fixer.replaceTextRange(source.fixRange, replacementText)
            : undefined,
      });
    });
  }
}
