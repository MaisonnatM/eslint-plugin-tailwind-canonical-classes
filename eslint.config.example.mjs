import tailwindCanonicalClasses from 'eslint-plugin-tailwind-canonical-classes';

// Option 1: Use the recommended config (simplest)
export default [
  ...tailwindCanonicalClasses.configs['flat/recommended'],
  {
    rules: {
      'tailwind-canonical-classes/tailwind-canonical-classes': [
        'warn',
        {
          cssPath: './app/styles/globals.css', // Update this to your CSS file path
          rootFontSize: 16, // Update if your root font size differs
        },
      ],
    },
  },
];

// Option 2: Manual plugin registration
// export default [
//   {
//     plugins: {
//       'tailwind-canonical-classes': tailwindCanonicalClasses,
//     },
//     rules: {
//       'tailwind-canonical-classes/tailwind-canonical-classes': [
//         'warn',
//         {
//           cssPath: './app/styles/globals.css',
//           rootFontSize: 16,
//         },
//       ],
//     },
//   },
// ];
