import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// Mocked canonicalizations must never reach the cache that real-worker tests read.
process.env.TAILWIND_CANONICAL_CLASSES_CACHE_DIR = fs.mkdtempSync(
  path.join(os.tmpdir(), 'tailwind-canonical-classes-test-'),
);
