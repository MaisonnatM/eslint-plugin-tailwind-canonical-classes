import fs from "node:fs";
import path from "node:path";

const CACHE_VERSION = "1.0.0";
const CACHE_DIR_NAME = ".cache";
const CACHE_SUBDIR = "tailwind-canonical-classes";
const CACHE_FILE_NAME = "cache.json";

/**
 * Find the project root by looking for node_modules
 * @param {string} startDir - Directory to start searching from
 * @returns {string} Project root path
 */
export function findProjectRoot(startDir) {
  let current = startDir;
  while (current !== path.dirname(current)) {
    if (fs.existsSync(path.join(current, "node_modules"))) {
      return current;
    }
    if (fs.existsSync(path.join(current, "package.json"))) {
      return current;
    }
    current = path.dirname(current);
  }
  return startDir;
}

/**
 * Get the cache file path for a given CSS path
 * @param {string} projectRoot - Project root directory
 * @param {string} cssPath - Absolute path to CSS file
 * @returns {string} Cache file path
 */
export function getCachePath(projectRoot, cssPath) {
  // Use node_modules/.cache/tailwind-canonical-classes/
  const cacheDir = path.join(
    projectRoot,
    "node_modules",
    CACHE_DIR_NAME,
    CACHE_SUBDIR
  );

  // Create a deterministic filename based on CSS path
  const relativeCssPath = path.relative(projectRoot, cssPath);
  const safeFileName = relativeCssPath
    .replace(/[^a-zA-Z0-9]/g, "_")
    .substring(0, 100);

  return path.join(cacheDir, `${safeFileName}_${CACHE_FILE_NAME}`);
}

/**
 * Load cache from disk synchronously
 * @param {string} cachePath - Path to cache file
 * @returns {object|null} Cache data or null if not found/invalid
 */
export function loadCacheSync(cachePath) {
  try {
    if (!fs.existsSync(cachePath)) {
      return null;
    }
    const content = fs.readFileSync(cachePath, "utf-8");
    const cache = JSON.parse(content);

    // Version check
    if (cache.version !== CACHE_VERSION) {
      return null;
    }

    return cache;
  } catch (error) {
    // Cache corrupted or unreadable
    return null;
  }
}

/**
 * Save cache to disk synchronously
 * @param {string} cachePath - Path to cache file
 * @param {object} data - Cache data to save
 */
export function saveCacheSync(cachePath, data) {
  try {
    const cacheDir = path.dirname(cachePath);

    // Create cache directory if it doesn't exist
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    const cacheData = {
      ...data,
      version: CACHE_VERSION,
      timestamp: Date.now(),
    };

    fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2), "utf-8");
  } catch (error) {
    // Failed to save cache, continue without caching
    // This is not fatal - just means next run will rebuild
  }
}

/**
 * Check if cache is still valid
 * @param {object} cache - Cache data
 * @param {string} currentCssHash - Current hash of CSS files
 * @param {number} rootFontSize - Current root font size setting
 * @returns {boolean} True if cache is valid
 */
export function isCacheValid(cache, currentCssHash, rootFontSize) {
  if (!cache) return false;
  if (cache.version !== CACHE_VERSION) return false;
  if (cache.cssHash !== currentCssHash) return false;
  if (cache.rootFontSize !== rootFontSize) return false;
  return true;
}

/**
 * Create an empty cache structure
 * @param {string} cssPath - Path to CSS file
 * @param {string} cssHash - Hash of CSS files
 * @param {number} rootFontSize - Root font size
 * @returns {object} Empty cache structure
 */
export function createEmptyCache(cssPath, cssHash, rootFontSize) {
  return {
    version: CACHE_VERSION,
    cssHash,
    cssPath,
    rootFontSize,
    timestamp: Date.now(),
    mappings: {},
    knownClasses: new Set(),
  };
}
