/* The film itself: state, the GSAP master timeline, subtitles and one render
   function per scene. Scenes only read Film.state, so each one is self-contained. */
(function (F) {
  const W = F.W, H = F.H;
  F.DURATION = 55;

  const person = (x, dir) => ({
    x, y: 636, dir, walk: 0, open: 1, happy: 0, lookX: 0, lookY: 0,
    blush: 0, smile: 0.15, tilt: 0, lean: 0, hand: 0,
  });
  const S = (F.state = {
    cam: { x: 640, y: 330, z: 1.12 },
    fade: 1, rain: 0, gust: 0, umb: 0, together: 0, hold: 0, join: 0, rest: 0,
    him: person(-70, 1), her: person(1350, -1),
  });

  /* Scene list: drives the chapter chip, the programme notes and the score. */
  F.scenes = [
    { id: 1, at: 4, end: 17, num: 'I', name: 'The First Look' },
    { id: 2, at: 17, end: 29, num: 'II', name: 'The Smile' },
    { id: 3, at: 29, end: 42, num: 'III', name: 'The Dream' },
    { id: 4, at: 42, end: 55, num: 'IV', name: 'The Ending' },
  ];

  /* Subtitles. who: n = narration, him / her = dialogue. */
  F.cues = [
    [4.7, 8.9, 'n', 'I wasn’t looking for anything that evening.'],
    [9.7, 11.4, 'n', 'And then…'],
    [11.8, 13.9, 'n', '…the whole world went quiet.'],
    [14.5, 15.5, 'him', '…Hi.'],
    [15.6, 16.6, 'her', 'Hi.'],
    [17.5, 20.7, 'n', 'The next time I saw her, the sky was falling.'],
    [21.3, 23.0, 'him', 'Here. We can share.'],
    [23.6, 24.8, 'her', '…Thank you.'],
    [25.0, 26.0, 'n', 'And then she smiled.'],
    [26.4, 28.6, 'n', 'After that, I stopped noticing the rain.'],
    [29.7, 33.5, 'n', 'That night I dreamt of a sky with room for only two.'],
    [34.4, 36.3, 'her', 'Isn’t the universe too big?'],
    [36.6, 38.2, 'him', 'Not anymore.'],
    [38.9, 41.5, 'n', 'Out of all those stars, I found mine.'],
    [42.7, 44.4, 'her', 'Stay a little longer?'],
    [45.7, 47.3, 'him', 'As long as the sky lasts.'],
    [47.9, 50.1, 'n', 'She was never the whole universe.'],
    [50.4, 53.0, 'n', 'Just the little piece of it that made the rest make sense.'],
  ];
  F.cueAt = (t) => F.cues.find((c) => t >= c[0] && t <= c[1]);

  const SHOTS = [[0, 't'], [4, '1a'], [9.5, '1b'], [11.6, '1c'], [14, '1d'], [17, '2a'], [21, '2b'], [23.2, '2c'],
    [26, '2d'], [29, '3a'], [34, '3b'], [42, '4a'], [47.5, '4b']];
  F.shotAt = (t) => { let s = 't'; for (const [at, id] of SHOTS) if (t >= at) s = id; return s; };

  /* ---------- timeline ---------- */
  F.buildTimeline = function (gsap) {
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'sine.inOut' } });
    const { cam, him, her } = S;
    const set = (t, o, v) => tl.set(o, v, t);
    const to = (t, d, o, v, ease) => tl.to(o, Object.assign({ duration: d }, ease ? { ease } : {}, v), t);
    const cut = (t, v, d, v2, ease) => { set(t, cam, v); if (d) to(t, d, cam, v2, ease); };
    const dip = (t) => { to(t - 0.6, 0.6, S, { fade: 1 }, 'power1.in'); to(t, 0.8, S, { fade: 0 }, 'power1.out'); };

    /* title: the street before anyone arrives */
    to(0, 1.6, S, { fade: 0 }, 'power1.out');
    to(0, 4, cam, { y: 360, z: 1 });

    /* I · The First Look */
    to(4, 5.3, him, { x: 520, ease: 'none' }); set(4, him, { walk: 1 }); to(9.0, 0.5, him, { walk: 0, x: 540 });
    to(4, 5.3, her, { x: 780, ease: 'none' }); set(4, her, { walk: 1 }); to(9.0, 0.5, her, { walk: 0, x: 762 });
    to(4, 5.5, cam, { z: 1.14, y: 372 });
    to(8.6, 0.8, him, { lookX: 1 });
    cut(9.5, { x: 548, y: 330, z: 3.3 }, 2.1, { z: 3.7 });
    to(9.7, 0.35, him, { open: 1.28 }, 'back.out(3)');
    to(9.6, 1.6, S, { gust: 0.5 }, 'power2.out');
    cut(11.6, { x: 752, y: 336, z: 3.4 }, 2.4, { z: 3.8 });
    set(11.6, her, { lookX: -0.6, lookY: 0.4 });
    to(12.1, 0.4, her, { lookX: 1, lookY: 0, open: 1.2 });
    to(12.7, 0.9, her, { blush: 0.9, open: 1 }); to(13.2, 0.6, her, { smile: 0.6 });
    cut(14, { x: 650, y: 400, z: 1.9 }, 3, { z: 2.1 });
    set(14, him, { open: 1, blush: 0.5 }); to(14.2, 1, him, { smile: 0.6, blush: 0.7 });
    to(14.1, 2.2, S, { gust: 1.6 }, 'power2.out');
    to(15.6, 0.5, her, { smile: 0.85 });
    dip(17);

    /* II · The Smile */
    set(17, S, { rain: 1, gust: 0, umb: 0 });
    set(17, him, { x: 330, walk: 1, lookX: 0, blush: 0, smile: 0.2 });
    set(17, her, { x: 800, lookX: 0, lookY: -1, tilt: -0.14, hand: 1, blush: 0, smile: 0, open: 1 });
    to(17, 3.7, him, { x: 696, ease: 'none' }); to(20.5, 0.5, him, { walk: 0, x: 706 });
    cut(17, { x: 620, y: 392, z: 1.25 }, 4, { x: 720, z: 1.5 });
    to(19.9, 0.5, her, { lookY: 0, lookX: 1, tilt: 0, hand: 0, open: 1.22 });
    cut(21, { x: 752, y: 372, z: 2.0 }, 2.2, { z: 2.15 });
    to(21.2, 1.1, S, { umb: 1 }, 'power2.inOut'); to(21.2, 0.8, him, { smile: 0.55, lookX: 1 });
    cut(23.2, { x: 790, y: 340, z: 3.5 }, 2.8, { z: 3.9 });
    to(23.3, 0.9, her, { blush: 1, open: 1 });
    set(24.9, her, { happy: 1 }); to(24.7, 0.4, her, { smile: 1 });
    cut(26, { x: 640, y: 424, z: 1.5 });
    set(26, S, { together: 1, umb: 0.55 });
    set(26, him, { x: 520, walk: 1, smile: 0.6, blush: 0.4, lookX: 0 });
    set(26, her, { dir: 1, happy: 0, smile: 0.75, blush: 0.6, lookX: 0 });
    to(26, 3, him, { x: 760, ease: 'none' }); to(26, 3, cam, { x: 880, ease: 'none' });
    dip(29);

    /* III · The Dream */
    set(29, S, { rain: 0, umb: 0, hold: 1 });
    set(29, him, { x: 380, y: 640, blush: 0.2 }); set(29, her, { y: 640, blush: 0.3 });
    to(29, 4.6, him, { x: 600, ease: 'none' }); to(33.4, 0.5, him, { walk: 0, x: 610 });
    cut(29, { x: 540, y: 410, z: 1.12 }, 5, { x: 660, z: 1.4 });
    set(34, S, { together: 0, hold: 2 });
    set(34, her, { x: 722, dir: -1, lookX: 1 }); set(34, him, { lookX: 1 });
    cut(34, { x: 668, y: 400, z: 2.1 }, 4.4, { z: 2.35 });
    to(34.2, 1, her, { blush: 0.7 }); to(36.4, 0.8, him, { smile: 0.8, blush: 0.6 });
    to(37.6, 0.6, her, { smile: 0.9 });
    to(38.5, 3, cam, { y: 150, z: 1.5 }, 'power2.inOut');
    to(39.2, 2.3, S, { join: 1 }, 'power2.inOut');
    dip(42);

    /* IV · The Ending */
    set(42, S, { hold: 0, join: 0 });
    set(42, him, { x: 596, y: 716, lookX: 0, smile: 0.3, blush: 0.2 });
    set(42, her, { x: 680, y: 722, lookX: 0.5, smile: 0.4, blush: 0.4 });
    cut(42, { x: 636, y: 398, z: 2.45 }, 5.5, { z: 2.7, y: 392 });
    to(44.2, 1.3, her, { lean: 0.15, tilt: 0.3, lookX: 0 }, 'power2.inOut'); to(44.4, 1.3, S, { rest: 1 }, 'power2.inOut');
    to(45.3, 0.3, her, { open: 0 }); to(45.2, 0.6, her, { smile: 0.85, blush: 0.8 });
    to(44.7, 0.5, him, { lookX: 1, open: 1.2 }); to(45, 0.7, him, { blush: 0.85 });
    to(45.5, 0.8, him, { smile: 0.8, open: 1 }); to(46.5, 0.8, him, { lookX: 0 });
    cut(47.5, { x: 640, y: 452, z: 1.75 }, 5.6, { y: 380, z: 1.12 }, 'power1.out');
    to(52.7, 1.5, S, { fade: 0.78 }, 'power1.in');
    tl.set({}, {}, F.DURATION);
    return tl;
  };

  /* ---------- per-frame helpers ---------- */
  const blink = (t, seed) => { const p = (t + seed * 1.7) % (2.9 + seed); return p < 0.16 ? Math.abs(p - 0.08) / 0.08 : 1; };

  function pose(who, t, extra) {
    const c = S[who], cue = F.cueAt(t), f = who === 'her';
    const sway = Math.sin(t * 1.6 + (f ? 1 : 0)) * 0.22 + S.gust * 0.45 * Math.sin(t * 5 + 1) * 0.5 + Math.min(S.gust, 1) * 0.6;
    return Object.assign({
      x: c.x, y: c.y, s: f ? 0.47 : 0.5, dir: c.dir, t,
      phase: c.x * (Math.PI * 2 / 92), walk: c.walk,
      open: Math.min(c.open, c.open * blink(t, f ? 0.6 : 0.1)), happy: c.happy,
      lookX: c.lookX, lookY: c.lookY, blush: c.blush, smile: c.smile,
      tilt: c.tilt, lean: c.lean, sway: sway * c.dir,
      talk: cue && cue[2] === who ? 0.5 + 0.5 * Math.sin(t * 15) : 0,
    }, extra);
  }
  const shadow = (ctx, x, y, a = 0.25) => {
    ctx.fillStyle = `rgba(40,12,50,${a})`;
    ctx.beginPath(); ctx.ellipse(x - 18, y + 4, 58, 9, 0, 0, Math.PI * 2); ctx.fill();
  };

  /* ---------- scene renderers ---------- */
  function sceneStreet(ctx, t, shot) {
    const { cam, him, her } = S, rain = S.rain;
    F.street(ctx, cam, t, rain);
    F.layer(ctx, cam, 1, () => {
      if (S.together) her.x = him.x + 76;
      const hp = { x: him.x, y: him.y }, lp = { x: her.x, y: her.y - (S.together ? 5 : 0) };
      shadow(ctx, him.x, him.y); shadow(ctx, her.x, her.y);
      const rainy = shot[0] === '2';
      const hand = rainy ? [him.x + 21, him.y - 196] : null;
      const herHand = her.hand > 0.02
        ? [F.lerp(her.x + 14, her.x - 40, her.hand), F.lerp(her.y - 80, her.y - 208, her.hand)] : null;
      const drawHer = () => F.drawCharacter(ctx, 'her', pose('her', t, { y: lp.y, handNear: herHand }));
      const drawHim = () => F.drawCharacter(ctx, 'him', pose('him', t, { handNear: hand }));
      if (S.together) { drawHer(); drawHim(); } else { drawHim(); drawHer(); }
      if (rainy) F.umbrella(ctx, hand[0], hand[1], hand[0] + 6 + S.umb * 44, hand[1] - 150, 0.5);
    });
    F.streetFront(ctx, cam, t, rain, S.gust);
  }

  function sceneDream(ctx, t) {
    const { cam, him, her } = S;
    F.dream(ctx, cam, t, S.join);
    F.layer(ctx, cam, 1, () => {
      if (S.together) her.x = him.x + 78;
      let hH = {}, lH = {};
      if (S.hold === 1) {
        const m = [him.x + 40, him.y - 152 + Math.sin(him.x * 0.068) * 3];
        hH = { handFar: m }; lH = { handNear: m };
      } else if (S.hold === 2) {
        const mx = (him.x + her.x) / 2, my = him.y - 186;
        hH = { handNear: [mx - 3, my + 8], handFar: [mx + 3, my - 6] };
        lH = { handNear: [mx + 3, my + 8], handFar: [mx - 3, my - 6] };
      }
      const both = () => {
        F.drawCharacter(ctx, 'her', pose('her', t, lH));
        F.drawCharacter(ctx, 'him', pose('him', t, hH));
      };
      ctx.save(); ctx.translate(0, him.y * 2 + 6); ctx.scale(1, -1); ctx.globalAlpha = 0.2; both(); ctx.restore();
      F.glow(ctx, (him.x + her.x) / 2, him.y, 190, 'rgba(255,200,235,.3)');
      both();
    });
    F.petals(ctx, t, { count: 30, seed: 12, glow: true, size: 0.8, alpha: 0.85 });
    F.vignette(ctx, '6,4,30', 0.6);
  }

  function sceneHill(ctx, t, shot) {
    const { cam } = S;
    if (shot === '4a') {
      F.hillFront(ctx, cam, t);
      F.layer(ctx, cam, 1, () => {
        F.drawCharacter(ctx, 'him', pose('him', t));
        F.drawCharacter(ctx, 'her', pose('her', t));
      });
      F.glow(ctx, 900, 380, 560, 'rgba(255,196,130,.3)');
    } else {
      F.hillBack(ctx, cam, t);
      F.layer(ctx, cam, 1, () => F.backPair(ctx, 640, 590, S.rest, t));
      F.glow(ctx, 640, 420, 600, 'rgba(255,190,120,.22)');
    }
    F.petals(ctx, t, { count: 30, seed: 7 });
    F.petals(ctx, t, { count: 7, seed: 15, size: 2.3, alpha: 0.7 });
    F.vignette(ctx);
  }

  const FADES = [[2, '#170d24'], [20, '#262142'], [32, '#080720'], [45, '#fff3e8'], [99, '#170d24']];
  F.render = function (ctx, t) {
    const shot = F.shotAt(t);
    ctx.clearRect(0, 0, W, H);
    if (shot[0] === '3') sceneDream(ctx, t);
    else if (shot[0] === '4') sceneHill(ctx, t, shot);
    else sceneStreet(ctx, t, shot);
    if (S.fade > 0.003) {
      ctx.globalAlpha = F.clamp(S.fade);
      ctx.fillStyle = FADES.find((f) => t < f[0])[1];
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1;
    }
  };
})(window.Film);
