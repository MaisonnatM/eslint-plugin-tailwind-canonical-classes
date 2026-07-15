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
  /** Node to attach cssNotFound when canonicalization cannot load CSS */
  cssNotFoundNode?: Rule.Node;
}

export interface CanonicalizationContext {
  cssPath: string;
  rootFontSize: number;
  calleeFunctions: string[];
  canonicalizeClasses: (candidates: string[]) => string[] | null;
  sourceText: string;
}
