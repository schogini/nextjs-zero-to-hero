# Module 1 — Hello Next.js (App Router)

**Goal:** Run a minimal Next.js app using the App Router.

## How to run
```bash
docker compose up --build
# open http://localhost:3000
```

## What you’ll see
- `app/layout.js`: Root HTML shell used by all routes.
- `app/page.js`: The default route at `/`.
- `next.config.mjs`: Next.js configuration.
- `Dockerfile` and `docker-compose.yml`: Containerized dev environment.
- `package.json`: Scripts and dependencies.

## Narration (Concepts)
- **App Router:** The `app/` directory uses server-first components and file-system routing.
- **Layout:** Code in `app/layout.js` wraps every page—put global UI here.
- **Hot Reload:** Changes to files refresh the browser without full reload.

## Why these files
- `layout.js` ensures consistent HTML and shared UI.
- `page.js` is a route: `app/page.js` → `/`.
- `Dockerfile` + `docker-compose.yml` provide a reproducible environment.