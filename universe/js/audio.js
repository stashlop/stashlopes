/* Synthesised score + ambience (Web Audio, no files).
   Notes are a list of timed events fired from the film clock, so the music
   follows play, pause and scrubbing. Swap this module for a recorded track
   by replacing tick()/seek() with an <audio> element synced to the same clock. */
(function (F) {
  const CH = 55 / 16;                       /* one chord every 3.44 s → 16 bars in 55 s */
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  const CHORDS = {
    F: [41, [57, 60, 64, 69]], G: [43, [59, 62, 67, 71]], Em: [40, [55, 59, 62, 67]],
    Am: [45, [57, 60, 64, 67]], C: [36, [55, 60, 64, 67, 74]],
  };
  const PROG = ['F', 'G', 'Em', 'Am', 'F', 'G', 'Em', 'Am', 'F', 'G', 'Em', 'Am', 'F', 'Am', 'G', 'C'];
  const PATTERN = [0, 1, 2, 1, 3, 2, 1, 2];

  const events = [];
  PROG.forEach((name, k) => {
    const [bass, tones] = CHORDS[name], t0 = k * CH, last = k === 15;
    const dream = k >= 8 && k < 12, finale = k >= 12;
    events.push({ t: t0, kind: 'pad', f: hz(bass), dur: CH + 0.8, g: 0.085 });
    tones.slice(0, 3).forEach((m) => events.push({ t: t0, kind: 'pad', f: hz(m), dur: last ? 5 : CH + 0.8, g: 0.03 }));
    PATTERN.forEach((p, i) => {
      if (k === 0 && i % 4) return;                 /* title: almost nothing */
      if (k < 4 && i % 2) return;                   /* scene I: sparse piano */
      if (last && i > 4) return;
      const m = tones[p % tones.length] + (dream ? 24 : 12);
      events.push({ t: t0 + i * (CH / 8), kind: dream ? 'bell' : 'pluck', f: hz(m), g: dream ? 0.035 : 0.06 });
    });
    if (finale || (k >= 6 && k < 8)) {
      events.push({ t: t0, kind: 'lead', f: hz(tones[2] + 12), dur: CH * 0.5, g: 0.045 });
      events.push({ t: t0 + CH * 0.5, kind: 'lead', f: hz(tones[last ? 4 : 3] + 12), dur: CH * 0.5, g: 0.045 });
    }
  });
  [5.2, 7.6, 10.4, 15.2, 43.4, 46.2, 49.5, 51.6].forEach((t) => events.push({ t, kind: 'bird', g: 0.012 }));
  [29.3, 34.1, 39.4, 40.9].forEach((t, i) => events.push({ t, kind: 'bell', f: hz(88 + i * 2), g: 0.03 }));
  events.sort((a, b) => a.t - b.t);

  let ac, master, bus, wind, rain, idx = 0, muted = false;

  function init() {
    if (ac) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ac = new AC();
    master = ac.createGain(); master.gain.value = muted ? 0 : 0.9; master.connect(ac.destination);
    bus = ac.createGain(); bus.connect(master);
    /* small generated hall reverb */
    const len = ac.sampleRate * 2.6, ir = ac.createBuffer(2, len, ac.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    const rev = ac.createConvolver(); rev.buffer = ir;
    const wet = ac.createGain(); wet.gain.value = 0.5;
    bus.connect(rev); rev.connect(wet); wet.connect(master);
    /* ambience: one noise loop feeds wind and rain filters */
    const nb = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), nd = nb.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    const noise = ac.createBufferSource(); noise.buffer = nb; noise.loop = true; noise.start();
    const wf = ac.createBiquadFilter(); wf.type = 'lowpass'; wf.frequency.value = 420;
    wind = ac.createGain(); wind.gain.value = 0; noise.connect(wf); wf.connect(wind); wind.connect(master);
    const rf = ac.createBiquadFilter(); rf.type = 'highpass'; rf.frequency.value = 2400;
    rain = ac.createGain(); rain.gain.value = 0; noise.connect(rf); rf.connect(rain); rain.connect(master);
  }

  function env(g, peak, attack, dur) {
    const n = ac.currentTime;
    g.gain.setValueAtTime(0.0001, n);
    g.gain.exponentialRampToValueAtTime(peak, n + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, n + dur);
  }
  function tone(type, f, peak, attack, dur, dest) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = f; env(g, peak, attack, dur);
    o.connect(g); g.connect(dest || bus); o.start(); o.stop(ac.currentTime + dur + 0.05);
    return o;
  }
  function fire(e) {
    if (e.kind === 'pad') {
      const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 850; lp.connect(bus);
      tone('triangle', e.f, e.g, 1.1, e.dur, lp);
    } else if (e.kind === 'pluck') {
      tone('sine', e.f, e.g, 0.008, 1.9); tone('sine', e.f * 2, e.g * 0.28, 0.006, 0.9); tone('sine', e.f * 3, e.g * 0.08, 0.005, 0.4);
    } else if (e.kind === 'bell') {
      tone('sine', e.f, e.g, 0.005, 2.6); tone('sine', e.f * 2.76, e.g * 0.3, 0.005, 1.2);
    } else if (e.kind === 'lead') {
      const o = tone('sine', e.f, e.g, 0.18, e.dur + 0.9);
      const l = ac.createOscillator(), lg = ac.createGain(); l.frequency.value = 5.2; lg.gain.value = e.f * 0.006;
      l.connect(lg); lg.connect(o.frequency); l.start(); l.stop(ac.currentTime + e.dur + 1);
    } else if (e.kind === 'bird') {
      for (let i = 0; i < 3; i++) {
        const o = ac.createOscillator(), g = ac.createGain(), n = ac.currentTime + i * 0.13;
        o.frequency.setValueAtTime(3100, n); o.frequency.linearRampToValueAtTime(4300, n + 0.05); o.frequency.linearRampToValueAtTime(3300, n + 0.1);
        g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(e.g, n + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, n + 0.11);
        o.connect(g); g.connect(bus); o.start(n); o.stop(n + 0.13);
      }
    }
  }

  F.audio = {
    init,
    seek(t) { idx = events.findIndex((e) => e.t >= t - 0.02); if (idx < 0) idx = events.length; },
    tick(t) {
      if (!ac) return;
      while (idx < events.length && events[idx].t <= t) { if (t - events[idx].t < 0.3) fire(events[idx]); idx++; }
      const shot = F.shotAt(t)[0], n = ac.currentTime, end = F.clamp((F.DURATION - t) / 2);
      wind.gain.setTargetAtTime((shot === '3' ? 0.02 : 0.11) * end * (1 + 0.3 * Math.sin(t * 0.9)), n, 0.4);
      rain.gain.setTargetAtTime(shot === '2' ? 0.05 * F.clamp(Math.min(t - 16.8, 29.2 - t) * 2) : 0, n, 0.25);
    },
    play() { init(); if (ac) ac.resume(); },
    pause() { if (ac) ac.suspend(); },
    setMuted(m) { muted = m; if (master) master.gain.setTargetAtTime(m ? 0 : 0.9, ac.currentTime, 0.05); },
  };
})(window.Film);
