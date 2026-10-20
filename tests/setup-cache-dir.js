import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterAll } from 'vitest';

// Mocked canonicalizations must never reach the cache that real-worker tests read.
const cacheDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tailwind-canonical-classes-test-'));
process.env.TAILWIND_CANONICAL_CLASSES_CACHE_DIR = cacheDir;

afterAll(() => fs.rmSync(cacheDir, { recursive: true, force: true }));
