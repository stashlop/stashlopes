/* Character rig. One renderer draws both leads from a palette + a pose object,
   so they look the same in wide shots and close-ups (close-ups are just camera zoom).

   Film.drawCharacter(ctx, 'him' | 'her', {
     x, y        feet position in world space
     s, dir      scale and facing (1 = right, -1 = left)
     phase, walk walk-cycle phase and amount (0 = standing)
     open, happy eye openness (0 closed … 1.25 wide) and closed-smile eyes
     lookX,lookY gaze, blush, smile, talk
     tilt, lean  head tilt and torso lean (radians, positive = towards facing)
     sway        hair/skirt sway (-1 … 1)
     handNear, handFar   optional world-space targets for the hands (IK)
   })
*/
(function (F) {
  const TAU = Math.PI * 2;
  const THIGH = 165, SHIN = 165, HIP = 330, NECK = -205, HEAD = 73;

  const PAL = {
    him: {
      skin: '#dba577', skinSh: '#c08659', hair: '#1d1824', hairHi: '#54466b',
      iris: '#5b371f', irisHi: '#b07a45', top: '#f7f2ea', topSh: '#d6cbcf',
      bottom: '#5a5d6a', bottomSh: '#454752', shoe: '#f1ebe2', line: '#2c1c26', lip: '#a4604a',
    },
    her: {
      skin: '#ffe7d8', skinSh: '#f2c2b2', hair: '#6d2f4a', hairHi: '#bb6b88',
      iris: '#8f4a93', irisHi: '#f0a4cf', top: '#fff8ef', topSh: '#ecdcd6',
      bottom: '#fff8ef', bottomSh: '#ecdcd6', shoe: '#c95a70', line: '#3c1d2c', lip: '#dd6f7e',
      accent: '#e8637c',
    },
  };
  F.PAL = PAL;

  function poly(ctx, pts, w, fill, line) {
    ctx.beginPath();
    pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    if (line) { ctx.strokeStyle = line; ctx.lineWidth = w + 5; ctx.stroke(); }
    ctx.strokeStyle = fill; ctx.lineWidth = w; ctx.stroke();
  }

  /* Two-bone IK: returns elbow and hand for a shoulder → target reach. */
  function ik(sx, sy, tx, ty, a, b) {
    let dx = tx - sx, dy = ty - sy, d = Math.hypot(dx, dy) || 1;
    const max = a + b - 1, min = Math.abs(a - b) + 1;
    const dd = F.clamp(d, min, max);
    dx *= dd / d; dy *= dd / d; d = dd;
    const th = Math.atan2(dy, dx);
    const ph = Math.acos(F.clamp((a * a + d * d - b * b) / (2 * a * d), -1, 1));
    const e1 = [sx + Math.cos(th + ph) * a, sy + Math.sin(th + ph) * a];
    const e2 = [sx + Math.cos(th - ph) * a, sy + Math.sin(th - ph) * a];
    return { e: e1[1] > e2[1] ? e1 : e2, h: [sx + dx, sy + dy] };
  }

  function spikes(ctx, pts, soft) {
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i], q = pts[i - 1];
      if (!soft || !q) ctx.lineTo(p[0], p[1]);
      else ctx.quadraticCurveTo(q[0] + (p[0] - q[0]) * 0.15, q[1] + (p[1] - q[1]) * 0.85, p[0], p[1]);
    }
  }

  function eye(ctx, c, f, cx, cy, rx, ry, open, happy, lx, ly) {
    ctx.strokeStyle = c.line;
    ctx.lineCap = 'round';
    if (happy > 0.5) {
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx - rx, cy + 3);
      ctx.quadraticCurveTo(cx, cy - ry * 0.9, cx + rx, cy + 3);
      ctx.stroke();
      return;
    }
    if (open < 0.16) {
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx - rx, cy);
      ctx.quadraticCurveTo(cx, cy + ry * 0.55, cx + rx, cy);
      ctx.stroke();
      return;
    }
    const h = ry * Math.min(open, 1.3);
    ctx.save();
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, h, 0, 0, TAU); ctx.clip();
    ctx.fillStyle = '#fffaf5';
    ctx.fillRect(cx - rx, cy - h, rx * 2, h * 2);
    const ir = rx * 0.66, ix = cx + lx * rx * 0.3, iy = cy + ly * ry * 0.22;
    const g = ctx.createLinearGradient(0, iy - ry, 0, iy + ry);
    g.addColorStop(0, '#22101c'); g.addColorStop(0.45, c.iris); g.addColorStop(1, c.irisHi);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.ellipse(ix, iy, ir, ry * 0.98, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#1a0c16';
    ctx.beginPath(); ctx.ellipse(ix, iy, ir * 0.4, ry * 0.45, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = 'rgba(40,14,40,.22)';
    ctx.fillRect(cx - rx, cy - h, rx * 2, h * 0.5);
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(ix - ir * 0.36, iy - ry * 0.42, ir * 0.3, 0, TAU); ctx.fill();
    ctx.globalAlpha *= 0.85;
    ctx.beginPath(); ctx.arc(ix + ir * 0.38, iy + ry * 0.45, ir * 0.15, 0, TAU); ctx.fill();
    ctx.restore();
    ctx.lineWidth = f ? 4.6 : 4;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, h, 0, Math.PI * 1.04, Math.PI * 1.97); ctx.stroke();
    if (f) {
      ctx.lineWidth = 2.6;
      ctx.beginPath(); ctx.moveTo(cx - rx + 1, cy - h * 0.25); ctx.lineTo(cx - rx - 6, cy - h * 0.62); ctx.stroke();
    }
    ctx.save();
    ctx.globalAlpha *= 0.45; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx * 0.8, h, 0, Math.PI * 0.25, Math.PI * 0.75); ctx.stroke();
    ctx.restore();
  }

  function hairBack(ctx, c, f, o) {
    const sw = o.sway || 0;
    ctx.fillStyle = c.hair; ctx.strokeStyle = c.line; ctx.lineWidth = 3;
    ctx.beginPath();
    if (f) {
      ctx.moveTo(24, -78);
      ctx.bezierCurveTo(-50, -100, -80, -40, -70, 40);
      ctx.bezierCurveTo(-66, 120, -86 - sw * 22, 200, -72 - sw * 50, 272);
      ctx.bezierCurveTo(-44 - sw * 44, 262, -22 - sw * 34, 242, -8 - sw * 28, 214);
      ctx.bezierCurveTo(-2, 140, 12, 60, 32, 20);
    } else {
      ctx.moveTo(-10, -84);
      ctx.bezierCurveTo(-70, -84, -74, -12, -56, 24);
      spikes(ctx, [[-52 - sw * 4, 44], [-44, 26], [-37 - sw * 4, 48], [-28, 28], [-19 - sw * 3, 44], [-6, 18]]);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    if (f) {
      ctx.strokeStyle = c.hairHi; ctx.lineWidth = 2; ctx.globalAlpha *= 0.6;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(-54 + i * 14, 20);
        ctx.bezierCurveTo(-56 + i * 14, 100, -64 + i * 14 - sw * 20, 180, -54 + i * 13 - sw * 44, 246 - i * 10);
        ctx.stroke();
      }
      ctx.globalAlpha /= 0.6;
    }
  }

  function head(ctx, c, f, o) {
    const sw = o.sway || 0, smile = o.smile || 0, blush = o.blush || 0;
    const open = o.open == null ? 1 : o.open;

    /* ear (on the side turned away from the camera's centre) */
    ctx.fillStyle = c.skinSh; ctx.strokeStyle = c.line; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.ellipse(-41, 8, 8, 13, 0.1, 0, TAU); ctx.fill(); ctx.stroke();

    /* face */
    ctx.fillStyle = c.skin; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-44, -8);
    ctx.bezierCurveTo(-46, -64, 46, -64, 45, -8);
    ctx.bezierCurveTo(45, 22, 26, 49, 8, 56);
    ctx.bezierCurveTo(-12, 52, -42, 28, -44, -8);
    ctx.closePath(); ctx.fill(); ctx.stroke();

    /* blush */
    if (blush > 0.01) {
      ctx.save();
      ctx.globalAlpha *= blush;
      ctx.fillStyle = 'rgba(255,96,120,.42)';
      ctx.beginPath(); ctx.ellipse(-16, 27, 15, 8, 0, 0, TAU); ctx.fill();
      ctx.beginPath(); ctx.ellipse(31, 27, 10, 7, 0, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(226,70,100,.6)'; ctx.lineWidth = 1.6;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath(); ctx.moveTo(-23 + i * 6, 31); ctx.lineTo(-20 + i * 6, 23); ctx.stroke();
      }
      ctx.restore();
    }

    /* eyes */
    const ry = f ? 15 : 10.5;
    eye(ctx, c, f, -12, 7, f ? 15 : 14, ry, open, o.happy || 0, o.lookX || 0, o.lookY || 0);
    eye(ctx, c, f, 27, 7, f ? 11 : 10, ry, open, o.happy || 0, o.lookX || 0, o.lookY || 0);

    /* nose + mouth */
    ctx.strokeStyle = c.skinSh; ctx.lineWidth = 2.4;
    ctx.beginPath(); ctx.moveTo(15, 20); ctx.lineTo(19, 28); ctx.lineTo(14, 29); ctx.stroke();
    const mx = 13, my = f ? 40 : 41, mw = (f ? 7 : 9) + smile * 3;
    const talk = o.talk || 0;
    if (talk > 0.05) {
      ctx.fillStyle = '#7a2f3c';
      ctx.beginPath(); ctx.ellipse(mx, my + 1, mw * 0.6, 1.5 + talk * 5, 0, 0, TAU); ctx.fill();
    } else {
      ctx.strokeStyle = c.lip; ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.moveTo(mx - mw, my - smile * 3);
      ctx.quadraticCurveTo(mx, my + 1 + smile * 9, mx + mw, my - smile * 4);
      ctx.stroke();
    }

    /* front hair */
    const wig = Math.sin((o.t || 0) * 2.3) * 1.2;
    ctx.fillStyle = c.hair; ctx.strokeStyle = c.line; ctx.lineWidth = 3;
    ctx.beginPath();
    if (f) {
      ctx.moveTo(-58, 4);
      ctx.bezierCurveTo(-70, -30, -62, -70, -30, -84);
      ctx.bezierCurveTo(2, -98, 50, -88, 57, -46);
      ctx.bezierCurveTo(62, -20, 58, 10, 54 - sw * 8, 44);
      ctx.bezierCurveTo(48, 20, 48, -8, 42, -30);
      spikes(ctx, [[31 - sw * 3, -7], [23, -34], [10 - sw * 3, -5], [0, -36], [-12 - sw * 3, -5],
        [-22, -34], [-33 - sw * 3, -3], [-39, -22]], true);
      ctx.bezierCurveTo(-36, 20, -40, 54, -46 - sw * 12 + wig, 84);
      ctx.bezierCurveTo(-58, 56, -60, 28, -58, 4);
    } else {
      /* tousled: spiky crown, long uneven fringe falling towards the eyes */
      ctx.moveTo(-55, 22);
      ctx.bezierCurveTo(-73, -10, -75, -58, -48, -82);
      spikes(ctx, [[-42 - sw * 3, -98], [-29, -89], [-15 - sw * 4, -106], [0, -93], [15 - sw * 4, -105],
        [29, -91], [45 - sw * 3, -96], [53, -72]], true);
      ctx.bezierCurveTo(65, -52, 63, -24, 57 - sw * 3, 0);
      spikes(ctx, [[49, -27], [42 - sw * 4, 5], [34, -25], [26 - sw * 4, -3], [16, -27], [7 - sw * 5 + wig, 11],
        [-5, -25], [-16 - sw * 5, -2], [-26, -27], [-35 - sw * 5 + wig, 13], [-41, -10], [-48 - sw * 3, 27], [-51, 2]], true);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();

    /* hair sheen */
    ctx.save();
    ctx.strokeStyle = c.hairHi; ctx.lineWidth = f ? 5 : 4; ctx.globalAlpha *= 0.55;
    ctx.beginPath(); ctx.ellipse(4, -40, 40, 34, 0, Math.PI * 1.22, Math.PI * 1.72); ctx.stroke();
    ctx.restore();

    if (f) {
      /* blossom hair clip */
      ctx.fillStyle = '#ffd3de'; ctx.strokeStyle = c.accent; ctx.lineWidth = 1.5;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * TAU;
        ctx.beginPath(); ctx.ellipse(-40 + Math.cos(a) * 6, -34 + Math.sin(a) * 6, 5, 3.4, a, 0, TAU);
        ctx.fill(); ctx.stroke();
      }
      ctx.fillStyle = '#ffe48a'; ctx.beginPath(); ctx.arc(-40, -34, 2.6, 0, TAU); ctx.fill();
    }

    /* brows sit over the fringe, anime-style */
    const wide = F.clamp((open - 1) * 4), by = (f ? -15 : -9) - wide * 4 - (o.happy ? 2 : 0);
    ctx.strokeStyle = c.line; ctx.lineWidth = f ? 2.2 : 3.6;
    ctx.beginPath(); ctx.moveTo(-26, by + 1); ctx.quadraticCurveTo(-12, by - 5, 2, by + (f ? 0 : 2)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(19, by + (f ? 0 : 2)); ctx.quadraticCurveTo(29, by - 5, 38, by + 1); ctx.stroke();
  }

  F.drawCharacter = function (ctx, who, o) {
    const c = PAL[who], f = who === 'her';
    const s = o.s || 0.5, dir = o.dir || 1, amt = o.walk || 0, p = o.phase || 0;
    const lean = o.lean || 0, sw = o.sway || 0;

    /* legs first, so we know how far to lift the body to keep a foot on the ground */
    const legs = [p + Math.PI, p].map((ph, i) => {
      const hx = i ? -11 : 11;
      const th = Math.sin(ph) * 0.42 * amt;
      const flex = amt * (0.06 + 0.7 * Math.max(0, Math.cos(ph)));
      const k = [hx + Math.sin(th) * THIGH, -HIP + Math.cos(th) * THIGH];
      const a = [k[0] + Math.sin(th - flex) * SHIN, k[1] + Math.cos(th - flex) * SHIN];
      return { hx, k, a, flex };
    });
    const lift = -Math.max(legs[0].a[1], legs[1].a[1]);

    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.scale(s * dir, s);
    ctx.translate(0, lift);
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    if (o.alpha != null) ctx.globalAlpha *= o.alpha;

    legs.forEach((L, i) => {
      const pts = [[L.hx, -HIP + 6], L.k, L.a];
      if (f) poly(ctx, pts, 25, i ? c.skin : c.skinSh, c.line);
      else poly(ctx, pts, 46, i ? c.bottom : c.bottomSh, c.line);
      ctx.save();
      ctx.translate(L.a[0], L.a[1]); ctx.rotate(-L.flex * 0.6);
      ctx.fillStyle = c.shoe; ctx.strokeStyle = c.line; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.ellipse(f ? 9 : 14, f ? 2 : -2, f ? 21 : 31, f ? 9 : 13, 0, 0, TAU);
      ctx.fill(); ctx.stroke();
      ctx.restore();
    });

    /* everything above the hips leans together */
    ctx.translate(0, -HIP); ctx.rotate(lean);
    const toLocal = (pt) => {
      const lx = (pt[0] - o.x) / (s * dir), ly = (pt[1] - o.y) / s - lift + HIP;
      return [lx * Math.cos(lean) + ly * Math.sin(lean), -lx * Math.sin(lean) + ly * Math.cos(lean)];
    };
    const U = f ? 84 : 92, FO = f ? 80 : 88, aw = f ? 20 : 27;
    const arm = (sx, sy, swing, target, shade) => {
      let e, h;
      if (target) { const r = ik(sx, sy, ...toLocal(target), U, FO); e = r.e; h = r.h; }
      else {
        const a = 0.04 + swing;
        e = [sx + Math.sin(a) * U, sy + Math.cos(a) * U];
        h = [e[0] + Math.sin(a + 0.28) * FO, e[1] + Math.cos(a + 0.28) * FO];
      }
      poly(ctx, [[sx, sy], e, h], aw, shade ? c.skinSh : c.skin, c.line);
      const k = f ? 0.4 : 0.62;
      poly(ctx, [[sx, sy], [sx + (e[0] - sx) * k, sy + (e[1] - sy) * k]], aw + 6, shade ? c.topSh : c.top, c.line);
      ctx.fillStyle = shade ? c.skinSh : c.skin; ctx.strokeStyle = c.line; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.arc(h[0], h[1], f ? 11 : 14, 0, TAU); ctx.fill(); ctx.stroke();
    };
    const swing = Math.sin(p) * 0.5 * amt;
    const headXf = () => { ctx.translate(4, NECK); ctx.rotate(o.tilt || 0); ctx.translate(0, -HEAD); };

    ctx.save(); headXf(); hairBack(ctx, c, f, o); ctx.restore();
    arm(f ? 28 : 37, f ? -184 : -186, swing, o.handFar, true);

    /* neck */
    ctx.fillStyle = c.skinSh; ctx.strokeStyle = c.line; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(f ? -8 : -11, -232, f ? 20 : 26, 46); ctx.fill(); ctx.stroke();

    /* torso */
    ctx.fillStyle = c.top; ctx.lineWidth = 3;
    ctx.beginPath();
    if (f) {
      ctx.moveTo(-31, -190); ctx.lineTo(-11, -200); ctx.quadraticCurveTo(3, -184, 16, -199); ctx.lineTo(33, -188);
      ctx.quadraticCurveTo(28, -120, 23, -68); ctx.lineTo(-22, -68); ctx.quadraticCurveTo(-27, -120, -31, -190);
    } else {
      ctx.moveTo(-46, -194); ctx.lineTo(-15, -205); ctx.quadraticCurveTo(3, -184, 19, -204); ctx.lineTo(46, -192);
      ctx.quadraticCurveTo(40, -90, 35, 10); ctx.lineTo(-35, 10); ctx.quadraticCurveTo(-41, -90, -46, -194);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();

    if (f) {
      /* skirt, waist ribbon, collar bow */
      const hem = sw * 10 + Math.sin(p) * 9 * amt;
      ctx.fillStyle = c.bottom;
      ctx.beginPath();
      ctx.moveTo(-22, -68); ctx.lineTo(23, -68);
      ctx.quadraticCurveTo(50, 40, 66 - hem, 148);
      ctx.quadraticCurveTo(0, 170, -66 - hem, 148);
      ctx.quadraticCurveTo(-48, 40, -22, -68);
      ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = c.topSh; ctx.lineWidth = 2.5;
      [-20, 6, 30].forEach((x) => {
        ctx.beginPath(); ctx.moveTo(x * 0.3, -40); ctx.quadraticCurveTo(x, 50, x * 1.5 - hem * 0.8, 150); ctx.stroke();
      });
      ctx.fillStyle = c.accent; ctx.strokeStyle = c.line; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.rect(-23, -76, 46, 11); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(3, -190); ctx.lineTo(-10, -198); ctx.lineTo(-10, -180); ctx.closePath();
      ctx.moveTo(3, -190); ctx.lineTo(16, -198); ctx.lineTo(16, -180); ctx.closePath(); ctx.fill(); ctx.stroke();
    } else {
      /* shirt shading + jogger drawstrings */
      ctx.strokeStyle = c.topSh; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(30, -170); ctx.quadraticCurveTo(27, -80, 24, 2); ctx.stroke();
      ctx.strokeStyle = '#d8d3cc'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(4, 13); ctx.lineTo(1, 40); ctx.moveTo(9, 13); ctx.lineTo(12, 37); ctx.stroke();
    }

    ctx.save(); headXf(); head(ctx, c, f, o); ctx.restore();
    arm(f ? -26 : -36, f ? -186 : -188, -swing, o.handNear, false);
    ctx.restore();
  };

  /* World position of a character's head centre: what the camera frames in close-ups. */
  F.headPos = (o) => {
    const s = o.s || 0.5, dir = o.dir || 1, lean = o.lean || 0;
    const up = -NECK + HEAD;
    return { x: o.x + dir * s * (4 + Math.sin(lean) * up), y: o.y - s * (HIP + Math.cos(lean) * up) };
  };
})(window.Film);
