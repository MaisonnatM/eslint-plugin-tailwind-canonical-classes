const { __unstable__loadDesignSystem } = await import('@tailwindcss/node');
const ds = await __unstable__loadDesignSystem('@import "tailwindcss";', { base: process.cwd() });
const opt = process.argv[2] === 'rem' ? { rem: 16 } : {};
let t = performance.now();
ds.canonicalizeCandidates([process.argv[3]], opt);
console.log(process.argv[2], process.argv[3], performance.now() - t | 0);
