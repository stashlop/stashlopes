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
      "Design websites and product interfaces in Figma for international clients across the USA, UAE and other markets.",
      "Take client briefs from research and wireframes to high-fidelity UI and interactive prototypes.",
      "Deliver for healthcare, luxury car-rental, marketing-agency and creative-portfolio brands, adapting each to its audience.",
      "Hand off developer-ready designs, using full-stack experience to keep them practical to build."
    ],
    tags: ["Figma", "Wireframing", "Prototyping", "Design handoff", "Client work"]
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
      "Built and maintained production web applications across front-end and back-end.",
      "Designed, tested and implemented features against real product requirements with the team.",
      "Improved UI responsiveness and usability; contributed to debugging and performance work."
    ],
    tags: ["Full-stack", "Production apps", "Testing", "Performance"]
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
      "Designed interfaces, interaction flows and prototypes that guided front-end implementation."
    ],
    tags: ["Interaction design", "Prototypes", "UI"]
  }
];

// --- Projects (photos: Unsplash) ---
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
    blurb: "Bid on a 110-hero roster, build 5-hero squads and fight in a deterministic battle engine — with anti-snipe bidding and ELO matchmaking.",
    stack: ["Flutter", "Node.js", "TypeScript", "Firebase", "AR/VR"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    notes: {
      status: "In active development",
      overview: "A real-time multiplayer auction and battle arena. Players bid against each other for heroes from a 110-hero roster, assemble 5-hero squads, then send them into a deterministic, server-authoritative battle engine.",
      features: [
        "Server-authoritative real-time bidding with anti-snipe timer extensions.",
        "110-hero roster and 5-hero squad building.",
        "Deterministic battle engine so every client sees the same fight.",
        "ELO-based matchmaking.",
        "AR/VR hero viewing."
      ],
      architecture: "Flutter client ➔ Node/TypeScript game server (authoritative state) ➔ Firebase"
    }
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
    blurb: "Turns raw security alerts into cited, explainable investigations with trust scoring.",
    stack: ["Python", "TypeScript", "Multi-Agent AI", "RAG", "LLMs"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    notes: {
      status: "Built",
      overview: "A security-operations copilot that takes raw alerts and produces investigations an analyst can actually trust: every conclusion is grounded in retrieved evidence, cited, and scored.",
      features: [
        "Multi-agent pipeline that triages, investigates and summarises alerts.",
        "Retrieval-grounded answers with citations back to source evidence.",
        "Trust scoring so analysts know how much weight to give each finding.",
        "Explainable output instead of a black-box verdict."
      ],
      architecture: "Alert ingest ➔ agent orchestration (Python) ➔ retrieval over evidence ➔ cited investigation + trust score ➔ TypeScript UI"
    }
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
    blurb: "AI product storytelling, multilingual voice narration and an interactive heritage map for artisans.",
    stack: ["Gemini", "Vertex AI", "Cloud Run", "Python", "Flask", "Firestore", "Maps API"],
    githubUrl: "https://github.com/stashlop/Karigar",
    liveUrl: "https://karigar-7ngk.onrender.com",
    notes: {
      status: "Deployed",
      overview: "Built for the Google GenAI Exchange Hackathon. Karigar helps traditional Indian artisans sell online by turning photos of their craft into compelling product stories, voice narrations in their own language, and a map of craft clusters.",
      features: [
        "AI product storytelling with Gemini on Vertex AI.",
        "Multilingual voice narration with Cloud Text-to-Speech.",
        "Interactive heritage map of artisan hubs.",
        "Containerised and deployed on Cloud Run."
      ],
      architecture: "Flask ➔ Vertex AI / Gemini ➔ Cloud Text-to-Speech ➔ Google Maps ➔ Firestore ➔ Cloud Run"
    }
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
    blurb: "Admin & teacher dashboards, a question bank and ML question classification to build papers automatically.",
    stack: ["Next.js", "FastAPI", "Prisma", "Python", "ML"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    notes: {
      status: "Built",
      overview: "Setting exam papers by hand is slow and inconsistent. ExamGEN keeps a structured question bank, classifies questions with ML, and generates balanced papers on demand.",
      features: [
        "Admin and teacher dashboards.",
        "Central question bank.",
        "ML-based question classification.",
        "Automated paper generation."
      ],
      architecture: "Next.js dashboards ➔ FastAPI service ➔ Prisma ORM ➔ database; ML classifier in Python"
    }
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
    blurb: "Verified suppliers, group ordering and a multilingual voice chatbot for low-literacy users.",
    stack: ["Flask", "Python", "Voice chatbot", "Render"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    notes: {
      status: "Deployed on Render",
      overview: "Street-food vendors often buy raw materials from unverified sources at poor prices. VendorConnect connects them with verified suppliers and lets them pool orders — with a voice-first interface so it works for low-literacy users.",
      features: [
        "Verified supplier directory.",
        "Group ordering to unlock better prices.",
        "Multilingual voice chatbot for low-literacy users."
      ],
      architecture: "Flask web app ➔ supplier & order data ➔ voice chatbot ➔ deployed on Render"
    }
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
    blurb: "Monument slot booking, certified guides and an NLP travel assistant — won 1st place at Colloquium 2025.",
    stack: ["Python", "Flask", "SQLite", "SQLAlchemy", "spaCy", "Maps API"],
    githubUrl: "https://github.com/stashlop/Itihaas",
    liveUrl: null,
    notes: {
      status: "1st Place — Colloquium 2025",
      overview: "Tourists visiting Indian monuments deal with fragmented ticketing, unverified guides and little on-site context. Itihaas puts bookings, guides and a cultural assistant in one place.",
      features: [
        "Slot-based monument ticketing.",
        "Certified local guide booking with reviews.",
        "spaCy NLP chatbot for history, etiquette and travel tips.",
        "Itihaas Coins loyalty rewards.",
        "WhatsApp & email booking confirmations."
      ],
      architecture: "Flask ➔ SQLAlchemy ➔ SQLite ➔ spaCy intent classification ➔ Google Maps ➔ Jinja2 UI"
    }
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
    blurb: "Fire & smoke detection, face verification and instant geo-tagged alerts to a live dashboard.",
    stack: ["Python", "OpenCV", "YOLOv8", "TensorFlow", "Firebase", "Flask"],
    githubUrl: GITHUB_PROFILE,
    liveUrl: null,
    notes: {
      status: "Prototyped",
      overview: "Passive CCTV relies on someone watching the screen. Drishti watches for hazards automatically and pushes geo-tagged alerts to a central dashboard the moment something happens.",
      features: [
        "YOLOv8 fire & smoke detection.",
        "Face verification for authorised vs unknown people.",
        "GPS-stamped incident alerts.",
        "Real-time Firebase dashboard with snapshots."
      ],
      architecture: "Camera stream ➔ OpenCV ➔ YOLOv8 + face embeddings ➔ Firebase Realtime DB ➔ web dashboard"
    }
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
    blurb: "Book & game rentals, café slot booking with conflict checks and an admin revenue dashboard.",
    stack: ["Node.js", "Express", "JavaScript", "Nunjucks", "REST APIs"],
    githubUrl: "https://github.com/stashlop/Archive-Arcade-mini-project",
    liveUrl: "https://archive-arcade-mini-project.vercel.app",
    notes: {
      status: "Live",
      overview: "A full-stack site for a book-and-games café: browse and rent from the archive, buy games, reserve café tables, and give admins a revenue dashboard.",
      features: [
        "Searchable archive with rent / buy flows.",
        "Café slot booking with collision detection.",
        "Session-based cart and checkout.",
        "Admin revenue dashboard with CSV export."
      ],
      architecture: "Node.js ➔ Express ➔ express-session ➔ Nunjucks templates ➔ JSON persistence ➔ Vercel"
    }
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
    blurb: "A private, fully offline assistant running quantised models with Apple MLX.",
    stack: ["Python", "Apple MLX", "Local LLMs", "Quantization"],
    githubUrl: "https://github.com/stashlop/jarvis-mlx",
    liveUrl: null,
    notes: {
      status: "Experimental",
      overview: "Cloud assistants need a connection and see your data. Jarvis-MLX runs quantised language models locally on Apple Silicon so everything stays on the machine.",
      features: [
        "100% local inference.",
        "4-bit quantised models on unified memory.",
        "Automates local developer workflows."
      ],
      architecture: "Apple MLX ➔ quantised weights ➔ unified memory ➔ Python CLI"
    }
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
    blurb: "Declarative Jenkins pipelines that build, test and ship Docker images on every push.",
    stack: ["Jenkins", "Docker", "Bash", "Maven", "Git", "Linux"],
    githubUrl: "https://github.com/stashlop/jenkins-pipeline-tutorial",
    liveUrl: null,
    notes: {
      status: "Working pipeline",
      overview: "Manual build-and-deploy is slow and error-prone. These pipelines run the whole cycle automatically from a GitHub webhook.",
      features: [
        "Multi-stage declarative Jenkinsfiles.",
        "Containerised, reproducible builds.",
        "Test gates that stop bad builds.",
        "Shell scripts for environment setup."
      ],
      architecture: "GitHub webhook ➔ Jenkins ➔ Maven build & test ➔ Docker build & push ➔ deploy"
    }
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
  { date: "2023", icon: "🎓", title: "Started B.E. in Information Technology", desc: "Joined St. Francis Institute of Technology (University of Mumbai)." },
  { date: "2024", icon: "🏗️", title: "First full-stack builds", desc: "Shipped Archive & Arcade and started building with Node.js and Flask." },
  { date: "MAR 2025", icon: "⚡", title: "Software Development Intern — Voltic Amp", desc: "Eight months building and maintaining production web apps in Mumbai." },
  { date: "2025", icon: "✏️", title: "UI/UX Designer — VEARME", desc: "Remote design work: interfaces, flows and prototypes." },
  { date: "2025", icon: "🏆", title: "1st Place, Colloquium 2025 & SFIT Hackathon win", desc: "Itihaas took first place; also won the SFIT IT Department Hackathon." },
  { date: "2025", icon: "✨", title: "Google GenAI Exchange Hackathon", desc: "Built Karigar with Gemini, Vertex AI and Cloud Run." },
  { date: "2026", icon: "🌍", title: "UI/UX & Full-Stack Design Intern — Horizon View", desc: "Designing for international clients in the USA, UAE and more." },
  { date: "2026", icon: "🕸️", title: "HeroBid & CyberQore", desc: "Real-time multiplayer game systems and multi-agent AI." },
  { date: "2027", icon: "🎓", title: "Graduation (expected)", desc: "B.E. Information Technology — next stop: wherever the work is.", future: true }
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
    this.setupEventListeners();
    this.setupNavHighlight();
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
        <div class="exp-meta">
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
          <img src="${p.image}" alt="${escapeHTML(p.imageAlt)}" loading="lazy" />
          <figcaption>${escapeHTML(p.caption)}</figcaption>
        </figure>
        <div class="project-note">
          <p><strong>${escapeHTML(p.subtitle)}.</strong> ${escapeHTML(p.blurb)}</p>
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
    document.querySelectorAll(".project-card").forEach(card => {
      const show = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !show);
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
        <div class="journey-card paste" style="--r:${i % 2 ? "1deg" : "-1deg"}">
          <span class="journey-date">${escapeHTML(j.date)}</span>
          <h3>${escapeHTML(j.title)}</h3>
          <p>${escapeHTML(j.desc)}</p>
        </div>
      </li>
    `).join("");
  }

  // --- Project notebook modal ---
  openProjectModal(id) {
    const p = PROJECTS_DATA.find(x => x.id === id);
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-content");
    if (!p || !modal || !content) return;

    this.lastFocus = document.activeElement;
    if (window.comicAudio) window.comicAudio.playWhoosh();

    const n = p.notes;
    content.innerHTML = `
      <div class="spread-grid">
        <div class="spread-left">
          <figure class="polaroid">
            <span class="tape tape-top" aria-hidden="true"></span>
            <img src="${p.image}" alt="${escapeHTML(p.imageAlt)}" />
            <figcaption>${escapeHTML(p.caption)}</figcaption>
          </figure>
          <div class="spread-status"><span class="stamp stamp-red">${escapeHTML(n.status)}</span></div>
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
          <p>${escapeHTML(n.overview)}</p>

          <h4>what it does</h4>
          <ul>${n.features.map(f => `<li>${escapeHTML(f)}</li>`).join("")}</ul>

          ${n.architecture ? `<h4>how it fits together</h4><code class="spread-arch">${escapeHTML(n.architecture)}</code>` : ""}
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
    setTimeout(() => { modal.hidden = true; }, 200);
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
    document.addEventListener("keydown", e => { if (e.key === "Escape") this.closeProjectModal(); });

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
        res.textContent = "B.E. Information Technology — St. Francis Institute of Technology, University of Mumbai (expected 2027)";
        break;
      case "awards":
        res.textContent = "1st Place, Colloquium 2025 (Itihaas) · Winner, SFIT IT Dept Hackathon · Google GenAI Exchange participant · Social Media Head, IEEE SFIT";
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
