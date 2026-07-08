# Leen Kharraz — Portfolio

Single-page, responsive portfolio with a layered folder/file visual system: decorative stacked folder-tab headers, colored section panels, and rounded content cards. Light cream base by default with a dark toggle. Plain HTML/CSS/JS.

## Sections
Hero · About Me · Experience (timeline) · Projects · Footer (icon-only contact)

## Structure
```
/index.html
/css/style.css   (dual theme in :root + [data-theme="light"], commented by section)
/js/main.js      (theme toggle, nav, reveals, timeline, folder interactions)
/assets/images/  (placeholder folder)
```

## Deploy to GitHub Pages
```bash
git init                 # skip if already initialized
git add .
git commit -m "Cleanup: Leen Kharraz, LK. logo, trimmed sections, footer contact"
git remote add origin https://github.com/leenkharraz/LeenKharrazPortfolio.git
git branch -M main
git push -u origin main
```
Then: repo → Settings → Pages → Deploy from branch → `main` / root.
HTTPS push asks for a personal access token (GitHub → Settings → Developer settings
→ Personal access tokens → `repo` scope), not your account password.

## Placeholders still needing you  [LEEN: ...]
- Experience → Internship entry: title, company, dates, description.
- Projects & Experience: all content lives in the EXPERIENCE and PROJECTS data arrays at the top of js/main.js. Edit a role, project, tags, links there. Paste LinkedIn org URLs into each experience's orgUrl field (empty for now). Drop screenshots into /assets/images/projects/ using the filenames referenced in PROJECTS (e.g. schoolo.jpg, lume.jpg, portfolio.jpg, cardmagic.jpg, f1lookup.jpg).

Contact links live in the footer (GitHub, LinkedIn, X). No phone number, no email shown.
No invented content — real GitHub/LinkedIn/X handles come from your own materials.
