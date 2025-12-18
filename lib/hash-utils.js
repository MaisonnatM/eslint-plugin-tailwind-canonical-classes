import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * Compute SHA256 hash of a file's contents
 * @param {string} filePath - Absolute path to the file
 * @returns {string} Hex-encoded hash
 */
export function computeFileHash(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return crypto.createHash("sha256").update(content).digest("hex");
  } catch (error) {
    return "";
  }
}

/**
 * Recursively compute hash of CSS file and all its @import dependencies
 * @param {string} cssPath - Absolute path to the CSS file
 * @returns {string} Combined hash of all files
 */
export function computeFullCssHash(cssPath) {
  const visited = new Set();
  const hashes = [];

  function processFile(filePath) {
    const normalizedPath = path.normalize(filePath);
    if (visited.has(normalizedPath)) return;
    visited.add(normalizedPath);

    try {
      const content = fs.readFileSync(filePath, "utf-8");
      hashes.push(crypto.createHash("sha256").update(content).digest("hex"));

      // Parse @import statements (handles both url() and string imports)
      // Matches: @import 'file.css', @import "file.css", @import url('file.css')
      const importRegex = /@import\s+(?:url\s*\(\s*)?['"]([^'"]+)['"]\s*\)?/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];

        // Skip package imports (tailwindcss, tw-animate-css, etc.)
        if (
          !importPath.startsWith(".") &&
          !importPath.startsWith("/") &&
          !path.isAbsolute(importPath)
        ) {
          continue;
        }

        const resolvedImport = path.resolve(path.dirname(filePath), importPath);
        if (fs.existsSync(resolvedImport)) {
          processFile(resolvedImport);
        }
      }
    } catch (error) {
      // File doesn't exist or can't be read, skip
    }
  }

  processFile(cssPath);

  // Combine all hashes into one
  return crypto.createHash("sha256").update(hashes.join(":")).digest("hex");
}
