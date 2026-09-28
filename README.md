# Shahd Tarraf — Personal Portfolio

Professional portfolio website for **Shahd Tarraf**, AI Engineer & Python Developer. All project pages are generated from **public GitHub repositories** under [github.com/shahdtarraf](https://github.com/shahdtarraf). Invented projects, fake demos, and unverified metrics are not included.

## Features

- Home, project grid, and `/projects/:slug` detail pages
- Search by title, description, technology, and category
- Category filters (only categories that contain projects)
- Featured section with documented selection criteria
- English + Arabic with proper RTL
- Light / dark mode persisted in `localStorage`
- Semantic HTML, keyboard focus styles, and alt text
- Verified live API link for FODWA (health JSON)
- Real training plots copied from GitHub (ocular, compression, ECG)

## Tech stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- React Router

## Architecture

```
Browser
  → React routes (/ , /projects , /projects/:slug)
    → UI components
      → src/data/projects.ts (verified catalog)
        → GitHub repository URLs
```

The site does **not** call the GitHub API at runtime. Content is stored locally so the site stays fast if GitHub is slow.

## Project structure

```
src/
  components/     Navbar, Hero, About, Skills, cards, filters, contact
  context/        Theme and locale
  data/           projects.ts, profile.ts, skills.ts
  i18n/           UI strings (EN/AR)
  pages/          Home, project list, project details
  types/          Project types
scripts/
  refresh-github.mjs   Optional metadata snapshot
public/media/          Avatar and verified repository plots
```

## Installation

```bash
cd shahd-tarraf-portfolio
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deployment

### Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output: `dist`.
4. `vercel.json` already rewrites routes to `index.html`.

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. `public/_redirects` is copied into `dist` for SPA routing.

### GitHub Pages

Use a HashRouter or add a `404.html` copy of `index.html`. This project uses BrowserRouter, so Vercel/Netlify are simpler.

## How to update projects

1. Run `npm run refresh-github` to write `src/data/github-meta.json` (names, languages, dates only).
2. Open each repository on GitHub. Read the README, `requirements.txt`, and file tree.
3. Edit `src/data/projects.ts`. Do not invent demos, screenshots, employers, or metrics.
4. If a fact is unknown, write `[NEEDS VERIFICATION]` in `notes`.

## How to add a new GitHub project

1. Confirm the repository exists at `https://github.com/shahdtarraf/<repo>`.
2. Copy an existing object in `src/data/projects.ts`.
3. Fill fields only from files you can open.
4. Set `featured: true` only if the project is documented and technically representative.
5. Add a screenshot only if the image file exists in the repo (or copy it into `public/media/`).
6. Add `demo` only after opening the URL and confirming it works.

## Source of truth

- GitHub user: `shahdtarraf`
- Public repositories discovered: **34**
- Profile README repository excluded from the project grid: `shahdtarraf/shahdtarraf`
- EduPilot AI: **not found** on this account
- Contact email / LinkedIn / Telegram: **not published** on the GitHub profile
