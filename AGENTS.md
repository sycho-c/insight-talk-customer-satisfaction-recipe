# Repository Guidelines

## Project Structure & Module Organization

- `index.html` is the Vite entry HTML.
- `src/` holds the application code:
  - `src/main.js` boots the app and wires UI.
  - `src/counter.js` contains a small example module.
  - `src/style.css` contains global styles.
  - `src/javascript.svg` is a local asset import.
- `public/` contains static assets served as-is (for example `public/vite.svg`).

## Build, Test, and Development Commands

- `npm run dev` starts the Vite dev server for local development.
- `npm run build` produces a production build in `dist/`.
- `npm run preview` serves the built output locally for verification.

## Coding Style & Naming Conventions

- Language: vanilla JavaScript with ES modules (`type: "module"`).
- Indentation: 2 spaces; follow the existing template literals and CSS formatting.
- Naming: use lowerCamelCase for variables/functions and kebab-case for CSS classes.
- No formatter or linter is configured; keep changes consistent with existing files.

## Testing Guidelines

- No test framework or test directory is configured in this repo.
- If you add tests, document the chosen framework and commands here (for example, `vitest` and `npm run test`), and colocate tests near `src/` or in a dedicated `tests/` directory.

## Commit & Pull Request Guidelines

- Git history is not available in this workspace, so no commit convention can be inferred.
- If unsure, use concise, imperative commit messages (for example, `Add hero copy`) and keep PRs focused.
- PRs should include: a brief description, screenshots for UI changes, and a note on how to verify (commands or steps).

## Configuration Tips

- Vite uses `index.html` as the entry point; update it only if you need new root-level script/style includes.
- Asset imports in JS should use relative paths under `src/` or absolute paths to `public/` (for example, `/vite.svg`).
