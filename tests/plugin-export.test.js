import { describe, it, expect } from 'vitest';
import plugin from '../lib/index.js';

describe('plugin export shape', () => {
  it('has meta with name and version', () => {
    expect(plugin.meta).toBeDefined();
    expect(plugin.meta.name).toBe('eslint-plugin-tailwind-canonical-classes');
    expect(typeof plugin.meta.version).toBe('string');
    expect(plugin.meta.version).toMatch(/^\d+\.\d+\.\d+/);
  });

  it('exports the tailwind-canonical-classes rule', () => {
    expect(plugin.rules).toBeDefined();
    expect(plugin.rules['tailwind-canonical-classes']).toBeDefined();
    expect(plugin.rules['tailwind-canonical-classes'].meta).toBeDefined();
    expect(plugin.rules['tailwind-canonical-classes'].create).toBeInstanceOf(Function);
  });

  it('exports flat/recommended config that references the plugin', () => {
    expect(plugin.configs).toBeDefined();
    expect(plugin.configs['flat/recommended']).toBeDefined();

    const flatConfig = plugin.configs['flat/recommended'];
    expect(Array.isArray(flatConfig)).toBe(true);
    expect(flatConfig.length).toBeGreaterThan(0);

    const configEntry = flatConfig[0];
    expect(configEntry.plugins).toBeDefined();
    expect(configEntry.plugins['tailwind-canonical-classes']).toBe(plugin);
    expect(configEntry.rules['tailwind-canonical-classes/tailwind-canonical-classes']).toBe('warn');
  });

  it('exports flat/svelte config with svelte parser', () => {
    expect(plugin.configs['flat/svelte']).toBeDefined();

    const flatConfig = plugin.configs['flat/svelte'];
    expect(Array.isArray(flatConfig)).toBe(true);
    expect(flatConfig.length).toBeGreaterThan(0);

    const configEntry = flatConfig[0];
    expect(configEntry.files).toEqual(['**/*.svelte']);
    expect(configEntry.languageOptions?.parser).toBeDefined();
    expect(configEntry.plugins['tailwind-canonical-classes']).toBe(plugin);
    expect(configEntry.rules['tailwind-canonical-classes/tailwind-canonical-classes']).toBe(
      'warn',
    );
  });

  it('exports flat/vue config with vue parser', () => {
    expect(plugin.configs['flat/vue']).toBeDefined();

    const flatConfig = plugin.configs['flat/vue'];
    expect(Array.isArray(flatConfig)).toBe(true);
    expect(flatConfig.length).toBeGreaterThan(0);

    const configEntry = flatConfig[0];
    expect(configEntry.files).toEqual(['**/*.vue']);
    expect(configEntry.languageOptions?.parser).toBeDefined();
    expect(configEntry.plugins['tailwind-canonical-classes']).toBe(plugin);
    expect(configEntry.rules['tailwind-canonical-classes/tailwind-canonical-classes']).toBe(
      'warn',
    );
  });

  it('exports recommended legacy config', () => {
    const legacyConfig = plugin.configs.recommended;
    expect(legacyConfig).toBeDefined();
    expect(legacyConfig.plugins).toEqual(['tailwind-canonical-classes']);
    expect(legacyConfig.rules['tailwind-canonical-classes/tailwind-canonical-classes']).toBe('warn');
  });
});
