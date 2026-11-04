import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterAll, describe, expect, it, vi } from 'vitest';

// synckit keeps one worker per worker path for the whole process, so this file must be the first to start it.
describe('real Tailwind worker on a hanging plugin', () => {
  const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tailwind-canonical-hang-'));
  afterAll(() => fs.rmSync(projectDir, { recursive: true, force: true }));

  it('stops waiting once the timeout runs out', async () => {
    const cssPath = path.join(projectDir, 'tailwind.css');
    fs.writeFileSync(path.join(projectDir, 'hang.mjs'), 'await new Promise(() => {});\nexport default {};\n');
    fs.writeFileSync(
      cssPath,
      `@import "${path.resolve('node_modules/tailwindcss/index.css')}";\n@plugin "./hang.mjs";\n`,
    );
    vi.stubEnv('TAILWIND_CANONICAL_CLASSES_TIMEOUT', '300');
    const { createClassCanonicalizer } = await import('../lib/rules/canonical-cache.js');
    vi.unstubAllEnvs();

    const canonicalize = createClassCanonicalizer(path.join(projectDir, 'cache'), cssPath, 16);
    expect(() => canonicalize(['w-[16px]'])).toThrow('no answer within 0.3 s');
  });
});
