# Dr. Rahmira Rufus — Personal Resume Website

Single-page personal resume website for Dr. Rahmira Rufus, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Live URL

- Live site: **https://temporary-prompt-iron-58bfmkr.vercel.app/**
  (anonymous Vercel deployment — works now; expires ~60 min after last deploy
  unless the owner claims it, see "Deployment status" below)
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

## Deployment status

The site is live on a **temporary** Vercel deployment (anonymous, no account):
https://temporary-prompt-iron-58bfmkr.vercel.app/

It can be redeployed at any time from this repo with:

```bash
npx vercel deploy --temporary --yes
```

**To make the URL permanent** (required by the PRD), an owner with a Vercel
account must claim the deployment or connect the GitHub repo to Vercel. The
one-click claim link (works once, do not share publicly):
`https://vercel.com/claim-deployment?code=df12c432-3efe-46be-be42-37fe75d0dc62`

After claiming, connect `ArtekACA/aiworkshop` in the Vercel dashboard so every
push triggers a build, then update this README's live URL.

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