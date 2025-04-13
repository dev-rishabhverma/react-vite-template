# 🚀 Base React Template

This repository serves as a base template for creating React projects. It provides a foundational setup with modern tools and configurations, designed to be extended for specific use cases.

## 🎯 Purpose & Usage

This template is intended to be inherited by other repositories, these repositories could be of small scale or even large scale applications.

This repo would be a template repository, you can just create a new repo by using this template.

## ✨ Features

- **Build Tool**: Vite (v4.3) for fast builds and development.
- **UI Library**: React (v19).
- **Package Manager**: pnpm for efficient dependency management.
- **Linting**: ESLint with plugins for accessibility, import sorting, and React-specific rules.
- **Formatting**: Prettier for consistent code style.
- **TypeScript**: Included for type safety.
- **VSCode Settings**: Pre-configured `.vscode/settings.json` to enforce consistent editor behavior, such as formatting and linting on save and proper TypeScript integration.

## 🛠️ Tooling Highlights

- **Node.js**: Requires Node.js v22.
- **Husky & Lint-Staged**: Pre-commit, Pre-push hooks run ESLint for linting and Prettier for formatting before any commit.
- **commitlint**: Ensure proper commit conventions integrated with husky, see commitlint.config.js file for more.
