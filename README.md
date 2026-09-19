# Faro

A small public directory of selected projects and recommendations.

## Development

Requires Bun.

```sh
bun install
bun run dev
bun run build
```

Project data lives in `src/data/projects.ts`.

Pushes to `main` build and deploy the site to GitHub Pages through `.github/workflows/deploy.yml`.
