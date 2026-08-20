/**
 * The Developer Comic - Animations & Visual FX Engine
 * Provides 3D Card Tilt, Holographic Foil Shine, Dynamic Particle Canvas, and Comic Particle Sparks.
 */

class ComicAnimationEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.symbols = ["01", "{ }", "λ", "=>", "AI", "★", "⚡", "BAM!", "GIT", "MLX", "V1.0", "SYS", "0xFF"];
    this.colors = ["#ff2a55", "#ffd129", "#00f2fe", "#a855f7", "#ffffff"];
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
  }

  init() {
    this.initCanvasBackground();
    this.init3DCardTilt();
    this.initCursorSparks();
    this.initScrollReveal();
  }

  // --- 1. Background Cyber Canvas Particles ---
  initCanvasBackground() {
    this.canvas = document.getElementById("comic-bg-canvas");
    if (!this.canvas) {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "comic-bg-canvas";
      this.canvas.className = "comic-bg-canvas";
      document.body.prepend(this.canvas);
    }

    this.ctx = this.canvas.getContext("2d");
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());

    // Generate initial floating particles
    const particleCount = window.innerWidth < 768 ? 24 : 50;
    this.particles = [];
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        symbol: this.symbols[Math.floor(Math.random() * this.symbols.length)],
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        size: Math.floor(Math.random() * 8) + 10,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6 - 0.3,
        opacity: Math.random() * 0.45 + 0.15,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    this.animateParticles();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animateParticles() {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      if (p.x < -40) p.x = this.canvas.width + 40;
      if (p.x > this.canvas.width + 40) p.x = -40;
      if (p.y < -40) p.y = this.canvas.height + 40;
      if (p.y > this.canvas.height + 40) p.y = -40;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fillStyle = p.color;
      this.ctx.font = `900 ${p.size}px "JetBrains Mono", monospace`;
      this.ctx.fillText(p.symbol, 0, 0);
      this.ctx.restore();
    });

    requestAnimationFrame(() => this.animateParticles());
  }

  // --- 2. Interactive 3D Card Tilt with Holographic Specular Shine ---
  init3DCardTilt() {
    const cards = document.querySelectorAll(".comic-issue-cover, .skill-card, .hero-art-frame, .comic-panel, .command-repo-card");

    cards.forEach(card => {
      // Add specular foil shine layer
      if (!card.querySelector(".card-holo-shine")) {
        const shine = document.createElement("div");
        shine.className = "card-holo-shine";
        card.appendChild(shine);
      }

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        // Update shine position
        const pctX = (x / rect.width) * 100;
        const pctY = (y / rect.height) * 100;
        card.style.setProperty("--shine-x", `${pctX}%`);
        card.style.setProperty("--shine-y", `${pctY}%`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  }

  // --- 3. Cursor Comic Spark Trail ---
  initCursorSparks() {
    let lastSparkTime = 0;

    window.addEventListener("mousemove", (e) => {
      const now = Date.now();
      if (now - lastSparkTime > 75) { // throttled to 75ms
        lastSparkTime = now;
        this.createCursorSpark(e.clientX, e.clientY);
      }
    });

    window.addEventListener("click", (e) => {
      for (let i = 0; i < 6; i++) {
        this.createCursorSpark(e.clientX, e.clientY, true);
      }
    });
  }

  createCursorSpark(x, y, isBurst = false) {
    const spark = document.createElement("div");
    spark.className = "comic-cursor-spark";

    const colors = ["#ff2a55", "#ffd129", "#00f2fe", "#ffffff"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = isBurst ? Math.random() * 12 + 8 : Math.random() * 6 + 4;

    const angle = isBurst ? Math.random() * Math.PI * 2 : Math.random() * Math.PI - Math.PI / 2;
    const distance = isBurst ? Math.random() * 40 + 20 : Math.random() * 15 + 5;
    const destX = x + Math.cos(angle) * distance;
    const destY = y + Math.sin(angle) * distance;

    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.backgroundColor = color;
    spark.style.boxShadow = `0 0 8px ${color}`;

    document.body.appendChild(spark);

    spark.animate([
      { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
      { transform: `translate(${destX - x}px, ${destY - y}px) scale(0)`, opacity: 0 }
    ], {
      duration: isBurst ? 550 : 380,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)"
    }).onfinish = () => spark.remove();
  }

  // --- 4. Scroll Reveal Animations ---
  initScrollReveal() {
    const revealElements = document.querySelectorAll(".comic-panel, .comic-issue-cover, .skill-card, .timeline-comic-panel, .command-hud-grid, .final-boss-panel");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("comic-revealed");
        }
      });
    }, {
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.comicAnimations = new ComicAnimationEngine();
  window.comicAnimations.init();
});
