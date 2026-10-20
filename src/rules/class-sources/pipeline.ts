import type { Rule } from 'eslint';
import type { CanonicalizationContext, ClassSource } from './types.js';

/**
 * Returns a reporter for one linted file. After Tailwind fails once, it
 * reports that failure and skips the file's remaining class sources.
 */
export function createClassSourceReporter(
  context: Rule.RuleContext,
  ctx: CanonicalizationContext,
): (sources: ClassSource[]) => void {
  let failed = false;

  return (sources) => {
    if (failed) {
      return;
    }

    for (const source of sources) {
      let canonicalized: string[];
      try {
        canonicalized = ctx.canonicalizeClasses(source.classes);
      } catch (error) {
        failed = true;
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

      let fixAttached = false;

      canonicalized.forEach((canonical, index) => {
        const original = source.classes[index];
        if (canonical === original) {
          return;
        }
        let fix: Rule.ReportFixer | undefined;
        if (!fixAttached) {
          const replacementText = source.buildFix(canonicalized);
          fix = (fixer) => fixer.replaceTextRange(source.fixRange, replacementText);
          fixAttached = true;
        }
        context.report({
          node: source.reportNode,
          messageId: 'nonCanonical',
          data: { original, canonical },
          fix,
        });
      });
    }
  };
}
