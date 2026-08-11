# Leen Kharraz — Software Engineering Portfolio

A single-page portfolio site presenting Leen Kharraz's software engineering projects, technical experience, and motorsport scrutineering background.

**Live Portfolio:** https://leenkharraz.github.io/LeenKharrazPortfolio/

## About the Portfolio

The site is built around three sections — About, Experience, and Projects — reached from a fixed top navigation bar. It combines a short personal introduction with an interactive, sortable experience timeline and a categorized project showcase, and it includes a dedicated race-timeline panel documenting motorsport scrutineering work.

## Featured Areas

- **About** — background, university, languages, and a technical/tools skills summary.
- **Experience** — a sortable (newest/oldest) timeline of internships, volunteering roles, and university club leadership positions (e.g. AI Club, Google Developer Group on Campus, Drone Club, Electronic Games and VR Club), each expandable for a description and top skills.
- **Motorsport / Scrutineering** — a dedicated race-timeline panel, revealed from the Scrutineer Marshal experience card, listing motorsport events (Formula E, F1, F4, WRC, GT, Saudi Arabia Rally) with event photos.
- **Projects** — a categorized showcase split into Mobile Apps and Web Projects, each rendered as an interactive device mockup (phone or browser frame).

## Selected Projects

- **Schoolo** — a school search and comparison concept for parents in Saudi Arabia, organizing fees, curriculum, and admissions information.
- **Lume** — a Figma UI/UX prototype for an event-planning mobile app.
- **F1 Driver Lookup** — a web app that queries the Ergast API to look up Formula 1 drivers by season.
- **Card Magic** — a collaborative group project for creating and customizing digital greeting cards.
- **Personal Portfolio** and **Portfolio Redesign** — earlier portfolio iterations, linked from the site as prior work.

## Technical Highlights

The site is built with plain HTML5, CSS3, and vanilla JavaScript (ES6+) — no framework or build tooling. Notable implementation details:

- Content-driven rendering: the Experience timeline and Projects showcase are generated from JavaScript data arrays (`EXPERIENCE`, `PROJECTS`, `MOTORSPORT_RACES` in `js/main.js`), so content updates don't require touching the markup.
- `IntersectionObserver` for scroll-triggered reveal animations, with `prefers-reduced-motion` respected to disable them for users who request it.
- CSS custom properties for a themed color system, plus custom SVG illustrations (a race car graphic used in the motorsport timeline).
- Google Fonts (Archivo, Figtree, Space Mono) loaded via `<link>` with `preconnect`.

## Responsive Experience

The layout is responsive via CSS Grid/Flexbox and a series of breakpoints in `css/style.css` (e.g. `min-width: 640px`, `768px`, `900px`, `1024px`) that adjust the About/skills grid, project showcase grid, and hero layout for larger screens. Navigation collapses into a hamburger menu (`#navBurger`) below the desktop breakpoint.

## Theme / Appearance

The site includes a working dark/light theme toggle (the sun/moon icon in the nav bar). It defaults to dark mode, switches the `data-theme` attribute on `<html>` between `"dark"` and `"light"`, and persists the user's choice in `localStorage` so it's remembered on return visits.

## Getting Started

This is a static site with no build step or dependencies (no `package.json`). To view it locally:

```bash
git clone https://github.com/leenkharraz/LeenKharrazPortfolio.git
cd LeenKharrazPortfolio
```

Then either open `index.html` directly in a browser, or serve the directory with any static file server, e.g.:

```bash
npx serve .
```

## Deployment

Deployed via GitHub Pages, serving from the `main` branch root. Live at https://leenkharraz.github.io/LeenKharrazPortfolio/.

## Author

Leen Kharraz
Software Engineering
