/**
 * Scrapbook FX
 * Torn paper edges, ransom-note cut-out letters, "pasted-in" scroll reveals
 * (staggered when pieces arrive together) and a light parallax.
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
    this.initDepth();
  }

  // Re-scan a subtree after content is rendered dynamically
  refresh(root = document) {
    this.tearAll(root);
    this.ransomAll(root);
    // Lists and grids marked data-reveal-children reveal item by item
    root.querySelectorAll("[data-reveal-children] > *:not(.reveal)").forEach(el => el.classList.add("reveal"));

    root.querySelectorAll(".paste:not([data-observed]), .reveal:not([data-observed]), .section-head:not([data-observed])").forEach(el => {
      el.dataset.observed = "1";
      if (this.observer) this.observer.observe(el);
      else el.classList.add("revealed");
    });
  }

  // Reveal a group of elements one after another
  static stagger(els, step = 70, max = 420) {
    els.forEach((el, i) => {
      el.style.setProperty("--stagger", `${Math.min(i * step, max)}ms`);
      el.classList.add("revealed");
      // Clear the delay afterwards so it never slows down a later hover transition
      setTimeout(() => el.style.removeProperty("--stagger"), 1600);
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
    // Colours come from the design tokens in main.css
    const looks = [
      { bg: "var(--paper)", fg: "var(--ink)", font: "var(--font-type)" },
      { bg: "var(--marker-red)", fg: "#ffffff", font: "var(--font-marker)" },
      { bg: "var(--marker-gold)", fg: "var(--ink)", font: "Georgia, serif" },
      { bg: "var(--navy)", fg: "var(--paper)", font: "Impact, 'Arial Black', sans-serif" },
      { bg: "var(--newsprint)", fg: "var(--marker-red)", font: "var(--font-hand)" },
      { bg: "#111111", fg: "var(--marker-gold)", font: "var(--font-type)" }
    ];

    root.querySelectorAll("[data-ransom]:not([data-ransomed])").forEach((el, k) => {
      el.dataset.ransomed = "1";
      const rand = ScrapbookFX.rng(k * 7919 + el.textContent.length * 31);
      const text = el.textContent.trim();
      el.setAttribute("aria-label", text);
      el.textContent = "";

      [...text].forEach((ch, n) => {
        const span = document.createElement("span");
        span.style.setProperty("--n", n);
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
      // Everything that scrolls in during the same frame lands in reading order
      const arriving = entries.filter(e => e.isIntersecting).map(e => {
        this.observer.unobserve(e.target);
        return { el: e.target, top: e.boundingClientRect.top, left: e.boundingClientRect.left };
      });
      arriving.sort((a, b) => (Math.abs(a.top - b.top) > 60 ? a.top - b.top : a.left - b.left));
      ScrapbookFX.stagger(arriving.map(a => a.el));
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }

  // --- 4. Depth: header lift, hero parallax (scroll + pointer), drifting pieces ---
  initDepth() {
    const header = document.getElementById("main-header");
    const hero = document.getElementById("cover");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const drifters = [...document.querySelectorAll("[data-drift]")];

    let queued = false;
    let pointer = { x: 0, y: 0 };
    let eased = { x: 0, y: 0 };

    const frame = () => {
      queued = false;
      const y = window.scrollY;
      const viewH = window.innerHeight;
      if (header) header.classList.toggle("is-scrolled", y > 24);
      if (reduceMotion.matches) return;

      if (hero && y < hero.offsetHeight) {
        hero.style.setProperty("--sy", y.toFixed(1));

        // Ease the pointer offset so the collage glides instead of snapping
        eased.x += (pointer.x - eased.x) * 0.08;
        eased.y += (pointer.y - eased.y) * 0.08;
        hero.style.setProperty("--mx", eased.x.toFixed(4));
        hero.style.setProperty("--my", eased.y.toFixed(4));
        if (Math.abs(pointer.x - eased.x) > 0.002 || Math.abs(pointer.y - eased.y) > 0.002) schedule();
      }

      // Offset each drifting piece by its distance from the middle of the screen
      drifters.forEach(el => {
        const box = el.getBoundingClientRect();
        if (box.bottom < -100 || box.top > viewH + 100) return;
        const current = parseFloat(el.style.getPropertyValue("--drift")) || 0;
        const centre = box.top - current + box.height / 2;
        const drift = (centre - viewH / 2) * -parseFloat(el.dataset.drift);
        el.style.setProperty("--drift", Math.max(-28, Math.min(28, drift)).toFixed(1));
      });
    };

    const schedule = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(frame);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    if (hero && finePointer.matches) {
      hero.addEventListener("pointermove", e => {
        const box = hero.getBoundingClientRect();
        pointer = { x: (e.clientX - box.left) / box.width - 0.5, y: (e.clientY - box.top) / box.height - 0.5 };
        schedule();
      });
      hero.addEventListener("pointerleave", () => { pointer = { x: 0, y: 0 }; schedule(); });
    }

    frame();
  }
}

window.scrapbook = new ScrapbookFX();
document.addEventListener("DOMContentLoaded", () => window.scrapbook.init());
