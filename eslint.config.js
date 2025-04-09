import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import jsonc from 'eslint-plugin-jsonc'
import prettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import jsoncParser from 'jsonc-eslint-parser'
import tseslint from 'typescript-eslint'

export default defineConfig([
  // JS base
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },

  // Global browser/env support
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },

  // TypeScript recommended rules
  tseslint.configs.recommended,

  // React recommended (flat config style)
  pluginReact.configs.flat.recommended,

  // Prettier formatting integration
  prettierConfig,

  // React, Prettier, and Import Sort plugin config
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // React
      'react/react-in-jsx-scope': 'off',

      // Prettier
      'prettier/prettier': 'error',

      // Import sorting
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // JSON/JSONC formatting
  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc,
    },
    rules: {
      'jsonc/sort-keys': 'error',
      'jsonc/indent': ['error', 2],
      'jsonc/quotes': ['error', 'double'],
      'jsonc/quote-props': ['error', 'always'],
      'jsonc/comma-dangle': ['error', 'never'],
    },
  },
])
