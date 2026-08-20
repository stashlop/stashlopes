/**
 * The Developer Comic - Application Core
 * Interactive Graphic Novel Portfolio Engine for Stash Lopes
 */

// --- Verified Projects Dossier ---
const PROJECTS_DATA = [
  {
    id: "bidwars",
    missionNo: "MISSION #000 • CURRENT WORK",
    title: "BIDWARS",
    subtitle: "Real-Time Competitive Auction & Bidding Matrix",
    category: "web",
    badge: "🔥 CURRENT MAIN FOCUS • REAL-TIME WEBSOCKETS",
    tagline: "High-intensity real-time competitive bidding battlefield where microsecond latency, anti-sniping game theory, and live auctions collide.",
    coverImage: "assets/images/final-boss.jpg",
    stats: { stars: "ACTIVE", techCount: "7+", clearance: "TOP SECRET // ACTIVE OP" },
    techStack: ["Python", "Node.js", "WebSockets", "Redis", "Real-Time Bidding", "REST APIs", "Modern Glass UI"],
    githubUrl: "https://github.com/stashlop/bidwars.git",
    liveDemoUrl: "https://github.com/stashlop/bidwars.git",
    classifiedFile: {
      dateCodename: "OP-BIDWARS-2026",
      status: "🔥 IN ACTIVE DEVELOPMENT (MAIN FOCUS)",
      problem: "Traditional auction systems suffer from high network latency, unfair bid sniping in closing seconds, and concurrency bottlenecks when hundreds of operatives bid simultaneously.",
      solution: "Architecting BidWars — an ultra-low-latency real-time competitive bidding battleground. Powered by high-speed WebSocket state synchronization, atomic distributed locking to prevent race conditions, and dynamic anti-sniping extension clocks.",
      features: [
        "⚡ Sub-Millisecond Bid Broadcasting: Instant bidirectional WebSocket event dispatch across active participants.",
        "⏱️ Anti-Sniping Dynamic Clock: Intelligent timer auto-extension when bids land in the final seconds.",
        "🔒 Atomic Concurrency Locking: In-memory distributed locking preventing phantom bids and race conditions.",
        "📊 Live Market Telemetry: Real-time price velocity tracking, bidder leaderboards, and auction heatmaps.",
        "🎮 Game-Theoretic Auction Rooms: Multi-tier competitive rooms with reserve pricing and bidder scorecards."
      ],
      architecture: "Reactive Web Front ➔ Low-Latency WebSocket Engine ➔ Redis In-Memory State & Pub/Sub ➔ Atomic Bid Validator ➔ Persistent Relational Store.",
      challenges: "Eliminating microsecond race conditions during simultaneous bid bursts while maintaining 60fps UI sync across all active client viewports.",
      learned: "Mastering real-time WebSocket state machines, distributed atomic operations, event-driven scalability, and high-frequency UI updates."
    }
  },
  {
    id: "karigar",
    missionNo: "MISSION #001",
    title: "KARIGAR",
    subtitle: "AI-Powered Artisan Marketplace",
    category: "ai",
    badge: "GOOGLE VERTEX AI • CLOUD RUN",
    tagline: "Bridging centuries of Indian artisanal heritage with generative AI storytelling and geospatial intelligence.",
    coverImage: "assets/images/mission-karigar.jpg",
    stats: { stars: 8, techCount: "8+", clearance: "TOP SECRET" },
    techStack: ["Python", "Flask", "Vertex AI", "Gemini API", "Cloud Text-to-Speech", "Cloud Firestore", "Google Maps API", "Docker"],
    githubUrl: "https://github.com/stashlop/Karigar",
    liveDemoUrl: "https://karigar-7ngk.onrender.com",
    classifiedFile: {
      dateCodename: "OP-ARTISAN-2025",
      status: "DEPLOYED & OPERATIONAL",
      problem: "Traditional Indian artisans struggle with digital discovery, English-dominant marketplaces, and lack tools to craft compelling narrative marketing that honors their generational heritage.",
      solution: "Engineered Karigar, an end-to-end AI marketplace assistant. It transforms raw artisan craft photos and sketches into compelling cultural narratives, multimodal voice narrations in native Indian dialects, and pinpoints physical craft clusters via interactive map coordinates.",
      features: [
        "Multimodal AI Storytelling: Generates cultural provenance and social captions using Google Cloud Vertex AI & Gemini.",
        "Voice Story Creation: Text-to-Speech synthesis converting stories into localized audio narratives.",
        "Geospatial Discovery: Interactive Google Maps integration mapping artisan hubs across regions.",
        "Design Enhancement Engine: Computer vision analysis suggesting contemporary adaptations while preserving traditional motifs.",
        "Automated Video Scripting: Generates storyboarded scripts optimized for social engagement."
      ],
      architecture: "Flask Microservice Core ➔ Google Vertex AI / Gemini API ➔ Cloud Text-to-Speech ➔ Google Maps JS API ➔ Cloud Firestore NoSQL Database ➔ Containerized on Docker.",
      challenges: "Preserving authentic vernacular tone across diverse Indian dialects while maintaining sub-second inference response times for voice synthesis.",
      learned: "Mastered prompt engineering for cultural authenticity, Vertex AI integration, Firestore data structuring, and geospatial indexing."
    }
  },
  {
    id: "drishti",
    missionNo: "MISSION #002",
    title: "PROJECT DRISHTI",
    subtitle: "AI Safety & Alert Matrix",
    category: "ai",
    badge: "COMPUTER VISION • REALTIME IoT",
    tagline: "Autonomous multi-hazard computer vision matrix for hazard identification, facial recognition, and instant emergency dispatch.",
    coverImage: "assets/images/mission-drishti.jpg",
    stats: { stars: 6, techCount: "6+", clearance: "CONFIDENTIAL" },
    techStack: ["Python", "OpenCV", "YOLOv8", "TensorFlow", "Firebase Realtime DB", "Google Maps API", "Flask"],
    githubUrl: "https://github.com/stashlop",
    liveDemoUrl: "https://github.com/stashlop",
    classifiedFile: {
      dateCodename: "OP-SURVEIL-AI",
      status: "PROTOTYPED & VALIDATED",
      problem: "Conventional surveillance systems rely on passive human monitoring, causing fatal delays during rapid fire breakouts, unauthorized perimeter breach, or missing person search.",
      solution: "Developed Project Drishti, an automated edge computer vision matrix combining dual-stream thermal/optical hazard detection (fire/smoke), facial verification, and automated geolocation dispatch to a centralized Firebase monitoring command center.",
      features: [
        "Real-Time Smoke & Fire Detection: YOLOv8 deep learning vision models trained on industrial fire datasets.",
        "Facial Recognition Vectoring: 128-d face embedding matching for authorized vs unauthorized personnel.",
        "GPS Incident Geofencing: Immediate coordinates stamping on alert trigger.",
        "Real-Time Firebase Dashboard: Sub-second synchronized alert broadcasts with live camera telemetry.",
        "Automated Incident Logging: Historical incident forensics with automated snapshot capture."
      ],
      architecture: "Edge Camera Stream ➔ OpenCV Video Pipeline ➔ YOLOv8 Hazard Inference + FaceNet Verification ➔ Firebase Realtime Cloud Synchronization ➔ Web Ops Dashboard.",
      challenges: "Minimizing false positives caused by sudden lighting shifts and reflective surfaces in real-world ambient conditions.",
      learned: "Optimized frame-skipping inference pipelines for low-latency edge deployment and real-time state synchronization."
    }
  },
  {
    id: "itihaas",
    missionNo: "MISSION #003",
    title: "ITIHAAS",
    subtitle: "Heritage Tourism & Monument Matrix",
    category: "web",
    badge: "NLP CHATBOT • MONUMENT BOOKING",
    tagline: "Next-gen heritage tourism platform built for Colloquium 2025, unifying UNESCO site bookings, certified guides, and NLP travel assistance.",
    coverImage: "assets/images/mission-itihaas.jpg",
    stats: { stars: 8, techCount: "7+", clearance: "UNCLASSIFIED" },
    techStack: ["Python", "Flask", "SQLite", "SQLAlchemy", "spaCy NLP", "Flask-Login", "Google Maps API", "Flask-Mail"],
    githubUrl: "https://github.com/stashlop/Itihaas",
    liveDemoUrl: "https://github.com/stashlop/Itihaas",
    classifiedFile: {
      dateCodename: "OP-COLLOQUIUM-2025",
      status: "FEATURED AT COLLOQUIUM 2025",
      problem: "Tourists visiting Indian historical monuments face fragmented ticketing platforms, unverified guides, and a lack of contextual cultural education on site.",
      solution: "Constructed Itihaas as an all-in-one heritage platform featuring monument slot bookings, certified local guide booking, an NLP chatbot powered by spaCy, an integrated cultural merchandise marketplace, and automated WhatsApp/Email confirmations.",
      features: [
        "UNESCO Monument Ticketing: Slot-based capacity reservation system for historic sites.",
        "Intelligent Guide Dispatch: Certified local guide directory with customer review verification.",
        "spaCy NLP Assistant: Context-aware chatbot for monument history, etiquette, and travel tips.",
        "Loyalty Rewards Engine (Itihaas Coins): Gamified points for visits, reviews, and cultural quiz engagement.",
        "Omnichannel Alerts: Multi-language interface with automatic WhatsApp & SMTP email booking receipts."
      ],
      architecture: "Flask Application Layer ➔ SQLAlchemy ORM ➔ SQLite Persistence ➔ spaCy Intent Classification ➔ Google Maps JS API ➔ Jinja2 Reactive UI.",
      challenges: "Designing an extensible relational schema that effortlessly connects Users, Monuments, Guide Schedules, Merchandise Orders, and Review matrices.",
      learned: "Deepened expertise in Flask architecture, role-based auth (Flask-Login), transactional database consistency, and NLP intent processing."
    }
  },
  {
    id: "arcade",
    missionNo: "MISSION #004",
    title: "ARCHIVE & ARCADE",
    subtitle: "Digital Archive & Retro Gaming Platform",
    category: "web",
    badge: "FULL-STACK JS • COMMERCE ENGINE",
    tagline: "End-to-end digital arcade and archive platform uniting vintage book/game rentals, cafe slot reservation, and admin revenue telemetry.",
    coverImage: "assets/images/mission-arcade.jpg",
    stats: { stars: 5, techCount: "6+", clearance: "DECLASSIFIED" },
    techStack: ["Node.js", "Express", "JavaScript", "Nunjucks", "Glassmorphism CSS", "Session Auth", "REST APIs"],
    githubUrl: "https://github.com/stashlop/Archive-Arcade-mini-project",
    liveDemoUrl: "https://archive-arcade-mini-project.vercel.app",
    classifiedFile: {
      dateCodename: "OP-RETRO-ARCADE",
      status: "LIVE ON PRODUCTION",
      problem: "Modern entertainment venues need a unified online experience blending digital archive lending, game commerce, on-premise cafe table booking, and real-time revenue analytics.",
      solution: "Architected Archive & Arcade with Express.js and dynamic templating, offering books/games buy-and-rent workflows, session-based cart/checkout, slot-based cafe scheduling with collision detection, and an executive revenue dashboard with CSV export.",
      features: [
        "Curated Archive & Game Hub: Multi-tag search and filter with instant rental/purchase toggles.",
        "Interactive Cafe Booking: Capacity-aware slot reservations with weekend/member availability rules.",
        "Dynamic Glass UI: Atmospheric cyber-arcade styling with responsive background media.",
        "Executive Revenue Command: Real-time revenue breakdown by payment method, daily trend charts, and CSV telemetry export.",
        "Community & Member Hub: Email-based community onboarding with role-based administrative broadcast system."
      ],
      architecture: "Node.js runtime ➔ Express 4 routing ➔ express-session Auth ➔ Nunjucks template engine ➔ Custom JSON persistence ➔ Vercel & Render hosting.",
      challenges: "Implementing robust booking conflict checks for time slots while maintaining lightning-fast rendering without client-heavy frameworks.",
      learned: "Refined end-to-end Node.js architecture, server-side template optimization, session lifecycle management, and administrative data aggregation."
    }
  },
  {
    id: "jarvis",
    missionNo: "MISSION #005",
    title: "JARVIS-MLX",
    subtitle: "Apple Silicon Offline AI Engine",
    category: "ai",
    badge: "LOCAL LLM • APPLE SILICON MLX",
    tagline: "Stark-level local productivity intelligence running 100% offline using state-of-the-art quantized LLMs accelerated on Apple Silicon.",
    coverImage: "assets/images/hero-avatar.jpg",
    stats: { stars: 1, techCount: "4+", clearance: "EXPERIMENTAL" },
    techStack: ["Python", "Apple MLX", "Local LLMs", "Quantization", "Shell Automation"],
    githubUrl: "https://github.com/stashlop/jarvis-mlx",
    liveDemoUrl: "https://github.com/stashlop/jarvis-mlx",
    classifiedFile: {
      dateCodename: "OP-OFFLINE-JARVIS",
      status: "ACTIVE EXPERIMENTAL",
      problem: "Cloud-hosted AI assistants introduce latency, require constant internet connectivity, and pose privacy risks for proprietary codebases and sensitive data.",
      solution: "Configured and optimized an offline AI productivity suite leveraging Apple MLX framework to execute state-of-the-art language and vision models directly on Unified Memory architecture.",
      features: [
        "Zero-Cloud Architecture: 100% private local execution on hardware.",
        "Unified Memory Optimization: High-speed token generation utilizing Apple Silicon GPU cores.",
        "System Tool Integration: Automates local developer workflows and file processing.",
        "Context Management: Optimized KV cache memory footprint for long technical prompts."
      ],
      architecture: "Apple MLX Framework ➔ 4-bit Quantized Weight Pipeline ➔ Unified Memory Bus ➔ Python CLI / Socket Interface.",
      challenges: "Balancing memory bandwidth constraints against inference quality on localized laptop silicon.",
      learned: "Mastered local model deployment, model quantization techniques, and Apple Silicon machine learning optimizations."
    }
  },
  {
    id: "pipeline",
    missionNo: "MISSION #006",
    title: "STASH PIPELINE & CLOUD OPS",
    subtitle: "Automated CI/CD Deployment Matrix",
    category: "cloud",
    badge: "JENKINS • DOCKER • CI/CD",
    tagline: "Declarative CI/CD build, test, and containerized deployment pipelines with webhook automation and Maven lifecycle verification.",
    coverImage: "assets/images/final-boss.jpg",
    stats: { stars: 3, techCount: "5+", clearance: "OPERATIONAL" },
    techStack: ["Jenkins", "Docker", "Bash / Shell", "Maven", "Git", "Linux"],
    githubUrl: "https://github.com/stashlop/jenkins-pipeline-tutorial",
    liveDemoUrl: "https://github.com/stashlop/stashpipeline",
    classifiedFile: {
      dateCodename: "OP-DEVOPS-CICD",
      status: "PRODUCTION PIPELINE",
      problem: "Manual application testing and deployment creates bottlenecks, inconsistency across staging environments, and high rollback overhead.",
      solution: "Constructed automated Jenkins declarative pipelines integrating source control triggers, automated unit testing via Maven, Docker image builds, and automated push to registry.",
      features: [
        "Declarative Jenkinsfiles: Multi-stage pipeline automation for clean build, test, and deploy cycles.",
        "Containerized Execution: Isolated Docker containers for reproducible artifact generation.",
        "Automated Test Gates: Build abort triggers upon test failure or lint errors.",
        "Shell Automation Scripts: Custom bash orchestration scripts for staging environment provisioning."
      ],
      architecture: "GitHub Webhook Trigger ➔ Jenkins Orchestrator Agent ➔ Maven Build & Unit Test Stage ➔ Docker Build & Push ➔ Cloud Host Deployment.",
      challenges: "Managing pipeline credentials securely and structuring idempotent containerized build steps.",
      learned: "Deep practical understanding of DevOps automation, container lifecycle, and continuous deployment best practices."
    }
  }
];

// --- Verified Skills Arsenal ---
const SKILLS_DATA = [
  // Languages
  { name: "Python", category: "languages", icon: "🐍", level: 95, rank: "SSR • S-TIER", desc: "Core language for AI/ML, Flask web services, OpenCV, and automation scripts.", badge: "PRIMARY WEAPON" },
  { name: "JavaScript / ES6+", category: "languages", icon: "⚡", level: 92, rank: "SR • A-TIER", desc: "Modern full-stack JavaScript, asynchronous event loops, DOM mechanics, and Node APIs.", badge: "FRONT & BACK" },
  { name: "TypeScript", category: "languages", icon: "🔷", level: 85, rank: "SR • A-TIER", desc: "Static typing, interfaces, generic data structures, and type-safe web applications.", badge: "TYPE SHIELD" },
  { name: "Java & Maven", category: "languages", icon: "☕", level: 82, rank: "R • B-TIER", desc: "Object-oriented software engineering, Maven lifecycle builds, and enterprise patterns.", badge: "OOP ROBUST" },
  { name: "Dart", category: "languages", icon: "🎯", level: 80, rank: "R • B-TIER", desc: "Mobile application architecture and structured reactive interfaces.", badge: "CROSS-PLATFORM" },
  { name: "SQL & Schema", category: "languages", icon: "🗄️", level: 88, rank: "SR • A-TIER", desc: "Relational modeling, Star Schema data warehousing, indexing, and SQLAlchemy ORM.", badge: "DATA MASTER" },
  { name: "HTML5 / CSS3 / SCSS", category: "languages", icon: "🎨", level: 94, rank: "SSR • S-TIER", desc: "Semantic markup, Glassmorphism, CSS Grid, procedural shaders, and responsive UI.", badge: "VISUAL SUITE" },
  { name: "Bash & Shell", category: "languages", icon: "💻", level: 86, rank: "SR • A-TIER", desc: "Linux shell scripting, environment configuration, server automation, and POSIX tooling.", badge: "TERMINAL ACE" },

  // AI / ML
  { name: "Google Cloud Vertex AI", category: "ai", icon: "🧠", level: 94, rank: "SSR • S-TIER", desc: "Multimodal Gemini integration, prompt optimization, embeddings, and generative AI.", badge: "AI CORE" },
  { name: "Gemini API", category: "ai", icon: "✨", level: 95, rank: "SSR • S-TIER", desc: "Generative storytelling, structured JSON outputs, and conversational context systems.", badge: "GEN-AI SPECIALIST" },
  { name: "OpenCV & YOLOv8", category: "ai", icon: "👁️", level: 90, rank: "SR • A-TIER", desc: "Real-time object detection, hazard tracking, bounding boxes, and video stream processing.", badge: "VISION MATRIX" },
  { name: "spaCy NLP", category: "ai", icon: "💬", level: 88, rank: "SR • A-TIER", desc: "Tokenization, named entity recognition (NER), and domain-specific intent classification.", badge: "NLP AGENT" },
  { name: "Apple MLX & Local LLMs", category: "ai", icon: "🍎", level: 84, rank: "SR • A-TIER", desc: "Quantized local inference on Unified Memory, Apple Silicon acceleration, and private AI.", badge: "OFFLINE BRAIN" },
  { name: "Cloud Text-to-Speech", category: "ai", icon: "🎙️", level: 88, rank: "SR • A-TIER", desc: "Multilingual voice synthesis, voice tuning, and localized audio generation.", badge: "VOICE SYSTEM" },

  // Web
  { name: "Flask & Jinja2", category: "web", icon: "🌶️", level: 95, rank: "SSR • S-TIER", desc: "Production Python microservices, SQLAlchemy ORM, Flask-Login, and template engines.", badge: "BACKEND STRIKER" },
  { name: "Node.js & Express", category: "web", icon: "🟢", level: 90, rank: "SR • A-TIER", desc: "Scalable REST APIs, session authentication, middleware pipelines, and microservices.", badge: "API ENGINE" },
  { name: "React & Next.js", category: "web", icon: "⚛️", level: 86, rank: "SR • A-TIER", desc: "Component architecture, hooks, state management, and modern reactive frontends.", badge: "UI FRAMEWORK" },
  { name: "REST APIs & JSON Store", category: "web", icon: "🔌", level: 92, rank: "SSR • S-TIER", desc: "Robust API contracts, webhook listeners, endpoint security, and persistent stores.", badge: "CONNECTIVITY" },

  // Cloud / DevOps
  { name: "Google Cloud Platform", category: "cloud", icon: "☁️", level: 90, rank: "SR • A-TIER", desc: "Cloud Firestore, Cloud Run, Vertex AI suites, Google Maps Platform, and Cloud IAM.", badge: "CLOUD FORGE" },
  { name: "Docker Containerization", category: "cloud", icon: "🐳", level: 88, rank: "SR • A-TIER", desc: "Multi-stage Dockerfiles, microservice container isolation, and reproducible runtimes.", badge: "CONTAINER POD" },
  { name: "Jenkins CI/CD", category: "cloud", icon: "⚙️", level: 85, rank: "SR • A-TIER", desc: "Declarative Jenkins pipelines, automated test runs, and continuous deployment workflows.", badge: "PIPELINE BOT" },
  { name: "Git & GitHub Ops", category: "cloud", icon: "🐙", level: 94, rank: "SSR • S-TIER", desc: "Branching strategies, GitHub APIs, repo governance, and automated CI actions.", badge: "VERSION VAULT" },

  // Creative & Tools
  { name: "Blender 3D", category: "creative", icon: "🧊", level: 85, rank: "SR • A-TIER", desc: "3D scene composition, low-poly assets, spatial models, and rendering pipelines.", badge: "DIMENSION WARP" },
  { name: "UI/UX & Editorial Design", category: "creative", icon: "✒️", level: 92, rank: "SSR • S-TIER", desc: "Graphic novel aesthetic layouts, typography hierarchy, design systems, and glass UI.", badge: "COMIC ARTISAN" },
  { name: "Canva & Krita", category: "creative", icon: "🖌️", level: 88, rank: "SR • A-TIER", desc: "Digital asset illustration, banner synthesis, halftone patterning, and visual assets.", badge: "INK MASTER" }
];

// --- Verified Milestone Timeline ---
const TIMELINE_DATA = [
  {
    issue: "CHAPTER 01",
    date: "2023 — 2024",
    title: "INIT: IT Engineering Journey",
    subtitle: "The Genesis of the Developer Hero",
    desc: "Commenced formal IT Engineering degree with a dedication to deep-stack software development, data structures, algorithms, and exploring computational frontiers.",
    badge: "ACADEMIC BASE",
    icon: "🎓",
    sound: "compile"
  },
  {
    issue: "CHAPTER 02",
    date: "2024",
    title: "THE FIRST FORAYS: Full Stack & Systems",
    subtitle: "Building the Foundations",
    desc: "Authored foundational full-stack architectures: Archive & Arcade gaming archive, database management schemas, and modular web interfaces using Node.js & Flask.",
    badge: "FOUNDATION",
    icon: "🏗️",
    sound: "pop"
  },
  {
    issue: "CHAPTER 03",
    date: "2025",
    title: "COLLOQUIUM 2025: IT for Society",
    subtitle: "Itihaas Project Launch",
    desc: "Architected and presented 'Itihaas' at Colloquium 2025. Engineered UNESCO monument bookings, tour guide verification, and spaCy NLP assistance to preserve cultural heritage.",
    badge: "HACKATHON / COLLOQUIUM",
    icon: "🏆",
    sound: "zap"
  },
  {
    issue: "CHAPTER 04",
    date: "2025 — 2026",
    title: "AI EXPANSION: Karigar & Vertex AI",
    subtitle: "Multimodal AI & Geospatial Systems",
    desc: "Spearheaded Karigar, combining Google Cloud Vertex AI, Gemini, and Cloud Text-to-Speech to empower traditional artisans with generative storytelling and interactive maps.",
    badge: "AI BREAKTHROUGH",
    icon: "🚀",
    sound: "compile"
  },
  {
    issue: "CHAPTER 05",
    date: "JAN 2026 — AUG 2026",
    title: "INDUSTRY FIELDWORK: Volt-Amp Logic Controls",
    subtitle: "Software Development Intern (6 Months)",
    desc: "Served as Software Development Intern at Volt-Amp Logic Controls Pvt. Ltd. (Intelligent Instrumentation). Engineered production-ready software solutions, met tight industrial delivery timelines, and maintained rigorous software quality and reliability standards.",
    badge: "🏢 6-MONTH INDUSTRY INTERNSHIP",
    icon: "⚡",
    sound: "compile"
  },
  {
    issue: "CHAPTER 06",
    date: "2026",
    title: "DEVOPS & EDGE INTELLIGENCE",
    subtitle: "CI/CD Pipelines & Local SOTA Models",
    desc: "Engineered Jenkins declarative build pipelines (StashPipeline), containerized deployment matrices, and configured Apple MLX local inference systems for offline productivity.",
    badge: "DEVOPS & MLX",
    icon: "⚙️",
    sound: "zap"
  },
  {
    issue: "CHAPTER 07",
    date: "2026 — PRESENT",
    title: "FLAGSHIP MISSION: BIDWARS",
    subtitle: "Real-Time Bidding & WebSocket Architecture",
    desc: "Currently architecting BidWars (https://github.com/stashlop/bidwars.git) — an ultra-low latency real-time competitive bidding and auction battleground with microsecond state sync, anti-sniping clocks, and atomic concurrency controls.",
    badge: "🔥 MAIN FOCUS • IN PROGRESS",
    icon: "⚔️",
    sound: "whoosh"
  }
];

// --- Comic Sound Effect Action Words Spawner ---
const COMIC_WORDS = [
  "BAM!", "POW!", "COMPILE!", "DEPLOY!", "PASS 100%!", "STASH.EXE!",
  "ZAP!", "AI ONLINE!", "COMMIT!", "FIXED!", "MERGE!", "SYNC!"
];

function spawnComicActionWord(x, y, text) {
  const container = document.getElementById("comic-sfx-layer");
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.className = "comic-action-pop";
  bubble.textContent = text || COMIC_WORDS[Math.floor(Math.random() * COMIC_WORDS.length)];

  // Random rotation between -20deg and 20deg
  const rot = Math.floor(Math.random() * 40) - 20;
  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;
  bubble.style.setProperty("--rot", `${rot}deg`);

  container.appendChild(bubble);

  if (window.comicAudio) {
    window.comicAudio.playPop();
  }

  setTimeout(() => {
    bubble.remove();
  }, 1100);
}

// --- App State & Initialization ---
class ComicPortfolioApp {
  constructor() {
    this.activeFilter = "all";
    this.cachedRepos = [];
    this.profileData = null;
    this.readerMode = "scroll"; // 'scroll' | 'reader'
    this.currentIssueIndex = 0;
    this.issues = ["cover", "origin", "arsenal", "missions", "journey", "command-center", "contact"];
  }

  async init() {
    this.renderSkills();
    this.renderMissions();
    this.renderTimeline();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.updateSoundToggleUI();
    
    // Fetch live GitHub stats
    await this.fetchGitHubLiveStats();
  }

  // --- Render Ability Cards ---
  renderSkills(filter = "all") {
    const grid = document.getElementById("arsenal-grid");
    if (!grid) return;

    const filtered = filter === "all" ? SKILLS_DATA : SKILLS_DATA.filter(s => s.category === filter);
    
    grid.innerHTML = filtered.map((skill, index) => `
      <div class="comic-card skill-card" data-category="${skill.category}" style="animation-delay: ${index * 0.05}s">
        <div class="skill-card-header">
          <span class="skill-icon">${skill.icon}</span>
          <span class="skill-rank-badge">${skill.rank}</span>
        </div>
        <h3 class="skill-name">${skill.name}</h3>
        <p class="skill-desc">${skill.desc}</p>
        <div class="skill-power-bar-wrapper">
          <div class="skill-power-label">
            <span>POWER LEVEL</span>
            <span class="skill-power-val">${skill.level}%</span>
          </div>
          <div class="skill-power-bar">
            <div class="skill-power-fill" style="width: ${skill.level}%"></div>
          </div>
        </div>
        <div class="skill-card-footer">
          <span class="skill-sub-badge">${skill.badge}</span>
        </div>
      </div>
    `).join("");

    // Reattach sound events
    grid.querySelectorAll(".skill-card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        if (window.comicAudio) window.comicAudio.playClick();
      });
      card.addEventListener("click", (e) => {
        const rect = card.getBoundingClientRect();
        spawnComicActionWord(rect.left + rect.width / 2, rect.top + 20, "POWER UP!");
      });
    });

    if (window.comicAnimations) {
      window.comicAnimations.init3DCardTilt();
      window.comicAnimations.initScrollReveal();
    }
  }

  // --- Render Mission Covers ---
  renderMissions() {
    const grid = document.getElementById("missions-grid");
    if (!grid) return;

    grid.innerHTML = PROJECTS_DATA.map((proj, index) => `
      <article class="comic-issue-cover" data-id="${proj.id}" style="animation-delay: ${index * 0.08}s">
        <div class="issue-top-banner">
          <span class="issue-code">${proj.missionNo}</span>
          <span class="issue-clearance">${proj.stats.clearance}</span>
        </div>
        
        <div class="issue-artwork-container">
          <img src="${proj.coverImage}" alt="${proj.title} Cover Art" class="issue-cover-art" loading="lazy" />
          <div class="issue-art-overlay"></div>
          <div class="issue-badge-stamp">${proj.badge}</div>
        </div>

        <div class="issue-content-panel">
          <h3 class="issue-title">${proj.title}</h3>
          <h4 class="issue-subtitle">${proj.subtitle}</h4>
          <p class="issue-tagline">“${proj.tagline}”</p>
          
          <div class="issue-tech-chips">
            ${proj.techStack.slice(0, 5).map(t => `<span class="tech-chip">${t}</span>`).join("")}
            ${proj.techStack.length > 5 ? `<span class="tech-chip more">+${proj.techStack.length - 5}</span>` : ""}
          </div>

          <div class="issue-actions">
            <button class="comic-btn btn-red open-case-file" data-id="${proj.id}">
              <span>READ CASE FILE</span>
              <span class="btn-icon">📁</span>
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="comic-btn btn-dark" title="View Source on GitHub">
              <span>GITHUB</span>
              <span class="btn-icon">↗</span>
            </a>
          </div>
        </div>
      </article>
    `).join("");

    // Attach click events
    grid.querySelectorAll(".open-case-file").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = btn.getAttribute("data-id");
        this.openClassifiedModal(id);
      });
    });

    grid.querySelectorAll(".comic-issue-cover").forEach(card => {
      card.addEventListener("mouseenter", () => {
        if (window.comicAudio) window.comicAudio.playClick();
      });
    });
  }

  // --- Render Timeline ---
  renderTimeline() {
    const container = document.getElementById("timeline-panels");
    if (!container) return;

    container.innerHTML = TIMELINE_DATA.map((item, index) => `
      <div class="timeline-comic-panel ${index % 2 === 0 ? 'panel-left' : 'panel-right'}" style="animation-delay: ${index * 0.1}s">
        <div class="timeline-node-marker">
          <span class="timeline-node-icon">${item.icon}</span>
        </div>
        <div class="timeline-panel-box">
          <div class="timeline-header">
            <span class="timeline-issue-tag">${item.issue}</span>
            <span class="timeline-date-tag">${item.date}</span>
          </div>
          <h3 class="timeline-title">${item.title}</h3>
          <h4 class="timeline-sub">${item.subtitle}</h4>
          <p class="timeline-narrative">${item.desc}</p>
          <div class="timeline-badge">${item.badge}</div>
        </div>
      </div>
    `).join("");
  }

  // --- Open Classified Mission Case File Modal ---
  openClassifiedModal(projectId) {
    const proj = PROJECTS_DATA.find(p => p.id === projectId);
    if (!proj) return;

    const modal = document.getElementById("case-file-modal");
    const container = document.getElementById("modal-classified-content");
    if (!modal || !container) return;

    if (window.comicAudio) window.comicAudio.playWhoosh();

    const cf = proj.classifiedFile;

    container.innerHTML = `
      <div class="classified-dossier-header">
        <div class="dossier-stamp">DECLASSIFIED • LEVEL 5</div>
        <div class="dossier-top-meta">
          <span>CODENAME: <strong>${cf.dateCodename}</strong></span>
          <span>STATUS: <strong class="text-green">${cf.status}</strong></span>
          <span>MISSION: <strong>${proj.missionNo}</strong></span>
        </div>
        <h2 class="dossier-title">${proj.title}</h2>
        <h3 class="dossier-sub">${proj.subtitle}</h3>
      </div>

      <div class="classified-grid">
        <div class="classified-sidebar">
          <div class="dossier-img-frame">
            <img src="${proj.coverImage}" alt="${proj.title}" class="dossier-cover-img" />
            <div class="dossier-frame-badge">${proj.badge}</div>
          </div>

          <div class="dossier-tech-arsenal">
            <h4>TECH ARSENAL</h4>
            <div class="dossier-chips">
              ${proj.techStack.map(t => `<span class="tech-chip">${t}</span>`).join("")}
            </div>
          </div>

          <div class="dossier-links">
            ${proj.liveDemoUrl && proj.liveDemoUrl !== proj.githubUrl ? `
              <a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="comic-btn btn-red w-full">
                <span>LAUNCH LIVE DEMO</span>
                <span>⚡</span>
              </a>
            ` : ""}
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="comic-btn btn-dark w-full">
              <span>EXPLORE REPOSITORY</span>
              <span>🐙</span>
            </a>
          </div>
        </div>

        <div class="classified-main-intel">
          <div class="intel-block">
            <h4 class="intel-title">🚨 THE PROBLEM STATEMENT</h4>
            <p class="intel-text">${cf.problem}</p>
          </div>

          <div class="intel-block">
            <h4 class="intel-title">💡 THE ENGINEERING SOLUTION</h4>
            <p class="intel-text">${cf.solution}</p>
          </div>

          <div class="intel-block">
            <h4 class="intel-title">⚡ KEY OPERATIONAL CAPABILITIES</h4>
            <ul class="intel-feature-list">
              ${cf.features.map(f => `<li><span class="bullet-star">★</span> <span>${f}</span></li>`).join("")}
            </ul>
          </div>

          <div class="intel-block architecture-block">
            <h4 class="intel-title">📐 ARCHITECTURAL BLUEPRINT</h4>
            <div class="architecture-diagram">
              <code>${cf.architecture}</code>
            </div>
          </div>

          <div class="intel-columns">
            <div class="intel-col">
              <h5 class="col-title">⚔️ CHALLENGES FACED</h5>
              <p class="col-text">${cf.challenges}</p>
            </div>
            <div class="intel-col">
              <h5 class="col-title">🧠 INTEL LEARNED</h5>
              <p class="col-text">${cf.learned}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeClassifiedModal() {
    const modal = document.getElementById("case-file-modal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
      if (window.comicAudio) window.comicAudio.playClick();
    }
  }

  // --- Fetch GitHub Live Statistics & Repos ---
  async fetchGitHubLiveStats() {
    const reposContainer = document.getElementById("github-repos-grid");
    const statRepos = document.getElementById("stat-public-repos");
    const statStars = document.getElementById("stat-total-stars");
    const statFollowers = document.getElementById("stat-followers");
    const langBarContainer = document.getElementById("github-lang-breakdown");

    try {
      // 1. Fetch User Data
      const userRes = await fetch("https://api.github.com/users/stashlop");
      if (userRes.ok) {
        this.profileData = await userRes.json();
        if (statRepos) statRepos.textContent = this.profileData.public_repos || 26;
        if (statFollowers) statFollowers.textContent = this.profileData.followers || 0;
      }

      // 2. Fetch Repositories
      const reposRes = await fetch("https://api.github.com/users/stashlop/repos?per_page=100&sort=updated");
      if (reposRes.ok) {
        this.cachedRepos = await reposRes.json();
      } else {
        throw new Error("API rate limited");
      }
    } catch (e) {
      console.warn("Using offline / fallback repository data:", e);
      // Robust fallback cached from actual repositories
      this.cachedRepos = [
        { name: "bidwars", description: "🔥 [MAIN CURRENT FOCUS] Real-time competitive bidding and auction matrix with WebSocket synchronization and anti-sniping game theory.", language: "Python / Node", stargazers_count: 1, html_url: "https://github.com/stashlop/bidwars.git", updated_at: "2026-08-20T12:00:00Z", forks_count: 0 },
        { name: "Karigar", description: "AI-powered marketplace assistant for Indian artisans with Google Cloud Vertex AI, story engine, voice & maps.", language: "Python", stargazers_count: 0, html_url: "https://github.com/stashlop/Karigar", updated_at: "2026-03-25T16:01:24Z", forks_count: 0 },
        { name: "Itihaas", description: "Indian monument booking, UNESCO heritage platform with spaCy NLP chatbot, guide booking & WhatsApp alerts.", language: "Python", stargazers_count: 8, html_url: "https://github.com/stashlop/Itihaas", updated_at: "2026-08-20T09:19:21Z", forks_count: 0 },
        { name: "Archive-Arcade-mini-project", description: "Full-stack digital archive, retro games commerce, cafe slot reservation & admin revenue dashboard.", language: "JavaScript", stargazers_count: 5, html_url: "https://github.com/stashlop/Archive-Arcade-mini-project", updated_at: "2026-04-11T04:37:09Z", forks_count: 1 },
        { name: "jarvis-mlx", description: "Stark-level offline productivity assistant running on Apple Silicon MLX.", language: "Python", stargazers_count: 1, html_url: "https://github.com/stashlop/jarvis-mlx", updated_at: "2026-04-26T15:42:42Z", forks_count: 0 },
        { name: "jenkins-pipeline-tutorial", description: "Declarative CI/CD pipeline automation with Jenkins, Maven, and Docker.", language: "Shell", stargazers_count: 0, html_url: "https://github.com/stashlop/jenkins-pipeline-tutorial", updated_at: "2025-11-06T07:06:22Z", forks_count: 0 },
        { name: "star-schema", description: "Data engineering dimensional modeling and star schema design.", language: "SQL", stargazers_count: 0, html_url: "https://github.com/stashlop/star-schema", updated_at: "2026-01-13T13:25:30Z", forks_count: 0 },
        { name: "dart", description: "Dart application architecture and reactive components.", language: "Dart", stargazers_count: 0, html_url: "https://github.com/stashlop/dart", updated_at: "2026-01-24T05:01:07Z", forks_count: 0 },
        { name: "Echo-Verse", description: "Interactive audio and voice application interface.", language: "JavaScript", stargazers_count: 0, html_url: "https://github.com/stashlop/Echo-Verse", updated_at: "2025-10-14T18:43:57Z", forks_count: 0 },
        { name: "Expense-Income-Tracker-IP-", description: "Financial telemetry and balance analytics dashboard.", language: "JavaScript", stargazers_count: 0, html_url: "https://github.com/stashlop/Expense-Income-Tracker-IP-", updated_at: "2025-10-07T19:17:41Z", forks_count: 0 }
      ];
    }

    // Compute star sum and languages
    let totalStars = 0;
    const langCounts = {};

    this.cachedRepos.forEach(repo => {
      totalStars += (repo.stargazers_count || 0);
      const lang = repo.language || "Other";
      langCounts[lang] = (langCounts[lang] || 0) + 1;
    });

    if (statStars) statStars.textContent = totalStars;
    if (statRepos && !this.profileData) statRepos.textContent = this.cachedRepos.length;

    // Render language distribution bar
    if (langBarContainer) {
      const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0);
      const topLangs = Object.entries(langCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      langBarContainer.innerHTML = `
        <div class="lang-bar-track">
          ${topLangs.map(([lang, count], idx) => {
            const pct = Math.round((count / totalLangRepos) * 100);
            const colors = ["#ff2a55", "#ffd129", "#00f2fe", "#a855f7", "#22c55e", "#94a3b8"];
            return `<div class="lang-segment" style="width: ${pct}%; background-color: ${colors[idx % colors.length]};" title="${lang}: ${pct}%"></div>`;
          }).join("")}
        </div>
        <div class="lang-legend">
          ${topLangs.map(([lang, count], idx) => {
            const pct = Math.round((count / totalLangRepos) * 100);
            const colors = ["#ff2a55", "#ffd129", "#00f2fe", "#a855f7", "#22c55e", "#94a3b8"];
            return `
              <span class="legend-item">
                <span class="legend-dot" style="background: ${colors[idx % colors.length]}"></span>
                <strong>${lang}</strong> ${pct}%
              </span>
            `;
          }).join("")}
        </div>
      `;
    }

    // Render Repos
    this.renderGitHubRepos(this.cachedRepos);
  }

  // --- Render GitHub Repos in Command Center ---
  renderGitHubRepos(repos) {
    const container = document.getElementById("github-repos-grid");
    if (!container) return;

    container.innerHTML = repos.slice(0, 8).map(r => `
      <a href="${r.html_url}" target="_blank" rel="noopener noreferrer" class="command-repo-card">
        <div class="repo-card-top">
          <span class="repo-icon">📦</span>
          <span class="repo-star-count">★ ${r.stargazers_count || 0}</span>
        </div>
        <h4 class="repo-name">${r.name}</h4>
        <p class="repo-description">${r.description || "Active engineering repository & code assets."}</p>
        <div class="repo-card-bottom">
          <span class="repo-lang-tag">${r.language || "Code"}</span>
          <span class="repo-link-arrow">↗</span>
        </div>
      </a>
    `).join("");
  }

  // --- Setup Event Listeners ---
  setupEventListeners() {
    // Avatar Mode Switcher (Real Photo vs Comic Avatar)
    const avatarImg = document.getElementById("hero-main-avatar");
    const switchBtns = document.querySelectorAll(".avatar-switch-btn");
    switchBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        switchBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const imgSrc = btn.getAttribute("data-img");
        if (avatarImg && imgSrc) {
          avatarImg.style.opacity = "0.2";
          setTimeout(() => {
            avatarImg.src = imgSrc;
            avatarImg.style.opacity = "1";
          }, 150);
        }
        if (window.comicAudio) window.comicAudio.playZap();
      });
    });

    // Sound FX Toggle
    const soundBtn = document.getElementById("btn-toggle-sound");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        if (window.comicAudio) {
          const isMuted = window.comicAudio.toggleMute();
          this.updateSoundToggleUI();
          if (!isMuted) window.comicAudio.playCompile();
        }
      });
    }

    // Ability Filter Tabs
    const filterTabs = document.querySelectorAll(".arsenal-filter-btn");
    filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        filterTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const category = tab.getAttribute("data-category");
        this.renderSkills(category);
        if (window.comicAudio) window.comicAudio.playZap();
      });
    });

    // Case File Modal Close
    const closeBtn = document.getElementById("modal-close-btn");
    const backdrop = document.getElementById("case-file-modal");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeClassifiedModal());
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) this.closeClassifiedModal();
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeClassifiedModal();
    });

    // Global comic click pop effects
    document.addEventListener("click", (e) => {
      // Don't trigger if clicked inside modal or navigation
      if (e.target.closest("#case-file-modal") || e.target.closest("nav") || e.target.closest("input") || e.target.closest("textarea")) {
        return;
      }
      spawnComicActionWord(e.clientX, e.clientY);
    });

    // Hero action buttons sound
    const heroBtn1 = document.getElementById("btn-start-story");
    const heroBtn2 = document.getElementById("btn-view-projects");
    if (heroBtn1) {
      heroBtn1.addEventListener("click", () => {
        if (window.comicAudio) window.comicAudio.playCompile();
      });
    }
    if (heroBtn2) {
      heroBtn2.addEventListener("click", () => {
        if (window.comicAudio) window.comicAudio.playZap();
      });
    }

    // Contact Form submission
    const contactForm = document.getElementById("comic-contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const messageInput = document.getElementById("contact-message");
        const statusBox = document.getElementById("contact-status-box");

        if (statusBox) {
          statusBox.innerHTML = `
            <div class="comic-alert-success">
              <span class="alert-icon">⚡</span>
              <div>
                <strong>MISSION DISPATCHED!</strong>
                <p>Transmission received from ${nameInput ? nameInput.value : "Agent"}. Stash Lopes will rendezvous with you shortly!</p>
              </div>
            </div>
          `;
          statusBox.classList.add("visible");
        }

        if (window.comicAudio) window.comicAudio.playCompile();
        contactForm.reset();
      });
    }

    // Terminal Interactive CLI in Command Center
    const terminalInput = document.getElementById("terminal-cmd-input");
    const terminalOutput = document.getElementById("terminal-logs");
    if (terminalInput && terminalOutput) {
      terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const rawCmd = terminalInput.value.trim().toLowerCase();
          terminalInput.value = "";
          this.executeTerminalCmd(rawCmd, terminalOutput);
        }
      });
    }

    // Mobile Hamburger Menu
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("comic-nav-links");
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuToggle.classList.toggle("active");
        if (window.comicAudio) window.comicAudio.playClick();
      });

      // Close menu on nav item click
      navLinks.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          navLinks.classList.remove("open");
          menuToggle.classList.remove("active");
          if (window.comicAudio) window.comicAudio.playZap();
        });
      });
    }
  }

  // --- Terminal Command Handler ---
  executeTerminalCmd(cmd, outputElem) {
    if (window.comicAudio) window.comicAudio.playZap();

    const logLine = document.createElement("div");
    logLine.className = "terminal-line user-cmd";
    logLine.textContent = `stash@cyber-matrix:~$ ${cmd}`;
    outputElem.appendChild(logLine);

    const resLine = document.createElement("div");
    resLine.className = "terminal-line bot-res";

    switch (cmd) {
      case "help":
        resLine.innerHTML = `
          <span>AVAILABLE COMMANDS:</span><br>
          - <code>whoami</code>     : Display Developer hero identity<br>
          - <code>experience</code> : Display professional software engineering experience<br>
          - <code>current</code>    : Display current main working project (BidWars)<br>
          - <code>skills</code>     : List primary technical superpowers<br>
          - <code>missions</code>   : Display mission roster<br>
          - <code>aksa</code>       : Display CodedbyAKSA engineering guild info<br>
          - <code>linkedin</code>   : Open verified LinkedIn transmission frequency<br>
          - <code>github</code>     : Display GitHub repository telemetry<br>
          - <code>contact</code>    : Open emergency communication link<br>
          - <code>sudo hire stash</code> : Immediate full-access recruiter pass<br>
          - <code>clear</code>      : Clear terminal screen
        `;
        break;
      case "whoami":
        resLine.innerHTML = `<span>HERO: Stash Lopes | IT Engineer • Developer • AI/ML Enthusiast | GitHub: @stashlop | Guild: CodedbyAKSA | LinkedIn: https://www.linkedin.com/in/stash-lopes-176068333/</span>`;
        break;
      case "experience":
      case "internship":
      case "voltamp":
        resLine.innerHTML = `<span class="text-gold">🏢 PROFESSIONAL INTERNSHIP: Software Development Intern @ Volt-Amp Logic Controls Pvt. Ltd. (Intelligent Instrumentation) | Duration: 31-Jan-2026 to 1-Aug-2026 (6 Months) | Focus: Industrial instrumentation logic, robust software delivery, and high-reliability systems.</span>`;
        break;
      case "aksa":
      case "org":
      case "guild":
        resLine.innerHTML = `<span class="text-gold">⚔️ GUILD: CodedbyAKSA (https://github.com/CodedbyAKSA) — A party of 4 developers embarking on epic quests across the codebase, battling bugs, and force-pushing to victory!</span>`;
        break;
      case "linkedin":
        resLine.innerHTML = `<span class="text-cyan">💼 LINKEDIN FREQUENCY: https://www.linkedin.com/in/stash-lopes-176068333/</span>`;
        break;
      case "current":
      case "bidwars":
        resLine.innerHTML = `<span class="text-gold">🔥 CURRENT MAIN MISSION: BIDWARS (https://github.com/stashlop/bidwars.git) — Real-time competitive bidding and auction battleground with WebSocket latency optimization and anti-sniping game theory.</span>`;
        break;
      case "skills":
        resLine.innerHTML = `<span>ARSENAL: Python, WebSockets, Vertex AI, Gemini, OpenCV, YOLO, Flask, Node.js, TypeScript, Docker, Jenkins, Google Cloud</span>`;
        break;
      case "missions":
        resLine.innerHTML = `<span>ACTIVE MISSIONS: #000 BIDWARS (Current Main Focus), #001 Karigar (Vertex AI), #002 Project Drishti (Vision), #003 Itihaas (NLP/Tourism), #004 Archive & Arcade (Commerce), #005 Jarvis-MLX (Offline AI), #006 StashPipeline (CI/CD)</span>`;
        break;
      case "github":
        resLine.innerHTML = `<span>GITHUB: https://github.com/stashlop (26 Repositories, Python/JS/HTML/Shell/SQL)</span>`;
        break;
      case "contact":
        resLine.innerHTML = `<span>TRANSMISSION: Ready to rendezvous. Use Issue #05 form or email directly!</span>`;
        break;
      case "sudo hire stash":
      case "hire":
        resLine.innerHTML = `<span class="text-gold">🚨 ACCESS GRANTED! You are about to hire a top-tier IT Engineer & AI Builder. Let's make it happen!</span>`;
        if (window.comicAudio) window.comicAudio.playCompile();
        break;
      case "clear":
        outputElem.innerHTML = "";
        return;
      default:
        resLine.innerHTML = `<span class="text-red">Command not recognized: "${cmd}". Type 'help' for available protocol commands.</span>`;
        break;
    }

    outputElem.appendChild(resLine);
    outputElem.scrollTop = outputElem.scrollHeight;
  }

  // --- Update Sound Toggle UI ---
  updateSoundToggleUI() {
    const btn = document.getElementById("btn-toggle-sound");
    if (!btn || !window.comicAudio) return;
    const muted = window.comicAudio.isMuted();
    btn.innerHTML = muted ? `<span>🔇 SFX OFF</span>` : `<span>🔊 SFX ON</span>`;
    btn.setAttribute("title", muted ? "Sound Effects Muted (Click to Enable)" : "Sound Effects Enabled (Click to Mute)");
    btn.classList.toggle("muted", muted);
  }

  // --- Scroll Observer for Active Tab Highlighting ---
  setupIntersectionObserver() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".comic-nav-link");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    }, {
      root: null,
      threshold: 0.25
    });

    sections.forEach(sec => observer.observe(sec));
  }
}

// Instantiate on DOM load
document.addEventListener("DOMContentLoaded", () => {
  window.comicApp = new ComicPortfolioApp();
  window.comicApp.init();
});
