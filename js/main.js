/* ============================================================
   LEEN YOUSEF — PORTFOLIO SCRIPTS (v3)
   1. Theme toggle (sun/moon) — default dark, session-persistent
   2. Mobile hamburger menu
   3. Close mobile menu on link click
   4. Scroll-triggered section reveals
   5. Timeline entry animations (staggered)
   6. Expandable timeline cards
   7. Active nav tab highlighting
   ============================================================ */

(function () {
  "use strict";

  const root = document.documentElement;

  /* ---------- 1. Theme toggle ---------- */
  const toggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const nowDark = theme === "dark";
    // When dark, the button offers a switch TO light (and vice versa)
    toggle.setAttribute("aria-pressed", String(!nowDark));
    toggle.setAttribute("aria-label", nowDark ? "Switch to light mode" : "Switch to dark mode");
  }

  // Optional session persistence (survives reloads within the tab session)
  let saved = null;
  try { saved = sessionStorage.getItem("theme"); } catch (e) {}
  applyTheme(saved === "dark" ? "dark" : "light"); // default light (cream base)

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { sessionStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- 2. Mobile hamburger menu ---------- */
  const burger = document.getElementById("navBurger");
  const tabs = document.getElementById("navTabs");

  burger.addEventListener("click", () => {
    const open = tabs.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  /* ---------- 3. Close mobile menu on link click ---------- */
  tabs.addEventListener("click", (e) => {
    if (e.target.matches("a") && tabs.classList.contains("is-open")) {
      tabs.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- 4. Scroll-triggered section reveals ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- 5. Timeline entry animations (staggered) ---------- */
  const tlItems = document.querySelectorAll(".tl-item");
  tlItems.forEach((item, i) => {
    item.style.setProperty("--d", Math.min(i * 0.06, 0.35) + "s");
  });
  const tlObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          tlObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  tlItems.forEach((el) => tlObserver.observe(el));

  /* ---------- 6. Expandable timeline cards ---------- */
  document.querySelectorAll(".tl-card__head").forEach((head) => {
    head.addEventListener("click", () => {
      const card = head.closest(".tl-card");
      const open = card.classList.toggle("is-open");
      head.setAttribute("aria-expanded", String(open));
    });
  });

  /* ---------- 6b. Project device cards — tap to reveal on touch ---------- */
  document.querySelectorAll(".device-card:not(.device-card--featured)").forEach((card) => {
    card.addEventListener("click", (e) => {
      // Let the CTA link work normally; only toggle when tapping the card body
      if (e.target.closest("a")) return;
      card.classList.toggle("is-open");
    });
    // Keyboard: Enter/Space toggles the panel
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target.closest("a")) return;
        e.preventDefault();
        card.classList.toggle("is-open");
      }
    });
  });

  /* ---------- 7. Active nav tab highlighting ---------- */
  const navLinks = Array.from(tabs.querySelectorAll("a[href^='#']"));
  const sectionsById = {};
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) sectionsById[id] = link;
  });
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = sectionsById[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  Object.keys(sectionsById).forEach((id) => activeObserver.observe(document.getElementById(id)));
})();
