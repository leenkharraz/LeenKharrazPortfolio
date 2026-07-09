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
    role: "Software Engineering Intern — Backend",
    org: "Ting",
    orgUrl: "https://www.linkedin.com/company/tingsaudi/about/",
    date: "Jun 2026 – Present",
    sortDate: "2026-06",
    location: "",
    accent: "berry",
    tags: ["Internship", "Backend"],
    desc: "Supporting backend development work, API-related tasks, branch management, and technical coordination within the project.",
    skills: ["Backend Operations", "Branch Management", "API Integration"],
  },
  {
    role: "Software Engineer",
    org: "Numu for Research & Innovation | نمو للبحث والابتكار",
    orgUrl: "https://www.linkedin.com/company/numu-npo/posts/?feedView=all",
    date: "May 2026 – Present",
    sortDate: "2026-05",
    location: "",
    accent: "blue",
    tags: ["Software Engineering", "Project Management"],
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
    role: "Project Management Co-Lead",
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
    org: "Google Developer Group on Campus — University of Jeddah",
    orgUrl: "https://www.linkedin.com/company/google-developer-student-club-uj/posts/?feedView=all",
    date: "Nov 2025 – Present",
    sortDate: "2025-11",
    location: "",
    accent: "olive",
    tags: ["University Club", "Project Management"],
    desc: "Driving planning and ideation for developer-focused campus events, shaping event concepts, timelines, and task ownership across the team.",
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
    desc: "Led committee-level planning and supported club activities through coordination, task management, and team communication.",
    skills: ["Committee Leadership", "Planning", "Team Coordination"],
  },
  {
    role: "Vice Team Leader",
    org: "فريق بشوش التطوعي | Bashosh Volunteer Team",
    orgUrl: "https://www.linkedin.com/company/%D9%81%D8%B1%D9%8A%D9%82-%D8%A8%D8%B4%D9%88%D8%B4-%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D8%B9%D9%8A/posts/?feedView=all",
    date: "Jul 2025 - Nov 2025 · 5 mos",
    sortDate: "2025-07",
    location: "",
    accent: "olive",
    tags: ["Contract", "Volunteering"],
    desc: "Contracted as Vice Team Leader for Bashosh Volunteer Team, managing volunteer coordination, event planning, and community outreach across humanitarian initiatives.",
    skills: ["Volunteer Management", "Planning", "Leadership"],
  },
  {
    role: "Scrutineer Marshal",
    org: "Saudi Automobile & Motorcycle Federation",
    orgUrl: "https://www.linkedin.com/company/samfgov/posts/?feedView=all",
    date: "Mar 2024",
    sortDate: "2024-03",
    location: "",
    accent: "berry",
    tags: ["Sports Volunteering", "Motorsport", "Technical Inspection"],
    desc: "Marshal since March 2024 across multiple motorsport events, part of a top-3 global Formula E technical inspection team while supporting inspection and compliance work.",
    skills: ["Technical Inspection", "FIA Compliance", "Motorsport Operations"],
    hasRaces: true,
  },
];

const MOTORSPORT_RACES = [
  { name: "Formula E", date: "Feb 2026" },
  { name: "F4", date: "Dec 2025" },
  { name: "WRC", date: "Nov 2025" },
  { name: "Formula 1", date: "Apr 2025" },
  { name: "Saudi Arabia Rally", date: "Apr 2025" },
  { name: "GT Fanatec", date: "Nov 2024" },
  { name: "Formula 2", date: "Mar 2024" },
];

const esc = (s) => String(s).replace(/[&<>\"]/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderMotorsportTimeline() {
  const list = document.getElementById("motorsportTimeline");
  if (!list) return;
  list.innerHTML = MOTORSPORT_RACES.map((race) => `
    <li class="race-strip__item">
      <span class="race-strip__dot" aria-hidden="true"></span>
      <span class="race-strip__date">${esc(race.date)}</span>
      <span class="race-strip__name">${esc(race.name)}</span>
    </li>`).join("");
}

/* ============================================================
   2. PROJECTS — grouped into apps (iPhone) and sites (browser).
   frame  : "phone" | "browser"
   accent : palette accent used for the badge + stage tint
   link   : full URL, or "#" for a placeholder (button auto-disables)
   tags   : meaningful, no duplicated "Tech Tech"
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
      tags: ["App", "Product Thinking", "UI/UX"],
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
      tags: ["UI/UX", "Figma", "Mobile Design"],
      link: "https://www.figma.com/design/zTjzMQZaucXDS3mLRmfJbc/Lume-Prototype?node-id=0-1",
    },
  ],
  sites: [
    {
      name: "Portfolio",
      type: "Website",
      badge: "Website",
      accent: "blue",
      frame: "browser",
      role: "Developer / Designer",
      desc: "A personal portfolio presenting my projects, technical skills, and experience — a central hub for my web development, UI/UX, and software work, built with clean responsive design.",
      tags: ["Website", "HTML/CSS", "Responsive"],
      link: "https://leenkharraz.github.io/MyProtfolio/",
    },
    {
      name: "Card Magic",
      type: "Website",
      badge: "Website",
      accent: "mocha",
      frame: "browser",
      role: "Web Developer",
      desc: "A collaborative web app (group project) for creating and customizing digital greeting cards for celebrations, anniversaries, birthdays, and special events — demonstrating teamwork and interactive functionality.",
      tags: ["Website", "JavaScript", "Teamwork"],
      link: "https://leenkharraz.github.io/CardMagic/",
    },
    {
      name: "F1 Driver Lookup",
      type: "Website · API Project",
      badge: "Website",
      accent: "olive",
      frame: "browser",
      role: "Frontend Developer",
      desc: "A web app to search and explore Formula 1 drivers by season, using the Ergast API to fetch motorsport data and dynamically render driver information on the page.",
      tags: ["Website", "API", "JavaScript"],
      link: "https://leenkharraz.github.io/Assignment2/",
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
      const firstTag = x.tags[0] || "";
      const tags = firstTag
        ? `<span class="tl-card__badge tl-card__badge--solid">${esc(firstTag)}</span>`
        : "";
      const org = x.orgUrl
        ? `<a class="tl-card__org tl-card__org--link" href="${esc(x.orgUrl)}" target="_blank" rel="noopener noreferrer">${esc(x.org)}</a>`
        : `<span class="tl-card__org">${esc(x.org)}</span>`;
      const loc = x.location ? `<span class="tl-card__loc">${esc(x.location)}</span>` : "";
      const skills = x.skills.map((s) => `<span class="pill pill--soft">${esc(s)}</span>`).join("");
      const racesButton = x.hasRaces
        ? `<div class="tl-card__actions"><button type="button" class="btn btn--small btn--solid" id="viewRacesBtn" aria-expanded="false" aria-controls="raceStrip">View Races</button></div>`
        : "";
      return `
      <li class="tl-item tl-item--${x.accent}">
        <div class="tl-dot" aria-hidden="true"></div>
        <article class="tl-card">
          <button class="tl-card__head" aria-expanded="false">
            <div class="tl-card__tags">${tags}</div>
            <span class="tl-card__dates">${esc(x.date)}</span>
            <h3 class="tl-card__role">${esc(x.role)}</h3>
            ${org}${loc}
          </button>
          <div class="tl-card__body">
            <p class="tl-card__desc">${esc(x.desc)}</p>
            <div class="tl-card__skills">
              <span class="tl-card__skills-label">Top skills</span>
              <div class="tl-card__skills-pills">${skills}</div>
            </div>
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
    const isBrowser = frameClass === "device-card--browser";
    const hasLink = !!(p.link && p.link !== "#");
    const cta = isBrowser ? "Visit Site →" : "View Prototype →";
    const tags = p.tags.map((t) => `<span class="pill pill--${p.accent}">${esc(t)}</span>`).join("");
    const screen = `
      <div class="device-screen project-screen">
        <span class="project-screen__label">${esc(p.name)}</span>
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
      ? `<a class="btn btn--small btn--solid" href="${esc(p.link)}" target="_blank" rel="noopener">${cta}</a>`
      : "";
    return `
      <article class="device-card ${frameClass}" data-accent="${p.accent}" data-type="${esc(p.badge.toLowerCase())}" tabindex="0" aria-label="${esc(p.name)} — ${esc(p.type)}, tap to reveal details">
        <div class="device-stage">
          <span class="device-badge${isBrowser ? " device-badge--alt" : ""}">${esc(p.badge)}</span>
          ${frame}
          <div class="device-overlay">
            <p class="device-overlay__type">${esc(p.type)}</p>
            <h3 class="device-overlay__name">${esc(p.name)}</h3>
            <p class="device-overlay__desc">${esc(p.desc)}</p>
            <div class="device-overlay__meta">
              <span class="k">Tech</span><span class="device-tags">${tags}</span>
              <span class="k">Role</span><span>${esc(p.role)}</span>
            </div>
            ${ctaHtml}
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

  /* ---------- Hero code-editor typing animation ---------- */
  function typeHeroCode() {
    const codeEl = document.getElementById("typedCode");
    if (!codeEl) return;
    const tokens = [
      { t: "const ", c: "kw" }, { t: "leen", c: "var" }, { t: " = {\n  ", c: "" },
      { t: "name", c: "key" }, { t: ": ", c: "" }, { t: '"Leen Kharraz"', c: "str" }, { t: ",\n  ", c: "" },
      { t: "role", c: "key" }, { t: ": ", c: "" }, { t: '"Software Engineering Student"', c: "str" }, { t: ",\n  ", c: "" },
      { t: "openTo", c: "key" }, { t: ": [", c: "" },
      { t: '"Internships"', c: "str" }, { t: ", ", c: "" },
      { t: '"Projects"', c: "str" }, { t: ", ", c: "" },
      { t: '"Learning Opportunities"', c: "str" }, { t: "],\n  ", c: "" },
      { t: "focus", c: "key" }, { t: ": [", c: "" },
      { t: '"Software Development"', c: "str" }, { t: ", ", c: "" },
      { t: '"Project Management"', c: "str" }, { t: ", ", c: "" },
      { t: '"Backend & API Integration"', c: "str" }, { t: "]\n};", c: "" },
    ];
    if (prefersReducedMotion) {
      codeEl.innerHTML = tokens.map((tok) => tok.c ? `<span class="tok tok--${tok.c}">${esc(tok.t)}</span>` : esc(tok.t)).join("");
      return;
    }
    let ti = 0, ci = 0, span = null;
    (function step() {
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

  renderExperience("desc");
  bindTimelineInteractions();
  bindExperienceSort();
  renderMotorsportTimeline();
  renderProjects();
  setTimeout(typeHeroCode, 350);

  /* ---------- Theme toggle (default dark, persisted) ---------- */
  const toggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (!toggle) return;
    const nowDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(!nowDark));
    toggle.setAttribute("aria-label", nowDark ? "Switch to light mode" : "Switch to dark mode");
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
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
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

  /* ---------- Project device cards — tap to reveal on touch ---------- */
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
