/**
 * Scrapbook FX
 * Torn paper edges, ransom-note cut-out letters and "pasted-in" scroll reveals.
 */

document.documentElement.classList.add("js");

class ScrapbookFX {
  constructor() {
    this.observer = null;
  }

  init() {
    this.tearAll(document);
    this.ransomAll(document);
    this.initReveal();
    this.refresh(document);
  }

  // Re-scan a subtree after content is rendered dynamically
  refresh(root = document) {
    this.tearAll(root);
    this.ransomAll(root);
    root.querySelectorAll(".paste:not([data-observed])").forEach(el => {
      el.dataset.observed = "1";
      if (this.observer) this.observer.observe(el);
      else el.classList.add("revealed");
    });
  }

  // --- Deterministic PRNG so each element keeps the same torn shape ---
  static rng(seed) {
    let t = seed >>> 0;
    return () => {
      t += 0x6d2b79f5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  // --- 1. Torn paper edges via clip-path ---
  // data-tear="all" | "top" | "bottom" | "top bottom"
  tearAll(root) {
    root.querySelectorAll(".torn:not([data-torn])").forEach((el, i) => {
      el.dataset.torn = "1";
      const spec = (el.dataset.tear || "all").split(/\s+/);
      const all = spec.includes("all");
      const edges = {
        top: all || spec.includes("top"),
        bottom: all || spec.includes("bottom"),
        left: all || spec.includes("left"),
        right: all || spec.includes("right")
      };
      const seed = (el.textContent.length + 1) * 9301 + i * 49297 + (el.id ? el.id.length * 233 : 0);
      el.style.clipPath = ScrapbookFX.tornPolygon(edges, ScrapbookFX.rng(seed));

      // Shadows must live outside the clipped element, so wrap it
      const wrap = document.createElement("div");
      wrap.className = "torn-shadow";
      const display = getComputedStyle(el).display;
      wrap.style.display = display.startsWith("inline") ? "inline-block" : "block";
      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);
    });
  }

  static tornPolygon(edges, rand) {
    const depth = 7;
    const pts = [];
    const jag = () => (rand() * depth).toFixed(1);

    // top edge, left → right
    if (edges.top) {
      const n = 28;
      for (let i = 0; i <= n; i++) pts.push(`${((i / n) * 100).toFixed(2)}% ${jag()}px`);
    } else {
      pts.push("0% 0%", "100% 0%");
    }

    // right edge, top → bottom
    if (edges.right) {
      const n = 8;
      for (let i = 1; i < n; i++) pts.push(`calc(100% - ${jag()}px) ${((i / n) * 100).toFixed(2)}%`);
    }

    // bottom edge, right → left
    if (edges.bottom) {
      const n = 28;
      for (let i = n; i >= 0; i--) pts.push(`${((i / n) * 100).toFixed(2)}% calc(100% - ${jag()}px)`);
    } else {
      pts.push("100% 100%", "0% 100%");
    }

    // left edge, bottom → top
    if (edges.left) {
      const n = 8;
      for (let i = n - 1; i > 0; i--) pts.push(`${jag()}px ${((i / n) * 100).toFixed(2)}%`);
    }

    return `polygon(${pts.join(", ")})`;
  }

  // --- 2. Ransom-note letters cut from magazines ---
  ransomAll(root) {
    const looks = [
      { bg: "#f7f2e4", fg: "#1d1b19", font: '"Special Elite", monospace' },
      { bg: "#d6262e", fg: "#ffffff", font: '"Permanent Marker", cursive' },
      { bg: "#f4b833", fg: "#1d1b19", font: "Georgia, serif" },
      { bg: "#1b2846", fg: "#f7f2e4", font: "Impact, 'Arial Black', sans-serif" },
      { bg: "#e3ddcf", fg: "#d6262e", font: '"Kalam", cursive' },
      { bg: "#111111", fg: "#f4b833", font: '"Special Elite", monospace' }
    ];

    root.querySelectorAll("[data-ransom]:not([data-ransomed])").forEach((el, k) => {
      el.dataset.ransomed = "1";
      const rand = ScrapbookFX.rng(k * 7919 + el.textContent.length * 31);
      const text = el.textContent.trim();
      el.setAttribute("aria-label", text);
      el.textContent = "";

      [...text].forEach(ch => {
        const span = document.createElement("span");
        span.setAttribute("aria-hidden", "true");
        if (ch === " ") {
          span.className = "ransom-space";
        } else {
          const look = looks[Math.floor(rand() * looks.length)];
          span.className = "ransom-letter";
          span.textContent = ch;
          span.style.background = look.bg;
          span.style.color = look.fg;
          span.style.fontFamily = look.font;
          span.style.transform = `rotate(${(rand() * 14 - 7).toFixed(1)}deg) translateY(${(rand() * 4 - 2).toFixed(1)}px)`;
          span.style.fontSize = `${(0.9 + rand() * 0.35).toFixed(2)}em`;
        }
        el.appendChild(span);
      });
    });
  }

  // --- 3. Pieces get "pasted" onto the page as they scroll in ---
  initReveal() {
    if (!("IntersectionObserver" in window)) return;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
}

window.scrapbook = new ScrapbookFX();
document.addEventListener("DOMContentLoaded", () => window.scrapbook.init());
