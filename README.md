# Sai Ashwatha Singari — Portfolio

A premium, single-page portfolio built as a product, not a template. Dark theme, choreographed motion, custom cursor, smooth scrolling, and a performance-minded build.

**Live sections:** Hero · About · Experience · Skills · Work · Education · Achievements · Contact

## Tech Stack

- **React 19** + **Vite 7** — fast SPA tooling with code-splitting
- **Tailwind CSS 3** — design system (custom theme, fonts, keyframes)
- **Framer Motion** — entrance, reveal, and micro-interactions
- **GSAP + ScrollTrigger** — scroll-synced timeline animation
- **Lenis** — smooth scrolling
- **react-parallax-tilt** — 3D tilt project cards
- **lucide-react** — icons · **sonner** — toasts

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # lint the project
```

## Project Structure

```
src/
  App.jsx                 # composition + preloader orchestration (sections lazy-loaded)
  main.jsx                # entry
  index.css               # Tailwind layers, global styles, utilities
  data/portfolio.js       # ← ALL content lives here (edit this to update the site)
  hooks/useSmoothScroll.js
  lib/utils.js            # cn() class helper
  components/             # Navbar, Footer, Cursor, Preloader, SmoothScroll,
                          # AnimatedBackground, ScrollProgress, MagneticButton,
                          # Reveal, SectionHeading
  sections/              # Hero, About, Experience, Skills, Projects,
                          # Education, Achievements, Contact
```

## Editing Content

All copy, links, experience, skills, projects, education, and achievements are
defined in **`src/data/portfolio.js`**. Update that one file to change the site.

### Things to personalize

- **Resume:** replace `public/resume.pdf` with your real resume (same filename).
- **LinkedIn:** update the LinkedIn URL in `socials` (`portfolio.js`) with your
  exact profile slug.
- **Project links:** the project `links.code` / `links.live` currently point to
  the GitHub profile — swap in real repo/demo URLs when available.

## Design Notes

- Fully responsive, dark, accessible (reduced-motion aware — animations and the
  custom cursor gracefully disable for users who prefer reduced motion).
- Vendor code is split into cacheable chunks (`react`, `motion`, `gsap`, `ui`)
  and below-the-fold sections are lazy-loaded for a fast initial paint.

## Deployment

Configured for Vercel (`vercel.json`). Any static host works — deploy the
`dist/` folder produced by `npm run build`.
