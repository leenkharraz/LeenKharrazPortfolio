# Color Palette Audit

Audit only — no colors changed, removed, or redesigned. Scope: the live site at repo root (`index.html`, `css/style.css`, `js/main.js`). The `_incoming_update/` folder was **not** audited — it's a stale, disconnected staging copy (different line counts, not referenced by any commit that touches the live site) and out of scope unless you tell me otherwise.

---

## 1. Current Palette Overview

### 1a. Raw accent hexes (shared by both themes — defined once, never redefined per theme)

| Variable | Hex | Swatch description | Primary use |
|---|---|---|---|
| `--apricot` | `#CE8690` | dusty rose / pink | **Main accent.** Links, primary buttons, cursor blink, path-label arrow, theme toggle icon, hover borders, race timeline car/dot/connector |
| `--berry` | `#6E2236` | deep burgundy | Logo dot (light mode), `pill--berry`, red traffic-light dot in hero code window, cert tag bg (unused section), race car stripe/wing |
| `--olive` | `#777F5D` | muted olive green | Experience section default accent, `pill--olive`, skills heading underline |
| `--sage` | `#CCD2AB` | pale sage green | Green traffic-light dot in hero code window, `pill--sage`, one experience card accent |
| `--mocha` | `#AA7864` | muted brown/mocha | Projects section default accent, `pill--mocha`, placeholder-text color |
| `--blue` | `#8DACBA` | dusty/steel blue | About section accent, hero role/subtitle text, code-token keyword color, focus-visible outline, race car rim |

### 1b. Semantic tokens (redefined per theme — see §2/§3 for full values)

`--bg`, `--bg-soft`, `--card`, `--card-hi`, `--text`, `--text-2`, `--text-mut`, `--border`, `--glow-apricot`, `--glow-blue`, `--glow-green`, `--shadow`, `--shadow-sm`, `--on-apricot`, `--on-sage`, `--on-blue`, `--on-berry`, `--on-olive`, `--on-mocha`.

### 1c. Derived/contextual tokens

- `--a` / `--a-ink` — set by `[data-accent="…"]` on a section or card; resolves to one of the six accent/on-accent pairs above. Used as the "current context color" by panels, badges, folder tabs, stat numbers, project stages.
- `--logo-ink` — `#F4EFE7` in dark, `#1E1A18` in light (logo text color, separate from `--text` even though dark-mode value is identical).
- `--panel-base` — `var(--card)` in dark, `#FFFFFF` in light (panel gradient base).
- `--stage-base` — `var(--card-hi)` in dark, `var(--bg-soft)` in light (project device-stage background).
- `--ca` / `--ca-ink` — per-experience-card accent, set by `.tl-item--{accent}`, independent of the section-level `--a`.

### 1d. Hardcoded values found outside the variable system

See §5 for the full list with line numbers; summarized here because they recur so often:

- **`rgba(206, 134, 144, …)`** — the raw RGB of `--apricot`/`--glow-apricot`, hand-typed 3 separate times (lines 51, 77 as the variable itself — fine — but also 598, 1576, 1615 as fresh literals instead of reusing `--glow-apricot` or `color-mix()`).
- **`#F4EFE7` / `rgba(244, 239, 231, …)`** — the raw RGB of dark-mode `--text`, hand-typed **12 times** across the footer and project-card hover overlay (lines 1296, 1319, 1333, 1574, 1591, 1597, 1605, 1606, 1607, 1619, 1620, 1629).
- **`#16151a`** — a near-black not defined as any token, used 4 times for phone/browser device-mockup chrome (lines 1184, 1195, 1207, 1228).

---

## 2. Light Mode Color System

`[data-theme="light"]`, `css/style.css:67-90`

| Purpose | Variable | Value |
|---|---|---|
| **Backgrounds** | `--bg` | `#F6F1EB` (warm cream) |
| | `--bg-soft` | `#F8F4EE` (near-identical to `--bg` — see §5) |
| **Cards** | `--card` | `#FFFFFF` |
| | `--card-hi` (elevated) | `#F5ECE6` |
| **Text** | `--text` (primary) | `#2F2A26` |
| | `--text-2` (secondary) | `#665E55` |
| | `--text-mut` (muted) | `#8E8578` |
| **Borders** | `--border` | `#D6C9BF` |
| **Accents** | shared hexes | apricot/berry/olive/sage/mocha/blue (§1a — identical to dark mode) |
| **On-accent text** | `--on-apricot` | `#48191D` |
| | `--on-sage` | `#3C4126` |
| | `--on-blue` | `#1F3540` |
| | `--on-berry` / `--on-olive` / `--on-mocha` | `#FFFFFF` (all three, same as dark mode) |
| **Buttons** | `.btn--solid` | bg `--apricot`, text `--on-apricot` |
| | `.btn--ghost` | border `--border`, text `--text`, hover border/text `--apricot` |
| **Glows/shadows** | `--glow-apricot` | `rgba(206,134,144,0.24)` |
| | `--glow-blue` | `rgba(141,172,186,0.24)` |
| | `--glow-green` | `rgba(119,127,93,0.22)` |
| | `--shadow` | `rgba(46,38,33,0.12)` (warm-tinted black) |
| | `--shadow-sm` | `rgba(46,38,33,0.08)` |
| **Section colors** | `--panel-base` | `#FFFFFF` |
| | `--stage-base` (project mockup bg) | `var(--bg-soft)` |
| **Logo** | `--logo-ink` | `#1E1A18`; dot = `--berry` |

**Not theme-aware in light mode:** the footer, the project-card hover overlay, and the phone/browser device-mockup chrome all stay hard-locked to dark colors even in light mode (full detail in §5).

---

## 3. Dark Mode Color System

`:root, [data-theme="dark"]`, `css/style.css:31-65`

| Purpose | Variable | Value |
|---|---|---|
| **Backgrounds** | `--bg` | `#101112` (near-black) |
| | `--bg-soft` | `#171819` |
| **Cards** | `--card` | `#202124` |
| | `--card-hi` (elevated) | `#292A2E` |
| **Text** | `--text` (primary) | `#F4EFE7` (warm cream) |
| | `--text-2` (secondary) | `#C9C1B7` |
| | `--text-mut` (muted) | `#8E8982` |
| **Borders** | `--border` | `#3A3A3F` |
| **Accents** | shared hexes | apricot/berry/olive/sage/mocha/blue (§1a) |
| **On-accent text** | `--on-apricot` | `#2A1015` |
| | `--on-sage` | `#2C3018` |
| | `--on-blue` | `#16262E` |
| | `--on-berry` / `--on-olive` / `--on-mocha` | `#FFFFFF` |
| **Buttons** | `.btn--solid` | bg `--apricot`, text `--on-apricot` |
| | `.btn--ghost` | border `--border`, text `--text`, hover border/text `--apricot` |
| **Glows/shadows** | `--glow-apricot` | `rgba(206,134,144,0.28)` |
| | `--glow-blue` | `rgba(141,172,186,0.25)` |
| | `--glow-green` | `rgba(119,127,93,0.25)` |
| | `--shadow` | `rgba(0,0,0,0.45)` |
| | `--shadow-sm` | `rgba(0,0,0,0.35)` |
| **Section colors** | `--panel-base` | `var(--card)` |
| | `--stage-base` (project mockup bg) | `var(--card-hi)` |
| **Logo** | `--logo-ink` | `#F4EFE7`; dot = `--apricot` |

Dark mode is described in the CSS file header comment as the **default** theme (`<html data-theme="dark">` is hardcoded in `index.html:2`).

---

## 4. Section-by-Section Color Usage

### Header / Navbar (`.nav`, `css/style.css:200-302`)
- Background: `var(--bg)` blended via `color-mix(in srgb, var(--bg) 82%, transparent)` + blur (glass effect).
- Border: `var(--border)`.
- Logo: `var(--logo-ink)` text, dot color flips — `--apricot` in dark, `--berry` in light.
- Nav tabs: bg `--card`, border `--border`, active tab bg `--apricot` / text `--on-apricot`.
- Theme toggle: bg `--card`, icon `--apricot`, hover border `--apricot`.
- No `data-accent` set on the nav, so anything using `var(--a, fallback)` here falls back to its hardcoded fallback (usually apricot).

### Hero / Cover (`.hero`, `css/style.css:305-427`)
- Background: two radial gradients using `--glow-apricot` and `--glow-blue` over `var(--bg)`.
- Ghost giant title: `var(--text)` at 5% opacity.
- Role/subtitle text: `var(--blue)` — **see §5, contrast problem in light mode.**
- Code-editor card: border `--border`, bg `--card-hi`; title bar bg `--card`.
- Traffic-light dots: red = `--berry`, yellow = `--apricot`, green = `--sage`.
- Code tokens: keyword = `--blue`, variable = `--text`, key = `--apricot`, string = `--sage`.
- Cursor blink: `--apricot`.
- No `data-accent` on hero — it's the one section that mixes apricot and blue deliberately rather than using one `--a` accent.

### About (`data-accent="blue"`, `css/style.css:527-617`)
- Section accent: `--a = --blue`, `--a-ink = --on-blue`.
- Bio text: `--text-2`.
- "Why me?" label: `var(--a, var(--blue))` (blue).
- File cards: bg `--card`, border `--border`, left accent border `var(--a, --apricot)` — **note: falls back to apricot, not blue, if `--a` weren't set (inconsistent fallback vs. the section's own blue accent, though currently masked because `--a` is always set here).**
- Skills-mini heading underline: `var(--a, --blue)`.
- Skills-mini group hover border: hardcoded `rgba(206, 134, 144, 0.3)` (apricot) — **ignores the section's blue accent entirely.**

### Skills (technical skills block, `css/style.css:619-644`)
- Not its own `data-accent` section — lives inside/near About.
- Group cards: bg `--card`, border `--border`.
- Heading underline defaults to `--blue`, with per-group override classes `.skills__h--blue`, `--olive`, `--berry` used directly (not tied to any section accent variable).

### Experience (`data-accent="olive"`, `css/style.css:647-1101`)
- Section accent: `--a = --olive`.
- Timeline spine: `var(--border)`.
- Each experience card carries its **own** accent (`--ca`/`--ca-ink`) via `.tl-item--{berry|blue|olive|apricot|mocha|sage}`, set per-entry in `js/main.js` (7 of 9 cards use a color other than the section's own olive — see §5).
- Card dot/left-border/badges: `--ca`.
- Sort toggle active state: `var(--a, --olive)`.

### Motorsport / Race Timeline (inside Experience, `css/style.css:835-1101`)
- Explicitly documented in code comments as intentionally **breaking out of** the section/card accent system: car body, connector, selected-node dot, and detail-card border/glow are all hardcoded to `--apricot` regardless of the section's olive accent or any individual card's accent.
- Checkered-flag textures (top flourish + track background): true black/white (`#fff`/`#000` and black/white rgba stripes) — deliberately **never** tinted with any theme accent, per an inline code comment ("no pink checker flag" rule).
- Car tire: hardcoded `#1b1a1d` (not a token).
- Car rim: `--blue`. Car stripe/wing/endplate: `--berry` (mixed 85% with black for the stripe).
- Detail card: bg `--card-hi`, border/glow apricot via `color-mix()`.
- Gallery "+N more" overlay: hardcoded `rgba(0,0,0,0.55)` bg, `#fff` text.

### Projects (`data-accent="mocha"`, `css/style.css:1104-1394`)
- Section-level accent (`mocha`) only actually shows up on the "Applications"/"Websites" group-kicker labels — **every individual project card overrides it** with its own `data-accent` (berry, apricot, blue, mocha, olive — set per-project in `js/main.js`), so the section's own "mocha" identity is barely visible next to the cards themselves.
- Device stage background: gradient from `var(--a)` (per-card accent) into `--stage-base`.
- Device badge: bg `--a`, text `--a-ink`.
- iPhone/browser mockup **chrome** (frame, dynamic island, browser bar, dot, url pill): hardcoded near-blacks (`#16151a`, `#201e24`, `#45424b`, `#8a8690`) — **always dark, does not adapt to light mode** (device chrome is meant to look like a phone/browser regardless of site theme, but it's worth confirming this is intentional).
- Hover/focus/open detail overlay (secondary cards): entirely hardcoded dark burgundy gradient (`#1a1016` → mixed with `--a`) with hardcoded cream text (`#F4EFE7` and `rgba(244,239,231,*)`) — **does not adapt to light mode at all.**
- Featured card info panel: uses tokens normally (`--a`, `--text-2`, `--text`, `--text-mut`).

### Footer (`data-accent`: none; `css/style.css:1565-1634`)
- **Entirely hardcoded**, no CSS variables at all except one use of `var(--apricot)` for icon hover background.
- Background: `linear-gradient(180deg, #34131F 0%, #2A0F1A 100%)` — a deep burgundy that is **not** the `--berry` token (`#6E2236`) and has no variable of its own.
- Text: `#F4EFE7` and various `rgba(244,239,231, alpha)` opacities, hardcoded ~9 times.
- Glow: `rgba(206,134,144,0.18)` — the apricot RGB hand-typed again instead of reusing `--glow-apricot`.
- Icon hover: bg `var(--apricot)` (token), but hover text color `#2A0F1A` is a fresh hardcoded hex that happens to match the footer's own gradient end-stop, not any shared token.
- **The footer looks identical in light mode and dark mode** — it never reads `[data-theme="light"]`.

---

## 5. Problems Found

### Contrast / readability (computed via WCAG relative luminance)

| Pair | Where used | Ratio | WCAG AA (4.5:1 text / 3:1 large) |
|---|---|---|---|
| `--blue` (`#8DACBA`) text on light-mode `--bg`/`--card` | Hero role/subtitle text in **light mode** | **2.40:1** | ❌ Fails even large-text threshold |
| `--apricot` (`#CE8690`) as global link color on light-mode `--bg` | Every default `<a>` (`a { color: var(--apricot); }`, line 123) in **light mode** | **2.51:1** | ❌ Fails |
| `--mocha` (`#AA7864`) placeholder text on light-mode `--bg` | `.placeholder-text` in **light mode** | **3.35:1** | ❌ Fails normal-text AA |
| `--text-mut` on light-mode `--bg` | Path-labels, dates, captions in **light mode** | **3.24:1** | ❌ Fails normal-text AA (borderline for large text) |
| `--mocha` bg with `--on-mocha` (`#FFFFFF`) | `.pill--mocha`, project mocha badges | **3.76:1** | ❌ Fails normal-text AA (passes large-text) |
| `--olive` bg with `--on-olive` (`#FFFFFF`) | `.pill--olive` | **4.22:1** | ⚠️ Borderline — fails by a hair for normal text |

Everything else checked (berry/white, sage/on-sage, blue/on-blue, apricot/on-apricot, both `--text`/`--text-2` on `--bg` in both themes) passes comfortably (5.0–16.5:1).

**Takeaway: light mode has the real contrast problems**, concentrated in blue and apricot used as *text* (they were tuned to sit on dark backgrounds and were not re-checked against the cream light background), plus white text on the lighter accent bg's (mocha/olive).

### Hardcoded colors (not using variables)

- `#16151a`, `#201e24`, `#45424b`, `#8a8690` — phone/browser device-mockup chrome (4 spots), always dark, no light-mode equivalent defined.
- `#1b1a1d` — race car tire.
- `#fff` / `#000` — checkered flag texture (stated as intentional in a code comment).
- `#F4EFE7` and `rgba(244,239,231, *)` — hand-typed **12 times**, exclusively in the footer and the project-card hover overlay, duplicating the dark-mode `--text` value instead of referencing it or a dedicated "always-cream" token.
- `rgba(206,134,144, *)` — the apricot RGB hand-typed **3 times** outside the variable definitions themselves (About skills-hover border, footer glow, footer icon-hover shadow) instead of reusing `--glow-apricot`.
- `#34131F`, `#2A0F1A` — footer's own burgundy gradient, a shade close to but distinct from `--berry` (`#6E2236`), with no variable.

### Duplicated / inconsistent colors

- `--bg` vs `--bg-soft` are nearly indistinguishable in light mode (`#F6F1EB` vs `#F8F4EE`, ΔE tiny) but clearly separated in dark mode (`#101112` vs `#171819`) — the two themes don't have matching internal contrast structure.
- The apricot RGB triplet `206,134,144` exists as a token (`--glow-apricot`) **and** as 3 separate raw literals elsewhere — same color, four independent places to edit.
- The cream text RGB `244,239,231` exists as the `--text` token (dark mode) **and** as 12 raw literals elsewhere.
- `.filecard` (About section, blue-accented) still hardcodes its left-border fallback to apricot (`var(--a, var(--apricot))`) rather than blue — currently invisible since `--a` is always set, but a latent inconsistency if that ever changes.
- `.skills-mini__group:hover` border ignores the About section's own blue accent and hardcodes apricot instead.

### Colors that don't switch correctly between dark/light mode

- **Footer**: fully hardcoded dark burgundy/cream — identical in both themes. If this is intentional (a deliberate "always dark" footer band), it should be documented as such; if not, it's the single biggest theme-consistency gap in the site.
- **Project-card hover/detail overlay**: same issue — hardcoded dark burgundy-to-black gradient with cream text, doesn't lighten in light mode.
- **Phone/browser device-mockup chrome**: hardcoded near-black regardless of theme (plausibly intentional — mockups usually keep dark UI chrome — but flagging since it's not token-driven either way).

### Section-color consistency

- Race timeline hardcodes apricot for its car/connector/selected state even inside the olive-accented Experience section, and even when the *individual selected card* has a different accent (e.g., selecting a berry-accented race still shows an apricot car/dot). This is called out as intentional in the code comments, but it does mean "apricot" effectively acts as a *second* omnipresent identity color alongside whatever `--a` is active — worth confirming that's the desired reading.
- Projects section's own `mocha` identity is only visible on two small "group kicker" labels; every card overrides it with its own accent, so the section doesn't visually read as "mocha" the way Experience reads as "olive" or About reads as "blue."

### Mobile / responsive-specific color issues

- No colors change value at any breakpoint — all responsive rules affect layout only, not color. No mobile-specific color bugs were found.
- The one mobile-relevant risk is inherited from the desktop contrast issues above (light-mode blue/apricot/mocha text): small screens don't make these worse, but they don't fix them either, and smaller text at those ratios is harder to read.

### Dead CSS (colors defined but unused in current markup)

- `.club-card` (Leadership & Volunteering), `.moto__gallery`/`.gphoto` (Motorsport gallery), `.stat-badge`/`.cert-item`/`.cert-item__tag` (Certificates) all exist in `style.css` with full color rules but have **no matching markup** in the current `index.html` (these sections were trimmed per a past cleanup commit). Their accent usage (berry cert tag, etc.) isn't currently visible anywhere on the live site.

---

## 6. Recommended Palette Direction

*(Direction only — not implemented.)*

- Keep dark mode as the default, premium-feeling theme; it currently has the best-behaving contrast of the two.
- Keep pink/burgundy (apricot + berry) as the primary accent family — it's already the most-used identity color (links, buttons, cursor, logo dot, timeline highlight).
- Keep blue, sage, and mocha as secondary/contextual accents (About, cards, projects) — but re-tune blue and mocha specifically for **light-mode text use**, since the current values were picked for dark backgrounds only.
- Keep the checkered flag black/white and untinted — this is already true and already called out as an explicit rule in the code.
- Decide deliberately (rather than by omission) whether the footer and project-hover-overlay should stay "always dark" as a stylistic choice, or should gain real light-mode variants — right now it reads as an oversight rather than a decision either way.
- Avoid re-introducing hand-typed rgba literals that duplicate an existing token's RGB — route new dark-surface-on-any-theme needs through one clearly-named token (e.g., a dedicated "always dark" surface/text pair) rather than repeating the raw numbers.

---

## 7. Suggested CSS Variable Structure

*(Proposal only — not implemented. Mapped against what already exists so nothing here requires guessing new values — it's a rename/consolidation of current tokens plus a couple of new ones to close the gaps found above.)*

```
--bg                 → existing --bg
--bg-soft             → existing --bg-soft (recommend widening light-mode gap from --bg)
--surface             → existing --card
--surface-elevated    → existing --card-hi

--text-primary        → existing --text
--text-secondary      → existing --text-2
--text-muted          → existing --text-mut (recommend darkening light-mode value for AA)

--border              → existing --border

--accent-primary       → existing --apricot (+ --on-apricot)
--accent-secondary      → existing --berry (+ --on-berry)
--accent-blue           → existing --blue (+ --on-blue; recommend a separate darker
                          "--accent-blue-text" for light-mode text-on-bg use, since
                          the current --blue fails contrast as text on cream)
--accent-sage           → existing --sage (+ --on-sage)
--accent-mocha          → existing --mocha (+ --on-mocha; same light-mode text caveat as blue)
--accent-olive          → existing --olive (+ --on-olive) — not in your list above but
                          already load-bearing for Experience; flagging so it isn't lost

--button-bg             → currently --apricot directly on .btn--solid
--button-text           → currently --on-apricot directly on .btn--solid

--timeline-line          → existing --border (.timeline::before)
--timeline-node          → currently --apricot / per-card --ca — recommend picking one
                           consistently rather than both

--surface-always-dark     → NEW — would replace the ~15 hardcoded #16151a /
                            #34131F / #2A0F1A / rgba(244,239,231,*) instances in the
                            footer, project-hover overlay, and device-mockup chrome
--text-always-cream        → NEW — would replace the 12 hardcoded #F4EFE7 /
                            rgba(244,239,231,*) instances in the same places
```

---

## 8. Before Editing Questions

1. **Main accent** — should apricot (`#CE8690`) stay the single site-wide primary accent, or should it share top billing with berry/burgundy as co-primary?
2. **Hero** — should the hero stay mixed apricot+blue as it is now, or move to mostly black/pink for a starker look?
3. **Projects** — should the Projects section commit to warm mocha tones consistently, or is the current per-card rainbow (berry/apricot/blue/mocha/olive) intentional and worth keeping?
4. **Race timeline** — should it stay apricot-accented (as now, overriding the section/card colors), or move toward a more black/white motorsport identity that leaves color to the cards only?
5. **Light mode base** — should light mode stay cream-based (`#F6F1EB`, current) or move toward a plain white base? This also affects whether `--bg` vs `--bg-soft` need more separation.
6. **Footer & project-hover overlay** — intentional "always dark" design choice, or should these gain real light-mode colors?
7. **Blue and mocha as text** — okay to introduce darker/adjusted variants of these specifically for light-mode text use (to fix the contrast failures in §5), while keeping the current values for backgrounds/pills/badges?
8. **Dead sections** — Leadership/Volunteering, Motorsport gallery, and Certificates CSS (with their own accent colors) are unused in current markup — keep for a possible future return, or safe to drop when cleaning up the color system?

---

*Sections 1–8 above describe the pre-fix state and were left as originally written, for reference. The round below is the first implementation pass against this audit.*

---

## 9. Implemented Visual Fixes

Targeted fixes only — no redesign, no layout changes, no new colors invented. Every fix below reuses tokens/hexes that already existed in §1a/§1b. Scope: `index.html`, `css/style.css`, `js/main.js` at the repo root (the `_incoming_update/` staging copy remains untouched, as before).

### Navbar color consistency
- **Root cause:** the "Projects" nav tab carried a `.tab--accent` modifier that hardcoded it to a solid apricot fill at all times, while "About" and "Experience" only turned apricot via the shared `.tab.is-active` scroll-spy state. So one tab looked permanently "selected" regardless of scroll position — the actual source of "different nav items in different colors."
- **Fix:** removed `tab--accent` from the Projects link (`index.html`) and deleted the now-unused `.tab--accent` rule (`css/style.css`). All three tabs now share one base/hover/active system driven entirely by `.tab`, `.tab:hover`, and `.tab.is-active` — same apricot accent, same trigger (scroll position), no exceptions. This applies identically to the mobile menu since it reuses the same `.tab` markup/styles.

### Light-mode hero color fixes
- **"Software Engineering Student" contrast:** `.hero__role` used `--blue` (#8DACBA) as text color, which measured 2.40:1 against the light-mode cream background — a hard WCAG fail and the reason it read as "too soft/unclear." Added `[data-theme="light"] .hero__role { color: var(--on-blue); }` — `--on-blue` is an existing token (already in the same blue family, defined specifically for readable text use). New measured contrast: **11.39:1**. Dark mode is untouched (its `--blue`-on-dark contrast already passed).
- **Greenish tint in the hero background:** the hero's second radial gradient uses `--glow-blue` (dusty blue at low alpha) over the warm cream `--bg`. Blended, that combination computes to a pale, slightly green-leaning gray (green channel highest of the three) — the "greenish/odd tone" being reported. Fixed by halving that glow's effective strength in light mode only: `[data-theme="light"] .hero { background: …, radial-gradient(…, color-mix(in srgb, var(--glow-blue) 45%, transparent), …); }`. Apricot's glow (top-right) is untouched and now reads as the dominant hero tone in light mode, which is warmer and more cohesive with the rest of the cream palette. Dark mode's hero background is unchanged.

### Skills color unification
- **Before:** the "Technical" group used blue for 5 pills and mocha (brown) for one ("Git & GitHub"); the "Tools & Project Management" group used sage for 3 pills and apricot for 2 — four unrelated hues across two small card groups.
- **Fix:** "Git & GitHub" changed from `pill--mocha` to `pill--blue`, so Technical is now one consistent hue. "Tools & Project Management" pills changed from `pill--sage`/`pill--apricot` to a new `pill--soft-a` class — a translucent tint of the section's own accent (`var(--a, var(--blue))`, i.e. the same blue family as About's own section accent), one visual step quieter than the solid Technical pills. Both groups now read as one family (solid blue / soft blue) instead of four competing colors.
- Also fixed `.skills-mini__group:hover`'s border, which was hardcoded to `rgba(206, 134, 144, 0.3)` (apricot) regardless of the About section's own blue accent (flagged in §4/§5 above) — now `color-mix(in srgb, var(--a, var(--blue)) 30%, transparent)`, consistent with the section it's in and no longer a hardcoded literal.

### Project button color fixes ("Visit Site" / "View Prototype")
- **Before:** every project card's CTA button used `.btn--solid`, hardcoded to apricot — so Portfolio, Card Magic, and F1 Driver Lookup all showed the same pink button regardless of their own card accent (blue / mocha / olive respectively at the time).
- **Fix:** added `.btn--accent`, which reads `var(--a, var(--apricot))` / `var(--a-ink, var(--on-apricot))` — the same per-card accent variables the device badge and stage tint already use (set via each card's own `data-accent`). Updated `projectCard()` in `js/main.js` to render CTAs with `btn--accent` instead of `btn--solid`. Verified computed colors: Portfolio's button is now blue (`rgb(141,172,186)`), Card Magic's is berry (`rgb(110,34,54)`), F1 Driver Lookup's is olive (`rgb(119,127,93)`), Lume's stays apricot — each button now matches its own card, in both themes. Hover glow (`box-shadow`) is also tinted from the same `--a`, so the hover state matches too. Schoolo still renders no button at all (unchanged — no real link).

### Card Magic color change
- `accent: "mocha"` → `accent: "berry"` in the `PROJECTS.sites` entry (`js/main.js`). Replaces the muddy brown (`#AA7864`) with the site's existing deep-burgundy token (`#6E2236`), which reads as premium/cohesive next to Portfolio's blue and F1 Driver Lookup's olive rather than clashing. No new hex introduced — reused an existing palette accent already used elsewhere (Ting/Scrutineer Marshal cards, logo dot in light mode).

### Light-mode section background cohesion
- **Root cause:** `.panel`'s background gradient tints its top edge with the section's own accent color (`--a`) at 9%, fading to the panel base. In light mode the panel base is pure white, so About (blue tint), Experience (olive tint), and Projects (mocha/brown tint) each got a visibly different colored wash at the same 9% strength — most noticeably the brownish Projects panel, which read as "off" next to the cooler About/Experience tints.
- **Fix:** added a light-mode-specific override, `[data-theme="light"] .panel`, reducing the tint from 9% to 5% and fading out slightly sooner (55% vs 60%). All three panels now read primarily as white/cream cards with only a faint accent hint at the top — connected by one consistent light base, with each section's identity carried mainly by its folder-tab and top border color instead of a strong background wash. Dark mode's panel gradient (16% tint) is untouched — it wasn't flagged as an issue.

### Bashosh Volunteer Team wording fix
- `tags: ["Contract", "Volunteering"]` → `["Volunteering", "Leadership"]` in `js/main.js` — the first tag is what renders as the card's visible badge, so this was the literal "Contract" label on the card. Also reworded the description from "Contracted as Vice Team Leader…" to "Served as Vice Team Leader…", since the old phrasing implied a contract role in prose as well as in the tag. Role-progression timeline (`roleSteps`) untouched.

### Hardcoded colors replaced with variables
- `.skills-mini__group:hover`'s `rgba(206, 134, 144, 0.3)` (raw apricot RGB, one of the 3 stray literals flagged in §5) → `color-mix(in srgb, var(--a, var(--blue)) 30%, transparent)`.
- Project CTA buttons moved off a hardcoded-to-apricot class (`.btn--solid`) onto a new variable-driven one (`.btn--accent`) — not a literal-to-token fix, but removes a de facto hardcoded color from the button system.
- `.tab--accent`'s hardcoded apricot fill was removed entirely (not converted — it was redundant with `.tab.is-active`, which already used the token correctly).

### Intentionally not touched in this round
- **Footer** — kept exactly as-is, per explicit instruction; it remains hardcoded/"always dark" in both themes (§4, §5). Not a bug, a kept design choice.
- **Project-card hover-overlay gradient and device-mockup chrome** (`#16151a`, `#201e24`, `#45424b`, `#8a8690`, the `#F4EFE7`/`rgba(244,239,231,*)` literals in the overlay) — these were flagged in §5 as hardcoded/theme-invariant, but no visual complaint was raised about them, they're already tinted per-card via `--a` where it matters (the overlay gradient), and changing device "chrome" colors was out of scope for a light-mode/consistency pass. Left as-is.
- **Experience card accents** (`tl-item--{berry|blue|olive|apricot|mocha|sage}`) — verified already-correct: each card's tags/badges/skill-pills already derive from that card's own `--ca` variable (`.tl-card__badge--solid`, `.pill--soft`), so "tags matching the card accent family" was already true before this round. The varied accents across the 9 cards are unchanged, as requested ("keep the timeline").
- **`--bg` vs `--bg-soft`** near-indistinguishability in light mode (§5) — noted but not acted on; no visual complaint tied to it and widening the gap wasn't requested.
- **`--olive`/`--on-olive` 4.22:1 borderline contrast** (§5) — pre-existing, universal (same in both themes), and now also present on F1 Driver Lookup's CTA button via the `.btn--accent` fix above. Left alone: it's a hairline gap (4.22 vs the 4.5 AA threshold), and fixing it would mean adjusting the shared `--olive`/`--on-olive` tokens used across pills, badges, and the Experience section's own accent — a larger blast radius than this round's scope.

Verified in both dark and light mode, desktop (1440px) and mobile (375px), via a scripted Playwright pass: no console/page errors, no horizontal overflow at either width, computed CTA button colors match each project's accent exactly, and the hero role text measures 11.39:1 contrast in light mode.

---

*No changes have been made to the `_incoming_update/` staging copy.*
