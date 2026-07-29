## Spotless Spaces — Next.js site

This is the Spotless Spaces marketing site, converted from static HTML into a Next.js (App Router) project.

### Structure
- `app/page.js` — assembles all page sections
- `app/components/` — one component per section (Header, Hero, Values, WhatWeOffer, TypesOfClean, QuoteBuilder, Pricing, Walkthrough, Difference, Reviews, FAQ, FinalCTA, Careers, Footer)
- `app/components/SiteScripts.jsx` — client-side interactivity (mobile menu, FAQ accordion, quote builder, walkthrough form, scroll-reveal animations)
- `app/layout.js` — fonts, SEO metadata, Open Graph/Twitter tags, JSON-LD structured data, Tidio live chat
- `app/sitemap.js` / `app/robots.js` — auto-generated `sitemap.xml` and `robots.txt`
- `public/logo.jpg` — site logo

### Local development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Production build
```bash
npm run build
npm run start
```

### Deploying to Netlify
1. Push this project to a GitHub/GitLab/Bitbucket repo (or drag-and-drop the folder into Netlify's deploy UI).
2. In Netlify, choose "Import an existing project" and connect the repo.
3. Netlify will auto-detect Next.js. Build command: `npm run build`. The included `netlify.toml` already specifies the official `@netlify/plugin-nextjs` plugin, so no extra configuration is needed.
4. Deploy. Netlify handles SSR/ISR for Next.js automatically via that plugin.

### Before going live
- Update `siteUrl` in `app/layout.js`, `app/sitemap.js`, and `app/robots.js` to your real domain once it's live on Netlify (currently set to `https://www.spotlessspaces-cleaning.com`).
- Double check the Tidio chat script in `app/layout.js` has your correct Public Key.
