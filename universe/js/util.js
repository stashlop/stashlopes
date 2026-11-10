/* Shared helpers for the film. Everything hangs off window.Film. */
window.Film = window.Film || {};
(function (F) {
  F.W = 1280;
  F.H = 720;
  F.TAU = Math.PI * 2;
  F.clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  F.lerp = (a, b, k) => a + (b - a) * k;
  F.fract = (v) => v - Math.floor(v);

  /* Deterministic random numbers, so every frame is reproducible when scrubbing. */
  F.rng = (seed) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  F.mix = (a, b, k) => {
    const A = hex(a), B = hex(b);
    return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * k)).join(',')})`;
  };

  /* 0→1→0 window with soft edges: used for subtitles and cards. */
  F.win = (t, a, b, f = 0.4) => F.clamp(Math.min((t - a) / f, (b - t) / f));

  /* Draw inside a parallax layer. f = 1 is the world plane the characters stand on. */
  F.layer = (ctx, cam, f, fn) => {
    const z = 1 + (cam.z - 1) * f;
    ctx.save();
    ctx.translate(F.W / 2, F.H / 2);
    ctx.scale(z, z);
    ctx.translate(-(F.W / 2 + (cam.x - F.W / 2) * f), -(F.H / 2 + (cam.y - F.H / 2) * f));
    fn();
    ctx.restore();
  };
})(window.Film);
