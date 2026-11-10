/**
 * Stash Lopes — Scrapbook Portfolio
 * Content data + rendering + interactions.
 */

const GITHUB_PROFILE = "https://github.com/stashlop";

// --- Internships & work experience (from résumé) ---
const EXPERIENCE_DATA = [
  {
    role: "UI/UX & Full-Stack Design Intern",
    company: "Horizon View",
    location: "International clients",
    dates: "2026 – Present",
    stampTop: "SINCE",
    stampMain: "2026",
    current: true,
    bullets: [
      "Design websites and product UI for clients in the USA, UAE and other markets.",
      "Take each brief from research and wireframes to developer-ready handoff.",
      "Sectors so far: healthcare, luxury car rental, marketing agencies, creative portfolios."
    ],
    tags: ["Figma", "Prototyping", "Client work"]
  },
  {
    role: "Software Development Intern",
    company: "Voltic Amp Technologies",
    location: "Mumbai · 8 months",
    dates: "Mar 2025 – Oct 2025",
    stampTop: "MAR – OCT",
    stampMain: "2025",
    current: false,
    bullets: [
      "Built and maintained production web apps, front-end and back-end.",
      "Shipped features to real product requirements; improved UI responsiveness and performance."
    ],
    tags: ["Full-stack", "Testing", "Debugging"]
  },
  {
    role: "UI/UX Designer",
    company: "VEARME",
    location: "Remote",
    dates: "2025",
    stampTop: "REMOTE",
    stampMain: "2025",
    current: false,
    bullets: [
      "Designed the interfaces, flows and prototypes the front-end was built from."
    ],
    tags: ["UI", "Interaction design"]
  }
];

// --- Projects (photos: Unsplash) ---
// Card: name, one line, stack, links. Notebook: the idea in a sentence + what I built.
const PROJECTS_DATA = [
  {
    id: "herobid",
    title: "HeroBid",
    subtitle: "Real-time multiplayer auction & battle arena",
    category: "web",
    featured: true,
    badge: "currently building",
    badgeNow: true,
    caption: "HeroBid",
    image: "assets/images/projects/herobid.jpg",
    imageAlt: "Spider-Man action figure against a dark background",
    stack: ["Flutter", "Node.js", "TypeScript", "Firebase", "AR/VR"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    status: "In development",
    idea: "Bid for heroes from a 110-hero roster, build a 5-hero squad, then fight.",
    built: [
      "Server-authoritative bidding with anti-snipe timer extensions.",
      "Deterministic battle engine: every client sees the same fight.",
      "ELO matchmaking and AR/VR hero viewing."
    ]
  },
  {
    id: "cyberqore",
    title: "CyberQore",
    subtitle: "Retrieval-grounded SOC copilot",
    category: "ai",
    badge: "multi-agent AI",
    caption: "CyberQore",
    image: "assets/images/projects/cyberqore.jpg",
    imageAlt: "Glowing blue circuit-board pattern",
    stack: ["Python", "TypeScript", "Multi-Agent AI", "RAG", "LLMs"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    status: "Built",
    idea: "Turns raw security alerts into investigations an analyst can check.",
    built: [
      "Agent pipeline that triages, investigates and summarises alerts.",
      "Every answer cited back to retrieved evidence.",
      "A trust score on each finding."
    ]
  },
  {
    id: "karigar",
    title: "Karigar",
    subtitle: "GenAI marketplace assistant for Indian artisans",
    category: "ai",
    badge: "Google GenAI Exchange",
    caption: "Karigar",
    image: "assets/images/projects/karigar.jpg",
    imageAlt: "Handmade ceramic cups on a shelf",
    stack: ["Gemini", "Vertex AI", "Cloud Run", "Python", "Flask", "Firestore", "Maps API"],
    githubUrl: "https://github.com/stashlop/Karigar",
    liveUrl: "https://karigar-7ngk.onrender.com",
    status: "Deployed",
    idea: "Helps artisans sell online, starting from a photo of their craft.",
    built: [
      "Product stories written by Gemini.",
      "Voice narration in the artisan's own language.",
      "An interactive map of craft clusters."
    ]
  },
  {
    id: "examgen",
    title: "ExamGEN",
    subtitle: "Automated exam-paper generator",
    category: "web",
    badge: "ML classification",
    caption: "ExamGEN",
    image: "assets/images/projects/examgen.jpg",
    imageAlt: "Student writing on paper with a pen",
    stack: ["Next.js", "FastAPI", "Prisma", "Python", "ML"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    status: "Built",
    idea: "Builds balanced exam papers from a structured question bank.",
    built: [
      "Admin and teacher dashboards.",
      "A classifier that tags each question.",
      "On-demand paper generation."
    ]
  },
  {
    id: "vendorconnect",
    title: "VendorConnect",
    subtitle: "Sourcing platform for street-food vendors",
    category: "web",
    badge: "deployed on Render",
    caption: "VendorConnect",
    image: "assets/images/projects/vendorconnect.jpg",
    imageAlt: "Plate of samosas with green chutney",
    stack: ["Flask", "Python", "Voice chatbot", "Render"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    status: "Deployed",
    idea: "Connects vendors with verified suppliers and lets them pool orders.",
    built: [
      "Verified supplier directory.",
      "Group ordering for better prices.",
      "Multilingual voice chatbot for low-literacy users."
    ]
  },
  {
    id: "itihaas",
    title: "Itihaas",
    subtitle: "Heritage-tourism platform",
    category: "web",
    badge: "🏆 1st place · Colloquium 2025",
    caption: "Itihaas",
    image: "assets/images/projects/itihaas.jpg",
    imageAlt: "The Taj Mahal framed by a carved archway",
    stack: ["Python", "Flask", "SQLite", "SQLAlchemy", "spaCy", "Maps API"],
    githubUrl: "https://github.com/stashlop/Itihaas",
    liveUrl: null,
    status: "Built",
    idea: "Monument tickets, certified guides and a travel assistant in one place.",
    built: [
      "Slot-based ticketing and guide booking with reviews.",
      "A chatbot for history, etiquette and travel tips.",
      "Loyalty coins, plus WhatsApp and email confirmations."
    ]
  },
  {
    id: "drishti",
    title: "Project Drishti",
    subtitle: "Computer-vision safety & alert system",
    category: "ai",
    badge: "computer vision",
    caption: "Drishti",
    image: "assets/images/projects/drishti.jpg",
    imageAlt: "Grid of CCTV security cameras on a wall",
    stack: ["Python", "OpenCV", "YOLOv8", "TensorFlow", "Firebase", "Flask"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    status: "Prototyped",
    idea: "Watches CCTV for hazards and alerts a live dashboard the moment one appears.",
    built: [
      "Fire and smoke detection.",
      "Face verification for known vs unknown people.",
      "GPS-stamped alerts with snapshots."
    ]
  },
  {
    id: "arcade",
    title: "Archive & Arcade",
    subtitle: "Digital archive & retro-gaming café platform",
    category: "web",
    badge: "live on Vercel",
    caption: "Archive & Arcade",
    image: "assets/images/projects/arcade.jpg",
    imageAlt: "Neon-lit arcade with rows of game machines",
    stack: ["Node.js", "Express", "JavaScript", "Nunjucks", "REST APIs"],
    githubUrl: "https://github.com/stashlop/Archive-Arcade-mini-project",
    liveUrl: "https://archive-arcade-mini-project.vercel.app",
    status: "Live",
    idea: "A book-and-games café site: rent, buy and reserve a table.",
    built: [
      "Searchable archive with rent and buy flows.",
      "Table booking with clash detection.",
      "Cart, checkout and an admin revenue dashboard with CSV export."
    ]
  },
  {
    id: "jarvis",
    title: "Jarvis-MLX",
    subtitle: "Offline AI assistant on Apple Silicon",
    category: "ai",
    badge: "local LLM",
    caption: "Jarvis-MLX",
    image: "assets/images/projects/jarvis.jpg",
    imageAlt: "MacBook lit with purple light",
    stack: ["Python", "Apple MLX", "Local LLMs", "Quantization"],
    githubUrl: "https://github.com/stashlop/jarvis-mlx",
    liveUrl: null,
    status: "Experimental",
    idea: "A private assistant that never leaves the machine.",
    built: [
      "Fully local inference on 4-bit quantised models.",
      "Automations for developer workflows."
    ]
  },
  {
    id: "pipeline",
    title: "Stash Pipeline",
    subtitle: "CI/CD automation with Jenkins & Docker",
    category: "cloud",
    badge: "devops",
    caption: "Stash Pipeline",
    image: "assets/images/projects/pipeline.jpg",
    imageAlt: "Server rack with network cables",
    stack: ["Jenkins", "Docker", "Bash", "Maven", "Git", "Linux"],
    githubUrl: "https://github.com/stashlop/jenkins-pipeline-tutorial",
    liveUrl: null,
    status: "Working",
    idea: "Builds, tests and ships a Docker image on every push.",
    built: [
      "Multi-stage declarative Jenkinsfiles.",
      "Test gates that stop bad builds.",
      "Setup scripts for the build environment."
    ]
  }
];

// --- Skills (from résumé) ---
const SKILLS_DATA = [
  { title: "Languages", emoji: "📜", color: "yellow", items: ["Python", "TypeScript", "JavaScript", "Dart", "SQL"] },
  { title: "Front-End", emoji: "🎨", color: "pink", items: ["Next.js", "React", "Flutter", "Tailwind CSS", "shadcn/ui"] },
  { title: "Back-End & Data", emoji: "🛠️", color: "blue", items: ["FastAPI", "Node.js", "Flask", "Firebase / Firestore", "Prisma", "REST APIs"] },
  { title: "AI / ML", emoji: "🧠", color: "green", items: ["Multi-agent AI", "RAG", "LLM integration", "Gemini", "Vertex AI"] },
  { title: "Design", emoji: "✏️", color: "pink", items: ["Figma", "Wireframing", "Prototyping", "Design handoff"] },
  { title: "Tools", emoji: "🧰", color: "yellow", items: ["Git & GitHub", "Docker", "CI/CD", "Google Cloud Run"] }
];

// --- Journey ---
const JOURNEY_DATA = [
  { date: "2023", icon: "🎓", title: "Started B.E. Information Technology", desc: "St. Francis Institute of Technology." },
  { date: "2024", icon: "🏗️", title: "First full-stack builds", desc: "Archive & Arcade, in Node.js and Flask." },
  { date: "MAR 2025", icon: "⚡", title: "Intern — Voltic Amp", desc: "Eight months on production web apps." },
  { date: "2025", icon: "✏️", title: "UI/UX Designer — VEARME", desc: "Remote interface and prototype work." },
  { date: "2025", icon: "🏆", title: "Two wins", desc: "Colloquium 2025 with Itihaas, then the SFIT IT Hackathon." },
  { date: "2025", icon: "✨", title: "Google GenAI Exchange", desc: "Built Karigar." },
  { date: "2026", icon: "🌍", title: "Design Intern — Horizon View", desc: "International client work." },
  { date: "2026", icon: "🕸️", title: "HeroBid & CyberQore", desc: "Real-time multiplayer and multi-agent AI." },
  { date: "2027", icon: "🎓", title: "Graduation (expected)", desc: "Next stop: wherever the work is.", future: true }
];

const SFX_WORDS = ["THWIP!", "SHIP IT!", "DEPLOY!", "COMMIT!", "MERGED!", "NICE!", "POW!", "FIXED!"];

const ROTATIONS = [-2.5, 1.8, -1.2, 2.6, -1.8, 1.2, -2.2, 2.1];
const rot = i => `${ROTATIONS[i % ROTATIONS.length]}deg`;

function escapeHTML(str) {
  return String(str ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function spawnSfxWord(x, y, text) {
  const layer = document.getElementById("sfx-layer");
  if (!layer) return;
  const word = document.createElement("div");
  word.className = "sfx-word";
  word.textContent = text || SFX_WORDS[Math.floor(Math.random() * SFX_WORDS.length)];
  word.style.left = `${x}px`;
  word.style.top = `${y}px`;
  word.style.setProperty("--rot", `${Math.floor(Math.random() * 30) - 15}deg`);
  layer.appendChild(word);
  if (window.comicAudio) window.comicAudio.playPop();
  setTimeout(() => word.remove(), 950);
}

class PortfolioApp {
  constructor() {
    this.cachedRepos = [];
    this.lastFocus = null;
  }

  async init() {
    this.renderExperience();
    this.renderProjects();
    this.renderSkills();
    this.renderJourney();
    this.setupTimeTravel();
    this.setupEventListeners();
    this.setupNavHighlight();
    this.setupOutro();
    this.updateSoundToggleUI();

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    if (window.scrapbook) window.scrapbook.refresh(document);

    await this.fetchGitHubLiveStats();
  }

  // --- Internships ---
  renderExperience() {
    const list = document.getElementById("experience-list");
    if (!list) return;

    list.innerHTML = EXPERIENCE_DATA.map((exp, i) => `
      <article class="exp-entry">
        <div class="exp-meta reveal">
          <div class="stamp exp-date-stamp">
            <span>${escapeHTML(exp.stampTop)}</span>
            <strong>${escapeHTML(exp.stampMain)}</strong>
          </div>
          ${exp.current ? `<span class="exp-now">NOW</span>` : ""}
        </div>
        <div class="notebook-page exp-page paste torn" data-tear="top bottom" style="--r:${i % 2 ? "0.8deg" : "-0.8deg"}">
          <span class="tape ${i % 2 ? "tape-corner-r" : "tape-corner-l"}" aria-hidden="true"></span>
          <h3 class="exp-role">${escapeHTML(exp.role)}</h3>
          <p class="exp-company"><strong>${escapeHTML(exp.company)}</strong> · ${escapeHTML(exp.location)} · ${escapeHTML(exp.dates)}</p>
          <ul class="exp-bullets">
            ${exp.bullets.map(b => `<li>${escapeHTML(b)}</li>`).join("")}
          </ul>
          <div class="exp-tags">
            ${exp.tags.map(t => `<span class="washi">${escapeHTML(t)}</span>`).join("")}
          </div>
        </div>
      </article>
    `).join("");
  }

  // --- Projects: polaroid wall ---
  renderProjects() {
    const wall = document.getElementById("project-wall");
    if (!wall) return;

    wall.innerHTML = PROJECTS_DATA.map((p, i) => `
      <article class="project-card${p.featured ? " is-featured" : ""}" data-id="${p.id}" data-category="${p.category}">
        <figure class="polaroid paste" style="--r:${rot(i)}">
          <span class="tape tape-top" aria-hidden="true"></span>
          <span class="project-badge${p.badgeNow ? " badge-now" : ""}">${escapeHTML(p.badge)}</span>
          <span class="photo"><img src="${p.image}" alt="${escapeHTML(p.imageAlt)}" loading="lazy" /></span>
          <figcaption>${escapeHTML(p.caption)}</figcaption>
        </figure>
        <div class="project-note reveal">
          <p><strong>${escapeHTML(p.subtitle)}</strong></p>
          <p class="project-stack">${p.stack.map(escapeHTML).join(" · ")}</p>
          <div class="project-actions">
            <button type="button" class="tape-btn btn-red open-notes" data-id="${p.id}">read the notes</button>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="tape-btn btn-paper">code ↗</a>
            ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="tape-btn btn-gold">live ↗</a>` : ""}
          </div>
        </div>
      </article>
    `).join("");

    wall.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("mouseenter", () => window.comicAudio && window.comicAudio.playClick());
      // Clicking the photo opens the notes too
      card.querySelector(".polaroid").addEventListener("click", () => this.openProjectModal(card.dataset.id));
    });
    wall.querySelectorAll(".open-notes").forEach(btn => {
      btn.addEventListener("click", () => this.openProjectModal(btn.dataset.id));
    });
  }

  filterProjects(category) {
    const shown = [];
    document.querySelectorAll(".project-card").forEach(card => {
      const show = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !show);
      if (show) shown.push(card);
    });

    // Re-paste the matching cards so the wall visibly rearranges
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const pieces = shown.flatMap(card => [...card.querySelectorAll(".paste, .reveal")]).filter(el => el.classList.contains("revealed"));
    pieces.forEach(el => el.classList.remove("revealed"));
    void document.body.offsetWidth;
    shown.forEach((card, i) => {
      card.querySelectorAll(".paste, .reveal").forEach(el => {
        if (!pieces.includes(el)) return;
        el.style.setProperty("--stagger", `${Math.min(i * 60, 360)}ms`);
        el.classList.add("revealed");
        setTimeout(() => el.style.removeProperty("--stagger"), 1600);
      });
    });
  }

  // --- Skills: sticky notes ---
  renderSkills() {
    const board = document.getElementById("skills-board");
    if (!board) return;

    board.innerHTML = SKILLS_DATA.map((s, i) => `
      <div class="sticky-note sticky-${s.color} skill-note paste" style="--r:${rot(i + 3)}">
        <span class="pin" aria-hidden="true"></span>
        <h3>${escapeHTML(s.title)}</h3>
        <ul>${s.items.map(it => `<li>${escapeHTML(it)}</li>`).join("")}</ul>
        <span class="skill-emoji" aria-hidden="true">${s.emoji}</span>
      </div>
    `).join("");
  }

  // --- Journey: ticket stops ---
  renderJourney() {
    const route = document.getElementById("journey-route");
    if (!route) return;

    route.innerHTML = JOURNEY_DATA.map((j, i) => `
      <li class="journey-stop${j.future ? " is-future" : ""}">
        <span class="journey-pin" aria-hidden="true">${j.icon}</span>
        <div class="journey-card" style="--r:${i % 2 ? "1deg" : "-1deg"}">
          <span class="journey-date">${escapeHTML(j.date)}</span>
          <h3>${escapeHTML(j.title)}</h3>
          <p>${escapeHTML(j.desc)}</p>
        </div>
      </li>
    `).join("");
  }

  // --- Journey: scroll-driven time travel ---
  // The stop crossing the "now" line (60% down the screen) is the present.
  // Stops above it are the past (aged), stops below it are the future (fogged).
  setupTimeTravel() {
    const machine = document.getElementById("time-machine");
    const route = document.getElementById("journey-route");
    const dial = document.getElementById("time-dial");
    if (!machine || !route || !dial) return;

    const stops = [...route.querySelectorAll(".journey-stop")];
    if (!stops.length) return;
    const pins = stops.map(s => s.querySelector(".journey-pin"));
    const cards = stops.map(s => s.querySelector(".journey-card"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const yearEl = dial.querySelector(".dial-year");
    const label = dial.querySelector(".dial-label");
    const count = dial.querySelector(".dial-count");
    const dir = dial.querySelector(".dial-dir");
    const bar = dial.querySelector(".dial-bar i");

    const digitStrip = "0123456789".split("").map(d => `<span>${d}</span>`).join("");
    yearEl.innerHTML = Array.from({ length: 4 }, () => `<span class="dial-col"><span class="dial-strip">${digitStrip}</span></span>`).join("");
    const strips = [...yearEl.querySelectorAll(".dial-strip")];

    cards.forEach(card => card.addEventListener("animationend", e => {
      if (e.target === card) card.classList.remove("is-arriving");
    }));

    const pad = n => String(n).padStart(2, "0");
    const restart = (el, cls) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };

    let active = null;
    let shownYear = "";
    let lastY = window.scrollY;
    let lastDir = 1;
    let warp = 0;
    let queued = false;

    const showYear = year => {
      if (year === shownYear) return;
      [...year].forEach((d, i) => strips[i] && strips[i].style.setProperty("--d", d));
      if (shownYear) {
        if (!reduceMotion.matches) restart(dial, "is-jump");
        if (window.comicAudio) window.comicAudio.playWhoosh();
      }
      shownYear = year;
    };

    const setActive = idx => {
      active = idx;
      stops.forEach((stop, i) => {
        stop.classList.toggle("is-past", i < idx);
        stop.classList.toggle("is-now", i === idx);
        stop.classList.toggle("is-ahead", i > idx);
      });
      if (idx >= 0 && !reduceMotion.matches) restart(cards[idx], "is-arriving");

      const stop = JOURNEY_DATA[Math.max(idx, 0)];
      const year = (stop.date.match(/\d{4}/) || ["0000"])[0];
      const month = stop.date.replace(/\d{4}/, "").trim();
      showYear(year);
      label.textContent = idx < 0 ? "departing from"
        : stop.future ? "arriving · the future"
        : month ? `arriving · ${month}` : "now arriving";
      count.textContent = `stop ${pad(idx + 1)} / ${pad(stops.length)}`;
    };

    const tick = () => {
      queued = false;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;

      const viewH = window.innerHeight;
      const nowLine = viewH * 0.6;
      const box = route.getBoundingClientRect();
      const travelled = Math.min(Math.max(nowLine - box.top, 0), box.height);
      machine.style.setProperty("--progress", `${travelled.toFixed(1)}px`);
      machine.classList.toggle("is-travelling", travelled > 0 && travelled < box.height);
      bar.style.setProperty("--p", box.height ? (travelled / box.height).toFixed(4) : 0);

      let idx = -1;
      pins.forEach((pin, i) => {
        const r = pin.getBoundingClientRect();
        if (r.top + r.height / 2 <= nowLine) idx = i;
      });
      if (idx !== active) setActive(idx);

      if (dy && Math.sign(dy) !== lastDir) {
        lastDir = Math.sign(dy);
        dir.textContent = lastDir > 0 ? "▶▶ forward" : "◀◀ rewind";
      }

      // Warp streaks scale with scroll speed, only while the timeline is on screen
      const mBox = machine.getBoundingClientRect();
      const onScreen = mBox.top < viewH && mBox.bottom > 0;
      const target = onScreen && !reduceMotion.matches ? Math.abs(dy) * 0.004 : 0;
      warp = Math.min(1, warp * 0.86 + target);
      if (warp < 0.01) warp = 0;
      machine.style.setProperty("--warp", warp.toFixed(3));
      if (warp > 0) schedule();
    };

    const schedule = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(tick);
    };

    machine.classList.add("is-live");
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    tick();
  }

  // --- Project notebook modal ---
  openProjectModal(id) {
    const p = PROJECTS_DATA.find(x => x.id === id);
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-content");
    if (!p || !modal || !content) return;

    this.lastFocus = document.activeElement;
    if (window.comicAudio) window.comicAudio.playWhoosh();

    content.innerHTML = `
      <div class="spread-grid">
        <div class="spread-left">
          <figure class="polaroid">
            <span class="tape tape-top" aria-hidden="true"></span>
            <span class="photo"><img src="${p.image}" alt="${escapeHTML(p.imageAlt)}" /></span>
            <figcaption>${escapeHTML(p.caption)}</figcaption>
          </figure>
          <div class="spread-status"><span class="stamp stamp-red">${escapeHTML(p.status)}</span></div>
          <div class="spread-stack">${p.stack.map(t => `<span class="washi">${escapeHTML(t)}</span>`).join("")}</div>
          <div class="spread-links">
            ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="tape-btn btn-red w-full">open live demo ↗</a>` : ""}
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="tape-btn btn-ink w-full">view on github ↗</a>
          </div>
        </div>
        <div class="spread-right">
          <span class="spread-kicker">PROJECT NOTES</span>
          <h2 class="marker-title spread-title" id="modal-title">${escapeHTML(p.title)}</h2>
          <p class="spread-sub">${escapeHTML(p.subtitle)}</p>

          <h4>the idea</h4>
          <p>${escapeHTML(p.idea)}</p>

          <h4>what I built</h4>
          <ul>${p.built.map(f => `<li>${escapeHTML(f)}</li>`).join("")}</ul>
        </div>
      </div>
    `;

    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add("active"));
    document.body.style.overflow = "hidden";
    document.getElementById("modal-close-btn").focus();
  }

  closeProjectModal() {
    const modal = document.getElementById("project-modal");
    if (!modal || modal.hidden) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => { if (!modal.classList.contains("active")) modal.hidden = true; }, 260);
    if (window.comicAudio) window.comicAudio.playClick();
    if (this.lastFocus) this.lastFocus.focus();
  }

  // --- GitHub live stats ---
  async fetchGitHubLiveStats() {
    const statRepos = document.getElementById("stat-public-repos");
    const statStars = document.getElementById("stat-total-stars");
    const langBox = document.getElementById("github-lang-breakdown");
    let profile = null;

    try {
      const userRes = await fetch("https://api.github.com/users/stashlop");
      if (userRes.ok) profile = await userRes.json();

      const reposRes = await fetch("https://api.github.com/users/stashlop/repos?per_page=100&sort=updated");
      if (!reposRes.ok) throw new Error("GitHub API unavailable");
      this.cachedRepos = (await reposRes.json()).filter(r => !r.fork);
    } catch (e) {
      console.warn("Using fallback repository data:", e);
      this.cachedRepos = [
        { name: "Karigar", description: "AI-powered marketplace assistant for Indian artisans with Vertex AI, story engine, voice & maps.", language: "Python", stargazers_count: 0, html_url: "https://github.com/stashlop/Karigar" },
        { name: "Itihaas", description: "Monument booking & heritage platform with spaCy NLP chatbot, guide booking & WhatsApp alerts.", language: "Python", stargazers_count: 8, html_url: "https://github.com/stashlop/Itihaas" },
        { name: "Archive-Arcade-mini-project", description: "Digital archive, retro games commerce, café slot reservation & admin revenue dashboard.", language: "JavaScript", stargazers_count: 5, html_url: "https://github.com/stashlop/Archive-Arcade-mini-project" },
        { name: "jarvis-mlx", description: "Offline productivity assistant running on Apple Silicon MLX.", language: "Python", stargazers_count: 1, html_url: "https://github.com/stashlop/jarvis-mlx" },
        { name: "jenkins-pipeline-tutorial", description: "Declarative CI/CD pipeline automation with Jenkins, Maven and Docker.", language: "Shell", stargazers_count: 0, html_url: "https://github.com/stashlop/jenkins-pipeline-tutorial" },
        { name: "star-schema", description: "Dimensional modelling and star-schema design.", language: "SQL", stargazers_count: 0, html_url: "https://github.com/stashlop/star-schema" },
        { name: "dart", description: "Dart application architecture and reactive components.", language: "Dart", stargazers_count: 0, html_url: "https://github.com/stashlop/dart" },
        { name: "Echo-Verse", description: "Interactive audio and voice application interface.", language: "JavaScript", stargazers_count: 0, html_url: "https://github.com/stashlop/Echo-Verse" }
      ];
    }

    const totalStars = this.cachedRepos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    if (statStars) statStars.textContent = totalStars;
    if (statRepos) statRepos.textContent = profile?.public_repos ?? this.cachedRepos.length;

    if (langBox) {
      const counts = {};
      this.cachedRepos.forEach(r => { const l = r.language || "Other"; counts[l] = (counts[l] || 0) + 1; });
      const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
      const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
      const colors = ["#d6262e", "#f4b833", "#22409a", "#6fb35a", "#e77fa3"];

      langBox.innerHTML = `
        <div class="lang-bar-track">
          ${top.map(([lang, c], i) => `<div class="lang-segment" style="width:${(c / total) * 100}%;background:${colors[i]}" title="${escapeHTML(lang)}"></div>`).join("")}
        </div>
        <div class="lang-legend">
          ${top.map(([lang, c], i) => `<span class="legend-item"><span class="legend-dot" style="background:${colors[i]}"></span><strong>${escapeHTML(lang)}</strong>&nbsp;${Math.round((c / total) * 100)}%</span>`).join("")}
        </div>
      `;
    }

    this.renderGitHubRepos(this.cachedRepos);
  }

  renderGitHubRepos(repos) {
    const box = document.getElementById("github-repos-grid");
    if (!box) return;

    box.innerHTML = repos.slice(0, 8).map((r, i) => `
      <a href="${escapeHTML(r.html_url)}" target="_blank" rel="noopener noreferrer" class="repo-tag" style="--r:${rot(i)}">
        <h3 class="repo-name">${escapeHTML(r.name)}</h3>
        <p class="repo-description">${escapeHTML(r.description || "Code, experiments and notes.")}</p>
        <div class="repo-meta"><span>${escapeHTML(r.language || "Code")}</span><span>★ ${r.stargazers_count || 0}</span></div>
      </a>
    `).join("");
  }

  // --- Events ---
  setupEventListeners() {
    // Sound toggle
    const soundBtn = document.getElementById("btn-toggle-sound");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        if (!window.comicAudio) return;
        const muted = window.comicAudio.toggleMute();
        this.updateSoundToggleUI();
        if (!muted) window.comicAudio.playCompile();
      });
    }

    // Project filters
    const chips = document.querySelectorAll(".filter-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => { c.classList.remove("active"); c.setAttribute("aria-selected", "false"); });
        chip.classList.add("active");
        chip.setAttribute("aria-selected", "true");
        this.filterProjects(chip.dataset.category);
        if (window.comicAudio) window.comicAudio.playZap();
      });
    });

    // Modal
    const modal = document.getElementById("project-modal");
    document.getElementById("modal-close-btn")?.addEventListener("click", () => this.closeProjectModal());
    modal?.addEventListener("click", e => { if (e.target === modal) this.closeProjectModal(); });
    document.addEventListener("keydown", e => {
      if (!modal || modal.hidden) return;
      if (e.key === "Escape") this.closeProjectModal();

      // Keep keyboard focus inside the open notebook
      if (e.key === "Tab") {
        const focusable = [...modal.querySelectorAll("a[href], button:not([disabled])")];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Click "THWIP!" words on empty space
    document.addEventListener("click", e => {
      if (e.target.closest("a, button, input, textarea, label, #project-modal, .site-header")) return;
      spawnSfxWord(e.clientX, e.clientY);
    });

    document.getElementById("btn-view-projects")?.addEventListener("click", () => window.comicAudio && window.comicAudio.playZap());

    // Contact postcard → opens the visitor's mail app with the message filled in
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();
        const status = document.getElementById("contact-status-box");

        if (!name || !email || !message) {
          status.innerHTML = `<div class="status-note is-error">Almost! Fill in your name, email and a message first.</div>`;
          return;
        }

        const subject = encodeURIComponent(`Hello from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:stashlopes27@gmail.com?subject=${subject}&body=${body}`;

        status.innerHTML = `<div class="status-note">Postcard ready — your mail app should open with it. Thanks, ${escapeHTML(name)}!</div>`;
        if (window.comicAudio) window.comicAudio.playCompile();
      });
    }

    // Terminal
    const input = document.getElementById("terminal-cmd-input");
    const out = document.getElementById("terminal-logs");
    if (input && out) {
      input.addEventListener("keydown", e => {
        if (e.key !== "Enter") return;
        const cmd = input.value.trim().toLowerCase();
        input.value = "";
        if (cmd) this.runCommand(cmd, out);
      });
    }

    // Mobile menu
    const toggle = document.getElementById("mobile-menu-toggle");
    const links = document.getElementById("nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.classList.toggle("active", open);
        toggle.setAttribute("aria-expanded", String(open));
        if (window.comicAudio) window.comicAudio.playClick();
      });
      links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      }));
    }
  }

  // --- Terminal commands ---
  runCommand(cmd, out) {
    if (window.comicAudio) window.comicAudio.playZap();

    const echo = document.createElement("div");
    echo.className = "terminal-line user-cmd";
    echo.textContent = `$ ${cmd}`;
    out.appendChild(echo);

    const res = document.createElement("div");
    res.className = "terminal-line bot-res";

    const current = EXPERIENCE_DATA.find(e => e.current);

    switch (cmd) {
      case "help":
        res.innerHTML = `commands: <code>whoami</code> <code>internships</code> <code>now</code> <code>projects</code> <code>skills</code> <code>education</code> <code>awards</code> <code>contact</code> <code>sudo hire stash</code> <code>clear</code>`;
        break;
      case "whoami":
        res.textContent = "Stash Lopes — Full-Stack Developer & UI/UX Designer · Mumbai, India · github.com/stashlop";
        break;
      case "internships":
      case "experience":
      case "work":
        res.innerHTML = EXPERIENCE_DATA.map(e => `• <strong>${escapeHTML(e.role)}</strong> @ ${escapeHTML(e.company)} (${escapeHTML(e.dates)})`).join("<br>");
        break;
      case "now":
      case "current":
        res.innerHTML = `<span class="text-red">${escapeHTML(current.role)} @ ${escapeHTML(current.company)}</span> — and building HeroBid on the side.`;
        break;
      case "projects":
      case "missions":
        res.textContent = PROJECTS_DATA.map(p => p.title).join(" · ");
        break;
      case "skills":
        res.textContent = SKILLS_DATA.map(s => `${s.title}: ${s.items.join(", ")}`).join(" | ");
        break;
      case "education":
        res.textContent = "B.E. Information Technology — SFIT, University of Mumbai (2027)";
        break;
      case "awards":
        res.textContent = "1st Place, Colloquium 2025 · Winner, SFIT IT Hackathon · Google GenAI Exchange · Social Media Head, IEEE SFIT";
        break;
      case "contact":
        res.innerHTML = `email <a class="ink-link" href="mailto:stashlopes27@gmail.com">stashlopes27@gmail.com</a> — or send the postcard below.`;
        break;
      case "sudo hire stash":
      case "hire":
        res.innerHTML = `<span class="text-red">ACCESS GRANTED.</span> Great call — <a class="ink-link" href="#contact">let's talk</a>.`;
        if (window.comicAudio) window.comicAudio.playCompile();
        break;
      case "clear":
        out.innerHTML = "";
        return;
      default:
        res.innerHTML = `<span class="text-red">not found: "${escapeHTML(cmd)}"</span> — try <code>help</code>`;
    }

    out.appendChild(res);
    out.scrollTop = out.scrollHeight;
  }

  updateSoundToggleUI() {
    const btn = document.getElementById("btn-toggle-sound");
    if (!btn || !window.comicAudio) return;
    const muted = window.comicAudio.isMuted();
    btn.textContent = muted ? "🔇 sfx off" : "🔊 sfx on";
    btn.classList.toggle("muted", muted);
  }

  // --- Outro clip: plays once when scrolled into view, ends on a freeze-frame ---
  setupOutro() {
    const film = document.getElementById("outro");
    const video = document.getElementById("outro-video");
    const playBtn = document.getElementById("outro-play");
    if (!film || !video || !playBtn) return;

    const play = () => {
      film.classList.remove("is-ended");
      video.currentTime = 0;
      const attempt = video.play();
      if (attempt && attempt.catch) attempt.catch(() => film.classList.remove("is-playing"));
    };

    video.addEventListener("play", () => film.classList.add("is-playing"));
    video.addEventListener("ended", () => {
      film.classList.remove("is-playing");
      film.classList.add("is-ended");
      playBtn.textContent = "↺";
      playBtn.setAttribute("aria-label", "Replay outro clip");
    });
    playBtn.addEventListener("click", play);

    // Respect reduced motion: no autoplay, the play button stays available
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        observer.disconnect();
        play();
      }
    }, { threshold: 0.35 });
    observer.observe(video);
  }

  // --- Highlight nav link of the section in view ---
  setupNavHighlight() {
    const links = document.querySelectorAll(".nav-link");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(s => observer.observe(s));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.portfolioApp = new PortfolioApp();
  window.portfolioApp.init();
});
