import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.js'],
    setupFiles: ['tests/setup-cache-dir.js'],
    timeout: 10000,
  },
  esbuild: {
    target: 'node18',
  },
});

