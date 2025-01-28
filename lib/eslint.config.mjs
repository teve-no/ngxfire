import nx from '@nx/eslint-plugin';
import baseConfig from '../eslint.base.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'tv',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'tv',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/pipe-prefix': ['error', { prefixes: ['tv'] }]
    }
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {}
  },
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        { ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'] },
      ],
    },
    languageOptions: { parser: await import('jsonc-eslint-parser') }
  }
];
