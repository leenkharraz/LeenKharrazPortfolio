/* ============================================================
   LEEN KHARRAZ — PORTFOLIO SCRIPTS
   Content lives in two data arrays below (EXPERIENCE, PROJECTS)
   so everything is editable from one place.
   ------------------------------------------------------------
   1. EXPERIENCE data  → rendered into #timeline
   2. PROJECTS data    → rendered into #appsGrid / #sitesGrid
   3. Theme toggle (default light) · nav · reveals · interactions
   ============================================================ */

/* ============================================================
   1. EXPERIENCE — edit here to add roles or paste LinkedIn URLs.
   accent : "berry" | "blue" | "olive" | "apricot" | "mocha" | "sage"
            (controls the dot, border, and both category tags)
   tags   : short category labels (match the card accent automatically)
   orgUrl : leave "" for now; paste the LinkedIn org URL later and the
            organization name becomes a clickable link automatically.
   skills : keep to 2–3 specific, non-duplicated skills.
   ============================================================ */
const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    org: "Ting",
    orgUrl: "https://www.linkedin.com/company/tingsaudi/about/",
    date: "Jun 2026 – Aug 2026",
    sortDate: "2026-06",
    location: "",
    accent: "berry",
    tags: ["Internship", "Full-Stack"],
    desc: "Worked across two company projects, contributing to full-stack development, AI agent and chatbot development, testing, and GitHub-based collaboration while using modern AI development tools throughout the engineering workflow.",
    skills: ["Full-Stack Development", "AI Agent Development", "GitHub Collaboration"],
  },
  {
    role: "Software Engineer",
    org: "Numu for Research & Innovation",
    orgUrl: "https://www.linkedin.com/company/numu-npo/posts/?feedView=all",
    date: "May 2026 – Present",
    sortDate: "2026-05",
    location: "",
    accent: "blue",
    tags: ["Volunteering", "Project Management"],
    desc: "Working on software project planning, requirements analysis, and coordination for research and innovation-focused initiatives.",
    skills: ["Software Project Management", "Requirements Analysis", "Technical Coordination"],
  },
  {
    role: "Event Experience Specialist",
    org: "Local Organising Committee",
    orgUrl: "https://www.linkedin.com/company/saudiloc/",
    date: "Apr 2026",
    sortDate: "2026-04",
    location: "",
    accent: "apricot",
    tags: ["Sports Volunteering", "Event Operations"],
    desc: "Volunteered in event operations and support activities for a major football event, contributing to event experience and coordination.",
    skills: ["Event Operations", "Crowd Support", "Communication"],
  },
  {
    role: "Project Management Co-Leader",
    org: "Artificial Intelligence Club",
    orgUrl: "https://www.linkedin.com/company/ai-club-at-ujj/",
    date: "Jan 2026 – Present",
    sortDate: "2026-01",
    location: "",
    accent: "mocha",
    tags: ["University Club", "Student"],
    desc: "Contributing to AI club activities and project management work within student-led initiatives.",
    skills: ["Project Management", "AI Awareness", "Teamwork"],
  },
  {
    role: "Project Management Coordinator",
    org: "Google Developer Group on Campus",
    orgUrl: "https://www.linkedin.com/company/google-developer-student-club-uj/posts/?feedView=all",
    date: "Nov 2025 – Present",
    sortDate: "2025-11",
    location: "",
    accent: "olive",
    tags: ["University Club", "Project Management"],
    desc: "Contributed to 4+ developer-focused workshops across multiple project management roles, supporting planning, coordination, task ownership, and event execution with the team.",
    skills: ["Event Planning", "Project Coordination", "Team Collaboration"],
  },
  {
    role: "Project Manager",
    org: "Electronic Games and Virtual Reality Club",
    orgUrl: "https://www.linkedin.com/company/egvruj/posts/?feedView=all",
    date: "Sep 2025 – Present",
    sortDate: "2025-09",
    location: "",
    accent: "blue",
    tags: ["University Club", "Project Management"],
    desc: "Contributed to project management activities and supported club initiatives related to electronic games and virtual reality.",
    skills: ["Project Management", "Event Coordination", "Communication"],
  },
  {
    role: "Project Management Leader",
    org: "Drone Club",
    orgUrl: "https://www.linkedin.com/company/drone-club-uj/posts/?feedView=all",
    date: "Sep 2025 – Present",
    sortDate: "2025-09",
    location: "",
    accent: "sage",
    tags: ["University Club", "Leadership"],
    desc: "Led the planning and delivery of 7+ in-person and online workshops, coordinating teams, timelines, responsibilities, and execution to ensure activities were delivered effectively.",
    skills: ["Committee Leadership", "Planning", "Team Coordination"],
  },
  {
    role: "Vice Team Leader",
    org: "Bashosh Volunteer Team",
    orgUrl: "https://www.linkedin.com/company/%D9%81%D8%B1%D9%8A%D9%82-%D8%A8%D8%B4%D9%88%D8%B4-%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D8%B9%D9%8A/posts/?feedView=all",
    date: "Mar 2025 – Nov 2025",
    sortDate: "2025-03",
    location: "",
    accent: "olive",
    tags: ["Volunteering", "Leadership"],
    desc: "Managed 200+ members across 7 departments as Vice Team Leader, overseeing team coordination, supporting departmental operations, and interviewing applicants during recruitment and team expansion.",
    skills: ["Volunteer Management", "Planning", "Leadership"],
    roleSteps: [
      "Co-Leader of Planning and Management Department",
      "Leader of Planning and Management Department",
      "Senior Management Member",
      "Vice Team Leader",
    ],
  },
  {
    role: "Scrutineer Marshal",
    org: "Saudi Automobile & Motorcycle Federation",
    orgUrl: "https://www.linkedin.com/company/samfgov/posts/?feedView=all",
    date: "Mar 2024 – Present",
    sortDate: "2024-03",
    location: "",
    accent: "berry",
    tags: ["Sports Volunteering", "Motorsport", "Technical Inspection"],
    desc: "Participated as a Scrutineer Marshal in 7+ motorsport races and earned 3 motorsport certifications, supporting technical inspection, safety checks, and regulatory compliance across major racing events.",
    skills: ["Technical Inspection", "FIA Compliance", "Motorsport Operations"],
    hasRaces: true,
  },
];

/* ============================================================
   ORG_LOGOS — small organization/company logo shown on the timeline
   card, keyed by the EXPERIENCE entry's exact `org` string (same
   keying convention as EXPERIENCE_AR). Only real, official logos are
   listed here — an org with no entry simply renders without a logo
   (see renderExperience), never a placeholder or invented mark.

   Sources (see final report for the full list):
   - Ting: official site (tingsaudi.com) wordmark
   - Google Developer Group on Campus: GDG's square icon mark (the
     official wordmark is a ~10:1 lockup, illegible at badge size)
   - Local Organising Committee: official AFC Asian Cup Saudi Arabia
     2027 tournament logo (this is the "major football event" the
     entry's description refers to)
   - Saudi Automobile & Motorcycle Federation: official SAMF site logo
   ============================================================ */
const ORG_LOGOS = {
  "Ting": { file: "ting.png" },
  "Google Developer Group on Campus": { file: "gdg.svg" },
  "Local Organising Committee": { file: "afc-asian-cup-2027.svg" },
  "Saudi Automobile & Motorcycle Federation": { file: "samf.svg" },
};

/* ============================================================
   MOTORSPORT_RACES — Scrutineer Marshal race timeline.
   Newest → oldest. The selected-race card shows only: the
   "Selected Race" eyebrow, the race name, the Scrutineer Marshal
   role, and the race photo gallery.

   images: [] — drop real photos into assets/images/motorsport/
   and list their paths here, e.g.:
     images: [
       "assets/images/motorsport/formula-e-2026-1.jpg",
       "assets/images/motorsport/formula-e-2026-2.jpg",
     ]
   The gallery renders automatically for 0, 1, 2, 3, or 4+ images —
   no layout code needs to change when photos are added.
   ============================================================ */
const MOTORSPORT_RACES = [
  { id: "formula-e-2026", name: "Formula E", date: "Feb 2026", images: ["assets/images/motorsport/formula-e-2026-1.JPG"] },
  { id: "f4-2025", name: "F4", date: "Dec 2025", images: ["assets/images/motorsport/f4-2025-1.jpeg"] },
  { id: "wrc-2025", name: "WRC", date: "Nov 2025", images: ["assets/images/motorsport/wrc-2025-1.jpeg"] },
  { id: "formula-1-2025", name: "Formula 1", date: "Apr 2025", images: ["assets/images/motorsport/formula-1-2025-1.jpeg"] },
  { id: "saudi-rally-2025", name: "Saudi Arabia Rally", date: "Apr 2025", images: ["assets/images/motorsport/saudi-rally-2025-1.jpeg"] },
  { id: "formula-e-2025", name: "Formula E", date: "Feb 2025", images: ["assets/images/motorsport/formula-e-2025-1.jpeg"] },
  { id: "gt-fanatec-2024", name: "GT Fanatec", date: "Nov 2024", images: ["assets/images/motorsport/gt-fanatec-2024-1.jpeg"] },
  { id: "formula-2-2024", name: "Formula 2", date: "Mar 2024", images: ["assets/images/motorsport/formula-2-2024-1.jpeg"] },
].map((race) => ({
  role: "Scrutineer Marshal",
  ...race,
}));

const esc = (s) => String(s).replace(/[&<>\"]/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Language state (English is always the first-visit
   default — never inferred from browser/device/OS locale; Arabic
   only activates from an explicit click, then persists). Declared at
   module level (not inside the IIFE below) so the motorsport render
   functions here can share it too. ---------- */
let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (e) {}
let currentLang = savedLang === "ar" ? "ar" : "en";

/* UI-string lookup; falls back to English, then to the key itself,
   so a missing translation never renders blank. */
function t(key) {
  return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key;
}
/* Per-entry content lookup: returns the Arabic override for `field`
   from `dict[lookupKey]` when Arabic is active and one exists,
   otherwise the original English `fallback` value. */
function tField(dict, lookupKey, field, fallback) {
  if (currentLang !== "ar") return fallback;
  const entry = dict[lookupKey];
  return (entry && entry[field] !== undefined) ? entry[field] : fallback;
}

let selectedRaceIndex = 0;

function renderMotorsportTimeline() {
  const list = document.getElementById("motorsportTimeline");
  if (!list) return;
  list.innerHTML = MOTORSPORT_RACES.map((race, i) => {
    const name = tField(MOTORSPORT_AR, race.id, "name", race.name);
    const date = tField(MOTORSPORT_AR, race.id, "date", race.date);
    const isSelected = i === selectedRaceIndex;
    return `
    <li class="race-strip__item">
      <button type="button" class="race-strip__node${isSelected ? " is-selected" : ""}"
        data-index="${i}" aria-pressed="${isSelected ? "true" : "false"}" aria-controls="raceDetail">
        <span class="race-strip__dot" aria-hidden="true"></span>
        <span class="race-strip__date">${esc(date)}</span>
        <span class="race-strip__name">${esc(name)}</span>
      </button>
    </li>`;
  }).join("");
  positionRaceIndicators(selectedRaceIndex);
  renderRaceDetail(selectedRaceIndex);

  list.querySelectorAll(".race-strip__node").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectRace(Number(btn.dataset.index));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      btn.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
    });
  });
}

/* Car + connector both sit at the same proportional position along the
   track/list (index / count), so no scroll-position measuring is
   needed — it stays correct on resize, on scroll, at any width. */
function positionRaceIndicators(index) {
  const total = MOTORSPORT_RACES.length;
  const pct = total > 1 ? (index / (total - 1)) * 100 : 50;
  const car = document.getElementById("raceCar");
  const connector = document.getElementById("raceConnector");
  if (car) car.style.left = pct + "%";
  if (connector) connector.style.left = pct + "%";
}

function renderRaceGallery(images, raceName, roleLabel) {
  const count = images.length;
  if (count === 0) {
    return `
      <div class="race-gallery" data-count="0">
        <div class="race-gallery__placeholder">
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/>
            <circle cx="8.5" cy="10" r="1.6" fill="currentColor"/>
            <path d="M4 16.5 9 12l3.5 3.2L16 12l4.5 5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>${esc(t("motorsport.photosComingSoon"))}</span>
        </div>
      </div>`;
  }
  const alt = (n) => currentLang === "ar"
    ? esc(`${raceName} — ${roleLabel}، صورة ${n}`)
    : esc(`${raceName} — ${roleLabel}, photo ${n}`);
  const img = (src, n) => `<div class="race-gallery__item"><img src="${esc(src)}" alt="${alt(n)}" loading="lazy"></div>`;
  if (count <= 3) {
    return `<div class="race-gallery" data-count="${count}">${images.map((src, i) => img(src, i + 1)).join("")}</div>`;
  }
  const extra = count - 3;
  return `
    <div class="race-gallery" data-count="4">
      ${img(images[0], 1)}
      ${img(images[1], 2)}
      <div class="race-gallery__item race-gallery__item--more">
        <img src="${esc(images[2])}" alt="${alt(3)}" loading="lazy">
        <span class="race-gallery__more">+${extra}</span>
      </div>
    </div>`;
}

function renderRaceDetail(index) {
  const el = document.getElementById("raceDetail");
  if (!el) return;
  const race = MOTORSPORT_RACES[index];
  const name = tField(MOTORSPORT_AR, race.id, "name", race.name);
  const role = currentLang === "ar" ? MOTORSPORT_ROLE_AR : race.role;
  /* Replacing innerHTML recreates .race-detail__card, so its CSS
     entrance animation (a subtle fade + rise) replays on each selection. */
  el.innerHTML = `
    <div class="race-detail__card">
      ${renderRaceGallery(race.images, name, role)}
      <div class="race-detail__info">
        <span class="race-detail__eyebrow">${esc(t("motorsport.selectedRace"))}</span>
        <h4 class="race-detail__name">${esc(name)}</h4>
        <p class="race-detail__role">${esc(role)}</p>
      </div>
    </div>`;
}

function selectRace(index) {
  if (index === selectedRaceIndex) return;
  selectedRaceIndex = index;
  document.querySelectorAll(".race-strip__node").forEach((btn) => {
    const isSel = Number(btn.dataset.index) === index;
    btn.classList.toggle("is-selected", isSel);
    btn.setAttribute("aria-pressed", String(isSel));
  });
  positionRaceIndicators(index);
  renderRaceDetail(index);
}

/* ============================================================
   TECH_ICONS — single logo lookup shared by every technology/tool
   chip on the site: project tag rows (renderTagOrIcon) AND the About
   section's Skills lists (renderSkillIcon, SKILLS below). One map,
   one visual component (.tech-icon, styled in css/style.css) — a
   technology's logo, size, and tooltip behavior are defined once and
   look identical everywhere it appears.

   Lookup is case/punctuation-insensitive so it matches the same name
   spelled identically in English and Arabic data — technology names
   are kept in Latin script in both, so one map covers both languages.

   Add a new technology by dropping its logo file (SVG preferred, PNG
   is fine — see excel/word/powerpoint, which only exist as official
   PNGs) in assets/icons/technologies/ and adding one line below.
   ============================================================ */
const TECH_ICONS = {
  javascript: { name: "JavaScript", file: "javascript.svg" },
  nextjs:     { name: "Next.js",    file: "nextdotjs.svg" },
  figma:      { name: "Figma",      file: "figma.svg" },
  pwa:        { name: "PWA",        file: "pwa.svg" },
  replit:     { name: "Replit",     file: "replit.svg" },
  github:     { name: "GitHub",     file: "github.svg" },
  claudecode: { name: "Claude Code", file: "claudecode.svg" },
  codex:      { name: "Codex",      file: "codex.svg" },
  gemini:     { name: "Gemini",     file: "gemini.svg" },
  vercel:     { name: "Vercel",     file: "vercel.svg" },
  html:       { name: "HTML",       file: "html5.svg" },
  css:        { name: "CSS",        file: "css.svg" },
  nodejs:     { name: "Node.js",    file: "nodedotjs.svg" },
  express:    { name: "Express",    file: "express.svg" },
  mysql:      { name: "MySQL",      file: "mysql.svg" },
  python:     { name: "Python",     file: "python.svg" },
  notion:     { name: "Notion",     file: "notion.svg" },
  clickup:    { name: "ClickUp",    file: "clickup.svg" },
  canva:      { name: "Canva",      file: "canva.svg" },
  mondaycom:  { name: "Monday.com", file: "monday.svg" },
  excel:      { name: "Excel",      file: "excel.png" },
  word:       { name: "Word",       file: "word.png" },
  powerpoint: { name: "PowerPoint", file: "powerpoint.png" },
  /* No official/recognizable logo exists for a bare "API" — clean
     text-in-chip fallback instead of a fake logo (see renderTechChip). */
  api:        { name: "API", fallbackText: "API" },
};
function techIconKey(tag) {
  return String(tag).toLowerCase().replace(/[^a-z0-9]/g, "");
}
/* Renders the visible face of one .tech-icon chip — a real logo <img>
   or, for an entry with no `file` (see TECH_ICONS.api), a short text
   mark inside the exact same square container, so a fallback never
   reads as a stray leftover next to real logos. tooltip + aria-label
   carry the name either way, since the visible face is icon-only. */
function renderTechChip(icon) {
  const inner = icon.file
    ? `<img src="assets/icons/technologies/${icon.file}" alt="" aria-hidden="true" width="20" height="20" loading="lazy">`
    : `<span class="tech-icon__fallback" aria-hidden="true">${esc(icon.fallbackText)}</span>`;
  return `<span class="tech-icon" tabindex="0" aria-label="${esc(icon.name)}" data-tip="${esc(icon.name)}">${inner}</span>`;
}
/* Project tag → chip. Falls back to the legacy text pill only for a
   tag that isn't in TECH_ICONS at all — a safety net against a data
   typo, not a design path; every tag currently in PROJECTS/
   PROJECTS_AR has an entry above so this should never actually
   render for a project card. */
function renderTagOrIcon(tag, accent) {
  const icon = TECH_ICONS[techIconKey(tag)];
  if (!icon) return `<span class="pill pill--${accent}">${esc(tag)}</span>`;
  return renderTechChip(icon);
}
/* Skill name → chip, for the About section's Skills lists (see
   SKILLS below). Every name listed there is expected to resolve via
   TECH_ICONS; if one somehow doesn't, this still renders a normal
   chip labeled with the raw name rather than a broken image. */
function renderSkillIcon(name) {
  return renderTechChip(TECH_ICONS[techIconKey(name)] || { name, fallbackText: name });
}

/* ============================================================
   SKILLS — About section's two icon rows (#technicalSkills,
   #toolsSkills in index.html). Same list in both languages: these are
   technology/tool names, not prose, so nothing here is translated —
   see renderSkillIcon above and TECH_ICONS for the logos.
   ============================================================ */
const SKILLS = {
  technical: [
    "HTML", "CSS", "JavaScript", "Node.js", "Figma", "MySQL", "Python",
    "Replit", "Codex", "Claude Code", "GitHub",
    /* Confirmed by actual project data, not invented — Vercel hosts
       SANAD (js/i18n.js PROJECTS_AR.SANAD.tags), and API is F1 Driver
       Lookup's own tag (PROJECTS.sites). */
    "Vercel", "API",
  ],
  tools: ["Excel", "Word", "PowerPoint", "Canva", "Monday.com", "Notion", "ClickUp"],
};
function renderSkillIcons() {
  const technical = document.getElementById("technicalSkills");
  const tools = document.getElementById("toolsSkills");
  if (technical) technical.innerHTML = SKILLS.technical.map(renderSkillIcon).join("");
  if (tools) tools.innerHTML = SKILLS.tools.map(renderSkillIcon).join("");
}

/* ============================================================
   2. PROJECTS — grouped into apps (iPhone) and sites (browser).
   frame     : "phone" | "browser"
   accent    : palette accent used for the badge + stage tint
   link      : full URL, or "#" for a placeholder (button auto-disables)
   github    : optional repo URL; adds a secondary source-code button
   hackathon : optional hackathon name; adds a "Hackathon" pill in the meta row
   wide      : optional; spans both grid columns on large screens
               (used for the 3rd Website card only — see .device-card--wide)
   tags      : meaningful, no duplicated "Tech Tech"; a tag matching
               TECH_ICONS above renders as a logo chip instead of text
               (see renderTagOrIcon)
   screen    : optional path to a real screenshot shown inside the
               device mockup; omit it to show the name-label preview.
   ============================================================ */
const PROJECTS = {
  apps: [
    {
      name: "Schoolo",
      type: "Mobile App · Startup Concept",
      badge: "App",
      accent: "berry",
      frame: "phone",
      role: "Co-founder / Software Engineering Student",
      desc: "A school search and comparison platform helping parents in Saudi Arabia find and compare private schools in one place — organizing fees, curriculum, facilities, admissions, and reviews into a clearer experience.",
      tags: ["Replit", "Codex", "Claude Code", "GitHub"],
      link: "#", // [LEEN: add link when available]
    },
    {
      name: "Lume",
      type: "Mobile App · UI/UX Project",
      badge: "App",
      accent: "apricot",
      frame: "phone",
      role: "UI/UX Designer",
      desc: "A UI/UX prototype designed in Figma for an event-planning mobile app — helping users organize events, manage tasks, and coordinate details through a clean, structured interface.",
      tags: ["Figma"],
      link: "https://www.figma.com/design/zTjzMQZaucXDS3mLRmfJbc/Lume-Prototype?node-id=0-1",
    },
    {
      name: "SANAD",
      type: "Mobile App · KSCDR Hackathon",
      badge: "App",
      accent: "sage",
      frame: "phone",
      role: "Solo Developer & Designer",
      hackathon: "KSCDR Hackathon",
      desc: "Independently designed and developed for the KSCDR Hackathon, SANAD is an accessibility-focused companion app for people who are Deaf or hard of hearing, blind or low vision, or speech-impaired — built end-to-end by me, from live captioning and text-to-speech to an emergency SOS flow.",
      tags: ["Claude Code", "Vercel", "HTML", "CSS"],
      link: "https://sanad-coral.vercel.app/",
      github: "https://github.com/leenkharraz/Sanad",
    },
  ],
  sites: [
    {
      name: "F1 Driver Lookup",
      type: "Website · API Project",
      badge: "Website",
      accent: "olive",
      frame: "browser",
      role: "Frontend Developer",
      desc: "A web app to search and explore Formula 1 drivers by season, using the Ergast API to fetch motorsport data and dynamically render driver information on the page.",
      tags: ["API", "HTML", "CSS", "JavaScript"],
      link: "https://leenkharraz.github.io/F1-Driver-Lookup/",
    },
    {
      name: "Card Magic",
      type: "Website",
      badge: "Website",
      accent: "berry",
      frame: "browser",
      role: "Web Developer",
      desc: "A collaborative web app (group project) for creating and customizing digital greeting cards for celebrations, anniversaries, birthdays, and special events — demonstrating teamwork and interactive functionality.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
      link: "https://leenkharraz.github.io/CardMagic/",
    },
    {
      name: "FAHEEM",
      type: "Website · Tuwaiq × Google Hackathon",
      badge: "Website",
      accent: "blue",
      frame: "browser",
      role: "Web Developer",
      hackathon: "Tuwaiq × Google Hackathon",
      desc: "Built for the Tuwaiq × Google Hackathon, FAHEEM is an AI-powered classroom analytics platform that turns raw assessment scores into learning-gap insights, student groupings, and prioritized intervention plans for teachers, with a fully Arabic, RTL-first interface.",
      tags: ["Gemini", "Codex", "CSS", "JavaScript"],
      link: "https://faheem-nine.vercel.app/",
      github: "https://github.com/leenkharraz/Faheem",
      wide: true,
    },
  ],
};

(() => {
  "use strict";
  const root = document.documentElement;
  const esc = (s) => String(s).replace(/[&<>\"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Render EXPERIENCE timeline (sortable newest/oldest) ---------- */
  function sortedExperience(order) {
    return EXPERIENCE.slice().sort((a, b) =>
      order === "asc" ? a.sortDate.localeCompare(b.sortDate) : b.sortDate.localeCompare(a.sortDate));
  }
  function renderExperience(order) {
    const ol = document.getElementById("timeline");
    if (!ol) return;
    ol.innerHTML = sortedExperience(order).map((x) => {
      /* EXPERIENCE_AR is keyed by the English `org` string (already
         unique per entry), so the EXPERIENCE array above never needs
         to change or duplicate for Arabic — see js/i18n.js. */
      const xRole = tField(EXPERIENCE_AR, x.org, "role", x.role);
      const xOrg = tField(EXPERIENCE_AR, x.org, "org", x.org);
      const xDate = tField(EXPERIENCE_AR, x.org, "date", x.date);
      const xDesc = tField(EXPERIENCE_AR, x.org, "desc", x.desc);
      const xTags = tField(EXPERIENCE_AR, x.org, "tags", x.tags);
      const xSkills = tField(EXPERIENCE_AR, x.org, "skills", x.skills);
      const xRoleSteps = tField(EXPERIENCE_AR, x.org, "roleSteps", x.roleSteps);

      const firstTag = xTags[0] || "";
      const tags = firstTag
        ? `<span class="tl-card__badge tl-card__badge--solid">${esc(firstTag)}</span>`
        : "";
      const org = x.orgUrl
        ? `<a class="tl-card__org tl-card__org--link" href="${esc(x.orgUrl)}" target="_blank" rel="noopener noreferrer">${esc(xOrg)}</a>`
        : `<span class="tl-card__org">${esc(xOrg)}</span>`;
      const loc = x.location ? `<span class="tl-card__loc">${esc(x.location)}</span>` : "";
      const skills = xSkills.map((s) => `<span class="pill pill--soft">${esc(s)}</span>`).join("");
      const roleTimeline = xRoleSteps && xRoleSteps.length
        ? `<div class="tl-card__roles">
            <span class="tl-card__roles-label">${esc(t("experience.roleProgression"))}</span>
            <ol class="mini-steps">${xRoleSteps.map((r) => `<li class="mini-steps__item">${esc(r)}</li>`).join("")}</ol>
          </div>`
        : "";
      const racesButton = x.hasRaces
        ? `<div class="tl-card__actions"><button type="button" class="btn btn--small btn--solid" id="viewRacesBtn" aria-expanded="false" aria-controls="raceStrip">${esc(t("experience.viewRaces"))}</button></div>`
        : "";
      /* Rendered as a sibling of .tl-card (not nested inside it) so it
         can visually overlap the card's edge — .tl-card has
         overflow:hidden, which would otherwise clip it. */
      const orgLogo = ORG_LOGOS[x.org]
        ? `<div class="tl-logo"><img src="assets/icons/organizations/${ORG_LOGOS[x.org].file}" alt="" aria-hidden="true" loading="lazy"></div>`
        : "";
      return `
      <li class="tl-item tl-item--${x.accent}">
        <div class="tl-dot" aria-hidden="true"></div>
        ${orgLogo}
        <article class="tl-card">
          <button class="tl-card__head" aria-expanded="false">
            <div class="tl-card__tags">${tags}</div>
            <span class="tl-card__dates">${esc(xDate)}</span>
            <h3 class="tl-card__role">${esc(xRole)}</h3>
            ${org}${loc}
          </button>
          <div class="tl-card__body">
            <p class="tl-card__desc">${esc(xDesc)}</p>
            <div class="tl-card__skills">
              <span class="tl-card__skills-label">${esc(t("experience.topSkills"))}</span>
              <div class="tl-card__skills-pills">${skills}</div>
            </div>
            ${roleTimeline}
            ${racesButton}
          </div>
        </article>
      </li>`;
    }).join("");
  }

  /* ---------- (Re)bind interactions that live inside the re-rendered timeline ---------- */
  function bindTimelineInteractions() {
    document.querySelectorAll(".tl-card__head").forEach((head) => {
      head.addEventListener("click", () => {
        const card = head.closest(".tl-card");
        const open = card.classList.toggle("is-open");
        head.setAttribute("aria-expanded", String(open));
      });
    });

    const raceBtn = document.getElementById("viewRacesBtn");
    const raceStrip = document.getElementById("raceStrip");
    if (raceBtn && raceStrip) {
      raceBtn.setAttribute("aria-expanded", String(!raceStrip.hidden));
      raceBtn.addEventListener("click", () => {
        raceStrip.hidden = false;
        raceBtn.setAttribute("aria-expanded", "true");
        raceStrip.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
      });
    }

    const tlItems = document.querySelectorAll(".tl-item");
    tlItems.forEach((item, i) => item.style.setProperty("--d", Math.min(i * 0.06, 0.4) + "s"));
    const tlObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); tlObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.2 });
    tlItems.forEach((el) => tlObserver.observe(el));
  }

  /* ---------- Experience sort control ---------- */
  function bindExperienceSort() {
    const sortBtns = document.querySelectorAll(".exp-sort__btn");
    sortBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("is-active")) return;
        sortBtns.forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        renderExperience(btn.dataset.sort);
        bindTimelineInteractions();
      });
    });
  }

  /* ---------- Render PROJECTS (apps + sites) ---------- */
  function projectCard(p) {
    const frameClass = p.frame === "browser" ? "device-card--browser" : "device-card--phone";
    const wideClass = p.wide ? " device-card--wide" : "";
    const isBrowser = frameClass === "device-card--browser";
    const hasLink = !!(p.link && p.link !== "#");
    const isAr = currentLang === "ar";
    const arrow = isAr ? "←" : "→";

    /* PROJECTS_AR is keyed by the English `name` (already unique per
       entry), so the PROJECTS data above never needs to change or
       duplicate for Arabic — see js/i18n.js. */
    const pName = tField(PROJECTS_AR, p.name, "name", p.name);
    const pType = tField(PROJECTS_AR, p.name, "type", p.type);
    const pRole = tField(PROJECTS_AR, p.name, "role", p.role);
    const pDesc = tField(PROJECTS_AR, p.name, "desc", p.desc);
    const pTags = tField(PROJECTS_AR, p.name, "tags", p.tags);
    const pHackathon = tField(PROJECTS_AR, p.name, "hackathon", p.hackathon);
    const badgeText = p.badge === "Website" ? t("projects.badgeWebsite") : t("projects.badgeApp");
    const cta = (isBrowser ? t("projects.ctaVisitSite") : t("projects.ctaViewPrototype")) + " " + arrow;

    const tags = pTags.map((tag) => renderTagOrIcon(tag, p.accent)).join("");
    const hackathonRow = pHackathon
      ? `<span class="k">${esc(t("projects.metaHackathon"))}</span><span class="device-tags"><span class="pill pill--${p.accent}">${esc(pHackathon)}</span></span>`
      : "";
    const screen = p.screen
      ? `<div class="device-screen project-screen">
          <img class="device-screen__img" src="${esc(p.screen)}" alt="${esc(pName)} — site preview" loading="lazy">
        </div>`
      : `<div class="device-screen project-screen">
        <span class="project-screen__label">${esc(pName)}</span>
      </div>`;
    const frame = isBrowser
      ? `<div class="browser">
           <div class="browser__bar" aria-hidden="true">
             <span class="browser__dot"></span><span class="browser__dot"></span><span class="browser__dot"></span>
             <span class="browser__url">${esc(hasLink ? p.link.replace(/^https?:\/\//, "") : "…")}</span>
           </div>${screen}
         </div>`
      : `<div class="iphone">${screen}</div>`;
    const ctaHtml = hasLink
      ? `<a class="btn btn--small btn--accent" href="${esc(p.link)}" target="_blank" rel="noopener">${cta}</a>`
      : "";
    const githubHtml = p.github
      ? `<a class="btn btn--small btn--ghost" href="${esc(p.github)}" target="_blank" rel="noopener">${esc(t("projects.ctaGithub"))} ${arrow}</a>`
      : "";
    const actionsHtml = (ctaHtml || githubHtml)
      ? `<div class="device-overlay__actions">${ctaHtml}${githubHtml}</div>`
      : "";
    return `
      <article class="device-card ${frameClass}${wideClass}" data-accent="${p.accent}" data-type="${esc(p.badge.toLowerCase())}" tabindex="0" aria-label="${esc(pName)} — ${esc(pType)}${esc(t("projects.cardAriaSuffix"))}">
        <div class="device-stage">
          <span class="device-badge${isBrowser ? " device-badge--alt" : ""}">${esc(badgeText)}</span>
          ${frame}
          <div class="device-overlay">
            <p class="device-overlay__type">${esc(pType)}</p>
            <h3 class="device-overlay__name">${esc(pName)}</h3>
            <p class="device-overlay__desc">${esc(pDesc)}</p>
            <div class="device-overlay__meta">
              <span class="k">${esc(t("projects.metaTech"))}</span><span class="device-tags">${tags}</span>
              <span class="k">${esc(t("projects.metaRole"))}</span><span>${esc(pRole)}</span>
              ${hackathonRow}
            </div>
            ${actionsHtml}
          </div>
        </div>
      </article>`;
  }
  function renderProjects() {
    const apps = document.getElementById("appsGrid");
    const sites = document.getElementById("sitesGrid");
    if (apps) apps.innerHTML = PROJECTS.apps.map(projectCard).join("");
    if (sites) sites.innerHTML = PROJECTS.sites.map(projectCard).join("");
  }

  /* ---------- "Applications" / "Websites" pills: jump straight to that
     group's first card, clearing the sticky nav (both groups always stay
     rendered — this is navigation, not filtering). ---------- */
  function bindProjectGroupJumps() {
    document.querySelectorAll(".showcase__group-kicker[data-scroll-to]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const heading = document.getElementById(btn.dataset.scrollTo);
        if (!heading) return;
        const nav = document.querySelector(".nav");
        const navH = nav ? nav.getBoundingClientRect().height : 0;
        const top = heading.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top: Math.max(top, 0), behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    });
  }

  /* ---------- Hero code-editor typing animation ----------
     String VALUES are translated (via HERO_CODE_AR); JS keys and
     punctuation stay as code, per "code/keys aren't localized content". */
  function heroCodeStr(en) { return isAr() ? (HERO_CODE_AR[en] || en) : en; }
  function isAr() { return currentLang === "ar"; }
  /* Bumped on every call so an in-flight typing animation from a
     previous call (e.g. the initial English type-in, still mid-way
     through its setTimeout chain) can tell it's been superseded and
     stop — otherwise a language switch mid-animation would leave its
     old characters appended after the new content once its stale
     step() ticks kept firing. */
  let heroTypeGen = 0;
  function typeHeroCode(instant) {
    const codeEl = document.getElementById("typedCode");
    if (!codeEl) return;
    const myGen = ++heroTypeGen;
    /* `focus` has a different item count in Arabic (2) than English (3),
       so — unlike the other fields above, which are simple 1:1 swaps via
       heroCodeStr()/HERO_CODE_AR — it's built directly here as its own
       list per language. English list is unchanged from before. */
    const focusItems = isAr()
      ? ["تطوير المواقع", "إدارة المشاريع"]
      : ["Software Development", "Project Management", "Backend & API Integration"];
    const focusTokens = [];
    focusItems.forEach((item, i) => {
      focusTokens.push({ t: `"${item}"`, c: "str" });
      if (i < focusItems.length - 1) focusTokens.push({ t: ", ", c: "" });
    });
    const tokens = [
      { t: "const ", c: "kw" }, { t: "leen", c: "var" }, { t: " = {\n  ", c: "" },
      { t: "name", c: "key" }, { t: ": ", c: "" }, { t: `"${heroCodeStr("Leen Kharraz")}"`, c: "str" }, { t: ",\n  ", c: "" },
      { t: "role", c: "key" }, { t: ": ", c: "" }, { t: `"${heroCodeStr("Software Engineering Student")}"`, c: "str" }, { t: ",\n  ", c: "" },
      { t: "openTo", c: "key" }, { t: ": [", c: "" },
      { t: `"${heroCodeStr("Internships")}"`, c: "str" }, { t: ", ", c: "" },
      { t: `"${heroCodeStr("Projects")}"`, c: "str" }, { t: ", ", c: "" },
      { t: `"${heroCodeStr("Learning Opportunities")}"`, c: "str" }, { t: "],\n  ", c: "" },
      { t: "focus", c: "key" }, { t: ": [", c: "" },
      ...focusTokens,
      { t: "]\n};", c: "" },
    ];
    if (prefersReducedMotion || instant) {
      codeEl.innerHTML = tokens.map((tok) => tok.c ? `<span class="tok tok--${tok.c}">${esc(tok.t)}</span>` : esc(tok.t)).join("");
      return;
    }
    let ti = 0, ci = 0, span = null;
    (function step() {
      if (myGen !== heroTypeGen) return; // superseded by a newer call — stop
      if (ti >= tokens.length) return;
      const tok = tokens[ti];
      if (ci === 0) {
        span = tok.c ? document.createElement("span") : null;
        if (span) { span.className = `tok tok--${tok.c}`; codeEl.appendChild(span); }
      }
      const ch = tok.t[ci];
      if (span) span.textContent += ch; else codeEl.appendChild(document.createTextNode(ch));
      ci++;
      if (ci >= tok.t.length) { ti++; ci = 0; }
      setTimeout(step, 16 + Math.random() * 22);
    })();
  }

  renderSkillIcons();
  renderExperience("desc");
  bindTimelineInteractions();
  bindExperienceSort();
  renderMotorsportTimeline();
  renderProjects();
  bindProjectGroupJumps();
  setTimeout(typeHeroCode, 350);

  /* ---------- Theme toggle (default dark, persisted) ---------- */
  const toggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (!toggle) return;
    const nowDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(!nowDark));
    toggle.setAttribute("aria-label", nowDark ? t("nav.themeToLight") : t("nav.themeToDark"));
  }
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  applyTheme(saved === "light" ? "light" : "dark");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Logo — always acts as a home button ----------
     href="#top" alone is unreliable here: the header is the anchor
     target AND position:sticky, so the browser's fragment-scroll math
     uses the header's stuck (already-at-top) position and can land
     mid-page instead of at the hero. Scroll explicitly instead. */
  const brand = document.querySelector(".nav__brand");
  if (brand) {
    brand.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Mobile hamburger ---------- */
  const burger = document.getElementById("navBurger");
  const tabs = document.getElementById("navTabs");
  if (burger && tabs) {
    burger.addEventListener("click", () => {
      const open = tabs.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? t("nav.closeMenu") : t("nav.openMenu"));
    });
    tabs.addEventListener("click", (e) => {
      if (e.target.matches("a") && tabs.classList.contains("is-open")) {
        tabs.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Scroll reveals ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Project device cards — tap to reveal on touch ----------
     Named (not an inline forEach) so it can be re-run after renderProjects()
     rebuilds the cards on a language switch — otherwise the fresh cards
     would lose their click/keyboard handlers. ---------- */
  function bindDeviceCardInteractions() {
    document.querySelectorAll(".device-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return; // let the CTA link work
        card.classList.toggle("is-open");
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (e.target.closest("a")) return;
          e.preventDefault();
          card.classList.toggle("is-open");
        }
      });
    });
  }
  bindDeviceCardInteractions();

  /* ---------- Language toggle (English default; an explicit Arabic
     choice persists via localStorage). Both structural HTML order and
     the FAHEEM/SANAD/website layout are untouched by this — only text
     content and direction change. ---------- */
  const langToggle = document.getElementById("langToggle");
  function updateLangToggleLabel() {
    if (!langToggle) return;
    const label = currentLang === "en" ? UI.en["nav.langToArabic"] : UI.ar["nav.langToEnglish"];
    langToggle.setAttribute("aria-label", label);
    langToggle.setAttribute("title", label);
  }
  function applyStaticTranslations() {
    document.title = t("meta.title");
    const metaDesc = document.getElementById("metaDescription");
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.id === "aboutBio") return; // interpolated separately below (keeps the <strong>)
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      if (el.id === "langToggle") return; // state-dependent, see updateLangToggleLabel
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      if (el.id === "langToggle") return;
      el.setAttribute("title", t(el.dataset.i18nTitle));
    });

    const bioEl = document.getElementById("aboutBio");
    if (bioEl) bioEl.innerHTML = esc(t("about.bio")).replace("{uj}", `<strong>${esc(t("about.uj"))}</strong>`);

    if (burger) {
      const isMenuOpen = tabs && tabs.classList.contains("is-open");
      burger.setAttribute("aria-label", isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu"));
    }
    updateLangToggleLabel();
  }
  function setLanguage(lang) {
    const nextLang = lang === "ar" ? "ar" : "en";
    if (nextLang === currentLang) return;
    const prevScrollY = window.scrollY; // switching language must not jump the page to top

    currentLang = nextLang;
    try { localStorage.setItem("lang", currentLang); } catch (e) {}
    root.lang = currentLang;
    root.dir = currentLang === "ar" ? "rtl" : "ltr";

    applyStaticTranslations();
    applyTheme(root.getAttribute("data-theme")); // refresh its aria-label text only — theme itself is untouched

    const activeSort = document.querySelector(".exp-sort__btn.is-active");
    renderExperience(activeSort ? activeSort.dataset.sort : "desc");
    bindTimelineInteractions();

    renderMotorsportTimeline();

    renderProjects();
    bindDeviceCardInteractions();

    typeHeroCode(true); // instant re-render, no retyping animation on a language switch

    window.scrollTo(0, prevScrollY);
  }
  if (langToggle) {
    langToggle.addEventListener("click", () => setLanguage(currentLang === "en" ? "ar" : "en"));
  }
  // Apply on load too: covers a returning visitor whose earlier explicit
  // choice of Arabic was persisted — English stays the default otherwise.
  root.lang = currentLang;
  root.dir = currentLang === "ar" ? "rtl" : "ltr";
  applyStaticTranslations();

  /* ---------- Active nav tab highlighting ---------- */
  if (tabs) {
    const navLinks = Array.from(tabs.querySelectorAll("a[href^='#']"));
    const sectionsById = {};
    navLinks.forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      if (section) sectionsById[id] = link;
    });
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = sectionsById[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(sectionsById).forEach((id) => activeObserver.observe(document.getElementById(id)));
  }
})();
