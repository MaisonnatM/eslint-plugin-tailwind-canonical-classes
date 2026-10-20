import type { Rule } from 'eslint';
import { getSourceCode, setupRuleContext } from './class-sources/context.js';
import { collectJsxClassNameSources } from './class-sources/jsx.js';
import { createClassSourceReporter } from './class-sources/pipeline.js';
import {
  collectScriptCallExpressionSources,
  isCollectedByAncestor,
} from './class-sources/script.js';
import { collectSvelteClassAttributeSources } from './class-sources/svelte.js';
import {
  collectVueClassAttributeSources,
  wireRuleVisitors,
} from './class-sources/vue.js';
import type { RuleOptions } from './class-sources/types.js';

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Enforce canonical Tailwind CSS class names using Tailwind CSS v4 canonicalization API',
    },
    fixable: 'code',
    messages: {
      nonCanonical: "Class '{{original}}' should be '{{canonical}}'",
      cssNotFound: 'Could not load Tailwind CSS file: {{path}}',
      canonicalizeFailed:
        'Tailwind could not canonicalize classes with {{path}}: {{error}}',
    },
    schema: [
      {
        type: 'object',
        properties: {
          cssPath: {
            type: 'string',
          },
          rootFontSize: {
            type: 'number',
          },
          calleeFunctions: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: ['cssPath'],
        additionalProperties: false,
      },
    ],
  },
  create(context: Rule.RuleContext) {
    const sourceCode = getSourceCode(context);
    const options = context.options[0] as RuleOptions | undefined;
    const setup = setupRuleContext(context, options);

    if (setup.reportCssNotFound) {
      context.report({
        node: sourceCode.ast,
        messageId: 'cssNotFound',
        data: { path: setup.reportCssNotFound.path },
      });
      return {};
    }

    if (setup.disabled || !setup.context) {
      return {};
    }

    const ctx = setup.context;
    const reportClassSources = createClassSourceReporter(context, ctx);

    const templateBodyVisitor: Rule.RuleListener = {
      JSXAttribute(node: unknown) {
        const attr = node as {
          name?: { type?: string; name?: string };
        };
        if (
          attr.name?.type !== 'JSXIdentifier' ||
          attr.name.name !== 'className'
        ) {
          return;
        }

        reportClassSources(collectJsxClassNameSources(node, ctx));
      },

      SvelteAttribute(node: unknown) {
        reportClassSources(collectSvelteClassAttributeSources(node, ctx));
      },

      VAttribute(node: unknown) {
        reportClassSources(collectVueClassAttributeSources(node, ctx));
      },
    };

    const scriptVisitor: Rule.RuleListener = {
      CallExpression(node) {
        const sources = collectScriptCallExpressionSources(node, ctx);
        if (
          sources.length === 0 ||
          isCollectedByAncestor(node, sourceCode, ctx.calleeFunctions)
        ) {
          return;
        }

        reportClassSources(sources);
      },
    };

    return wireRuleVisitors(
      context,
      sourceCode,
      templateBodyVisitor,
      scriptVisitor,
    );
  },
};

export default rule;
