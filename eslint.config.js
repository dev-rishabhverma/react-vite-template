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
  // ✅ Base JS/TS config
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },

  // 🌐 Global browser env support (window, document, etc.)
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },

  // 🧠 TypeScript recommended rules
  tseslint.configs.recommended,

  // ⚛️ React recommended (flat config style)
  pluginReact.configs.flat.recommended,

  // 🧹 Disable ESLint formatting that conflicts with Prettier
  prettierConfig,

  // 🎯 Custom rules and plugins
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // ⚛️ REACT RULES
      // No need to import React in scope (React 17+)
      'react/react-in-jsx-scope': 'off',
      // Disable PropTypes (using TypeScript instead)
      'react/prop-types': 'off',
      // Don’t enforce display name on components
      'react/display-name': 'off',
      // Warn on links with target="_blank" and no rel="noopener"
      'react/jsx-no-target-blank': 'warn',
      // Warn for unescaped characters like < or >
      'react/no-unescaped-entities': 'warn',

      // 💅 PRETTIER RULES
      // Treat Prettier violations as errors
      'prettier/prettier': 'error',

      // 📦 IMPORT SORTING RULES
      // Sort import statements alphabetically/grouped
      'simple-import-sort/imports': 'warn',
      // Sort export statements
      'simple-import-sort/exports': 'warn',

      // 🧼 GENERAL JS/TS RULES
      // Allow console.warn and console.error only
      // e.g., console.log() => warn
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // Ignore unused variables prefixed with _
      // e.g., (_unused) => OK
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // Same for TS unused vars
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      // Warn when using `any` type
      '@typescript-eslint/no-explicit-any': 'warn',
      // Don’t enforce explicit return type on functions
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Warn on empty functions (except arrow funcs or placeholder handlers)
      '@typescript-eslint/no-empty-function': 'warn',
      // Allow empty catch blocks but warn otherwise
      'no-empty': ['warn', { allowEmptyCatch: true }],
      // Allow reassignment of function parameters, but not their props
      'no-param-reassign': ['warn', { props: false }],
      // Disable unresolved import errors (can be false positives in monorepos)
      'import/no-unresolved': 'off',
      // Allow named exports even if only one export is present
      'import/prefer-default-export': 'off',
    },

    // Auto-detect React version
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // 🧾 JSON/JSONC formatting rules
  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc,
    },
    rules: {
      // Sort object keys alphabetically
      'jsonc/sort-keys': 'error',
      // Enforce 2-space indentation
      'jsonc/indent': ['error', 2],
      // Enforce double quotes
      'jsonc/quotes': ['error', 'double'],
      // Always quote property names
      'jsonc/quote-props': ['error', 'always'],
      // No trailing commas
      'jsonc/comma-dangle': ['error', 'never'],
    },
  },
])
