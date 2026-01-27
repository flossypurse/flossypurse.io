# flossypurse.io

personal internet space for cully wakelin

## what is this

a minimal landing page with geometric animations. no linkedin energy, just presence.

built with [astro](https://astro.build) and [unocss](https://unocss.dev). deployed to vercel.

## dev

```bash
bun install
bun run dev
```

visit http://localhost:4321

## build

```bash
bun run build
bun run preview
```

## deploy

pushes to main auto-deploy via vercel

## customizing

**change the text:**
edit `src/components/SimpleHero.astro`

**change animations:**
edit `src/components/GeometricCanvas.astro` - adjust colors, shapes, speeds

**change colors:**
edit `uno.config.ts` - update the brand colors

**add stuff:**
this is intentionally minimal. if you want to add sections, create new components in `src/components/` and add them to `src/pages/index.astro`

## vibe

"i vibe code with AI and get shit done" - built with claude

© 2024 cully wakelin
