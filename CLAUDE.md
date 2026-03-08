# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack on http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm run start    # Start production server
```

There are no tests configured in this project.

## Architecture

This is a **Next.js 15 personal portfolio/blog site** using the App Router, React 19, TypeScript, and Tailwind CSS v4. It is a replica of https://spotlight.tailwindui.com.

### Routing

All 6 routes are fully implemented and statically generated:

- `/` — Home page with hero, photo carousel, article feed, work history
- `/about` — Two-column bio page with portrait and social links
- `/articles` — Article listing page
- `/articles/[slug]` — Individual article pages (static params from `src/lib/articles.ts`)
- `/projects` — Project grid
- `/speaking` — Conferences and podcasts sections
- `/uses` — Tools and gear list

### Data Layer (`src/lib/`)

All content is static TypeScript modules — no CMS or database:

- `articles.ts` — 3 articles; `getArticle(slug)` helper
- `projects.ts` — 5 projects with gradient colors and links
- `speaking.ts` — `conferences` and `podcasts` arrays
- `uses.ts` — `usesSections` array with nested items

### Layout

[src/app/layout.tsx](src/app/layout.tsx) wraps all pages with `ThemeProvider` → `Header` → `{children}` → `Footer`.

CSS custom properties in [src/app/globals.css](src/app/globals.css) drive the sticky header and avatar scroll animation: `--header-position`, `--header-height`, `--header-mb`, `--content-offset`, `--avatar-image-transform`, `--avatar-border-transform`, `--avatar-border-opacity`.

### Components (`src/app/(components)/`)

- **ThemeProvider** — `'use client'`. Manages dark/light theme via a `dark` class on `<html>`, persisted to `localStorage`. Exposes `useTheme()` context hook.
- **Header** — `'use client'`. Uses `usePathname()` to detect home page (renders full-size avatar section on `/`, small avatar link on all other pages). Contains desktop nav with active-page indicator, mobile menu (state-driven overlay), and dark mode toggle wired to `useTheme()`.
- **Carousel** — CSS gradient placeholder divs with alternating rotations (no real images required).
- **Main** — Reads articles from `src/lib/articles.ts`. Renders article feed (left) and newsletter form + work history (right).
- **Footer** — Uses Next.js `<Link>` for nav links; copyright year is dynamic.

### Dark Mode

Class-based strategy: `dark` class on `<html>`. ThemeProvider reads `localStorage` on mount, falls back to `prefers-color-scheme`. All components use Tailwind `dark:` variants.

### Images

No real images — all image placeholders are CSS gradient `<div>` elements. To add real images, place them in `public/` and update `carousel.tsx`, the avatar in `header.tsx`, and the portrait in `about/page.tsx`.

### String Literals

All data files in `src/lib/` use **double-quoted strings** for any text containing apostrophes. Single-quoted strings with curly apostrophes (`'`) cause SWC parser errors.
