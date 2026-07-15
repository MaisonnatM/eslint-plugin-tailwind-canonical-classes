import { vi } from 'vitest';
import { mockCanonicalizations } from './test-utils.js';

function canonicalizeCandidates(candidates) {
  return candidates.map((candidate) => {
    if (mockCanonicalizations[candidate]) {
      return mockCanonicalizations[candidate];
    }
    return candidate;
  });
}

export const mockCanonicalizeSync = vi.fn((cssContent, basePath, candidates) =>
  canonicalizeCandidates(candidates),
);

export function resetCanonicalizeMock() {
  mockCanonicalizeSync.mockClear();
  mockCanonicalizeSync.mockImplementation((cssContent, basePath, candidates) =>
    canonicalizeCandidates(candidates),
  );
}

vi.mock('synckit', () => ({
  createSyncFn: vi.fn(() => mockCanonicalizeSync),
  runAsWorker: vi.fn(),
}));
