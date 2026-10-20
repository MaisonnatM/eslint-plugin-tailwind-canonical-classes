import fs from 'node:fs';
import path from 'node:path';

const [outDir, fileCountArg = '400', elementsArg = '40'] = process.argv.slice(2);
const fileCount = Number(fileCountArg);
const elementsPerFile = Number(elementsArg);

let seed = 42;
const random = () => {
  seed = (seed * 1103515245 + 12345) % 2 ** 31;
  return seed / 2 ** 31;
};
const pick = (pool) => pool[Math.floor(random() * pool.length)];

const canonical = [
  'flex', 'grid', 'block', 'hidden', 'items-center', 'justify-between', 'gap-2',
  'gap-4', 'p-2', 'p-4', 'px-3', 'py-1', 'mt-2', 'mb-4', 'rounded-md', 'rounded-lg',
  'text-sm', 'text-lg', 'font-medium', 'font-bold', 'text-gray-700', 'bg-white',
  'bg-blue-500', 'hover:bg-blue-600', 'shadow-sm', 'border', 'border-gray-200',
  'w-full', 'h-10', 'md:flex', 'lg:grid-cols-3', 'truncate', 'opacity-50',
];
const nonCanonical = [
  'w-[16px]', 'h-[32px]', 'p-[4px]', 'm-[8px]', 'mt-[12px]', 'gap-[8px]',
  'bg-[#fff]', 'bg-[#000]', 'px-[16px]', 'rounded-[4px]',
];
const classList = () => {
  const count = 3 + Math.floor(random() * 6);
  const classes = new Set();
  while (classes.size < count) {
    classes.add(random() < 0.1 ? pick(nonCanonical) : pick(canonical));
  }
  return [...classes].join(' ');
};

const srcDir = path.join(outDir, 'src');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(srcDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'tailwind.css'), '@import "tailwindcss";\n');

for (let f = 0; f < fileCount; f++) {
  const lines = [
    "import { cn } from './cn';",
    '',
    `export function Component${f}({ active, items }) {`,
    '  const total = items.reduce((sum, item) => sum + item.value, 0);',
    '  console.log(String(total), Math.max(total, 0));',
    '  return (',
    '    <div>',
  ];
  for (let e = 0; e < elementsPerFile; e++) {
    const kind = random();
    if (kind < 0.6) {
      lines.push(`      <div className="${classList()}">{format(items[${e}])}</div>`);
    } else if (kind < 0.9) {
      lines.push(
        `      <span className={cn("${classList()}", active && "${classList()}")}>{String(${e})}</span>`,
      );
    } else {
      lines.push(`      <button onClick={() => handle(${e}, items.map((i) => i.id))}>x</button>`);
    }
  }
  lines.push('    </div>', '  );', '}', '');
  fs.writeFileSync(path.join(srcDir, `component-${f}.jsx`), lines.join('\n'));
}

console.log(`generated ${fileCount} files x ${elementsPerFile} elements in ${outDir}`);
