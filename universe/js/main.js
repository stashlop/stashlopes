/* Player: canvas sizing, GSAP clock, subtitles, chapter chip, controls. */
(function (F) {
  const $ = (id) => document.getElementById(id);
  const stage = $('stage'), canvas = $('film'), ctx = canvas.getContext('2d');
  const subs = $('subs'), who = $('subWho'), line = $('subLine'), chip = $('chip');
  const titleCard = $('titleCard'), endCard = $('endCard'), start = $('start');
  const playBtn = $('play'), muteBtn = $('mute'), fsBtn = $('fs'), seek = $('seek'), clock = $('clock');
  const NAMES = { him: 'Him', her: 'Her' };

  const tl = F.buildTimeline(window.gsap);
  let started = false, lastCue = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), w = stage.clientWidth;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round((w * 9 / 16) * dpr);
    draw();
  }

  const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

  function draw() {
    const t = tl.time(), k = canvas.width / F.W;
    ctx.setTransform(k, 0, 0, k, 0, 0);
    F.render(ctx, t);

    const cue = F.cueAt(t);
    if (cue !== lastCue) {
      lastCue = cue;
      if (cue) {
        subs.dataset.who = cue[2];
        who.textContent = NAMES[cue[2]] || '';
        line.textContent = cue[3];
      }
    }
    subs.style.opacity = cue ? F.win(t, cue[0], cue[1], 0.3) : 0;

    const sc = F.scenes.find((s) => t >= s.at && t < s.end);
    if (sc) chip.textContent = `${sc.num} · ${sc.name}`;
    chip.style.opacity = sc ? F.win(t, sc.at + 0.3, sc.at + 3.6, 0.5) : 0;
    titleCard.style.opacity = F.win(t, 0.5, 3.7, 0.7);
    endCard.style.opacity = F.clamp((t - 53.2) / 1.2);

    seek.value = t;
    seek.style.setProperty('--p', (t / F.DURATION) * 100 + '%');
    clock.textContent = `${mmss(t)} / ${mmss(F.DURATION)}`;
    document.querySelectorAll('[data-scene]').forEach((el) => {
      el.classList.toggle('is-current', !!sc && +el.dataset.scene === sc.id);
    });
    if (started && !tl.paused()) F.audio.tick(t);
  }

  function setPlaying(on) {
    if (on) {
      if (tl.time() >= F.DURATION - 0.05) { tl.time(0); F.audio.seek(0); }
      started = true; start.hidden = true;
      F.audio.play(); tl.play();
    } else { tl.pause(); F.audio.pause(); }
    playBtn.textContent = on ? 'Pause' : 'Play';
    playBtn.setAttribute('aria-pressed', on);
    stage.classList.toggle('is-playing', on);
  }
  function jump(t) { tl.time(F.clamp(t, 0, F.DURATION)); F.audio.seek(tl.time()); draw(); }

  tl.eventCallback('onComplete', () => {
    F.audio.pause();
    playBtn.textContent = 'Replay'; stage.classList.remove('is-playing');
  });
  window.gsap.ticker.add(() => { if (!tl.paused()) draw(); });

  start.addEventListener('click', () => { jump(0); setPlaying(true); });
  playBtn.addEventListener('click', () => setPlaying(tl.paused()));
  canvas.addEventListener('click', () => { if (started) setPlaying(tl.paused()); });
  seek.addEventListener('input', () => { started = true; start.hidden = true; jump(+seek.value); });
  muteBtn.addEventListener('click', () => {
    const m = muteBtn.getAttribute('aria-pressed') !== 'true';
    muteBtn.setAttribute('aria-pressed', m); muteBtn.textContent = m ? 'Sound off' : 'Sound on';
    F.audio.setMuted(m);
  });
  fsBtn.addEventListener('click', () => {
    const p = document.fullscreenElement ? document.exitFullscreen() : stage.requestFullscreen && stage.requestFullscreen();
    if (p && p.catch) p.catch(() => {});
  });
  document.querySelectorAll('[data-scene]').forEach((el) => {
    el.querySelector('button').addEventListener('click', () => {
      jump(F.scenes[+el.dataset.scene - 1].at); setPlaying(true);
      stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('button, input')) return;
    if (e.code === 'Space') { e.preventDefault(); setPlaying(tl.paused()); }
    if (e.code === 'ArrowRight') jump(tl.time() + 3);
    if (e.code === 'ArrowLeft') jump(tl.time() - 3);
  });
  window.addEventListener('resize', resize);
  if (window.ResizeObserver) new ResizeObserver(resize).observe(stage);

  /* Poster frame: the title card over the empty street. */
  tl.time(2.4);
  resize();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
  F.player = { tl, jump, draw };
})(window.Film);
