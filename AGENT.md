# flossypurse.io

Personal landing page for Cully Wakelin — minimal presence with geometric animations.

## Status

Live, deployed. Stable — occasional content tweaks.

## Stack

- **Framework**: Astro 4
- **Styling**: UnoCSS
- **Runtime**: Bun
- **Language**: TypeScript

## Key Paths

| Path | Contents |
|------|----------|
| `src/pages/index.astro` | Single page entry |
| `src/components/` | All UI components (hero, nav, footer, canvas, etc.) |
| `src/components/SimpleHero.astro` | Main hero text — edit here to change copy |
| `src/components/GeometricCanvas.astro` | Animated geometric background |
| `src/layouts/` | Page layouts |
| `src/styles/` | Global styles |
| `uno.config.ts` | UnoCSS config, brand colors |
| `astro.config.mjs` | Astro config |
| `public/` | Static assets (favicon) |

## Run

```bash
bun install
bun run dev
# http://localhost:4321
```

## Build

```bash
bun run build
bun run preview
```

## Deploy

- **Platform**: Vercel
- **Domain**: flossypurse.io
- **Auto-deploy**: pushes to `main` via GitHub (`flossypurse/flossypurse.io`)
- **Vercel CLI linking**: not linked (deploys via GitHub integration, not CLI)

## Rules

1. Use Bun, not npm/yarn/node.
2. This is intentionally minimal — don't add complexity without being asked.
3. The site is public. No private data should appear here.

## Visibility

**PUBLIC** — deployed at flossypurse.io.

## Privacy

`.privacy` at the project root declares **PUBLIC**. Trip-wires:

- Workspace pre-commit hook (gitleaks + workspace-crumbs check) runs on every commit. Wired via `core.hooksPath`.
- CI workflow at `.github/workflows/privacy.yml` enforces the same on push and PR.

Workspace contributors: full model and pre-publish checklist live in `PRIVACY.md` at the workspace root.

## Architecture Notes

Single-page Astro site. No SSR, no API routes — pure static build. The geometric canvas is a `<canvas>` animation in an Astro component. UnoCSS handles all styling via utility classes.
