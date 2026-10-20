import fs from 'node:fs';

/** Cheap change detector for a file set: equal stamps mean no file was edited, added, or removed. */
export function statStamp(files: string[]): string {
  return files
    .map((file) => {
      const stat = fs.statSync(file, { throwIfNoEntry: false });
      return stat ? `${stat.mtimeMs}:${stat.size}` : '-';
    })
    .join('|');
}
