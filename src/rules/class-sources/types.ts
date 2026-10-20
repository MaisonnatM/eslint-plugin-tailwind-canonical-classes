import type { Rule } from 'eslint';

export interface RuleOptions {
  cssPath: string;
  rootFontSize?: number;
  calleeFunctions?: string[];
}

export interface ClassSource {
  reportNode: Rule.Node;
  classes: string[];
  fixRange: [number, number];
  buildFix: (fixedClasses: string[]) => string;
}

export interface CanonicalizationContext {
  cssPath: string;
  rootFontSize: number;
  calleeFunctions: string[];
  canonicalizeClasses: (candidates: string[]) => string[];
  sourceText: string;
}
