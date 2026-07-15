import type { Rule } from 'eslint';
import type { CanonicalizationContext, ClassSource } from './types.js';

export function reportClassSources(
  context: Rule.RuleContext,
  sources: ClassSource[],
  ctx: CanonicalizationContext,
): void {
  for (const source of sources) {
    try {
      const canonicalized = ctx.canonicalizeClasses(source.classes);

      if (canonicalized === null) {
        context.report({
          node: source.cssNotFoundNode ?? source.reportNode,
          messageId: 'cssNotFound',
          data: { path: ctx.cssPath },
        });
        continue;
      }

      const errors: Array<{
        original: string;
        canonical: string;
        index: number;
      }> = [];

      source.classes.forEach((className, index) => {
        const canonical = canonicalized[index];
        if (canonical && canonical !== className) {
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
    } catch {
      // Match prior behavior: swallow canonicalization failures silently.
    }
  }
}
