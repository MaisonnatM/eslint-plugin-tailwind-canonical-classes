import { runAsWorker } from 'synckit';
import { __unstable__loadDesignSystem } from '@tailwindcss/node';

interface DesignSystem {
  canonicalizeCandidates(candidates: string[], options?: { rem?: number }): string[];
}

const designSystems = new Map<string, { cssContent: string; designSystem: DesignSystem }>();

async function canonicalizeInWorker(
  cssPath: string,
  cssContent: string,
  basePath: string,
  candidates: string[],
  options: { rem?: number } = {},
): Promise<string[]> {
  let entry = designSystems.get(cssPath);
  if (!entry || entry.cssContent !== cssContent) {
    entry = {
      cssContent,
      designSystem: await __unstable__loadDesignSystem(cssContent, { base: basePath }),
    };
    designSystems.set(cssPath, entry);
  }

  // canonicalizeCandidates dedupes its output, so one call per candidate keeps indexes aligned.
  return candidates.map(
    (candidate) => entry.designSystem.canonicalizeCandidates([candidate], options)[0] ?? candidate,
  );
}

runAsWorker(canonicalizeInWorker);
