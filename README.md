# Module 2 — Tailwind, Global Layout, and Components

**Goal:** Add Tailwind CSS and build a reusable component with a global layout.

## Run
```bash
docker compose up --build
```

## Structure
- `app/layout.js` and `app/globals.css` for global layout and styles.
- `components/Card.js` as a simple reusable UI block.
- `app/page.js`, `app/about/page.js` demonstrate pages and navigation.

## Concepts & Narration
- **Tailwind CSS** integrates via `postcss.config.js` and `tailwind.config.js`.
- **Global CSS** imported once in `app/layout.js`.
- **Components** keep UIs modular and DRY.

## Why these files
- Tailwind tooling files enable utility-first CSS.
- Components demonstrate composition and reusability.