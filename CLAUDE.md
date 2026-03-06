# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

Single-page React portfolio with a vertical scroll layout. All sections use anchor-based navigation (`#home`, `#skills`, `#projects`, `#contact`).

**Page structure** (`src/App.jsx`): `Header` (fixed nav) + `Hero` + `Skills` + `Projects` + `Contact` (which also contains the footer).

**Component responsibilities:**
- `Header.jsx` — Fixed top nav with mobile hamburger menu
- `Hero.jsx` — Landing section with profile card, social links, CTA buttons
- `Skills.jsx` — Skill categories grid + AWS certification highlight
- `Projects.jsx` — Project cards grid; project data is hardcoded as an array in the component
- `Contact.jsx` — Contact CTA section + footer

**Styling:** Tailwind CSS v3 with custom theme extensions in `tailwind.config.js`:
- Colors: `primary` (#14b8a6 teal), `secondary` (#0d9488), `dark` (#1f2937)
- Custom utilities in `src/index.css`: `.text-gradient` (teal gradient text), `.glass-effect` (frosted glass for header)

**Animations:** Framer Motion is used throughout — all sections animate in via `whileInView` with `viewport={{ once: true }}`. Entry animations use `initial`/`animate` on mount.

**Icons:** `react-icons` (both `fi` Feather icons and `fa`/`bi`/`tb` icon sets are used).

**Assets:** `src/assets/profile.png` — profile photo imported directly in `Hero.jsx`.

**PDFs:** Two resume PDFs at the project root (`AI_engineer_resume.pdf`, `rithvik_ramdas_ds.pdf`) — not currently linked in the UI.

## Content Updates

Project data lives as a hardcoded array in `Projects.jsx:6`. Skills data lives in `Skills.jsx:14`. Personal info (name, location, social links, email) is hardcoded directly in `Hero.jsx` and `Contact.jsx`.
