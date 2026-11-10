/* Backgrounds and atmosphere: skies, cherry trees, petals, rain, stars, props.
   Everything is a pure function of time, so the film can be scrubbed. */
(function (F) {
  const TAU = Math.PI * 2, W = F.W, H = F.H;

  const SKY = {
    sunset: ['#3a2a6b', '#8a4a8c', '#e8718d', '#ffa37a', '#ffd59a'],
    rain: ['#34345f', '#5a5482', '#94789c', '#d6a29c', '#efc9aa'],
    dream: ['#060620', '#14104a', '#3b1f72', '#8a3d8f', '#e58aa8'],
    hill: ['#2e2a6e', '#7a4a9a', '#f0688a', '#ff9a62', '#ffe08a'],
  };

  F.sky = (ctx, a, b, k) => {
    const g = ctx.createLinearGradient(0, 0, 0, H * 0.78);
    SKY[a].forEach((c, i) => g.addColorStop(i / 4, b ? F.mix(c, SKY[b][i], k) : c));
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  };

  F.glow = (ctx, x, y, r, color, alpha = 1) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.save(); ctx.globalAlpha *= alpha; ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2); ctx.restore();
  };

  /* ---- cherry trees: canopies are pre-rendered once ---- */
  function makeCanopy(seed, w = 560, h = 380) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d'), r = F.rng(seed), blobs = [];
    for (let i = 0; i < 230; i++) {
      const a = r() * TAU, d = Math.sqrt(r());
      blobs.push([w / 2 + Math.cos(a) * d * w * 0.4, h * 0.5 + Math.sin(a) * d * h * 0.29, 16 + r() * 28, r()]);
    }
    const pass = (col, dx, dy, k, pick) => {
      g.fillStyle = col;
      blobs.forEach((b) => { if (b[3] < pick) { g.beginPath(); g.arc(b[0] + dx, b[1] + dy, b[2] * k, 0, TAU); g.fill(); } });
    };
    pass('#b9537f', 0, 12, 1, 1); pass('#ee88ad', 0, 0, 1, 1);
    pass('#ffb3cc', 7, -8, 0.72, 0.8); pass('#ffd8e4', 11, -14, 0.4, 0.45);
    g.fillStyle = '#fff3f7';
    for (let i = 0; i < 220; i++) {
      const b = blobs[(r() * blobs.length) | 0];
      g.beginPath(); g.arc(b[0] + (r() - 0.5) * 40, b[1] + (r() - 0.5) * 40, 1.6 + r() * 2, 0, TAU); g.fill();
    }
    return c;
  }
  const canopies = [11, 23, 37].map((s) => makeCanopy(s));

  F.tree = (ctx, x, y, sc, i, t) => {
    const cv = canopies[i % 3], sway = Math.sin(t * 0.7 + i) * 3;
    ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc);
    ctx.fillStyle = '#4b2a3c';
    ctx.beginPath();
    ctx.moveTo(-17, 0); ctx.quadraticCurveTo(-8, -90, -22, -170); ctx.lineTo(-70, -230); ctx.lineTo(-58, -238);
    ctx.lineTo(-8, -190); ctx.lineTo(0, -260); ctx.lineTo(14, -258); ctx.lineTo(14, -186);
    ctx.lineTo(72, -240); ctx.lineTo(82, -230); ctx.lineTo(24, -160); ctx.quadraticCurveTo(12, -80, 19, 0);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(255,170,150,.5)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(17, -4); ctx.quadraticCurveTo(10, -80, 21, -158); ctx.stroke();
    ctx.drawImage(cv, -cv.width / 2 + sway, -cv.height - 110);
    ctx.restore();
  };
  F.canopy = (ctx, i, x, y, sc, alpha = 1) => {
    const cv = canopies[i % 3];
    ctx.save(); ctx.globalAlpha *= alpha;
    ctx.drawImage(cv, x, y, cv.width * sc, cv.height * sc); ctx.restore();
  };

  /* ---- petals ---- */
  const PETAL = ['#ffd3df', '#ffb7cb', '#ff9dbb', '#ffe6ec'];
  F.petals = (ctx, t, o = {}) => {
    const n = o.count || 40, r = F.rng(o.seed || 5), big = o.size || 1, gust = o.gust || 0;
    for (let i = 0; i < n; i++) {
      const x0 = r() * (W + 200), y0 = r() * (H + 100), vx = 30 + r() * 50, vy = 26 + r() * 40;
      const ph = r() * TAU, sz = (4 + r() * 6) * big, col = PETAL[(r() * 4) | 0];
      const x = ((x0 + t * vx + gust * (240 + r() * 300) + Math.sin(t * 1.3 + ph) * 26) % (W + 200)) - 100;
      const y = ((y0 + t * vy + Math.cos(t * 0.9 + ph) * 14) % (H + 100)) - 50;
      ctx.save();
      ctx.translate(W - x, y); ctx.rotate(t * (0.6 + r()) + ph); ctx.scale(Math.cos(t * 2.1 + ph) * 0.6 + 0.7, 1);
      ctx.globalAlpha *= o.alpha || 0.9;
      if (o.glow) { ctx.fillStyle = 'rgba(255,200,230,.18)'; ctx.beginPath(); ctx.arc(0, 0, sz * 2.4, 0, TAU); ctx.fill(); }
      ctx.fillStyle = o.glow ? '#fff1f7' : col;
      ctx.beginPath(); ctx.moveTo(0, -sz);
      ctx.bezierCurveTo(sz * 0.9, -sz * 0.6, sz * 0.7, sz * 0.7, 0, sz);
      ctx.bezierCurveTo(-sz * 0.7, sz * 0.7, -sz * 0.9, -sz * 0.6, 0, -sz);
      ctx.fill(); ctx.restore();
    }
  };

  F.vignette = (ctx, color = '40,10,50', a = 0.5) => {
    const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 0.95);
    g.addColorStop(0, `rgba(${color},0)`); g.addColorStop(1, `rgba(${color},${a})`);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  };

  function clouds(ctx, t, seed, col, y0, n = 6) {
    const r = F.rng(seed);
    for (let i = 0; i < n; i++) {
      const x = ((r() * 1700 + t * (3 + r() * 4)) % 1700) - 200, y = y0 + r() * 170, s = 0.6 + r() * 0.9;
      ctx.fillStyle = col;
      for (let j = 0; j < 5; j++) {
        ctx.beginPath(); ctx.ellipse(x + (j - 2) * 46 * s, y + Math.sin(j * 2.1) * 8, 70 * s, (16 + (j % 3) * 7) * s, 0, 0, TAU); ctx.fill();
      }
    }
  }

  /* ---- Scene I & II: riverside street at sunset; rain = 0…1 turns it into a sun-shower ---- */
  F.street = (ctx, cam, t, rain) => {
    F.sky(ctx, 'sunset', 'rain', rain);
    F.layer(ctx, cam, 0.05, () => {
      F.glow(ctx, 900, 452, 330, 'rgba(255,226,170,.85)', 1 - rain * 0.6);
      ctx.fillStyle = F.mix('#fff2cf', '#e9c9c0', rain);
      ctx.beginPath(); ctx.arc(900, 452, 62, 0, TAU); ctx.fill();
    });
    F.layer(ctx, cam, 0.1, () => {
      clouds(ctx, t, 3, `rgba(255,${190 - rain * 50},${175 - rain * 10},.5)`, 70);
      if (rain > 0) { ctx.globalAlpha = rain; clouds(ctx, t, 8, 'rgba(84,78,128,.55)', 10, 9); ctx.globalAlpha = 1; }
    });
    F.layer(ctx, cam, 0.25, () => {
      const r = F.rng(77);
      for (let x = -300; x < 1800; ) {
        const w = 36 + r() * 60, h = 30 + r() * 130;
        ctx.fillStyle = F.mix('#8a5890', '#5b4c7c', rain);
        ctx.fillRect(x, 478 - h, w, h + 6);
        ctx.fillStyle = `rgba(255,224,150,${0.5 + rain * 0.4})`;
        for (let k = 0; k < 4; k++) if (r() > 0.45) ctx.fillRect(x + 6 + r() * (w - 14), 478 - h + 8 + r() * (h - 16), 4, 5);
        x += w + 2;
      }
    });
    F.layer(ctx, cam, 0.5, () => {
      const g = ctx.createLinearGradient(0, 470, 0, 530);
      g.addColorStop(0, F.mix('#ffb48a', '#b79aa6', rain)); g.addColorStop(1, F.mix('#c86a8c', '#6c5a88', rain));
      ctx.fillStyle = g; ctx.fillRect(-600, 470, 2800, 70);
      ctx.strokeStyle = 'rgba(255,240,210,.55)'; ctx.lineWidth = 2;
      const r = F.rng(9);
      for (let i = 0; i < 60; i++) {
        const x = r() * 2400 - 400 + Math.sin(t * 0.8 + i) * 10, y = 476 + r() * 46, w = 14 + r() * 40;
        ctx.globalAlpha = 0.3 + 0.5 * Math.abs(Math.sin(t * 1.4 + i));
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + w, y); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    });
    F.layer(ctx, cam, 0.72, () => { for (let i = 0; i < 7; i++) F.tree(ctx, -260 + i * 370, 532, 0.78, i, t); });
    F.layer(ctx, cam, 1, () => {
      /* railing */
      ctx.strokeStyle = F.mix('#6a3c5c', '#453a5e', rain); ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(-800, 492); ctx.lineTo(2600, 492); ctx.moveTo(-800, 512); ctx.lineTo(2600, 512); ctx.stroke();
      ctx.lineWidth = 7;
      for (let x = -800; x < 2600; x += 64) { ctx.beginPath(); ctx.moveTo(x, 484); ctx.lineTo(x, 536); ctx.stroke(); }
      /* path */
      const g = ctx.createLinearGradient(0, 530, 0, 760);
      g.addColorStop(0, F.mix('#d18e9c', '#7e6c92', rain)); g.addColorStop(1, F.mix('#7d4a70', '#3f3760', rain));
      ctx.fillStyle = g; ctx.fillRect(-800, 530, 3400, 400);
      ctx.fillStyle = 'rgba(255,226,190,.35)'; ctx.fillRect(-800, 530, 3400, 5);
      const r = F.rng(21);
      for (let i = 0; i < 260; i++) {
        const x = r() * 3200 - 800, y = 545 + r() * 190;
        ctx.fillStyle = `rgba(255,${205 + r() * 30},${220 + r() * 20},${0.35 + r() * 0.4})`;
        ctx.beginPath(); ctx.ellipse(x, y, 3 + r() * 4, 1.5 + r() * 2, r() * 3, 0, TAU); ctx.fill();
      }
      if (rain > 0) {
        ctx.strokeStyle = 'rgba(230,230,255,.5)'; ctx.lineWidth = 1.5;
        for (let i = 0; i < 46; i++) {
          const life = F.fract(t * 1.2 + r()), x = r() * 2200 - 400, y = 550 + r() * 180;
          ctx.globalAlpha = (1 - life) * rain * 0.8;
          ctx.beginPath(); ctx.ellipse(x, y, 4 + life * 22, 1 + life * 6, 0, 0, TAU); ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      /* lamp posts */
      [330, 1010, 1690].forEach((x) => {
        ctx.strokeStyle = '#3c2440'; ctx.lineWidth = 7;
        ctx.beginPath(); ctx.moveTo(x, 548); ctx.lineTo(x, 296); ctx.quadraticCurveTo(x, 270, x + 30, 270); ctx.stroke();
        F.glow(ctx, x + 34, 282, 60 + rain * 50, 'rgba(255,224,160,.9)', 0.5 + rain * 0.5);
        ctx.fillStyle = '#fff1c4'; ctx.beginPath(); ctx.ellipse(x + 34, 280, 13, 9, 0, 0, TAU); ctx.fill();
      });
    });
  };

  F.streetFront = (ctx, cam, t, rain, gust) => {
    F.layer(ctx, cam, 1.35, () => {
      F.canopy(ctx, 1, -330, -190, 1.5, 0.96); F.canopy(ctx, 2, 860, -230, 1.6, 0.96);
    });
    F.petals(ctx, t, { count: 34, seed: 4, gust });
    F.petals(ctx, t, { count: 9, seed: 9, size: 2.4, alpha: 0.75, gust });
    if (rain > 0) {
      ctx.fillStyle = `rgba(52,44,104,${rain * 0.2})`; ctx.fillRect(0, 0, W, H);
      const r = F.rng(31);
      ctx.strokeStyle = 'rgba(226,230,255,.5)'; ctx.lineWidth = 1.3;
      ctx.beginPath();
      for (let i = 0; i < 240 * rain; i++) {
        const sp = 900 + r() * 500, len = 18 + r() * 26;
        const y = ((r() * 900 + t * sp) % 900) - 90, x = ((r() * 1500 - y * 0.16) % 1500 + 1500) % 1500 - 100;
        ctx.moveTo(x, y); ctx.lineTo(x - len * 0.16, y + len);
      }
      ctx.stroke();
    }
    F.glow(ctx, 900, 430, 620, 'rgba(255,190,130,.28)', 1 - rain * 0.6);
    F.vignette(ctx);
  };

  /* ---- Scene III: the dream ---- */
  const starList = (() => {
    const r = F.rng(404), a = [];
    for (let i = 0; i < 380; i++) a.push([r() * 1500 - 110, r() * 560 - 40, 0.4 + r() * r() * 2.2, r() * TAU, 0.6 + r() * 2.4]);
    return a;
  })();
  const galaxy = (() => {
    const c = document.createElement('canvas'); c.width = 900; c.height = 300;
    const g = c.getContext('2d'), r = F.rng(88);
    for (let i = 0; i < 1500; i++) {
      const x = r() * 900, y = 150 + (r() + r() + r() - 1.5) * 90, a = 0.05 + r() * 0.3;
      g.fillStyle = `rgba(${200 + r() * 55},${170 + r() * 60},255,${a})`;
      g.beginPath(); g.arc(x, y, r() * 1.6, 0, TAU); g.fill();
    }
    for (let i = 0; i < 26; i++) {
      const x = r() * 900, y = 150 + (r() - 0.5) * 90, rad = 50 + r() * 70;
      const gr = g.createRadialGradient(x, y, 0, x, y, rad);
      gr.addColorStop(0, `rgba(${170 + r() * 80},120,255,.09)`); gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr; g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
    return c;
  })();

  F.dream = (ctx, cam, t, join) => {
    F.sky(ctx, 'dream');
    F.layer(ctx, cam, 0.06, () => {
      ctx.save(); ctx.translate(520, 190); ctx.rotate(-0.32); ctx.drawImage(galaxy, -700, -230, 1400, 460); ctx.restore();
      starList.forEach((s) => {
        ctx.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(t * s[4] * 0.6 + s[3]));
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(s[0], s[1], s[2], 0, TAU); ctx.fill();
      });
      ctx.globalAlpha = 1;
      /* shooting stars */
      [[30.6, 300, 60], [33.2, 900, 90], [36.4, 520, 40], [39.3, 1000, 70]].forEach(([t0, x, y]) => {
        const k = (t - t0) / 0.9;
        if (k < 0 || k > 1) return;
        const hx = x - k * 260, hy = y + k * 120;
        const g = ctx.createLinearGradient(hx, hy, hx + 120, hy - 55);
        g.addColorStop(0, `rgba(255,255,255,${1 - k})`); g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx + 120, hy - 55); ctx.stroke();
      });
      /* the two stars that find each other */
      const d = 70 * (1 - join), cx = 640, cy = 120, pulse = 1 + Math.sin(t * 3) * 0.08;
      [[-d, '255,214,230'], [d, '214,226,255']].forEach(([dx, col]) => {
        F.glow(ctx, cx + dx, cy, (26 + join * 34) * pulse, `rgba(${col},.95)`);
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(cx + dx, cy, 3 + join * 1.5, 0, TAU); ctx.fill();
      });
      if (join > 0.02 && join < 0.98) {
        ctx.strokeStyle = `rgba(255,255,255,${0.5 * Math.sin(join * Math.PI)})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx - d, cy); ctx.lineTo(cx + d, cy); ctx.stroke();
      }
      if (join > 0.9) {
        const k = (join - 0.9) * 10;
        ctx.strokeStyle = `rgba(255,255,255,${k * 0.8})`; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(cx - 60 * k, cy); ctx.lineTo(cx + 60 * k, cy);
        ctx.moveTo(cx, cy - 40 * k); ctx.lineTo(cx, cy + 40 * k); ctx.stroke();
      }
    });
    F.layer(ctx, cam, 0.12, () => {
      F.glow(ctx, 980, 230, 300, 'rgba(255,214,235,.5)');
      ctx.fillStyle = '#fff4e6'; ctx.beginPath(); ctx.arc(980, 230, 92, 0, TAU); ctx.fill();
      ctx.fillStyle = 'rgba(232,196,214,.5)';
      [[950, 205, 20], [1010, 260, 14], [990, 190, 9], [940, 262, 11]].forEach((c) => { ctx.beginPath(); ctx.arc(c[0], c[1], c[2], 0, TAU); ctx.fill(); });
    });
    F.layer(ctx, cam, 1, () => {
      /* mirror-water floor */
      const g = ctx.createLinearGradient(0, 548, 0, 900);
      g.addColorStop(0, '#b0629c'); g.addColorStop(0.12, '#4a2a7e'); g.addColorStop(1, '#0b0930');
      ctx.fillStyle = g; ctx.fillRect(-900, 548, 3200, 500);
      F.glow(ctx, 640, 548, 900, 'rgba(255,170,210,.22)');
      const r = F.rng(66);
      ctx.strokeStyle = 'rgba(255,230,245,.6)'; ctx.lineWidth = 1.6;
      for (let i = 0; i < 90; i++) {
        const y = 556 + r() * r() * 190, x = r() * 2600 - 700 + Math.sin(t * 0.6 + i) * 14, w = (10 + r() * 50) * (0.4 + (y - 548) / 200);
        ctx.globalAlpha = 0.12 + 0.4 * Math.abs(Math.sin(t * 1.1 + i * 1.7));
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + w, y); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    });
  };

  /* ---- Scene IV: the hill ---- */
  F.hillSky = (ctx, cam, t, sunX, sunY, sunR) => {
    F.sky(ctx, 'hill');
    F.layer(ctx, cam, 0.08, () => {
      F.glow(ctx, sunX, sunY, sunR * 5.5, 'rgba(255,236,170,.9)');
      ctx.fillStyle = '#fff6d6'; ctx.beginPath(); ctx.arc(sunX, sunY, sunR, 0, TAU); ctx.fill();
    });
    F.layer(ctx, cam, 0.12, () => clouds(ctx, t, 14, 'rgba(255,170,160,.5)', 90, 7));
  };

  F.hillFront = (ctx, cam, t) => {
    F.hillSky(ctx, cam, t, 800, 470, 80);
    F.layer(ctx, cam, 0.4, () => {
      const r = F.rng(52);
      for (let i = 0; i < 46; i++) {
        const x = r() * 1500 - 100 + Math.sin(t * 0.4 + i) * 8, y = 120 + r() * 380, rad = 14 + r() * 40;
        ctx.fillStyle = `rgba(255,${170 + r() * 60},${200 + r() * 40},${0.12 + r() * 0.2})`;
        ctx.beginPath(); ctx.arc(x, y, rad, 0, TAU); ctx.fill();
      }
    });
    F.layer(ctx, cam, 0.8, () => { F.canopy(ctx, 0, 180, 60, 1.1, 0.9); F.canopy(ctx, 2, 560, 20, 1.1, 0.9); });
    F.layer(ctx, cam, 1, () => {
      ctx.fillStyle = '#6a3d52'; ctx.strokeStyle = '#3c1d2c'; ctx.lineWidth = 3;
      [[462, 22], [492, 22]].forEach(([y, h]) => { ctx.beginPath(); ctx.rect(486, y, 310, h); ctx.fill(); ctx.stroke(); });
      ctx.strokeStyle = 'rgba(255,190,150,.6)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(488, 464); ctx.lineTo(794, 464); ctx.stroke();
    });
  };

  F.hillBack = (ctx, cam, t) => {
    F.hillSky(ctx, cam, t, 640, 440, 96);
    F.layer(ctx, cam, 0.3, () => {
      ctx.fillStyle = '#8a4f8c';
      ctx.beginPath(); ctx.moveTo(-300, 520);
      const r = F.rng(19);
      for (let x = -300; x <= 1600; x += 60) ctx.lineTo(x, 488 - r() * 30 - Math.sin(x * 0.004) * 16);
      ctx.lineTo(1600, 560); ctx.lineTo(-300, 560); ctx.fill();
      const g = ctx.createLinearGradient(0, 500, 0, 600);
      g.addColorStop(0, '#ffb07c'); g.addColorStop(1, '#b4547e');
      ctx.fillStyle = g; ctx.fillRect(-300, 505, 1900, 200);
      ctx.strokeStyle = 'rgba(255,246,214,.8)'; ctx.lineWidth = 2;
      for (let i = 0; i < 40; i++) {
        const y = 510 + r() * 70, w = (8 + r() * 30) * (1 + (y - 510) / 40), x = 640 + (r() - 0.5) * (60 + (y - 510) * 3);
        ctx.globalAlpha = 0.3 + 0.6 * Math.abs(Math.sin(t * 1.5 + i));
        ctx.beginPath(); ctx.moveTo(x - w / 2, y); ctx.lineTo(x + w / 2, y); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    });
    F.layer(ctx, cam, 1, () => {
      const g = ctx.createLinearGradient(0, 560, 0, 760);
      g.addColorStop(0, '#5a2c5c'); g.addColorStop(1, '#2a1438');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.moveTo(-500, 760); ctx.quadraticCurveTo(640, 500, 1780, 760); ctx.lineTo(1780, 1000); ctx.lineTo(-500, 1000); ctx.fill();
      ctx.strokeStyle = 'rgba(255,170,140,.55)'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(-500, 760); ctx.quadraticCurveTo(640, 500, 1780, 760); ctx.stroke();
      F.tree(ctx, 330, 668, 1.5, 1, t);
      F.canopy(ctx, 2, 300, 10, 1.25, 1);
    });
  };

  /* ---- props ---- */
  F.umbrella = (ctx, hx, hy, tx, ty, s) => {
    ctx.save();
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#3a2430'; ctx.lineWidth = 4 * s;
    ctx.beginPath(); ctx.moveTo(hx, hy + 14 * s); ctx.lineTo(tx, ty); ctx.stroke();
    ctx.translate(tx, ty); ctx.rotate(Math.atan2(tx - hx, hy - ty)); ctx.scale(s, s);
    const w = 215, h = 92;
    ctx.fillStyle = '#e4536f'; ctx.strokeStyle = '#3c1d2c'; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(-w, 6);
    ctx.bezierCurveTo(-w * 0.9, -h * 1.25, w * 0.9, -h * 1.25, w, 6);
    for (let i = 0; i < 4; i++) { const x1 = w - (i + 1) * (w / 2); ctx.quadraticCurveTo(x1 + w / 4, -16, x1, 6); }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.16)';
    ctx.beginPath(); ctx.moveTo(0, -h + 2); ctx.bezierCurveTo(w * 0.5, -h, w * 0.9, -h * 0.5, w, 6); ctx.quadraticCurveTo(w * 0.75, -16, w / 2, 6);
    ctx.bezierCurveTo(w * 0.42, -h * 0.5, w * 0.2, -h * 0.9, 0, -h + 2); ctx.fill();
    ctx.strokeStyle = 'rgba(60,29,44,.5)'; ctx.lineWidth = 2;
    [-w / 2, 0, w / 2].forEach((x) => { ctx.beginPath(); ctx.moveTo(x, 6); ctx.quadraticCurveTo(x * 0.7, -h * 0.6, 0, -h + 4); ctx.stroke(); });
    ctx.strokeStyle = '#3a2430'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(0, -h + 6); ctx.lineTo(0, -h - 14); ctx.stroke();
    ctx.restore();
  };

  /* The closing image: the two of them from behind on the bench. rest = 0…1 head on shoulder. */
  F.backPair = (ctx, x, y, rest, t) => {
    const him = F.PAL.him, her = F.PAL.her, rim = 'rgba(255,206,160,.85)';
    const sw = Math.sin(t * 1.4) * 4;
    ctx.save(); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    /* bench seat + legs */
    ctx.fillStyle = '#3d2038'; ctx.fillRect(x - 128, y, 256, 11);
    ctx.fillRect(x - 112, y + 8, 9, 42); ctx.fillRect(x + 103, y + 8, 9, 42);
    /* him */
    ctx.fillStyle = '#a99cb6'; ctx.strokeStyle = rim; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(-68 + x, y); ctx.lineTo(x - 70, y - 92); ctx.quadraticCurveTo(x - 68, y - 112, x - 48, y - 114);
    ctx.lineTo(x - 22, y - 114); ctx.quadraticCurveTo(x - 2, y - 112, x, y - 92); ctx.lineTo(x - 2, y); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = him.skinSh; ctx.fillRect(x - 42, y - 126, 14, 14);
    ctx.fillStyle = him.hair;
    ctx.beginPath(); ctx.moveTo(x - 62, y - 128);
    [[-63, -150], [-56, -172], [-44, -178], [-35, -182], [-24, -176], [-12, -168], [-7, -150], [-8, -128], [-14, -118], [-20, -128],
      [-27, -116], [-35, -127], [-42, -115], [-49, -127], [-56, -118]].forEach((p) => ctx.lineTo(x + p[0], y + p[1]));
    ctx.closePath(); ctx.fill(); ctx.stroke();
    /* her: leans in, then the head settles on his shoulder */
    ctx.save();
    ctx.translate(x + 36, y); ctx.rotate(-0.07 * rest);
    ctx.fillStyle = '#d6c2cf';
    ctx.beginPath(); ctx.moveTo(-26, 0); ctx.lineTo(-27, -82); ctx.quadraticCurveTo(-24, -100, -10, -102);
    ctx.lineTo(10, -102); ctx.quadraticCurveTo(25, -100, 27, -82); ctx.lineTo(28, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.translate(0, -104); ctx.rotate(-0.3 * rest);
    ctx.fillStyle = her.hair;
    ctx.beginPath(); ctx.moveTo(-23, -22);
    ctx.bezierCurveTo(-25, -58, 25, -58, 24, -22);
    ctx.bezierCurveTo(29, 10, 27 + sw, 36, 20 + sw, 58);
    ctx.quadraticCurveTo(0 + sw, 66, -20 + sw, 56);
    ctx.bezierCurveTo(-28, 36, -27, 10, -23, -22);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,170,190,.4)'; ctx.lineWidth = 1.5;
    [-9, 3, 13].forEach((hx) => { ctx.beginPath(); ctx.moveTo(hx, -30); ctx.quadraticCurveTo(hx + 3, 20, hx + sw, 54); ctx.stroke(); });
    ctx.restore();
    /* bench back rail in front of them */
    ctx.fillStyle = '#4a2742'; ctx.strokeStyle = 'rgba(255,190,150,.45)'; ctx.lineWidth = 1.5;
    [[-58, 13], [-34, 13]].forEach(([dy, h]) => { ctx.beginPath(); ctx.rect(x - 128, y + dy, 256, h); ctx.fill(); ctx.stroke(); });
    ctx.fillStyle = '#3d2038'; ctx.fillRect(x - 124, y - 62, 8, 64); ctx.fillRect(x + 116, y - 62, 8, 64);
    ctx.restore();
  };
})(window.Film);
