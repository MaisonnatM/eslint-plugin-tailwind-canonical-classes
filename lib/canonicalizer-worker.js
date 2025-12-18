#!/usr/bin/env node
/**
 * Canonicalizer Worker
 *
 * This script runs in a child process spawned via execSync.
 * It handles the async Tailwind API call synchronously from the parent's perspective.
 *
 * Input (JSON via stdin):
 * {
 *   cssPath: string,        // Absolute path to CSS file
 *   rootFontSize: number,   // Root font size for rem calculations
 *   classNames: string[],   // Classes to canonicalize
 *   buildFullCache?: boolean // If true, return all valid classes
 * }
 *
 * Output (JSON via stdout):
 * {
 *   mappings: { [original: string]: canonical: string },
 *   cssHash: string,
 *   knownClasses?: string[]  // Only if buildFullCache is true
 * }
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";

async function main() {
  // We need to import @tailwindcss/node from the PROJECT's node_modules,
  // not from the plugin's node_modules. This ensures we use the same
  // Tailwind version and configuration as the project.
  const projectRequire = createRequire(path.join(process.cwd(), "package.json"));
  const { __unstable__loadDesignSystem } = projectRequire("@tailwindcss/node");
  // Read input from stdin
  let inputData = "";

  // Read all of stdin - use process.stdin which works cross-platform
  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  inputData = Buffer.concat(chunks).toString("utf-8");

  if (!inputData.trim()) {
    console.log(JSON.stringify({ error: "No input provided" }));
    process.exit(1);
  }

  let input;
  try {
    input = JSON.parse(inputData);
  } catch (e) {
    console.log(JSON.stringify({ error: `Invalid JSON input: ${e.message}` }));
    process.exit(1);
  }

  const { cssPath, rootFontSize = 16, classNames = [], buildFullCache = false } = input;

  if (!cssPath) {
    console.log(JSON.stringify({ error: "cssPath is required" }));
    process.exit(1);
  }

  // Read CSS file
  let cssContent;
  try {
    cssContent = fs.readFileSync(cssPath, "utf-8");
  } catch (e) {
    console.log(JSON.stringify({ error: `Failed to read CSS file: ${e.message}` }));
    process.exit(1);
  }

  // Compute CSS hash
  const cssHash = crypto.createHash("sha256").update(cssContent).digest("hex");

  // Load design system (this is the async part)
  let designSystem;
  try {
    designSystem = await __unstable__loadDesignSystem(cssContent, {
      base: path.dirname(cssPath),
    });
  } catch (e) {
    console.log(JSON.stringify({ error: `Failed to load design system: ${e.message}` }));
    process.exit(1);
  }

  // Build mappings for provided class names
  const mappings = {};

  // If building full cache, pre-generate common arbitrary value patterns
  const classesToCheck = [...classNames];
  if (buildFullCache) {
    // Generate common px values (1-500px covers most use cases)
    const prefixes = ['w', 'h', 'p', 'px', 'py', 'pt', 'pb', 'pl', 'pr', 'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr', 'gap', 'gap-x', 'gap-y', 'top', 'right', 'bottom', 'left', 'inset', 'text', 'rounded', 'border', 'max-w', 'max-h', 'min-w', 'min-h'];
    const responsivePrefixes = ['', 'sm:', 'md:', 'lg:', 'xl:', '2xl:'];

    for (const resp of responsivePrefixes) {
      for (const prefix of prefixes) {
        // Common pixel values
        for (let px = 1; px <= 500; px++) {
          classesToCheck.push(`${resp}${prefix}-[${px}px]`);
        }
        // Common rem values
        for (let rem = 0.25; rem <= 20; rem += 0.25) {
          classesToCheck.push(`${resp}${prefix}-[${rem}rem]`);
        }
      }
    }
  }

  for (const className of classesToCheck) {
    try {
      const canonicalized = designSystem.canonicalizeCandidates([className], {
        rem: rootFontSize,
      });

      if (canonicalized && canonicalized[0] && canonicalized[0] !== className) {
        mappings[className] = canonicalized[0];
      }
    } catch (e) {
      // Invalid class, skip
    }
  }

  // Build response
  const response = {
    mappings,
    cssHash,
  };

  // If building full cache, include all known classes
  if (buildFullCache) {
    try {
      // Get class list returns array of [className, metadata] tuples
      const classList = designSystem.getClassList();
      // Extract just the class names (first element of each tuple)
      const knownClasses = classList.map((entry) => {
        if (Array.isArray(entry)) {
          return entry[0]; // [className, metadata] tuple
        }
        if (typeof entry === "string") {
          return entry;
        }
        return entry.name || String(entry);
      });
      response.knownClasses = knownClasses;
    } catch (e) {
      // Failed to get class list, continue without it
      response.knownClasses = [];
    }
  }

  console.log(JSON.stringify(response));
}

main().catch((e) => {
  console.log(JSON.stringify({ error: e.message }));
  process.exit(1);
});
