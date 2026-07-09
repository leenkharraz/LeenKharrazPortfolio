# Portfolio Change Audit

Tracks what changed since the last commit (`bc3a982`) and why. This commit bundles two rounds of targeted fixes/cleanup — no full redesign.

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
