# Portfolio Change Audit

Tracks what changed since the initial commit and why. Each round below is a bundle of targeted fixes/cleanup — no full redesign.

---

# Round 4 — Race timeline redesigned into a premium motorsport showcase

Scope: only the Scrutineer Marshal / Race Timeline section inside `#experience`. No other section touched.

## Summary

- Replaced the static "name + date" row with a **selectable** horizontal node strip (native `<button>`s, keyboard-operable). Clicking/pressing Enter on a node highlights it and updates a detail card below.
- The inline SVG car and a new connector line no longer loop on a timer — both **align to the selected event**, computed as `index / (count - 1)` of the track width (no scroll-position math), and glide there with a `left` transition. `prefers-reduced-motion` makes that transition instant instead of removing the feature.
- Checkered-flag texture recolored to true black/white (was tinted with `var(--text)`, i.e. theme-neutral gray, not pink — but not literally black/white either). Added a second, thinner black/white checker strip as a "starting line" flourish at the very top of the section.
- Added a **selected-event detail card**: rounded dark card with a subtle apricot-tinted border/glow, gallery on the left, event info (name, role, description, metadata chips) on the right; stacks vertically under 720px.
- Added a **photo gallery component** that renders a different, deliberately-designed layout for 0 / 1 / 2 / 3 / 4+ images per race, driven entirely by `images.length` — see "Adding real race photos" below.
- Extended each race's data with `role`, `type`, `location`, `desc`, `images: []` — event names and dates are unchanged from before.

## Files changed

- `index.html` — race-strip markup: nodes are now buttons; added `#raceConnector` and `#raceDetail` containers; added `id="raceCar"` to the SVG.
- `css/style.css` — full rewrite of the `.race-strip*` block (see inline comments at that section for the reasoning behind the index-based, scroll-independent positioning).
- `js/main.js` — `MOTORSPORT_RACES` extended with new fields; `renderMotorsportTimeline`, `renderRaceDetail`, `renderRaceGallery`, `positionRaceIndicators`, and `selectRace` added.
- `PORTFOLIO_CHANGE_AUDIT.md` — this round appended.

## Adding real race photos later

Edit the `images` array on any entry in `MOTORSPORT_RACES` (top of `js/main.js`):

```js
{ id: "formula-e-2026", name: "Formula E", date: "Feb 2026", images: [
  "assets/images/motorsport/formula-e-2026-1.jpg",
  "assets/images/motorsport/formula-e-2026-2.jpg",
] },
```

Drop the actual image files into `assets/images/motorsport/` (already exists, currently empty). No CSS or layout code needs to change — the gallery automatically switches layout based on how many paths are in the array (tested with 0, 1, 2, 3, and 5 images).

## Metadata honesty note

`role`, `type`, `location`, and `desc` are shared across all seven races and intentionally generic/truthful ("Scrutineer Marshal", "Race Weekend", "International Circuit", "Supporting technical inspection and race operations.") rather than inventing per-race specifics (exact venues, unique descriptions) that aren't confirmed. Only the name and date, which were already in the project, are event-specific.

## Verified

- Selecting each of the 7 nodes updates the detail card, moves the car, and moves the connector — checked at desktop (1440px), laptop (1024px), tablet (768px), and mobile/iPhone SE (375px), no horizontal overflow at any width.
- Gallery layouts checked with 0 (placeholder), 1, 2, 3, and 5 (main + 2 + "+2" overlay) images.
- Reduced motion: car/connector position updates instantly (transition duration collapses via the site's existing global reduced-motion rule); no console errors.
- Keyboard: tabbing to a node and pressing Enter selects it, same as a click.
- Checked in both dark (default) and light mode.

## Intentionally not changed

- Race names, dates, and their newest→oldest order.
- Every other section of the site (About, Projects, Footer, Experience cards themselves, nav, theme system).
- No official F1/team branding, logos, or liveries were used anywhere in the SVG car.

---

# Round 3 — Hero desktop layout, experience data fixes, project detail responsiveness

## Summary

- Hero now uses a left/right layout on desktop/laptop (name, role, buttons on the left; the existing code-editor animation on the right), while staying a clean single-column stack on mobile.
- Bashosh Volunteer Team experience corrected from a misleading 5-month range to the real Mar 2025 – Nov 2025 (9 months), and a small nested role-progression timeline was added inside the expanded card.
- Artificial Intelligence Club role wording corrected to "Project Management Co-Leader" (was "Project Management Co-Lead", inconsistent with Drone Club's "Project Management Leader" phrasing).
- Scrutineer Marshal / SAMF date corrected from a single "Mar 2024" (read as if it had ended) to "Mar 2024 – Present".
- Fixed a real mobile bug where the project detail overlay's "View Project"/"Visit Site" button could be clipped and unreachable on short (16:10 browser-mockup) cards.

## Files changed

- `css/style.css` — hero grid-area layout + desktop breakpoint, mini role-progression timeline styles, project detail overlay overflow/height fixes.
- `js/main.js` — Bashosh date/sortDate/roleSteps, AI Club role text, SAMF date, `renderExperience` extended to render an optional role-progression list.
- `PORTFOLIO_CHANGE_AUDIT.md` — this round appended.
- `index.html` — **not touched this round**; the desktop left/right hero layout was achieved purely with CSS Grid on the existing markup (see below), so no HTML changes were needed.

## Hero desktop/laptop layout

Implemented with CSS Grid `grid-template-areas` on `.hero__inner` — no change to the HTML nesting (`.hero__copy`, `.hero__editor`, `.hero__cta` remain three sibling blocks), so behavior/animation logic in JS needed no changes:

- **Mobile (default):** `"copy" "editor" "cta"` — single column, same stacked order approved previously (name/role → code card → buttons).
- **Desktop, 900px+:** `"copy editor" "cta editor"` with two columns — name/role top-left, buttons bottom-left, and the code-editor card fills the right column across both rows. This is the requested "name/role/buttons on the left, animated card on the right, not stacked."

The existing typing animation (`typeHeroCode` in `js/main.js`) and its typed content (`const leen = {...}`) were **not** touched — only where its container sits in the grid changed.

## Bashosh Volunteer Team

- `date`: `"Jul 2025 - Nov 2025 · 5 mos"` → `"Mar 2025 – Nov 2025 · 9 mos"`
- `sortDate`: `"2025-07"` → `"2025-03"` (keeps newest/oldest sorting accurate)
- Added `roleSteps` array rendered as a small nested timeline inside the expanded card, under "Top skills":
  1. Co-Leader of Planning and Management Department
  2. Leader of Planning and Management Department
  3. Senior Management Member
  4. Vice Team Leader (bolded — the current/final title, matching the card's main role field)

Styled as compact dots-on-a-line steps (`.mini-steps`), tinted with the card's own accent color, deliberately smaller and quieter than the main experience timeline — no dates, no big cards per step, no separate section.

Also increased `.tl-card.is-open .tl-card__body`'s `max-height` from `22rem` to `30rem` so the added role-progression content isn't clipped by the existing collapse/expand transition on any card (verified Bashosh's expanded content is ~468px, comfortably under the new 480px cap).

## Artificial Intelligence Club

`role`: `"Project Management Co-Lead"` → `"Project Management Co-Leader"`. Organization field (`"Artificial Intelligence Club"`) unchanged; role and organization remain visually distinct fields, not duplicated.

## SAMF / Scrutineer Marshal

`date`: `"Mar 2024"` → `"Mar 2024 – Present"`. Role, organization, description, skills, and the "View Races" button/behavior were not touched — the race timeline reveal still works (verified by clicking through to it).

## Project detail responsiveness (View Project / Visit Site button)

**Root cause found:** `.device-overlay` (the sliding project-detail panel) is `position: absolute; inset: 0`, sized to exactly match `.device-stage`. For "browser" mockup cards (the three website projects), the stage's height is driven by a 16:10 aspect-ratio box that becomes quite short on narrow phone widths. The overlay's content (type, name, description, tags, role, button) was taller than that box, and because `.device-stage` has `overflow: hidden`, the bottom of the overlay — including the CTA button — was silently clipped with no way to reach it.

**Fix:**
- `.device-overlay` now scrolls internally (`overflow-y: auto`) and is top-aligned (`justify-content: flex-start` instead of `center`), so if content doesn't fit, the user can scroll to reach the button instead of it being permanently hidden.
- `.device-stage` gets a taller `min-height: 385px` under 640px viewports, which in practice makes all five project cards' detail panels fit without needing to scroll at all (verified: Portfolio, Card Magic, F1 Driver Lookup, and Lume's CTA buttons all render fully inside the stage bounds on a 375px-wide viewport).
- Schoolo's card still renders zero buttons (verified) — the "no CTA unless a real link exists" rule from the previous round was not touched.

## Intentionally not changed (Round 3)

- About section text/layout — not touched this round.
- Project links, tags, and grouping (Applications vs Websites) — unchanged.
- The typing animation's typed content — unchanged, only its container moved.
- Every other experience entry not named above (Ting, Numu, LOC, GDG, EG&VR, Drone Club) — dates and roles untouched, already correct from the previous round.
- Footer, theme toggle/persistence, nav/mobile menu — untouched and re-verified working.

---

# Round 1–2 (previous session)

## Files changed

- `index.html`
- `css/style.css`
- `js/main.js`
- `scrutineer-races.html` — **deleted** (its content now lives inline on the main page; see Race Timeline below)
- `PORTFOLIO_CHANGE_AUDIT.md` — new (this file)

---

## Hero section

**Removed:**
- The paragraph under "Software Engineering Student" ("Hello, I'm Leen Kharraz — a Software Engineering student open to internships...").
- The "Why work with me?" block.
- The old two-column desktop layout (name/text on the left, code card on the right).

**Kept, unchanged:**
- The typing/code animation itself — same `leen_kharraz.js` editor card, same typed content (`const leen = { name, role, openTo, focus }`), same JS typewriter logic in `js/main.js` (`typeHeroCode`). Nothing about the animation's text or behavior was touched.

**Moved:**
- The existing code-editor animation now sits directly under "Software Engineering Student" and directly above the Contact Me / Skills buttons, in a single vertical stack (previously it sat beside the intro text in a 2-column grid on desktop).

**Result — hero now contains exactly, top to bottom:**
1. `LK.` header (unchanged)
2. "Leen Kharraz"
3. "Software Engineering Student"
4. The existing typing code-editor card
5. Contact Me / Skills buttons

Layout is now a single centered column (`max-width: 42rem`) at all screen widths instead of switching to a 2-column grid at 900px+, per "clean and simple, no new paragraphs."

---

## About section

Replaced the bio paragraph with the exact provided copy:

> "I'm Leen Kharraz, a Software Engineering student at the University of Jeddah. I enjoy building software and coordinating the plans, people, and details that help projects move forward."

Added a "Why me?" block directly under it with the exact provided copy:

> "Because I bring both technical curiosity and organized execution. I care about understanding the problem, building practical solutions, and keeping the work clear, structured, and useful."

**"Why me?" styling:** small bold heading (`.about__whyme-label`) in the section's own dusty-blue accent (`var(--a)`, which resolves to `--blue` since About uses `data-accent="blue"`), separated from the bio paragraph above it by a thin top border. No badge, no pill, no loud color — a quiet subsection heading, consistent with how other section labels are styled on the site.

**Unchanged:** the "University of Jeddah — Software Engineering" card and the "Languages" (Arabic/English) card. No "Started" card was re-added. No text was added beyond what was provided.

---

## Experience role/title corrections

Three cards previously displayed the club name as the role/title (duplicating the organization line). Fixed to show an actual title instead, organization line unchanged:

| Organization | Old role (wrong) | New role |
|---|---|---|
| Artificial Intelligence Club | "Artificial Intelligence Club" | **Project Management Co-Lead** |
| Electronic Games and Virtual Reality Club | "EG&VR Club" | **Project Manager** |
| Drone Club | "Drone Club" | **Project Management Leader** |

Every card still shows role, organization, date, tags, description, and top skills as five distinct fields — none are duplicated against each other.

---

## Experience sorting

A small pill-style control ("Newest first" / "Oldest first") sits next to the Experience heading. Default is newest-first. Sorting uses a `sortDate` (`YYYY-MM`) field added to each experience entry for reliable chronological ordering — it does not touch the Projects grid, and click-to-expand still works after re-sorting (interactions are re-bound after each re-render).

---

## Race / motorsport timeline

Replaced the old separate `scrutineer-races.html` page (card-grid layout) with an inline, revealable timeline on the same page, opened by the existing "View Races" button inside the Scrutineer Marshal card.

- Horizontal line with dots, one small item per race showing **only** name + start month/year (no end dates, no "1 mo", no descriptions by default).
- Order: newest → oldest (Formula E Feb 2026 → Formula 2 Mar 2024), matching the specified list exactly.
- Subtle checkered-flag texture on the track (low-opacity diagonal pattern, not a loud graphic).
- Small F1-car shape animates left→right along the track; disabled under `prefers-reduced-motion`.
- No beige containers, no card-grid, no LinkedIn-style media list.
- Responsive: stays a single horizontal row and scrolls internally (`overflow-x: auto`) rather than wrapping — wrapping was tried first and produced a broken orphaned row, so horizontal scroll was used instead, on both mobile and any desktop width where all 7 items don't fit.

---

## Projects section

- Grouping unchanged: Applications (Schoolo, Lume) / Websites (Portfolio, Card Magic, F1 Driver Lookup).
- **Schoolo:** its "View Project" button (which pointed nowhere, rendered as a disabled/greyed link) is now omitted entirely. The card still shows full details (description, tags, role) on tap/hover — there is simply no action button, matching the rule that a project only gets a CTA when it has a real link.
- Fixed a real mobile bug: nested CSS Grid containers (`showcase` → `showcase__group` → `showcase__grid` → `device-card`) don't shrink below their children's intrinsic min-content width by default, which was forcing ~12px of page-wide horizontal scroll on a 375px screen. Fixed with `min-width: 0` / `minmax(0, 1fr)` at each grid level.
- Tap-to-reveal on touch devices already existed and still works; not changed.

---

## Header / navbar / logo

- Logo now uses an explicit `scrollTo({ top: 0 })` JS handler instead of relying only on `href="#top"`. Reason: the header is `position: sticky` **and** is the `#top` anchor target itself — a known browser quirk where the fragment-scroll calculation uses the header's already-stuck position and can land mid-page instead of at the very top. This was verified broken (landed at scrollY 2779 instead of 0) before the fix, and verified correct (scrollY 0) after.
- Mobile menu background changed from a flat opaque color to the same translucent/blurred treatment as the header bar, so both read as one consistent surface instead of two different tones.

---

## Responsiveness

Checked with a headless-browser pass (Playwright/Chromium) at iPhone SE (375×667), tablet (768×1024), and desktop (1440×900), before and after each change:

- No horizontal page overflow at any of the three sizes, on the hero, About, Experience, race timeline, Projects, or footer.
- No cropped text; device mockups (iPhone/browser frames) scale within their cards.
- Nav/mobile menu opens without covering content oddly; hamburger and theme toggle remain reachable.
- Buttons (Contact Me, Skills, View Races, sort pills, theme toggle) are all tappable at mobile width.

---

## Theme

- Dark mode remains the default (`<html data-theme="dark">`).
- Theme toggle persists the choice via `localStorage` (upgraded from `sessionStorage`, which was lost on tab close — `localStorage` is what "persist" actually requires).
- All new/changed animations (hero typing cursor, race-timeline car) respect `prefers-reduced-motion`.

---

## Intentionally not changed

- Projects data/links (Lume, Portfolio, Card Magic, F1 Driver Lookup) — untouched, no new or invented links.
- Local Organising Committee already linked to `https://www.linkedin.com/company/saudiloc/` from the prior session — left as is, no link invented.
- SAMF/Scrutineer Marshal description already states the March 2024 start, multiple events, and the Top-3 Formula E technical-inspection recognition — left as is (already concise, already in the one clean place for it, the card description).
- Footer markup/copy — already an integrated band with icon-only buttons and the exact required copyright line; no change needed.
- Skills block under About — already exists and is what the hero "Skills" button scrolls to; no new Skills section was created.
- No sections were removed (About, Experience, Projects all present).
