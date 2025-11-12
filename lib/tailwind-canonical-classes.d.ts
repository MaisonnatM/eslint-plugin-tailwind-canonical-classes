import { Rule } from 'eslint';

export interface RuleOptions {
  cssPath: string;
  rootFontSize?: number;
}

declare const rule: Rule.RuleModule;

export default rule;

