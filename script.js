/* =========================================================
   MODERN LUXURY WEDDING INVITATION
   Vanilla JS · no dependencies · GitHub Pages friendly
   ========================================================= */
(function () {
  'use strict';

  /* =========================================================
     1. ⚙️ CONFIG — edit everything here
     ========================================================= */
  const CONFIG = {
    groomName: 'Ismail Ali Shah',
    brideName: 'Taslima Khatun',

    groomParents: { father: 'Jhunu Ali Shah', mother: 'Ismatara Bibi' },
    brideParents: { father: 'Zakir Hossain', mother: 'Akturnesha Bibi' },

    groomAddress: 'Village: Dubrajpur, Post: Dihiramnagar, P.S: Daspur, Dist: Paschim Medinipur, Pin: 721212',
    brideAddress: 'Village: Shuknator, Post: Digree, P.S: Garhbeta, Paschim Medinipur',

    weddingDate: '01 November 2026',
    weddingTime: 'Afternoon',
    weddingVenue: 'Shyam Sarthak Palace',
    venueAddress: 'Dihiramnagar, Daspur, Paschim Medinipur, Pin 721212',

    /* Countdown target (ISO). Set to null to hide. */
    countdownISO: '2026-11-01T12:00:00+05:30',

    invitationMessage: {
      bn: 'পরম করুণাময়ের আশীর্বাদে আমাদের প্রিয় সন্তান ইসমাইল আলী শাহ ও তাসলিমা খাতুনের শুভ বিবাহ উপলক্ষে আপনাকে ও আপনার পরিবারকে আন্তরিক আমন্ত্রণ জানাই। আপনার উপস্থিতি আমাদের আনন্দকে পূর্ণ করবে।',
      hi: 'परम कृपालु के आशीर्वाद से हमारे प्रिय इस्माइल अली शाह एवं तस्लीमा खातून के शुभ विवाह के अवसर पर आपको एवं आपके परिवार को सादर आमंत्रित करते हैं। आपकी उपस्थिति हमारे आनंद को पूर्ण करेगी।'
    },

    programme: [
      {
        title: { bn: 'গায়ে হলুদ', hi: 'गाये हल्दी' },
        note:  { bn: 'হলুদ অনুষ্ঠান', hi: 'हल्दी समारोह' },
        date:  { bn: 'শুক্রবার, ৩০ অক্টোবর ২০২৬', hi: 'शुक्रवार, ३० अक्टूबर २०२६' },
        bangla:{ bn: '১২ কার্তিক ১৪৩৩', hi: '१२ कार्तिक १४३३' }
      },
      {
        title: { bn: 'শাদী মুবারক', hi: 'शादी मुबारक' },
        note:  { bn: 'বিবাহ অনুষ্ঠান', hi: 'विवाह समारोह' },
        date:  { bn: 'রবিবার, ০১ নভেম্বর ২০২৬', hi: 'रविवार, ०१ नवंबर २०२६' },
        bangla:{ bn: '১৪ কার্তিক ১৪৩৩', hi: '१४ कार्तिक १४३३' }
      },
      {
        title: { bn: 'ওয়ালিমা', hi: 'वलीमा' },
        note:  { bn: 'প্রীতিভোজ · বিকেল', hi: 'प्रीतिभोज · दोपहर बाद' },
        date:  { bn: 'সোমবার, ০২ নভেম্বর ২০২৬', hi: 'सोमवार, ०२ नवंबर २०२६' },
        bangla:{ bn: '১৫ কার্তিক ১৪৩৩', hi: '१५ कार्तिक १४३३' }
      }
    ],

    musicFile: 'assets/audio/wedding-song.mp3',
    musicVolume: 0.6,
    musicDuckVolume: 0.26
  };

  /* =========================================================
     2. 🌐 TRANSLATIONS
     ========================================================= */
  const I18N = {
    bn: {
      together: 'পরিবারবর্গের সাথে একসাথে',
      welcomeMsg: 'আমাদের জীবনের সবচেয়ে শুভ দিনে আপনাকে ও আপনার পরিবারকে আন্তরিক আমন্ত্রণ।',
      openMain: 'আমন্ত্রণ খুলুন',
      hint: 'আপনার আমন্ত্রণ খুলতে স্পর্শ করুন',
      groomLabel: 'বর', brideLabel: 'কন্যা',
      father: 'পিতা', mother: 'মাতা',
      invitationTitle: 'বিবাহ আমন্ত্রণ',
      inviteLine: 'পরম করুণাময়ের আশীর্বাদে আপনাকে সাদর আমন্ত্রণ জানাই।',
      programmeTitle: 'অনুষ্ঠানসূচি',
      venueLabel: 'বিবাহ ভেন্যু',
      countdownTitle: 'বিবাহের বাকি',
      days: 'দিন', hours: 'ঘণ্টা', minutes: 'মিনিট', seconds: 'সেকেন্ড',
      countdownPast: 'শুভ বিবাহ সম্পন্ন হয়েছে — আপনার আশীর্বাদ কামনা করি।',
      countdownInvalid: 'তারিখ যাচাই করা যায়নি, তাই কাউন্টডাউন বন্ধ আছে।',
      ceremonyBtn: 'বিবাহ অনুষ্ঠান দেখুন',
      copyBtn: 'ঠিকানা কপি করুন',
      copied: 'ঠিকানা কপি হয়েছে', copyFail: 'কপি করা যায়নি',
      filmTitle: 'বিবাহ চলচ্চিত্র',
      filmNote: 'একটি সিনেম্যাটিক প্রেজেন্টেশন',
      tcLine: 'শুভ পরিণয়',
      footer: 'ভালোবাসা দিয়ে তৈরি',
      musicPlay: 'সংগীত চালু করুন', musicPause: 'সংগীত বন্ধ করুন',
      musicMute: 'শব্দ বন্ধ করুন', musicUnmute: 'শব্দ চালু করুন',
      musicMissing: 'সংগীত ফাইল পাওয়া যায়নি',
      filmPlay: 'চলচ্চিত্র চালু করুন', filmPause: 'চলচ্চিত্র থামান', filmReplay: 'আবার দেখুন',
      filmFull: 'পূর্ণ পর্দা', toTop: 'উপরে যান',
      scenes: [
        { loc: 'শুভ সূচনা', lat: 'The Wedding Film' },
        { loc: 'কনের প্রবেশ', lat: 'The Bride’s Entrance' },
        { loc: 'বরের প্রবেশ', lat: 'The Groom’s Entrance' },
        { loc: 'মণ্ডপ সাজানো', lat: 'The Mandap' },
        { loc: 'মালাবদল', lat: 'The Garland Ceremony' },
        { loc: 'আকদ ও প্রতিজ্ঞা', lat: 'The Vows' },
        { loc: 'পরিবারের আশীর্বাদ', lat: 'Family Blessings' },
        { loc: 'ওয়ালিমা সংবর্ধনা', lat: 'The Walima' },
        { loc: 'চিরকাল একসাথে', lat: 'Forever Together' }
      ]
    },
    hi: {
      together: 'अपने परिवारों के साथ एक साथ',
      welcomeMsg: 'हमारे जीवन के इस अत्यंत शुभ अवसर पर आपको एवं आपके परिवार को सादर आमंत्रण।',
      openMain: 'निमंत्रण खोलें',
      hint: 'अपना निमंत्रण खोलने के लिए स्पर्श करें',
      groomLabel: 'दूल्हा', brideLabel: 'दुल्हन',
      father: 'पिता', mother: 'माता',
      invitationTitle: 'विवाह निमंत्रण',
      inviteLine: 'परम कृपालु के आशीर्वाद से आपको सादर आमंत्रित करते हैं।',
      programmeTitle: 'कार्यक्रम विवरण',
      venueLabel: 'विवाह स्थल',
      countdownTitle: 'विवाह में शेष',
      days: 'दिन', hours: 'घंटे', minutes: 'मिनट', seconds: 'सेकंड',
      countdownPast: 'विवाह संपन्न हो चुका है — आपके आशीर्वाद की कामना।',
      countdownInvalid: 'तिथि सत्यापित नहीं हो सकी, इसलिए काउंटडाउन बंद है।',
      ceremonyBtn: 'विवाह समारोह देखें',
      copyBtn: 'पता कॉपी करें',
      copied: 'पता कॉपी हो गया', copyFail: 'कॉपी नहीं हो सका',
      filmTitle: 'विवाह फ़िल्म',
      filmNote: 'एक सिनेमैटिक प्रस्तुति',
      tcLine: 'शुभ परिणय',
      footer: 'प्यार से बनाया गया',
      musicPlay: 'संगीत चलाएँ', musicPause: 'संगीत रोकें',
      musicMute: 'आवाज़ बंद करें', musicUnmute: 'आवाज़ चालू करें',
      musicMissing: 'संगीत फ़ाइल उपलब्ध नहीं है',
      filmPlay: 'फ़िल्म चलाएँ', filmPause: 'फ़िल्म रोकें', filmReplay: 'फिर से देखें',
      filmFull: 'पूर्ण स्क्रीन', toTop: 'ऊपर जाएँ',
      scenes: [
        { loc: 'शुभ आरंभ', lat: 'The Wedding Film' },
        { loc: 'दुल्हन का आगमन', lat: 'The Bride’s Entrance' },
        { loc: 'दूल्हे का आगमन', lat: 'The Groom’s Entrance' },
        { loc: 'मंडप', lat: 'The Mandap' },
        { loc: 'जयमाला', lat: 'The Garland Ceremony' },
        { loc: 'वचन', lat: 'The Vows' },
        { loc: 'परिवार का आशीर्वाद', lat: 'Family Blessings' },
        { loc: 'वलीमा', lat: 'The Walima' },
        { loc: 'सदा के लिए साथ', lat: 'Forever Together' }
      ]
    }
  };

  /* =========================================================
     3. HELPERS / STATE
     ========================================================= */
  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const state = {
    lang: 'bn',
    opening: false,
    musicWanted: true,
    musicAvailable: true
  };

  const els = {};
  let countdownTimer = null;
  let toastTimer = null;

  /* =========================================================
     4. LANGUAGE
     ========================================================= */
  function t(key) {
    const pack = I18N[state.lang] || I18N.bn;
    return pack[key] !== undefined ? pack[key] : (I18N.bn[key] || '');
  }

  function applyLang(lang) {
    state.lang = (lang === 'hi') ? 'hi' : 'bn';
    document.body.setAttribute('data-lang', state.lang);
    document.documentElement.setAttribute('lang', state.lang);
    try { localStorage.setItem('wedding-lang', state.lang); } catch (e) {}


    $$('[data-i18n]').forEach(function (node) {
      const val = t(node.getAttribute('data-i18n'));
      if (typeof val === 'string' && val) node.textContent = val;
    });

    renderProgramme();
    renderMessage();
    updateMusicLabels();
    updateFilmLabels();
    Film.refreshCaption();


    $$('.lang-btn').forEach(function (btn) {
      const active = btn.getAttribute('data-lang-btn') === state.lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    if (countdownTimer) renderCountdown();
  }

  /* =========================================================
     5. RENDER FROM CONFIG
     ========================================================= */
  function bind(key, value) {

    $$('[data-bind="' + key + '"]').forEach(function (n) { n.textContent = value; });
  }

  function renderConfig() {
    bind('groomName', CONFIG.groomName);
    bind('brideName', CONFIG.brideName);
    bind('groomFather', CONFIG.groomParents.father);
    bind('groomMother', CONFIG.groomParents.mother);
    bind('brideFather', CONFIG.brideParents.father);
    bind('brideMother', CONFIG.brideParents.mother);
    bind('groomAddress', CONFIG.groomAddress);
    bind('brideAddress', CONFIG.brideAddress);
    bind('weddingVenue', CONFIG.weddingVenue);
    bind('venueAddress', CONFIG.venueAddress);

    if (els.welDate) els.welDate.textContent = CONFIG.weddingDate || '';

    const card = $('#invitationCard');
    if (card) card.setAttribute('aria-label', CONFIG.groomName + ' & ' + CONFIG.brideName + ' — wedding invitation');
  }

  function renderMessage() {
    const node = $('[data-bind="invitationMessage"]');
    if (!node) return;
    const msg = CONFIG.invitationMessage;
    if (msg && typeof msg === 'object') node.textContent = msg[state.lang] || msg.bn || '';
    else if (typeof msg === 'string') node.textContent = msg;
  }

  function pick(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[state.lang] || obj.bn || '';
  }

  function renderProgramme() {
    const list = $('#programmeList');
    if (!list) return;
    list.innerHTML = '';

    CONFIG.programme.forEach(function (item) {
      const li = document.createElement('li');
      li.className = 'prog-item';

      const top = document.createElement('div');
      top.className = 'prog-top';

      const title = document.createElement('span');
      title.className = 'prog-title';
      title.textContent = pick(item.title);
      top.appendChild(title);

      if (item.note) {
        const note = document.createElement('span');
        note.className = 'prog-note';
        note.textContent = pick(item.note);
        top.appendChild(note);
      }

      const date = document.createElement('p');
      date.className = 'prog-date';
      date.textContent = pick(item.date);

      li.appendChild(top);
      li.appendChild(date);

      if (item.bangla) {
        const b = document.createElement('p');
        b.className = 'prog-bangla';
        b.textContent = pick(item.bangla);
        li.appendChild(b);
      }

      list.appendChild(li);
    });
  }

  /* =========================================================
     6. COUNTDOWN
     ========================================================= */
  function renderCountdown() {
    const grid = $('#countdownGrid');
    const note = $('#cdNote');
    if (!grid || !note) return;

    const target = CONFIG.countdownISO ? new Date(CONFIG.countdownISO) : null;

    if (!target || isNaN(target.getTime())) {
      grid.hidden = true;
      note.hidden = false;
      note.textContent = t('countdownInvalid');
      return;
    }

    const diff = target.getTime() - Date.now();

    if (diff <= 0) {
      grid.hidden = true;
      note.hidden = false;
      note.textContent = t('countdownPast');
      if (countdownTimer) { clearInterval(countdownTimer); countdownTimer = null; }
      return;
    }

    grid.hidden = false;
    note.hidden = true;

    const total = Math.floor(diff / 1000);
    const pad = function (n) { return n < 10 ? '0' + n : String(n); };

    if (els.cdDays)  els.cdDays.textContent  = pad(Math.floor(total / 86400));
    if (els.cdHours) els.cdHours.textContent = pad(Math.floor((total % 86400) / 3600));
    if (els.cdMins)  els.cdMins.textContent  = pad(Math.floor((total % 3600) / 60));
    if (els.cdSecs)  els.cdSecs.textContent  = pad(total % 60);
  }

  function startCountdown() {
    renderCountdown();
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(renderCountdown, 1000);
  }

  /* =========================================================
     7. PETALS
     ========================================================= */
  function initPetals() {
    const canvas = document.getElementById('petals');
    if (!canvas || reducedMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1, items = [], raf = null, last = 0;

    function makePetal(initial) {
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : -30,
        r: 4 + Math.random() * 6,
        speed: 18 + Math.random() * 34,
        swayAmp: 12 + Math.random() * 26,
        swaySpeed: 0.4 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 1.1,
        alpha: 0.22 + Math.random() * 0.4
      };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(8, Math.min(26, Math.round(w / 58)));
      items = [];
      for (let i = 0; i < count; i++) items.push(makePetal(true));
    }

    function draw(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      const g = ctx.createLinearGradient(-p.r, -p.r, p.r, p.r);
      g.addColorStop(0, '#f9e0b6');
      g.addColorStop(1, '#d9a06e');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, -p.r);
      ctx.bezierCurveTo(p.r * .95, -p.r * .45, p.r * .75, p.r * .8, 0, p.r);
      ctx.bezierCurveTo(-p.r * .75, p.r * .8, -p.r * .95, -p.r * .45, 0, -p.r);
      ctx.fill();
      ctx.restore();
    }

    function frame(ts) {
      if (!last) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < items.length; i++) {
        const p = items[i];
        p.y += p.speed * dt;
        p.phase += p.swaySpeed * dt;
        p.rot += p.rotSpeed * dt;
        p.x += Math.sin(p.phase) * p.swayAmp * dt;
        if (p.y - p.r > h + 20) { items[i] = makePetal(false); continue; }
        draw(p);
      }
      raf = requestAnimationFrame(frame);
    }

    function start() { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    resize();
    start();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
  }

  /* =========================================================
     8. MUSIC (single instance, first-touch autostart)
     ========================================================= */
  const Music = {
    audio: null,
    failed: false,

    init: function () {
      if (this.audio) return;
      const a = new Audio();
      a.src = CONFIG.musicFile;
      a.loop = true;
      a.preload = 'auto';
      a.volume = CONFIG.musicVolume;
      a.setAttribute('playsinline', '');

      const self = this;
      a.addEventListener('error', function () { self.markUnavailable(); });
      a.addEventListener('play', function () { self.sync(true); });
      a.addEventListener('pause', function () { self.sync(false); });
      a.addEventListener('volumechange', updateMusicLabels);

      this.audio = a;
    },

    markUnavailable: function () {
      if (!state.musicAvailable) return;
      state.musicAvailable = false;
      this.failed = true;
      if (els.musicDock) els.musicDock.setAttribute('data-state', 'off');
      if (els.musicToggle) els.musicToggle.setAttribute('aria-disabled', 'true');
      if (els.musicMute) els.musicMute.setAttribute('aria-disabled', 'true');
      if (els.musicLabel) els.musicLabel.textContent = t('musicMissing');
    },

    play: function () {
      this.init();
      if (this.failed || !this.audio) return Promise.resolve(false);
      if (!this.audio.paused) return Promise.resolve(true);

      const self = this;
      const p = this.audio.play();
      if (p && typeof p.then === 'function') {
        return p.then(function () { self.sync(true); return true; })
                .catch(function () { self.sync(false); return false; });
      }
      this.sync(true);
      return Promise.resolve(true);
    },

    pause: function () {
      if (!this.audio) return;
      this.audio.pause();
      this.sync(false);
    },

    toggle: function () {
      this.init();
      if (this.failed) { toast(t('musicMissing')); return; }
      if (this.audio.paused) { state.musicWanted = true; this.play(); }
      else { state.musicWanted = false; this.pause(); }
    },

    toggleMute: function () {
      this.init();
      if (this.failed || !this.audio) return;
      this.audio.muted = !this.audio.muted;
      updateMusicLabels();
    },

    duck: function (on) {
      if (!this.audio || this.failed) return;
      this.audio.volume = on ? CONFIG.musicDuckVolume : CONFIG.musicVolume;
    },

    sync: function (isPlaying) {
      if (els.musicDock) els.musicDock.classList.toggle('is-playing', !!isPlaying);
      if (els.musicToggle) els.musicToggle.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      updateMusicLabels();
    }
  };

  function updateMusicLabels() {
    if (!els.musicToggle) return;
    const playing = Music.audio ? !Music.audio.paused : false;
    els.musicToggle.setAttribute('aria-label', playing ? t('musicPause') : t('musicPlay'));
    if (els.musicMute) {
      const muted = Music.audio ? !!Music.audio.muted : false;
      els.musicMute.setAttribute('aria-pressed', muted ? 'true' : 'false');
      els.musicMute.setAttribute('aria-label', muted ? t('musicUnmute') : t('musicMute'));
    }
    if (els.musicDock) els.musicDock.classList.toggle('is-muted', Music.audio ? !!Music.audio.muted : false);
  }

  /* ---- first touch / click anywhere starts the song ---- */
  function armFirstGestureMusic() {
    let fired = false;
    const events = ['pointerdown', 'touchstart', 'mousedown', 'click', 'keydown'];

    function cleanup() {
      events.forEach(function (e) { window.removeEventListener(e, handler, true); });
    }

    function handler() {
      if (fired) return;
      fired = true;
      cleanup();
      if (!state.musicWanted || !state.musicAvailable) return;

      Music.init();
      Music.play().then(function (ok) {
        if (!ok && els.musicDock) {
          els.musicDock.classList.add('is-attention');
          els.musicDock.setAttribute('data-hint', 'tap');
        }
      });
    }

    events.forEach(function (e) {
      window.addEventListener(e, handler, { capture: true, passive: true });
    });
  }

  /* =========================================================
     9. CINEMATIC FILM ENGINE
     ========================================================= */
  const Film = (function () {
    let stage, subtitle, controls, bar, fill, dots = [], scenes = [];
    let idx = 0, playing = false, ended = false;
    let elapsed = 0, last = 0, raf = null;

    /* per-scene duration (ms) */
    const durations = [4200, 6200, 6200, 6800, 6200, 5600, 6200, 6600, 6400];
    const total = durations.reduce(function (a, b) { return a + b; }, 0);

    function cumulative(i) {
      let s = 0;
      for (let k = 0; k < i; k++) s += durations[k];
      return s;
    }

    function setSubtitle(i, animate) {
      if (!subtitle) return;
      const pack = I18N[state.lang] || I18N.bn;
      const cap = pack.scenes && pack.scenes[i];
      if (!cap) return;

      if (!animate) {
        subtitle.textContent = cap.loc;
        subtitle.classList.add('is-on');
        return;
      }
      subtitle.classList.remove('is-on');
      window.setTimeout(function () {
        subtitle.textContent = cap.loc;
        subtitle.classList.add('is-on');
      }, 380);
    }

    function applyState() {
      scenes.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle('is-on', i === idx); });

      if (controls) {
        controls.classList.toggle('is-playing', playing);
        controls.classList.toggle('is-ended', ended);
      }
      const btn = document.getElementById('filmPlay');
      if (btn) {
        btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
        btn.setAttribute('aria-label', ended ? t('filmReplay') : (playing ? t('filmPause') : t('filmPlay')));
      }

      const count = document.getElementById('filmCount');
      if (count) count.textContent = (idx + 1) + ' / ' + scenes.length;
    }

    function progress() {
      const p = ((cumulative(idx) + Math.min(elapsed, durations[idx])) / total) * 100;
      if (fill) fill.style.width = Math.max(0, Math.min(100, p)).toFixed(2) + '%';
      if (bar) bar.setAttribute('aria-valuenow', Math.round(p));
    }

    function tick(ts) {
      if (!playing) return;
      if (!last) last = ts;
      const dt = Math.min(ts - last, 120);
      last = ts;
      elapsed += dt;

      if (elapsed >= durations[idx]) {
        if (idx < scenes.length - 1) {
          idx += 1;
          elapsed = 0;
          setSubtitle(idx, true);
          applyState();
        } else {
          elapsed = durations[idx];
          finish();
          progress();
          return;
        }
      }
      progress();
      raf = requestAnimationFrame(tick);
    }

    function finish() {
      playing = false;
      ended = true;
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      applyState();
      Music.duck(false);
    }

    function goTo(i, keepPlaying) {
      idx = Math.min(scenes.length - 1, Math.max(0, i));
      elapsed = 0;
      ended = false;
      setSubtitle(idx, true);
      applyState();
      progress();
      if (!keepPlaying) { /* manual seek keeps current play state */ }
    }

    return {
      init: function () {
        stage = document.getElementById('filmStage');
        subtitle = document.getElementById('filmSubtitle');
        controls = document.getElementById('filmControls');
        bar = document.getElementById('filmProgress');
        fill = document.getElementById('filmProgressFill');
        scenes = $$('.scene');
        if (!stage || !scenes.length) return;

        const dotsWrap = document.getElementById('filmDots');
        if (dotsWrap) {
          dotsWrap.innerHTML = '';
          scenes.forEach(function (_, i) {
            const dot = document.createElement('i');
            dot.addEventListener('click', function (ev) { ev.stopPropagation(); goTo(i); });
            dotsWrap.appendChild(dot);
          });
          dots = $$('i', dotsWrap);
        }

        setSubtitle(0, false);
        applyState();
        progress();

        const btn = document.getElementById('filmPlay');
        if (btn) btn.addEventListener('click', function () {
          if (playing) this.pause();
          else this.play(true);
        }.bind(this));

        const full = document.getElementById('filmFull');
        if (full) full.addEventListener('click', function () { toggleFullscreen(); });

        if (bar) {
          const seek = function (ev) {
            const rect = bar.getBoundingClientRect();
            const x = ev.touches ? ev.touches[0].clientX : ev.clientX;
            const ratio = Math.min(1, Math.max(0, (x - rect.left) / rect.width));
            const targetMs = ratio * total;
            let i = 0;
            while (i < durations.length - 1 && targetMs >= cumulative(i + 1)) i++;
            goTo(i);
          };
          bar.addEventListener('click', seek);
          bar.addEventListener('keydown', function (ev) {
            if (ev.key === 'ArrowRight') { ev.preventDefault(); goTo(Math.min(scenes.length - 1, idx + 1)); }
            if (ev.key === 'ArrowLeft')  { ev.preventDefault(); goTo(Math.max(0, idx - 1)); }
          });
        }

        /* auto-start once when the film scrolls into view */
        if ('IntersectionObserver' in window) {
          const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (en.isIntersecting && !ended) { io.disconnect(); this.play(false); }
            });
          }.bind(this), { threshold: 0.55 });
          io.observe(stage);
        }

        /* particle overlay */
        initFilmFx();
      },

      play: function (fromUser) {
        if (playing) return;
        if (ended) { ended = false; idx = 0; elapsed = 0; setSubtitle(0, true); applyState(); }
        playing = true;
        last = 0;
        applyState();
        if (fromUser) Music.duck(true);
        Music.duck(true);
        raf = requestAnimationFrame(tick);
      },

      pause: function () {
        playing = false;
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        applyState();
        Music.duck(false);
      },

      toggle: function () { if (playing) this.pause(); else this.play(true); },

      refreshCaption: function () { setSubtitle(idx, false); },
      refreshLabels: function () { applyState(); }
    };
  })();

  function updateFilmLabels() { Film.refreshLabels(); }

  /* ---------- film dust / sparkle overlay ---------- */
  function initFilmFx() {
    const canvas = document.getElementById('filmFx');
    const stage = document.getElementById('filmStage');
    if (!canvas || !stage || reducedMotion) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1, bits = [], raf = null, last = 0;

    function makeBit(initial) {
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : h + 10,
        r: 0.8 + Math.random() * 2.4,
        vy: -(10 + Math.random() * 26),
        vx: (Math.random() - 0.5) * 14,
        a: 0.12 + Math.random() * 0.5,
        tw: Math.random() * Math.PI * 2,
        tws: 0.6 + Math.random() * 1.6
      };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = stage.clientWidth; h = stage.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(10, Math.min(46, Math.round(w / 26)));
      bits = [];
      for (let i = 0; i < n; i++) bits.push(makeBit(true));
    }

    function frame(ts) {
      if (!last) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < bits.length; i++) {
        const b = bits[i];
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.tw += b.tws * dt;
        if (b.y < -12 || b.x < -20 || b.x > w + 20) { bits[i] = makeBit(false); continue; }

        const alpha = b.a * (0.55 + 0.45 * Math.sin(b.tw));
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,226,170,' + alpha.toFixed(3) + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255,205,140,.85)';
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    }

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener('resize', resize);
  }

  /* =========================================================
     10. FULLSCREEN
     ========================================================= */
  function toggleFullscreen() {
    const shell = document.getElementById('filmShell');
    if (!shell) return;
    const isFull = document.fullscreenElement || document.webkitFullscreenElement;
    try {
      if (!isFull) {
        if (shell.requestFullscreen) shell.requestFullscreen();
        else if (shell.webkitRequestFullscreen) shell.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    } catch (e) {}
  }

  /* =========================================================
     11. TOAST
     ========================================================= */
  function toast(message) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-on');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-on'); }, 2600);
  }

  /* =========================================================
     12. OPEN INVITATION
     ========================================================= */
  function openInvitation() {
    if (state.opening) return;
    state.opening = true;

    const welcome = document.getElementById('welcome');
    const invitation = document.getElementById('invitation');

    if (welcome) { welcome.classList.add('is-leaving'); welcome.setAttribute('aria-hidden', 'true'); }
    if (invitation) document.body.classList.add('is-open');

    window.setTimeout(function () {
      if (welcome) welcome.classList.add('is-gone');
      observeReveals();
      startCountdown();
    }, 720);

    window.setTimeout(function () {
      const card = document.getElementById('invitationCard');
      if (card) {
        try { card.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }); }
        catch (e) { card.scrollIntoView(); }
        card.setAttribute('tabindex', '-1');
        try { card.focus({ preventScroll: true }); } catch (e) {}
      }
      state.opening = false;
    }, 950);
  }

  /* =========================================================
     13. REVEAL
     ========================================================= */
  let revealObserver = null;
  function observeReveals() {
    const nodes = $$('.reveal');
    if (!('IntersectionObserver' in window)) { nodes.forEach(function (n) { n.classList.add('is-in'); }); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); revealObserver.unobserve(en.target); }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    }
    nodes.forEach(function (n) { revealObserver.observe(n); });
  }

  /* =========================================================
     14. COPY ADDRESS
     ========================================================= */
  function copyAddress() {
    const text = CONFIG.weddingVenue + ', ' + CONFIG.venueAddress;
    const done = function () { toast(t('copied')); };
    const fail = function () { toast(t('copyFail')); };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(function () { legacyCopy(text, done, fail); });
    } else {
      legacyCopy(text, done, fail);
    }
  }

  function legacyCopy(text, done, fail) {
    try {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      area.setSelectionRange(0, area.value.length);
      const ok = document.execCommand('copy');
      document.body.removeChild(area);
      if (ok) done(); else fail();
    } catch (e) { fail(); }
  }

  /* =========================================================
     15. BACK TO TOP
     ========================================================= */
  function initToTop() {
    const btn = document.getElementById('toTop');
    if (!btn) return;
    btn.setAttribute('aria-label', t('toTop'));

    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-on', window.scrollY > 420);
    }, { passive: true });

    btn.addEventListener('click', function () {
      if (reducedMotion) window.scrollTo(0, 0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================================================
     16. INIT
     ========================================================= */
  function cacheEls() {
    els.welcome     = document.getElementById('welcome');
    els.welDate     = document.getElementById('welDate');
    els.openBtn     = document.getElementById('openBtn');
    els.musicDock   = document.getElementById('musicDock');
    els.musicToggle = document.getElementById('musicToggle');
    els.musicMute   = document.getElementById('musicMute');
    els.musicLabel  = document.getElementById('musicLabel');
    els.cdDays      = document.getElementById('cdDays');
    els.cdHours     = document.getElementById('cdHours');
    els.cdMins      = document.getElementById('cdMins');
    els.cdSecs      = document.getElementById('cdSecs');
  }

  function bindEvents() {

    $$('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang-btn')); });
    });

    if (els.openBtn) els.openBtn.addEventListener('click', openInvitation);

    if (els.musicToggle) {
      els.musicToggle.addEventListener('click', function () {
        Music.init();
        Music.toggle();
        els.musicDock.classList.remove('is-attention');
      });
    }

    if (els.musicMute) {
      els.musicMute.addEventListener('click', function () {
        Music.init();
        Music.toggleMute();
      });
    }

    const ceremonyBtn = document.getElementById('ceremonyBtn');
    if (ceremonyBtn) {
      ceremonyBtn.addEventListener('click', function () {
        const film = document.getElementById('film');
        if (film) {
          try { film.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }); }
          catch (e) { film.scrollIntoView(); }
        }
        Film.play(true);
      });
    }

    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) copyBtn.addEventListener('click', copyAddress);


    $$('.portrait-img').forEach(function (img) {
      img.addEventListener('load', function () {
        const wrap = img.closest('.portrait');
        if (wrap) wrap.classList.add('has-img');
      });
      img.addEventListener('error', function () {
        const wrap = img.closest('.portrait');
        if (wrap) wrap.classList.remove('has-img');
        img.style.display = 'none';
      });
    });
  }

  function hidePreloader() {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    window.setTimeout(function () { pre.classList.add('is-off'); }, reducedMotion ? 0 : 620);
  }

  function init() {
    cacheEls();

    let stored = null;
    try { stored = localStorage.getItem('wedding-lang'); } catch (e) {}
    state.lang = (stored === 'hi') ? 'hi' : 'bn';

    renderConfig();
    applyLang(state.lang);

    Film.init();
    initPetals();
    initToTop();
    bindEvents();

    Music.init();
    armFirstGestureMusic();

    observeReveals();
    hidePreloader();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
