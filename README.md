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
- Projects: for each device card, set the frame (device-card--phone / device-card--browser), the badge label (App/Website/Dashboard/Case Study), drop a screenshot into /assets/images/projects/ (p1.jpg…p4.jpg), and fill name/description/tech/role/link.

Contact links live in the footer (GitHub, LinkedIn, X). No phone number, no email shown.
No invented content — real GitHub/LinkedIn/X handles come from your own materials.
