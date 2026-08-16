# Isaac Engineering Portfolio — v2

A responsive personal engineering portfolio built with Astro.

This revision deliberately separates **completed/applied engineering work** from **current learning and early-stage projects**. FPGA work and the ESP32 thermostat are listed under "Currently Exploring" rather than presented as finished portfolio case studies.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Astro will print the local URL, normally `http://localhost:4321`.

## 3. Customize

Start with:

- `src/data/site.ts` — name, links, experience, engineering work, current focus, and skills
- `src/pages/index.astro` — homepage sections
- `src/styles/global.css` — visual styling
- `public/resume.pdf` — add your real résumé here

Search the project for `REPLACE_ME` to find fields that need your information.

## Current information architecture

1. Hero
2. Professional Experience
3. Selected Engineering Work
4. Currently Exploring
5. About + Skills
6. Contact

The goal is to avoid overstating project maturity. When an FPGA or embedded project reaches the point where you can discuss requirements, architecture, implementation, debugging, verification, and results, it can be promoted into a full case study.

## 4. Build

```bash
npm run build
```

The production site will be written to `dist/`.

## 5. Deploy

You can deploy the static output to GitHub Pages, Netlify, Cloudflare Pages, Vercel, or another static host.

Before deployment, change the `site` field in `astro.config.mjs` from `https://example.com` to your real domain.
