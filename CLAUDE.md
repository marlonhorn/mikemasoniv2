# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Turbopack) at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Architecture

**Next.js 16 App Router**, React 19, TypeScript, Tailwind CSS v4 (via `@tailwindcss/postcss`).

All pages live in `src/app/`, all reusable UI in `src/components/`, shared data in `src/data/content.ts`.

### Data layer

`src/data/content.ts` is the single source of truth for site content:
- `categories` — 4 portfolio categories (Fashion, Power, Celebs, Stills), each with a `coverImage` and `images[]` array used by the portfolio carousel
- `navLinks`, `services` — nav and services section content

When adding new categories or photos, only `content.ts` needs to change.

### Key components

- **`portfolio.tsx`** — the main gallery. Contains a local `CategoryCard` component that auto-slides through `category.images` using `setInterval`, gated by an `IntersectionObserver` so animation only runs when the card is in the viewport. Clicking a card opens `Carousel` at the currently displayed image index.
- **`carousel.tsx`** — fullscreen image overlay. Accepts `initialIndex` to open at a specific image. Clicking the black area (outside the image) closes it; clicking arrows navigates. Supports keyboard (←→ Esc) and touch swipe.
- **`reveal.tsx`** — scroll-triggered fade/slide wrapper using `IntersectionObserver`. Wrap any section content with `<Reveal>` for entrance animation.

### Spacing system

All horizontal section padding uses `px-[10vw]` — this is the single consistent value applied to every section, navbar, and the carousel. Do not introduce `px-6`, `lg:px-12`, or `max-w-*` at the section level.

### Styling conventions

- `body` has `text-transform: uppercase` globally — all text renders uppercase by default
- Font for display headings: `fontFamily: '"Arial Black", Arial, sans-serif', fontWeight: 900`
- Font for body/labels: `Arial, Helvetica, sans-serif` (inherited from body)
- Dark theme: background `#030303`, white text at various opacities (`text-white/60`, `/45`, `/35`)
- `suppressHydrationWarning` is set on `<html>` in `layout.tsx` to suppress browser-extension-caused hydration mismatches

### Media

All images live in `public/media/`. Currently placeholder JPGs — replace with real photos by updating the `images[]` arrays in `content.ts`.
