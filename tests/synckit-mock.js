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

export const mockCanonicalizeSync = vi.fn((cssPath, candidates) => ({
  canonical: canonicalizeCandidates(candidates),
  files: [cssPath],
}));

export function resetCanonicalizeMock() {
  mockCanonicalizeSync.mockClear();
  mockCanonicalizeSync.mockImplementation((cssPath, candidates) => ({
    canonical: canonicalizeCandidates(candidates),
    files: [cssPath],
  }));
}

vi.mock('synckit', () => ({
  createSyncFn: vi.fn(() => mockCanonicalizeSync),
  runAsWorker: vi.fn(),
}));
