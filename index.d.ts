import tailwindCanonicalClasses from './lib/tailwind-canonical-classes.js';

declare const plugin: {
  rules: {
    'tailwind-canonical-classes': typeof tailwindCanonicalClasses;
  };
};

export default plugin;

