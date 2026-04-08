# Contributing to airules

Thank you for your interest in contributing to airules! This document provides guidelines for contributions.

## Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature` (from `dev`)
3. Install dependencies: `npm install`
4. Make your changes
5. Run tests: `npm test`
6. Run linter: `npm run lint`
7. Commit using Conventional Commits: `git commit -m "feat: add my feature"`
8. Push and open a PR against `dev`

## Branch Strategy

- `main` — stable, tagged releases only
- `dev` — development branch, PRs merged here
- `feat/*` — feature branches off `dev`
- `fix/*` — fix branches off `dev`

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation only
chore: build, ci, tooling
refactor: code change that neither fixes a bug nor adds a feature
test: adding or updating tests
style: formatting, no code change
perf: performance improvement
```

## Code Standards

- **ESM only** — No CommonJS
- **Biome** for lint + format (not ESLint + Prettier)
- **Named exports** — No default exports (except CLI entry point)
- **No `any`** — Use `unknown` + type narrowing
- **Tests required** — Every module must have tests
- **TypeScript strict mode** — No type-check errors

## Running Tests

```bash
npm test          # Run tests
npm run test:watch # Watch mode
npm run test:coverage # With coverage
```

## Linting & Formatting

```bash
npm run lint       # Check with Biome
npm run lint:fix   # Auto-fix
npm run format     # Format code
```

## Welcome Contributions

- **New stack templates** — Add support for more frameworks
- **Generator improvements** — Better output for specific AI tools
- **Bug fixes** — Always welcome
- **Documentation** — Better guides and examples
- **Community templates** — Share your `.airules.yml` setups
