/* =========================================================
   MODERN LUXURY WEDDING INVITATION
   Vanilla JS · no dependencies · GitHub Pages friendly
   ========================================================= */
(function () {
  'use strict';

  /* =========================================================
     1. ⚙️  CONFIGURATION — EDIT EVERYTHING HERE
     All names / dates / venue are taken from the printed card.
     ========================================================= */
  const CONFIG = {
    groomName: 'Ismail Ali Shah',
    brideName: 'Taslima Khatun',

    groomParents: { father: 'Jhunu Ali Shah', mother: 'Ismatara Bibi' },
    brideParents: { father: 'Zakir Hossain', mother: 'Akturnesha Bibi' },

    groomAddress: 'Village: Dubrajpur, Post: Dehiramnagor, P.S: Daspur, Dist: Paschim Medinipur, Pin: 721212',
    brideAddress: 'Village: Shuknator, Post: Digree, P.S: Garhbeta, Paschim Medinipur',

    /* Display strings (kept in Latin, exactly as printed) */
    weddingDate: '01 November 2026',
    weddingTime: 'Afternoon',
    weddingVenue: 'Shyam Sarthak Palace',
    venueAddress: 'Dehiramnagor, Daspur, Paschim Medinipur, Pin 721212',

    /* Countdown target — ISO date. Set to null to hide the countdown. */
    countdownISO: '2026-11-01T12:00:00+05:30',

    /* Warm invitation message — edit freely */
    invitationMessage: {
      bn: 'পরম করুণাময়ের আশীর্বাদে আমাদের প্রিয় সন্তান ইসমাইল আলী শাহ ও তাসলিমা খাতুনের শুভ বিবাহ উপলক্ষে আপনাকে ও আপনার পরিবারকে আন্তরিক আমন্ত্রণ জানাই। আপনার উপস্থিতি আমাদের আনন্দকে পূর্ণ করবে।',
      hi: 'परम कृपालु के आशीर्वाद से हमारे प्रिय इस्माइल अली शाह एवं तस्लीमा खातून के शुभ विवाह के अवसर पर आपको एवं आपके परिवार को सादर आमंत्रित करते हैं। आपकी उपस्थिति हमारे आनंद को पूर्ण करेगी।'
    },

    /* Programme — fully editable */
    programme: [
      {
        title: { bn: 'গায়ে হলুদ', hi: 'गाये हल्दी' },
        note: { bn: 'হলুদ অনুষ্ঠান', hi: 'हल्दी समारोह' },
        date: { bn: 'শুক্রবার, ৩০ অক্টোবর ২০২৬', hi: 'शुक्रवार, ३० अक्टूबर २०२६' },
        bangla: { bn: '১২ কার্তিক ১৪৩৩', hi: '१२ कार्तिक १४३३' }
      },
      {
        title: { bn: 'শাদী মুবারক', hi: 'शादी मुबारक' },
        note: { bn: 'বিবাহ অনুষ্ঠান', hi: 'विवाह समारोह' },
        date: { bn: 'রবিবার, ০১ নভেম্বর ২০২৬', hi: 'रविवार, ०१ नवंबर २०२६' },
        bangla: { bn: '১৪ কার্তিক ১৪৩৩', hi: '१४ कार्तिक १४३३' }
      },
      {
        title: { bn: 'ওয়ালিমা', hi: 'वलीमा' },
        note: { bn: 'প্রীতিভোজ · বিকেল', hi: 'प्रीतिभोज · दोपहर बाद' },
        date: { bn: 'সোমবার, ০২ নভেম্বর ২০২৬', hi: 'सोमवार, ०२ नवंबर २०२६' },
        bangla: { bn: '১৫ কার্তিক ১৪৩৩', hi: '१५ कार्तिक १४३३' }
      }
    ],

    /* Media paths */
    musicFile: 'assets/audio/wedding-song.mp3',
    videoFile: 'assets/videos/wedding-ceremony.mp4'
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
      groomLabel: 'বর',
      brideLabel: 'কন্যা',
      father: 'পিতা',
      mother: 'মাতা',
      invitationTitle: 'বিবাহ আমন্ত্রণ',
      inviteLine: 'পরম করুণাময়ের আশীর্বাদে আপনাকে সাদর আমন্ত্রণ জানাই।',
      programmeTitle: 'অনুষ্ঠানসূচি',
      venueLabel: 'বিবাহ ভেন্যু',
      countdownTitle: 'বিবাহের বাকি',
      days: 'দিন', hours: 'ঘণ্টা', minutes: 'মিনিট', seconds: 'সেকেন্ড',
      countdownPast: 'শুভ বিবাহ সম্পন্ন হয়েছে — আপনার আশীর্বাদ কামনা করি।',
      countdownInvalid: 'তারিখ যাচাই করা যায়নি, তাই কাউন্টডাউন বন্ধ আছে।',
      ceremonyBtn: 'বিবাহ অনুষ্ঠান দেখুন',
      printBtn: 'প্রিন্ট / PDF সংরক্ষণ',
      copyBtn: 'ঠিকানা কপি করুন',
      copied: 'ঠিকানা কপি হয়েছে',
      copyFail: 'কপি করা যায়নি',
      filmTitle: 'বিবাহ চলচ্চিত্র',
      filmSub: 'একটি সিনেম্যাটিক প্রেসেন্টেশন',
      filmPlay: 'চলচ্চিত্র চালু করুন',
      filmPause: 'চলচ্চিত্র থামান',
      filmFull: 'পূর্ণ পর্দা',
      filmMute: 'শব্দ বন্ধ / চালু',
      musicPlay: 'সংগীত চালু করুন',
      musicPause: 'সংগীত বন্ধ করুন',
      musicMute: 'শব্দ বন্ধ করুন',
      musicUnmute: 'শব্দ চালু করুন',
      musicMissing: 'সংগীত ফাইল পাওয়া যায়নি',
      videoMissing: 'ভিডিও ফাইল এখনো যোগ করা হয়নি — নিচে কোড-নির্মিত সিনেম্যাটিক দৃশ্য চলছে।',
      footer: 'ভালোবাসা দিয়ে তৈরি',
      toTop: 'উপরে যান',
      scenes: [
        { loc: 'বরের প্রবেশ', lat: 'The Groom’s Entrance' },
        { loc: 'মণ্ডপ সাজানো', lat: 'The Mandap' },
        { loc: 'মালাবদল', lat: 'Garland Ceremony' },
        { loc: 'পরিবারের আশীর্বাদ', lat: 'Family Blessings' },
        { loc: 'ওয়ালিমা সংবর্ধনা', lat: 'Walima Reception' },
        { loc: 'চিরকাল একসাথে', lat: 'Forever Together' }
      ]
    },
    hi: {
      together: 'अपने परिवारों के साथ एक साथ',
      welcomeMsg: 'हमारे जीवन के इस अत्यंत शुभ अवसर पर आपको एवं आपके परिवार को सादर आमंत्रण।',
      openMain: 'निमंत्रण खोलें',
      hint: 'अपना निमंत्रण खोलने के लिए स्पर्श करें',
      groomLabel: 'दूल्हा',
      brideLabel: 'दुल्हन',
      father: 'पिता',
      mother: 'माता',
      invitationTitle: 'विवाह निमंत्रण',
      inviteLine: 'परम कृपालु के आशीर्वाद से आपको सादर आमंत्रित करते हैं।',
      programmeTitle: 'कार्यक्रम विवरण',
      venueLabel: 'विवाह स्थल',
      countdownTitle: 'विवाह में शेष',
      days: 'दिन', hours: 'घंटे', minutes: 'मिनट', seconds: 'सेकंड',
      countdownPast: 'विवाह संपन्न हो चुका है — आपके आशीर्वाद की कामना।',
      countdownInvalid: 'तिथि सत्यापित नहीं हो सकी, इसलिए काउंटडाउन बंद है।',
      ceremonyBtn: 'विवाह समारोह देखें',
      printBtn: 'प्रिंट / PDF सेव करें',
      copyBtn: 'पता कॉपी करें',
      copied: 'पता कॉपी हो गया',
      copyFail: 'कॉपी नहीं हो सका',
      filmTitle: 'विवाह फ़िल्म',
      filmSub: 'एक सिनेमैटिक प्रस्तुति',
      filmPlay: 'फ़िल्म चलाएँ',
      filmPause: 'फ़िल्म रोकें',
      filmFull: 'पूर्ण स्क्रीन',
      filmMute: 'आवाज़ बंद / चालू',
      musicPlay: 'संगीत चलाएँ',
      musicPause: 'संगीत रोकें',
      musicMute: 'आवाज़ बंद करें',
      musicUnmute: 'आवाज़ चालू करें',
      musicMissing: 'संगीत फ़ाइल उपलब्ध नहीं है',
      videoMissing: 'वीडियो फ़ाइल अभी जोड़ी नहीं गई — नीचे कोड से बनी सिनेमैटिक झलक चल रही है।',
      footer: 'प्यार से बनाया गया',
      toTop: 'ऊपर जाएँ',
      scenes: [
        { loc: 'दूल्हे का आगमन', lat: 'The Groom’s Entrance' },
        { loc: 'मंडप', lat: 'The Mandap' },
        { loc: 'जयमाला', lat: 'Garland Ceremony' },
        { loc: 'परिवार का आशीर्वाद', lat: 'Family Blessings' },
        { loc: 'वलीमा स्वागत', lat: 'Walima Reception' },
        { loc: 'सदा के लिए साथ', lat: 'Forever Together' }
      ]
    }
  };

  /* =========================================================
     3. HELPERS + STATE
     ========================================================= */
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const state = {
    lang: 'bn',
    opening: false,          // guards repeated open transitions
    musicWanted: true,       // user preference (page session only)
    musicAvailable: true,
    videoMode: false,        // true when a real mp4 loads
    musicPausedByVideo: false
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

    try { window.localStorage.setItem('wedding-lang', state.lang); } catch (e) {}

    /* static texts */

    $$('[data-i18n]').forEach(function (node) {
      const key = node.getAttribute('data-i18n');
      const value = t(key);
      if (typeof value === 'string' && value) node.textContent = value;
    });

    /* aria labels */

    $$('[data-i18n-aria]').forEach(function (node) {
      const key = node.getAttribute('data-i18n-aria');
      const value = t(key);
      if (value) node.setAttribute('aria-label', value);
    });

    /* dynamic blocks */
    renderProgramme();
    renderMessage();
    renderSceneCaptions();
    updateMusicLabels();
    updateFilmLabels();


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

    $$('[data-bind="' + key + '"]').forEach(function (node) {
      node.textContent = value;
    });
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

    const c = $('#invitationCard');
    if (c) c.setAttribute('aria-label', CONFIG.groomName + ' & ' + CONFIG.brideName + ' — wedding invitation');
  }

  function renderMessage() {
    const node = $('[data-bind="invitationMessage"]');
    if (!node) return;
    const msg = CONFIG.invitationMessage;
    if (msg && typeof msg === 'object') {
      node.textContent = msg[state.lang] || msg.bn || '';
    } else if (typeof msg === 'string') {
      node.textContent = msg;
    }
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

  function pick(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[state.lang] || obj.bn || '';
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

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = function (n) { return n < 10 ? '0' + n : String(n); };

    if (els.cdDays)  els.cdDays.textContent  = pad(days);
    if (els.cdHours) els.cdHours.textContent = pad(hours);
    if (els.cdMins)  els.cdMins.textContent  = pad(mins);
    if (els.cdSecs)  els.cdSecs.textContent  = pad(secs);
  }

  function startCountdown() {
    renderCountdown();
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(renderCountdown, 1000);
  }

  /* =========================================================
     7. PETALS (canvas)
     ========================================================= */
  function initPetals() {
    const canvas = document.getElementById('petals');
    if (!canvas) return;
    if (reducedMotion) { canvas.style.display = 'none'; return; }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1, items = [], raf = null, last = 0;

    function makePetal(initial) {
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : -30,
        r: 4 + Math.random() * 6,
        speed: 18 + Math.random() * 34,       // px / second
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
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(8, Math.min(26, Math.round(w / 58)));
      items = [];
      for (let i = 0; i < count; i++) items.push(makePetal(true));
    }

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;

      const g = ctx.createLinearGradient(-p.r, -p.r, p.r, p.r);
      g.addColorStop(0, '#f6d9a8');
      g.addColorStop(1, '#d9a06e');
      ctx.fillStyle = g;

      ctx.beginPath();
      ctx.moveTo(0, -p.r);
      ctx.bezierCurveTo(p.r * 0.95, -p.r * 0.45, p.r * 0.75, p.r * 0.8, 0, p.r);
      ctx.bezierCurveTo(-p.r * 0.75, p.r * 0.8, -p.r * 0.95, -p.r * 0.45, 0, -p.r);
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

        if (p.y - p.r > h + 20) {
          items[i] = makePetal(false);
          continue;
        }
        drawPetal(p);
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (raf) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
    }

    resize();
    start();

    window.addEventListener('resize', function () {
      resize();
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
  }

  /* =========================================================
     8. MUSIC (single instance)
     ========================================================= */
  const Music = {
    audio: null,
    ready: false,
    failed: false,

    init: function () {
      if (this.audio) return;
      const a = new Audio();
      a.src = CONFIG.musicFile;
      a.loop = true;
      a.preload = 'metadata';
      a.volume = 0.6;
      a.setAttribute('playsinline', '');

      const self = this;
      a.addEventListener('error', function () { self.markUnavailable(); });
      a.addEventListener('canplaythrough', function () { self.ready = true; });
      a.addEventListener('play', function () { self.sync(true); });
      a.addEventListener('pause', function () { self.sync(false); });
      a.addEventListener('volumechange', updateMusicLabels);

      this.audio = a;
    },

    markUnavailable: function () {
      if (state.musicAvailable === false) return;
      state.musicAvailable = false;
      this.failed = true;
      if (els.musicDock) els.musicDock.setAttribute('data-state', 'off');
      if (els.musicToggle) els.musicToggle.setAttribute('aria-disabled', 'true');
      if (els.musicMute) els.musicMute.setAttribute('aria-disabled', 'true');
      if (els.musicLabel) els.musicLabel.textContent = t('musicMissing');
      if (els.musicDock) els.musicDock.title = t('musicMissing');
    },

    play: function () {
      this.init();
      if (this.failed || !this.audio) return Promise.resolve(false);
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
      if (!this.audio) this.init();
      if (this.failed) { toast(t('musicMissing')); return; }
      if (this.audio.paused) {
        state.musicWanted = true;
        this.play();
      } else {
        state.musicWanted = false;
        this.pause();
      }
    },

    setMuted: function (muted) {
      if (!this.audio) return;
      this.audio.muted = !!muted;
      updateMusicLabels();
    },

    toggleMute: function () {
      if (!this.audio) this.init();
      if (this.failed) return;
      this.setMuted(!this.audio.muted);
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
    if (els.musicDock) {
      els.musicDock.classList.toggle('is-muted', Music.audio ? !!Music.audio.muted : false);
    }
    if (els.musicLabel && state.musicAvailable !== false) {
      els.musicLabel.textContent = playing ? t('musicPause').split(' ')[0] : t('musicPlay').split(' ')[0];
      els.musicLabel.textContent = playing ? 'Music' : 'Music';
    }
  }

  /* =========================================================
     9. WEDDING FILM (code-generated cinematic sequence)
     ========================================================= */
  const Film = {
    stage: null,
    controls: null,
    scenes: [],
    dots: [],
    index: 0,
    playing: false,
    elapsed: 0,
    perScene: 6000,
    raf: null,
    lastTs: 0,

    init: function () {
      this.stage = document.getElementById('filmStage');
      this.controls = document.getElementById('filmControls');
      this.scenes = $$('.scene');
      if (!this.stage || !this.scenes.length) return;

      /* dots */
      const dotsWrap = document.getElementById('filmDots');
      if (dotsWrap) {
        dotsWrap.innerHTML = '';
        const self = this;
        this.scenes.forEach(function (_, i) {
          const dot = document.createElement('i');
          if (i === 0) dot.className = 'is-on';
          dot.addEventListener('click', function (ev) {
            ev.stopPropagation();
            self.goTo(i);
          });
          dotsWrap.appendChild(dot);
        });
        this.dots = $$('i', dotsWrap);
      }

      this.updateCaption(0);
      this.updateCount();
      this.updateProgress(0);

      /* progress bar seek */
      const bar = document.getElementById('filmProgress');
      if (bar) {
        const self = this;
        const seek = function (ev) {
          const rect = bar.getBoundingClientRect();
          const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
          const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
          const target = Math.min(self.scenes.length - 1, Math.floor(ratio * self.scenes.length));
          self.goTo(target);
        };
        bar.addEventListener('click', seek);
        bar.addEventListener('keydown', function (ev) {
          if (ev.key === 'ArrowRight') { ev.preventDefault(); self.goTo(Math.min(self.scenes.length - 1, self.index + 1)); }
          if (ev.key === 'ArrowLeft')  { ev.preventDefault(); self.goTo(Math.max(0, self.index - 1)); }
        });
      }
    },

    goTo: function (i) {
      const next = Math.min(this.scenes.length - 1, Math.max(0, i));
      this.scenes.forEach(function (s, idx) {
        s.classList.toggle('is-active', idx === next);
      });
      this.dots.forEach(function (d, idx) {
        d.classList.toggle('is-on', idx === next);
      });
      this.index = next;
      this.elapsed = 0;
      this.updateCaption(next);
      this.updateCount();
      this.updateProgress(0);
    },

    next: function () {
      const nextIndex = (this.index + 1) % this.scenes.length;
      this.goTo(nextIndex);
    },

    updateCaption: function (i) {
      const pack = I18N[state.lang] || I18N.bn;
      const cap = pack.scenes && pack.scenes[i];
      if (!cap) return;
      const scene = this.scenes[i];
      if (!scene) return;
      const loc = $('.cap-loc', scene);
      const lat = $('.cap-lat', scene);
      if (loc) loc.textContent = cap.loc;
      if (lat) lat.textContent = cap.lat;
    },

    renderAllCaptions: function () {
      const self = this;
      this.scenes.forEach(function (_, i) { self.updateCaption(i); });
    },

    updateCount: function () {
      const el = document.getElementById('filmCount');
      if (el) el.textContent = (this.index + 1) + ' / ' + this.scenes.length;
    },

    updateProgress: function (pct) {
      const fill = document.getElementById('filmProgressFill');
      const bar = document.getElementById('filmProgress');
      if (fill) fill.style.width = pct.toFixed(2) + '%';
      if (bar) bar.setAttribute('aria-valuenow', Math.round(pct));
    },

    play: function () {
      if (this.playing || state.videoMode) return;
      this.playing = true;
      this.lastTs = 0;
      if (this.controls) this.controls.classList.add('is-playing');
      const btn = document.getElementById('filmPlay');
      if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.setAttribute('aria-label', t('filmPause')); }
      this.loop(performance.now ? performance.now() : Date.now());
    },

    pause: function () {
      this.playing = false;
      if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
      if (this.controls) this.controls.classList.remove('is-playing');
      const btn = document.getElementById('filmPlay');
      if (btn) { btn.setAttribute('aria-pressed', 'false'); btn.setAttribute('aria-label', t('filmPlay')); }
    },

    toggle: function () {
      if (this.playing) this.pause(); else this.play();
    },

    loop: function (ts) {
      if (!this.playing) return;
      const self = this;
      if (!this.lastTs) this.lastTs = ts;
      const dt = Math.min(ts - this.lastTs, 120);
      this.lastTs = ts;
      this.elapsed += dt;

      if (this.elapsed >= this.perScene) {
        this.elapsed = 0;
        this.next();
      }

      const total = this.scenes.length * this.perScene;
      const overall = ((this.index * this.perScene) + this.elapsed) / total * 100;
      this.updateProgress(overall);

      this.raf = requestAnimationFrame(function (t) { self.loop(t); });
    }
  };

  function updateFilmLabels() {
    const btn = document.getElementById('filmPlay');
    if (btn) btn.setAttribute('aria-label', Film.playing ? t('filmPause') : t('filmPlay'));
    const full = document.getElementById('filmFull');
    if (full) full.setAttribute('aria-label', t('filmFull'));
    const mute = document.getElementById('filmMute');
    if (mute) mute.setAttribute('aria-label', t('filmMute'));
    renderSceneCaptions();
  }

  function renderSceneCaptions() {
    Film.renderAllCaptions();
  }

  /* =========================================================
     10. REAL VIDEO DETECTION
     ========================================================= */
  function initRealVideo() {
    const video = document.getElementById('realVideo');
    const stage = document.getElementById('filmStage');
    const controls = document.getElementById('filmControls');
    const fallback = document.getElementById('filmFallback');
    if (!video) return;

    video.addEventListener('loadedmetadata', function () {
      if (!video.videoWidth) return;
      state.videoMode = true;
      video.hidden = false;
      video.removeAttribute('hidden');
      if (stage) stage.style.display = 'none';
      if (controls) controls.style.display = 'none';
      if (fallback) fallback.hidden = true;
      Film.pause();
    });

    video.addEventListener('error', function () {
      /* keep the generated sequence — no broken player shown */
      state.videoMode = false;
      video.hidden = true;
      if (stage) stage.style.display = '';
      if (controls) controls.style.display = '';
      if (fallback) {
        fallback.hidden = false;
        fallback.textContent = t('videoMissing');
      }
    });

    video.addEventListener('play', function () {
      if (!Music.audio) return;
      if (!Music.audio.paused) {
        state.musicPausedByVideo = true;
        Music.pause();
      }
    });

    video.addEventListener('pause', function () {
      if (state.musicPausedByVideo && state.musicWanted) {
        Music.play();
      }
      state.musicPausedByVideo = false;
    });

    video.addEventListener('ended', function () {
      if (state.musicPausedByVideo && state.musicWanted) Music.play();
      state.musicPausedByVideo = false;
    });
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
    if (state.opening) return;           // guard repeated taps
    state.opening = true;

    const welcome = document.getElementById('welcome');
    const invitation = document.getElementById('invitation');

    /* 1. start music inside the user gesture (autoplay-safe) */
    Music.init();
    Music.play().then(function (ok) {
      if (!ok && els.musicDock) els.musicDock.classList.add('is-attention');
    });

    /* 2. opening animation */
    if (welcome) {
      welcome.classList.add('is-leaving');
      welcome.setAttribute('aria-hidden', 'true');
    }
    if (invitation) {
      document.body.classList.add('is-open');
    }

    window.setTimeout(function () {
      if (welcome) welcome.classList.add('is-gone');
      observeReveals();
      startCountdown();
    }, 720);

    /* 3. smooth scroll to the card */
    window.setTimeout(function () {
      const card = document.getElementById('invitationCard');
      if (card) {
        try { card.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }); }
        catch (e) { card.scrollIntoView(); }
      }
      const cardEl = document.getElementById('invitationCard');
      if (cardEl) {
        cardEl.setAttribute('tabindex', '-1');
        try { cardEl.focus({ preventScroll: true }); } catch (e) {}
      }
      state.opening = false;
    }, 950);
  }

  /* =========================================================
     13. REVEAL ON SCROLL
     ========================================================= */
  let revealObserver = null;

  function observeReveals() {
    const nodes = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-in'); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            revealObserver.unobserve(entry.target);
          }
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

    function done() { toast(t('copied')); }
    function fail() { toast(t('copyFail')); }

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
    } catch (e) {
      fail();
    }
  }

  /* =========================================================
     15. PRINT
     ========================================================= */
  function printCard() {
    try { window.print(); }
    catch (e) { toast('Print not supported'); }
  }

  /* =========================================================
     16. BACK TO TOP
     ========================================================= */
  function initToTop() {
    const btn = document.getElementById('toTop');
    if (!btn) return;
    btn.setAttribute('aria-label', t('toTop'));

    window.addEventListener('scroll', function () {
      const on = window.scrollY > 420;
      btn.classList.toggle('is-on', on);
    }, { passive: true });

    btn.addEventListener('click', function () {
      if (reducedMotion) window.scrollTo(0, 0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =========================================================
     17. FULLSCREEN FOR THE GENERATED FILM
     ========================================================= */
  function toggleFullscreen() {
    const shell = document.querySelector('.film-shell');
    const target = state.videoMode ? document.getElementById('realVideo') : shell;
    if (!target) return;

    const isFull = document.fullscreenElement || document.webkitFullscreenElement;
    try {
      if (!isFull) {
        if (target.requestFullscreen) target.requestFullscreen();
        else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    } catch (e) { /* ignore unsupported */ }
    const btn = document.getElementById('filmFull');
    if (btn) btn.setAttribute('aria-pressed', document.fullscreenElement ? 'true' : 'false');
  }

  /* =========================================================
     18. INIT
     ========================================================= */
  function cacheEls() {
    els.welcome     = document.getElementById('welcome');
    els.welDate     = document.getElementById('welDate');
    els.openBtn     = document.getElementById('openBtn');
    els.invitation  = document.getElementById('invitation');
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
    /* language */

    $$('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang-btn'));
      });
    });

    /* open */
    if (els.openBtn) {
      els.openBtn.addEventListener('click', openInvitation);
    }

    /* music */
    if (els.musicToggle) {
      els.musicToggle.addEventListener('click', function () {
        if (!Music.audio) Music.init();
        Music.toggle();
        els.musicDock.classList.remove('is-attention');
      });
    }
    if (els.musicMute) {
      els.musicMute.addEventListener('click', function () {
        if (!Music.audio) Music.init();
        Music.toggleMute();
      });
    }

    /* film */
    const filmPlay = document.getElementById('filmPlay');
    if (filmPlay) filmPlay.addEventListener('click', function () { Film.toggle(); });

    const filmFull = document.getElementById('filmFull');
    if (filmFull) filmFull.addEventListener('click', toggleFullscreen);

    const filmMute = document.getElementById('filmMute');
    if (filmMute) {
      filmMute.addEventListener('click', function () {
        const v = document.getElementById('realVideo');
        if (!v) return;
        v.muted = !v.muted;
        filmMute.setAttribute('aria-pressed', v.muted ? 'true' : 'false');
      });
    }

    /* ceremony button */
    const ceremonyBtn = document.getElementById('ceremonyBtn');
    if (ceremonyBtn) {
      ceremonyBtn.addEventListener('click', function () {
        const film = document.getElementById('film');
        if (film) {
          try { film.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' }); }
          catch (e) { film.scrollIntoView(); }
        }
        if (state.videoMode) {
          const v = document.getElementById('realVideo');
          if (v) {
            const p = v.play();
            if (p && p.catch) p.catch(function () {});
          }
        } else {
          Film.play();
        }
      });
    }

    /* print + copy */
    const printBtn = document.getElementById('printBtn');
    if (printBtn) printBtn.addEventListener('click', printCard);

    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) copyBtn.addEventListener('click', copyAddress);

    /* image fallbacks for optional real portraits */

    $$('.portrait-img').forEach(function (img) {
      img.addEventListener('error', function () {
        const wrap = img.closest('.portrait');
        if (wrap) wrap.classList.remove('has-img');
        img.style.display = 'none';
      });
      img.addEventListener('load', function () {
        const wrap = img.closest('.portrait');
        if (wrap) wrap.classList.add('has-img');
        img.style.display = '';
      });
    });
  }

  function init() {
    cacheEls();

    /* restore language (session-safe) */
    let stored = null;
    try { stored = window.localStorage.getItem('wedding-lang'); } catch (e) {}
    state.lang = (stored === 'hi') ? 'hi' : 'bn';

    renderConfig();
    applyLang(state.lang);

    Film.init();
    initRealVideo();
    initPetals();
    initToTop();
    bindEvents();

    /* preload music metadata only — never autoplay */
    Music.init();

    /* countdown starts only after opening, but keep it fresh if opened already */
    observeReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
