export function splitClasses(className: string): string[] {
  return className.trim().split(/\s+/).filter(Boolean);
}

export function joinClasses(classes: string[]): string {
  return classes.join(' ');
}

export function getQuoteChar(source: string, start: number, end: number): string {
  const quoteChars = ['"', "'", '`'];
  for (const char of quoteChars) {
    if (source[start] === char && source[end - 1] === char) {
      return char;
    }
  }
  return '"';
}
