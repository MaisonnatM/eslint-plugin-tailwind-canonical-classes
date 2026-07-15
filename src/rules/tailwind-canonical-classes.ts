import type { Rule } from 'eslint';
import { getSourceCode, setupRuleContext } from './class-sources/context.js';
import { collectJsxClassNameSources } from './class-sources/jsx.js';
import { reportClassSources } from './class-sources/pipeline.js';
import {
  collectScriptCallExpressionSources,
  isInsideJsxClassNameAttribute,
} from './class-sources/script.js';
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

    return {
      JSXAttribute(node: any) {
        if (
          node.name.type !== 'JSXIdentifier' ||
          node.name.name !== 'className'
        ) {
          return;
        }

        const sources = collectJsxClassNameSources(node, ctx);
        reportClassSources(context, sources, ctx);
      },

      CallExpression(node: any) {
        if (isInsideJsxClassNameAttribute(node, sourceCode)) {
          return;
        }

        const sources = collectScriptCallExpressionSources(node, ctx);
        reportClassSources(context, sources, ctx);
      },
    };
  },
};

export default rule;
