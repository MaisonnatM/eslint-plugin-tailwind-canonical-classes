import type { Rule } from 'eslint';
import { getSourceCode, setupRuleContext } from './class-sources/context.js';
import { collectJsxClassNameSources } from './class-sources/jsx.js';
import { reportClassSources } from './class-sources/pipeline.js';
import {
  collectScriptCallExpressionSources,
  isInsideFrameworkClassAttribute,
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

        reportClassSources(context, collectJsxClassNameSources(node, ctx), ctx);
      },

      SvelteAttribute(node: unknown) {
        reportClassSources(
          context,
          collectSvelteClassAttributeSources(node, ctx),
          ctx,
        );
      },

      VAttribute(node: unknown) {
        reportClassSources(
          context,
          collectVueClassAttributeSources(node, ctx),
          ctx,
        );
      },
    };

    const scriptVisitor: Rule.RuleListener = {
      CallExpression(node: unknown) {
        if (isInsideFrameworkClassAttribute(node, sourceCode)) {
          return;
        }

        reportClassSources(
          context,
          collectScriptCallExpressionSources(node, ctx),
          ctx,
        );
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
