import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ESLint } from 'eslint';

const [pluginDir, projectArg] = process.argv.slice(2);
const projectDir = path.resolve(projectArg);
const start = performance.now();
const control = pluginDir === 'none';
const plugin = control
  ? null
  : (await import(pathToFileURL(path.resolve(pluginDir, 'lib/index.js')).href)).default;

const eslint = new ESLint({
  cwd: projectDir,
  overrideConfigFile: true,
  overrideConfig: [
    {
      files: ['**/*.jsx'],
      languageOptions: {
        parserOptions: { ecmaFeatures: { jsx: true } },
      },
      ...(control
        ? {}
        : {
            plugins: { tw: plugin },
            rules: {
              'tw/tailwind-canonical-classes': ['warn', { cssPath: 'tailwind.css' }],
            },
          }),
    },
  ],
});

const results = await eslint.lintFiles(['src/**/*.jsx']);
const elapsedMs = performance.now() - start;

let warnings = 0;
let fatal = 0;
const byMessage = new Map();
for (const result of results) {
  for (const message of result.messages) {
    if (message.fatal || message.severity === 2) fatal++;
    else warnings++;
    byMessage.set(message.message, (byMessage.get(message.message) ?? 0) + 1);
  }
}

const digest = [...byMessage.entries()].sort().map(([m, n]) => `${n}\t${m}`).join('\n');
if (process.env.BENCH_DIGEST) fs.writeFileSync(process.env.BENCH_DIGEST, digest);

console.log(
  JSON.stringify({ files: results.length, warnings, fatal, elapsedMs: Math.round(elapsedMs) }),
);
process.exit(0);
