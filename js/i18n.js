/* ============================================================
   i18n — English / Arabic localization.

   Single source of truth for every user-facing string. English is
   always the default; Arabic only activates when the visitor presses
   the language icon in the nav (see main.js).

   Structure:
   1. UI    — static chrome text (nav, headings, labels, aria strings),
              looked up by a flat dot-path key, applied via
              data-i18n / data-i18n-aria-label / data-i18n-title
              attributes in index.html.
   2. EXPERIENCE_AR   — keyed by the EXPERIENCE entry's exact `org`
                         string (already unique per entry in main.js),
                         so the EXPERIENCE array itself never needs to
                         change or duplicate.
   3. PROJECTS_AR     — keyed by the PROJECTS entry's exact `name`.
   4. MOTORSPORT_AR   — keyed by the MOTORSPORT_RACES entry's `id`.
   5. HERO_CODE_AR    — Arabic values for the hero code-typing values
                         (keys/punctuation stay in code form, see
                         typeHeroCode() in main.js).

   A field left out of an *_AR block simply falls back to the English
   value already in the data array — nothing renders blank.
   ============================================================ */

const UI = {
  en: {
    "meta.title": "Leen Kharraz — Software Engineering Student",
    "meta.description": "Leen Kharraz — Software Engineering Student. Portfolio: experience timeline and projects.",

    "nav.brandAria": "Leen Kharraz — home",
    "nav.mainAria": "Main",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.themeToLight": "Switch to light mode",
    "nav.themeToDark": "Switch to dark mode",
    "nav.langToArabic": "Switch to Arabic",
    "nav.langToEnglish": "التبديل إلى الإنجليزية",

    "hero.introAria": "Introduction",
    "hero.ghost": "Portfolio",
    "hero.pathLabel": "~/leen-kharraz",
    "hero.name": "Leen Kharraz",
    "hero.role": "Software Engineering Student",
    "hero.contact": "Contact Me",
    "hero.projects": "Projects",

    "about.title": "About Me",
    "about.bio": "I'm Leen Kharraz, a Software Engineering student at the {uj}. I enjoy building software and coordinating the plans, people, and details that help projects move forward.",
    "about.uj": "University of Jeddah",
    "about.whyMeLabel": "Why me?",
    "about.whyMeText": "Because I bring both technical curiosity and organized execution. I care about understanding the problem, building practical solutions, and keeping the work clear, structured, and useful.",
    "about.universityLabel": "University",
    "about.universityValue": "University of Jeddah — Software Engineering",
    "about.languagesLabel": "Languages",
    "about.langArabic": "Arabic",
    "about.langEnglish": "English",
    "about.skillsHeading": "Skills",
    "about.technicalLabel": "Technical",
    "about.toolsLabel": "Tools & Project Management",
    "about.tabLabel": "about",
    "about.pathLabel": "about/",

    "experience.title": "Experience",
    "experience.sortAria": "Sort experience by date",
    "experience.sortNewest": "Newest first",
    "experience.sortOldest": "Oldest first",
    "experience.lede": "A timeline of my roles. Click a card to reveal the details and top skills.",
    "experience.roleProgression": "Role progression",
    "experience.topSkills": "Top skills",
    "experience.viewRaces": "View Races",
    "experience.present": "Present",
    "experience.tabLabel": "experience",
    "experience.pathLabel": "experience/",
    "experience.racesPathLabel": "experience/scrutineer/races",

    "motorsport.title": "Scrutineer Marshal — Race Timeline",
    "motorsport.lede": "Motorsport events supported since March 2024, newest first.",
    "motorsport.selectRaceAria": "Select a race event",
    "motorsport.selectedRace": "Selected Race",
    "motorsport.photosComingSoon": "Race photos coming soon",

    "projects.title": "Projects",
    "projects.lede": "A showcase of my projects. Click a card to reveal the details and top skills.",
    "projects.applicationsKicker": "Applications",
    "projects.applicationsJumpAria": "Jump to Application projects",
    "projects.mobileAppsTitle": "Mobile Apps",
    "projects.websitesKicker": "Websites",
    "projects.websitesJumpAria": "Jump to Website projects",
    "projects.webProjectsTitle": "Web Projects",
    "projects.badgeApp": "App",
    "projects.badgeWebsite": "Website",
    "projects.ctaVisitSite": "Visit Site",
    "projects.ctaViewPrototype": "View Prototype",
    "projects.ctaGithub": "GitHub",
    "projects.metaTech": "Tech",
    "projects.metaRole": "Role",
    "projects.metaHackathon": "Hackathon",
    "projects.cardAriaSuffix": ", tap to reveal details",
    "projects.tabLabel": "projects",
    "projects.pathLabel": "projects/",

    "footer.tag": "Software Engineering Student",
    "footer.githubAria": "GitHub profile",
    "footer.linkedinAria": "LinkedIn profile",
    "footer.xAria": "X (Twitter) profile",
    "footer.copy": "© 2026 Leen Kharraz. All rights reserved.",
  },
  ar: {
    "meta.title": "Leen Kharraz — طالبة هندسة برمجيات",
    "meta.description": "Leen Kharraz — طالبة هندسة برمجيات. ملف الأعمال: الجدول الزمني للخبرات والمشاريع.",

    "nav.brandAria": "Leen Kharraz — الرئيسية",
    "nav.mainAria": "التنقل الرئيسي",
    "nav.about": "نبذة عني",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.openMenu": "فتح القائمة",
    "nav.closeMenu": "إغلاق القائمة",
    "nav.themeToLight": "التبديل إلى الوضع الفاتح",
    "nav.themeToDark": "التبديل إلى الوضع الداكن",
    "nav.langToArabic": "التبديل إلى العربية",
    "nav.langToEnglish": "التبديل إلى الإنجليزية",

    "hero.introAria": "مقدمة",
    "hero.ghost": "ملف الأعمال",
    "hero.pathLabel": "~/لين-خراز",
    "hero.name": "لين خراز",
    "hero.role": "طالبة هندسة برمجيات",
    "hero.contact": "تواصل معي",
    "hero.projects": "المشاريع",

    "about.title": "نبذة عني",
    "about.bio": "أنا لين خراز، طالبة هندسة برمجيات في {uj}. أستمتع ببناء البرمجيات وتنسيق الخطط والفرق والتفاصيل التي تساعد المشاريع على المضي قدمًا.",
    "about.uj": "جامعة جدة",
    "about.whyMeLabel": "لماذا أنا؟",
    "about.whyMeText": "لأنني أجمع بين الفضول التقني والتنفيذ المنظم. أهتم بفهم المشكلة، وبناء حلول عملية، والحفاظ على وضوح العمل وتنظيمه وفائدته.",
    "about.universityLabel": "الجامعة",
    "about.universityValue": "جامعة جدة — هندسة البرمجيات",
    "about.languagesLabel": "اللغات",
    "about.langArabic": "العربية",
    "about.langEnglish": "الإنجليزية",
    "about.skillsHeading": "المهارات",
    "about.technicalLabel": "المهارات التقنية",
    "about.toolsLabel": "الأدوات وإدارة المشاريع",
    "about.tabLabel": "نبذة عني",
    "about.pathLabel": "نبذة-عني/",

    "experience.title": "الخبرات",
    "experience.sortAria": "ترتيب الخبرات حسب التاريخ",
    "experience.sortNewest": "الأحدث أولاً",
    "experience.sortOldest": "الأقدم أولاً",
    "experience.lede": "جدول زمني لأدواري. اضغط على البطاقة لعرض التفاصيل وأهم المهارات.",
    "experience.roleProgression": "المسار الوظيفي",
    "experience.topSkills": "أبرز المهارات",
    "experience.viewRaces": "عرض السباقات",
    "experience.present": "حتى الآن",
    "experience.tabLabel": "الخبرات",
    "experience.pathLabel": "الخبرات/",
    "experience.racesPathLabel": "الخبرات/الفحص-الفني/السباقات",

    "motorsport.title": "مسؤولة الفحص الفني — الجدول الزمني للسباقات",
    "motorsport.lede": "فعاليات رياضة السيارات التي شاركت فيها منذ مارس 2024، الأحدث أولاً.",
    "motorsport.selectRaceAria": "اختيار سباق",
    "motorsport.selectedRace": "السباق المختار",
    "motorsport.photosComingSoon": "صور السباق قريبًا",

    "projects.title": "المشاريع",
    "projects.lede": "عرض لأبرز مشاريعي. اضغط على البطاقة لعرض التفاصيل وأهم المهارات.",
    "projects.applicationsKicker": "التطبيقات",
    "projects.applicationsJumpAria": "الانتقال إلى مشاريع التطبيقات",
    "projects.mobileAppsTitle": "تطبيقات الجوال",
    "projects.websitesKicker": "المواقع",
    "projects.websitesJumpAria": "الانتقال إلى مشاريع المواقع",
    "projects.webProjectsTitle": "مشاريع المواقع",
    "projects.badgeApp": "تطبيق",
    "projects.badgeWebsite": "موقع",
    "projects.ctaVisitSite": "زيارة الموقع",
    "projects.ctaViewPrototype": "عرض النموذج الأولي",
    "projects.ctaGithub": "GitHub",
    "projects.metaTech": "التقنيات",
    "projects.metaRole": "الدور",
    "projects.metaHackathon": "الهاكاثون",
    "projects.cardAriaSuffix": "، اضغط لعرض التفاصيل",
    "projects.tabLabel": "المشاريع",
    "projects.pathLabel": "المشاريع/",

    "footer.tag": "طالبة هندسة برمجيات",
    "footer.githubAria": "الملف الشخصي على GitHub",
    "footer.linkedinAria": "الملف الشخصي على LinkedIn",
    "footer.xAria": "الملف الشخصي على X (تويتر)",
    "footer.copy": "© 2026 Leen Kharraz. جميع الحقوق محفوظة.",
  },
};

/* ---------- EXPERIENCE — keyed by exact `org` string ---------- */
const EXPERIENCE_AR = {
  "Ting": {
    org: "تنج",
    role: "متدربة هندسة برمجيات",
    date: "يونيو 2026 – أغسطس 2026",
    desc: "عملت على مشروعين للشركة وساهمت في تطوير متكامل للأنظمة وبناء وكلاء ومحادثات ذكية مدعومة بالذكاء الاصطناعي إلى جانب الاختبارات والعمل التعاوني عبر GitHub واستخدام أدوات الذكاء الاصطناعي ضمن دورة التطوير.",
    tags: ["تدريب", "تطوير متكامل"],
    skills: ["تطوير متكامل للأنظمة", "تطوير وكلاء الذكاء الاصطناعي", "التعاون عبر GitHub"],
  },
  "Numu for Research & Innovation": {
    org: "نمو للبحث والابتكار",
    role: "مهندسة برمجيات",
    date: "مايو 2026 – حتى الآن",
    desc: "العمل على تخطيط المشاريع البرمجية، وتحليل المتطلبات، والتنسيق لمبادرات تركّز على البحث والابتكار.",
    tags: ["عمل تطوعي", "إدارة المشاريع"],
    skills: ["إدارة المشاريع البرمجية", "تحليل المتطلبات", "التنسيق التقني"],
  },
  "Local Organising Committee": {
    org: "اللجنة المحلية المنظمة",
    role: "أخصائية تجربة الفعاليات",
    date: "أبريل 2026",
    desc: "تطوعت في عمليات الفعاليات وأنشطة الدعم لفعالية كروية كبرى، والمساهمة في تجربة الحضور وتنسيق الفعالية.",
    tags: ["تطوع رياضي", "عمليات الفعاليات"],
    skills: ["عمليات الفعاليات", "دعم الجمهور", "التواصل"],
  },
  "Artificial Intelligence Club": {
    org: "نادي الذكاء الاصطناعي بجامعة جدة",
    role: "نائبة قائد لجنة إدارة المشاريع",
    date: "يناير 2026 – حتى الآن",
    desc: "المساهمة في أنشطة نادي الذكاء الاصطناعي وأعمال إدارة المشاريع ضمن مبادرات يقودها الطلاب.",
    tags: ["نادي جامعي", "طالبة"],
    skills: ["إدارة المشاريع", "التوعية بالذكاء الاصطناعي", "العمل الجماعي"],
  },
  "Google Developer Group on Campus": {
    org: "مجموعة مطوري قوقل",
    role: "منسقة إدارة المشاريع",
    date: "نوفمبر 2025 – حتى الآن",
    desc: "ساهمت في أكثر من 4 ورش تقنية من خلال أدوار متعددة في إدارة المشاريع شملت التخطيط والتنسيق وتوزيع المهام ودعم تنفيذ الفعاليات مع الفريق.",
    tags: ["نادي جامعي", "إدارة المشاريع"],
    skills: ["تخطيط الفعاليات", "تنسيق المشاريع", "التعاون الجماعي"],
  },
  "Electronic Games and Virtual Reality Club": {
    org: "فريق الألعاب الإلكترونية والواقع الافتراضي",
    role: "مديرة مشاريع",
    date: "سبتمبر 2025 – حتى الآن",
    desc: "المساهمة في أنشطة إدارة المشاريع ودعم مبادرات النادي المتعلقة بالألعاب الإلكترونية والواقع الافتراضي.",
    tags: ["نادي جامعي", "إدارة المشاريع"],
    skills: ["إدارة المشاريع", "تنسيق الفعاليات", "التواصل"],
  },
  "Drone Club": {
    org: "نادي الدرون بجامعة جدة",
    role: "قائدة لجنة إدارة المشاريع",
    date: "سبتمبر 2025 – حتى الآن",
    desc: "قدت تخطيط وتنفيذ أكثر من 7 ورش حضورية وعن بعد وأدرت تنسيق الفرق والجداول الزمنية وتوزيع المسؤوليات ومتابعة التنفيذ لضمان تقديم الأنشطة بكفاءة.",
    tags: ["نادي جامعي", "القيادة"],
    skills: ["قيادة اللجان", "التخطيط", "تنسيق الفريق"],
  },
  "Bashosh Volunteer Team": {
    org: "فريق بشوش التطوعي",
    role: "نائبة قائد الفريق",
    date: "مارس 2025 – نوفمبر 2025",
    desc: "أدرت أكثر من 200 عضو عبر 7 أقسام بصفتي نائبة قائد الفريق، وأشرفت على تنسيق الفرق ودعم عمليات الأقسام والمشاركة في مقابلات المتقدمين خلال مراحل الاستقطاب والتوسع.",
    tags: ["عمل تطوعي", "القيادة"],
    skills: ["إدارة المتطوعين", "التخطيط", "القيادة"],
    /* Bashosh-only override: this org's role progression is a volunteer
       track, not a career one, so it gets its own Arabic label instead
       of the shared "experience.roleProgression" UI string. */
    roleProgressionLabel: "المسار التطوعي",
    roleSteps: [
      "نائبة رئيس قسم التخطيط والإدارة",
      "رئيسة قسم التخطيط والإدارة",
      "إدارة عليا",
      "نائبة قائد الفريق",
    ],
  },
  "Saudi Automobile & Motorcycle Federation": {
    org: "الاتحاد السعودي للسيارات والدراجات النارية",
    role: "مسؤولة الفحص الفني",
    date: "مارس 2024 – حتى الآن",
    desc: "شاركت كمسؤولة فحص فني في أكثر من 7 سباقات وحصلت على 3 شهادات في رياضة المحركات وساهمت في أعمال الفحص الفني وفحوصات السلامة والالتزام باللوائح خلال عدد من أبرز فعاليات السباقات.",
    tags: ["تطوع رياضي", "رياضة السيارات", "الفحص الفني"],
    skills: ["الفحص الفني", "الامتثال لمعايير الاتحاد الدولي للسيارات (FIA)", "عمليات رياضة السيارات"],
  },
};

/* ---------- PROJECTS — keyed by exact `name` ---------- */
const PROJECTS_AR = {
  "Schoolo": {
    name: "سكولو",
    type: "تطبيق جوال · فكرة ناشئة",
    role: "شريكة مؤسسة / طالبة هندسة برمجيات",
    desc: "منصة للبحث عن المدارس ومقارنتها تساعد أولياء الأمور في السعودية على إيجاد المدارس الأهلية ومقارنتها في مكان واحد — من خلال تنظيم الرسوم والمناهج والمرافق والقبول والتقييمات في تجربة أوضح.",
    tags: ["Replit", "Codex", "Claude Code", "GitHub"],
  },
  "Lume": {
    name: "لومي",
    type: "تطبيق جوال · مشروع UI/UX",
    role: "مصممة UI/UX",
    desc: "نموذج أولي لتجربة وواجهة المستخدم مصمم في Figma لتطبيق جوال لتنظيم الفعاليات — يساعد المستخدمين على تنظيم الفعاليات وإدارة المهام وتنسيق التفاصيل من خلال واجهة نظيفة ومنظمة.",
    tags: ["Figma"],
  },
  "SANAD": {
    name: "سند",
    type: "تطبيق جوال · KSCDR Hackathon",
    role: "مطورة ومصممة منفردة",
    hackathon: "KSCDR Hackathon",
    desc: "صُمم ونُفذ بشكل مستقل لفعالية KSCDR Hackathon، وتطبيق SANAD هو تطبيق مرافق يركّز على إمكانية الوصول لذوي الإعاقة السمعية أو ضعاف السمع، وذوي الإعاقة البصرية أو ضعاف البصر، وذوي صعوبات النطق — طورته بالكامل بنفسي من الترجمة الفورية للكلام وتحويل النص إلى صوت وحتى نظام الطوارئ (SOS).",
    tags: ["Claude Code", "Vercel", "HTML", "CSS"],
  },
  "F1 Driver Lookup": {
    name: "البحث عن سائقي فورمولا 1",
    type: "موقع إلكتروني · مشروع API",
    role: "مطورة واجهات أمامية",
    desc: "تطبيق ويب للبحث واستكشاف سائقي الفورمولا 1 حسب الموسم، باستخدام واجهة برمجة التطبيقات Ergast API لجلب بيانات رياضة السيارات وعرض معلومات السائقين ديناميكيًا على الصفحة.",
    tags: ["API", "HTML", "CSS", "JavaScript"],
  },
  "Card Magic": {
    name: "بطاقات سحرية",
    type: "موقع إلكتروني",
    role: "مطورة ويب",
    desc: "تطبيق ويب تعاوني (مشروع جماعي) لإنشاء وتخصيص بطاقات تهنئة رقمية للاحتفالات والمناسبات وأعياد الميلاد والفعاليات الخاصة — يعكس العمل الجماعي والتفاعل الوظيفي.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
  },
  "FAHEEM": {
    name: "فهيم",
    type: "موقع إلكتروني · Tuwaiq × Google Hackathon",
    role: "مطورة ويب",
    hackathon: "Tuwaiq × Google Hackathon",
    desc: "بُني لفعالية Tuwaiq × Google Hackathon، ومنصة FAHEEM هي منصة تحليلات صفية مدعومة بالذكاء الاصطناعي تُحوّل درجات التقييم الخام إلى رؤى حول الفجوات التعليمية، وتصنيفات للطلاب، وخطط تدخل مرتبة حسب الأولوية للمعلمين، بواجهة عربية بالكامل ومصممة أساسًا لدعم الكتابة من اليمين إلى اليسار.",
    tags: ["Gemini", "Codex", "CSS", "JavaScript"],
  },
};

/* ---------- MOTORSPORT_RACES — keyed by `id`. Race/event names are
   translated to their natural Arabic form (Saudi motorsport-media
   usage, e.g. the Saudi Press Agency's own wording for the Jeddah
   Fanatec GT round), not literal word-for-word translations. ---------- */
const MOTORSPORT_AR = {
  "formula-e-2026":    { name: "فورمولا إي", date: "فبراير 2026" },
  "f4-2025":           { name: "فورمولا 4", date: "ديسمبر 2025" },
  "wrc-2025":          { name: "بطولة العالم للراليات (WRC)", date: "نوفمبر 2025" },
  "formula-1-2025":    { name: "فورمولا 1", date: "أبريل 2025" },
  "saudi-rally-2025":  { name: "رالي السعودية", date: "أبريل 2025" },
  "formula-e-2025":    { name: "فورمولا إي", date: "فبراير 2025" },
  "gt-fanatec-2024":   { name: "جي تي فاناتيك", date: "نوفمبر 2024" },
  "formula-2-2024":    { name: "فورمولا 2", date: "مارس 2024" },
};
const MOTORSPORT_ROLE_AR = "مسؤولة الفحص الفني";

/* ---------- Hero code-typing animation — Arabic values for the
   human-meaningful strings only; JS keys/punctuation stay as code.
   `focus` is Arabic-only content with a different item count than the
   English version (2 items vs. 3), so it's built directly in
   typeHeroCode() rather than through this 1:1 lookup — see main.js. ---------- */
const HERO_CODE_AR = {
  "Leen Kharraz": "لين خراز",
  "Software Engineering Student": "طالبة هندسة برمجيات",
  "Internships": "التدريب",
  "Projects": "المشاريع",
  "Learning Opportunities": "فرص تعلم",
};
