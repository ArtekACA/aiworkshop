# Dr. Rahmira Rufus — Personal Resume Website

Single-page personal resume website for Dr. Rahmira Rufus, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Live URL

- Live site: **https://aiworkshop-r4.pub.agentplace.cloud/** (final URL TBD on deploy)
- Repository: https://github.com/ArtekACA/aiworkshop

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

## Features

- Static, server-rendered single page (no client-side data fetching)
- Semantic HTML with a clear heading hierarchy
- Light/dark theme toggle (defaults to the visitor's system preference)
- Responsive layout — readable on phones and laptops
- Minimal dependencies: Next.js, React, Tailwind CSS only

## What was deliberately skipped

- **Vercel deployment** — no Vercel token or account was available in this
  workspace, so the site was published via the ops page host instead. The code
  is ready for a one-click Vercel import from the GitHub repo.
- **Contact form** — phase 2 per the PRD outline; out of scope for this build.
- **LinkedIn / website links** — the resume lists "LinkedIn" and "Website"
  without URLs, so no links point to those.
- **Address & phone** — omitted for privacy (see PRD section 4). Only city and
  state are shown.
- **Business email** (`rrufus@awt.ltd`) — omitted; only the resume's personal
  email is shown.