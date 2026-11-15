# Kiran Reddy Studio – Portfolio

The portfolio website of Kiran Reddy Studio: who I am, what I build, my projects and how to reach me.

**Built with:** React, TypeScript, Vite, Tailwind CSS · light and dark themes · mobile-first.

## Sections

- **Home** – introduction and "available for freelance work"
- **What I do** – the kinds of websites I build
- **Skills** – frontend, backend, tools and delivery
- **Work** – selected projects (Green Card Overseas, Calculator)
- **Experience** – my journey so far
- **Contact** – email, phone/WhatsApp and profiles

## Edit my details

Everything about me is in **one file: `src/data/profile.ts`**.
Anything still written as `'[SOMETHING]'` is hidden on the site until it is filled in
(email, phone, LinkedIn, photo, CV, city, college, project links).

- Photo: put it in `public/` (e.g. `public/me.jpg`) and set `photo: '/me.jpg'`.
- CV: put the PDF in `public/` and set `resume: '/Kiran-Reddy-Resume.pdf'`.
- Project screenshots go in `public/projects/`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy (Vercel)

Import this GitHub repo at vercel.com → **Add New… → Project**. Vercel detects Vite automatically
(build: `npm run build`, output: `dist`). Every push to `main` redeploys the site.
