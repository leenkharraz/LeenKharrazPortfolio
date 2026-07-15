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
    orgUrl: "", // [LEEN: paste LinkedIn org URL here later]
    date: "Jun 2026 – Present",
    location: "Jeddah, Makkah, Saudi Arabia · Hybrid",
    accent: "berry",
    tags: ["Internship", "Backend"],
    desc: "Supporting backend development work, API-related tasks, branch management, and technical coordination within the project.",
    skills: ["Backend Operations", "Branch Management", "API Integration"],
  },
  {
    role: "Software Engineer",
    org: "Numu for Research & Innovation | نمو للبحث والابتكار",
    orgUrl: "",
    date: "May 2026 – Present",
    location: "",
    accent: "blue",
    tags: ["Software Engineering", "Project Management"],
    desc: "Working on software project planning, requirements analysis, and coordination for research and innovation-focused initiatives.",
    skills: ["Software Project Management", "Requirements Analysis", "Technical Coordination"],
  },
  {
    role: "Event Experience Specialist",
    org: "Local Organising Committee",
    orgUrl: "",
    date: "Apr 2026 – May 2026",
    location: "",
    accent: "apricot",
    tags: ["Sports Volunteering", "Event Operations"],
    desc: "Volunteered in event operations and support activities for a major football event, contributing to event experience and coordination.",
    skills: ["Event Operations", "Crowd Support", "Communication"],
  },
  {
    role: "Project Management Co-Leader",
    org: "Artificial Intelligence Club",
    orgUrl: "",
    date: "Jan 2026 – Present",
    location: "",
    accent: "mocha",
    tags: ["University Club", "Student"],
    desc: "Contributing to AI club activities and project management work within student-led initiatives.",
    skills: ["Project Management", "AI Awareness", "Teamwork"],
  },
  {
    role: "Project Management Coordinator",
    org: "Google Developer Group on Campus — University of Jeddah",
    orgUrl: "",
    date: "Nov 2025 – Present",
    location: "",
    accent: "olive",
    tags: ["University Club", "Project Management"],
    desc: "Driving planning and ideation for developer-focused campus events, shaping event concepts, timelines, and task ownership across the team.",
    skills: ["Event Planning", "Project Coordination", "Team Collaboration"],
  },
  {
    role: "EG&VR Club",
    org: "Electronic Games and Virtual Reality Club",
    orgUrl: "",
    date: "Sep 2025 – Present",
    location: "",
    accent: "blue",
    tags: ["University Club", "Project Management"],
    desc: "Contributed to project management activities and supported club initiatives related to electronic games and virtual reality.",
    skills: ["Project Management", "Event Coordination", "Communication"],
  },
  {
    role: "Drone Club",
    org: "Drone Club",
    orgUrl: "",
    date: "Sep 2025 – Present",
    location: "",
    accent: "sage",
    tags: ["University Club", "Leadership"],
    desc: "Led committee-level planning and supported club activities through coordination, task management, and team communication.",
    skills: ["Committee Leadership", "Planning", "Team Coordination"],
  },
  {
    role: "Scrutineer Marshal",
    org: "Saudi Automobile & Motorcycle Federation",
    orgUrl: "",
    date: "[LEEN: date]",
    location: "",
    accent: "berry",
    tags: ["Sports Volunteering", "Motorsport"],
    desc: "Volunteered as a Scrutineer Marshal in motorsport events, supporting technical inspection processes, compliance checks, and event operations.",
    skills: ["Technical Inspection", "FIA Compliance", "Motorsport Operations"],
  },
  {
    role: "Bashosh Volunteering Team",
    org: "Bashosh Volunteering Team",
    orgUrl: "",
    date: "[LEEN: date]",
    location: "",
    accent: "olive",
    tags: ["Volunteering", "Leadership"],
    desc: "Supported planning and management activities within the volunteering team, contributing to event organization, internal coordination, and leadership work.",
    skills: ["Volunteer Management", "Planning", "Leadership"],
  },
];

/* ============================================================
   2. PROJECTS — grouped into apps (iPhone) and sites (browser).
   frame  : "phone" | "browser"
   accent : palette accent used for the badge + stage tint
   link   : full URL, or "#" for a placeholder (button auto-disables)
   image  : screenshot path; if missing, a clean placeholder shows
   tags   : meaningful, no duplicated "Tech Tech"
   ============================================================ */
const PROJECTS = {
  apps: [
    {
      name: "Schoolo",
      type: "Mobile App · Startup Concept",
      badge: "App",
      accent: "berry",
      role: "Co-founder / Software Engineering Student",
      desc: "A school search and comparison platform helping parents in Saudi Arabia find and compare private schools in one place — organizing fees, curriculum, facilities, admissions, and reviews into a clearer experience.",
      tags: ["App", "Product Thinking", "UI/UX"],
      link: "#", // [LEEN: add link when available]
      image: "assets/images/projects/schoolo.jpg",
    },
    {
      name: "Lume",
      type: "Mobile App · UI/UX Project",
      badge: "App",
      accent: "apricot",
      role: "UI/UX Designer",
      desc: "A UI/UX prototype designed in Figma for an event-planning mobile app — helping users organize events, manage tasks, and coordinate details through a clean, structured interface.",
      tags: ["UI/UX", "Figma", "Mobile Design"],
      link: "https://www.figma.com/design/zTjzMQZaucXDS3mLRmfJbc/Lume-Prototype?node-id=0-1",
      image: "assets/images/projects/lume.jpg",
    },
  ],
  sites: [
    {
      name: "Portfolio",
      type: "Website",
      badge: "Website",
      accent: "blue",
      role: "Developer / Designer",
      desc: "A personal portfolio presenting my projects, technical skills, and experience — a central hub for my web development, UI/UX, and software work, built with clean responsive design.",
      tags: ["Website", "HTML/CSS", "Responsive"],
      link: "https://leenkharraz.github.io/MyProtfolio/",
      image: "assets/images/projects/portfolio.jpg",
    },
    {
      name: "Card Magic",
      type: "Website",
      badge: "Website",
      accent: "mocha",
      role: "Web Developer",
      desc: "A collaborative web app (group project) for creating and customizing digital greeting cards for celebrations, anniversaries, birthdays, and special events — demonstrating teamwork and interactive functionality.",
      tags: ["Website", "JavaScript", "Teamwork"],
      link: "https://leenkharraz.github.io/CardMagic/",
      image: "assets/images/projects/cardmagic.jpg",
    },
    {
      name: "F1 Driver Lookup",
      type: "Website · API Project",
      badge: "Website",
      accent: "olive",
      role: "Frontend Developer",
      desc: "A web app to search and explore Formula 1 drivers by season, using the Ergast API to fetch motorsport data and dynamically render driver information on the page.",
      tags: ["Website", "API", "JavaScript"],
      link: "https://leenkharraz.github.io/Assignment2/",
      image: "assets/images/projects/f1lookup.jpg",
    },
  ],
};

(function () {
  "use strict";

  const root = document.documentElement;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Render EXPERIENCE timeline ---------- */
  function renderExperience() {
    const ol = document.getElementById("timeline");
    if (!ol) return;
    ol.innerHTML = EXPERIENCE.map((x) => {
      const tags = x.tags.map((t, i) =>
        `<span class="tl-card__badge tl-card__badge--${i === 0 ? "solid" : "soft"}">${esc(t)}</span>`
      ).join("");
      const org = x.orgUrl
        ? `<a class="tl-card__org tl-card__org--link" href="${esc(x.orgUrl)}" target="_blank" rel="noopener">${esc(x.org)}</a>`
        : `<span class="tl-card__org">${esc(x.org)}</span>`;
      const loc = x.location ? `<span class="tl-card__loc">${esc(x.location)}</span>` : "";
      const skills = x.skills.map((s) => `<span class="pill pill--soft">${esc(s)}</span>`).join("");
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
          </div>
        </article>
      </li>`;
    }).join("");
  }

  /* ---------- Render PROJECTS (apps + sites) ---------- */
  function projectCard(p) {
    const frameClass = p.frame === "browser" || p.badge === "Website" ? "device-card--browser" : "device-card--phone";
    const isBrowser = frameClass === "device-card--browser";
    const disabled = (!p.link || p.link === "#") ? ' aria-disabled="true"' : ' target="_blank" rel="noopener"';
    const cta = isBrowser ? "Visit Site →" : (p.link && p.link !== "#" ? "View Prototype →" : "View Project →");
    const tags = p.tags.map((t) => `<span class="pill pill--${p.accent}">${esc(t)}</span>`).join("");
    const screen = `
      <div class="device-screen">
        <img class="device-screen__img" src="${esc(p.image)}" alt="${esc(p.name)} screenshot" loading="lazy" onerror="this.style.display='none'">
        <span class="device-screen__label">${esc(p.name)}<br><span class="device-screen__hint">add screenshot → ${esc(p.image)}</span></span>
      </div>`;
    const frame = isBrowser
      ? `<div class="browser">
           <div class="browser__bar" aria-hidden="true">
             <span class="browser__dot"></span><span class="browser__dot"></span><span class="browser__dot"></span>
             <span class="browser__url">${esc((p.link && p.link !== "#") ? p.link.replace(/^https?:\/\//, "") : "…")}</span>
           </div>${screen}
         </div>`
      : `<div class="iphone">${screen}</div>`;
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
            <a class="btn btn--small btn--solid" href="${esc(p.link || "#")}"${disabled}>${cta}</a>
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

  renderExperience();
  renderProjects();

  /* ---------- Theme toggle (default light) ---------- */
  const toggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const nowDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(!nowDark));
    toggle.setAttribute("aria-label", nowDark ? "Switch to light mode" : "Switch to dark mode");
  }
  let saved = null;
  try { saved = sessionStorage.getItem("theme"); } catch (e) {}
  applyTheme(saved === "dark" ? "dark" : "light");
  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { sessionStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Mobile hamburger ---------- */
  const burger = document.getElementById("navBurger");
  const tabs = document.getElementById("navTabs");
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

  /* ---------- Scroll reveals ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Timeline items animate one by one ---------- */
  const tlItems = document.querySelectorAll(".tl-item");
  tlItems.forEach((item, i) => item.style.setProperty("--d", Math.min(i * 0.06, 0.4) + "s"));
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); tlObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.2 });
  tlItems.forEach((el) => tlObserver.observe(el));

  /* ---------- Expand a timeline card on click (desc + skills) ---------- */
  document.querySelectorAll(".tl-card__head").forEach((head) => {
    head.addEventListener("click", () => {
      const card = head.closest(".tl-card");
      const open = card.classList.toggle("is-open");
      head.setAttribute("aria-expanded", String(open));
    });
  });

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
})();
