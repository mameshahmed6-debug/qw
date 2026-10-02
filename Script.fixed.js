(() => {
  const SPORTS = [
    ["basketball", "Basketball", "basketball.jpg", "Basketball ist eine dynamische Mannschaftssportart. Zwei Teams versuchen, den Ball in den Korb des Gegners zu werfen. Schnelligkeit, Präzision und Teamgeist sind besonders wichtig.", "Ein Basketballkorb hängt 3,05 Meter hoch.", "01"],
    ["schwimmen", "Schwimmen", "swimming.webp", "Schwimmen trainiert fast den ganzen Körper und verbessert Ausdauer, Koordination und Technik. Im Wasser kann man gleichzeitig aktiv sein und sich entspannen.", "Ein olympisches Becken ist 50 Meter lang.", "02"],
    ["fussball", "Fußball", "football.jpg", "Fußball verbindet Technik, Ausdauer und Teamarbeit. Auf dem Platz muss man schnell reagieren, Räume erkennen und gemeinsam Entscheidungen treffen.", "Ein Spiel dauert regulär zweimal 45 Minuten.", "03"],
    ["laufen", "Laufen", "running.jpg", "Laufen ist einfach zugänglich und vielseitig. Ob im Park, im Wald oder auf der Bahn: Regelmäßiges Training kann Ausdauer und Fitness verbessern.", "Ein Marathon ist 42,195 Kilometer lang.", "04"],
    ["tennis", "Tennis", "tennis.jpg", "Tennis kann als Einzel oder Doppel gespielt werden. Schnelle Reaktionen, Beweglichkeit, Konzentration und eine gute Schlagtechnik gehören zum Spiel.", "Die vier Grand-Slam-Turniere finden in Australien, Frankreich, Großbritannien und den USA statt.", "05"],
    ["radfahren", "Radfahren", "cycling.jpg", "Radfahren kann Freizeit, Training und Wettkampf zugleich sein. Man kann ruhig durch die Natur fahren oder anspruchsvolle Strecken bewältigen.", "Die Tour de France wird traditionell über mehrere Wochen ausgetragen.", "06"],
    ["volleyball", "Volleyball", "volleyball.jpg", "Beim Volleyball stehen zwei Teams an einem Netz. Kommunikation, Timing und schnelle Reaktionen entscheiden über viele Ballwechsel.", "Das Netz der Männer ist 2,43 Meter hoch.", "07"],
    ["boxen", "Boxen", "boxing.svg", "Boxen ist ein Kampfsport mit klaren Regeln. Technik, Fußarbeit, Reaktion und kontrollierte Bewegungen spielen eine zentrale Rolle.", "Ein Boxkampf besteht aus mehreren Runden mit klaren Regeln.", "08"],
    ["handball", "Handball", "handball.svg", "Handball verbindet Schnelligkeit, Technik und Teamkoordination. Der Pass und der schnelle Wechsel von Angriff zu Verteidigung sind zentral.", "Ein Handballspiel dauert 60 Minuten und besteht aus zwei Halbzeiten.", "09"],
    ["turnen", "Turnen", "gymnastics.svg", "Turnen verlangt Kraft, Balance, Präzision und eine gute Körperkontrolle. Technische Übungen werden oft mit hoher Konzentration ausgeführt.", "Turner müssen jede Bewegung sicher und sauber kontrollieren.", "10"],
    ["tischtennis", "Tischtennis", "table-tennis.svg", "Tischtennis ist schnell, technisch und sehr reagieren. Ein guter Rückschlag und eine gute Platzierung machen den Unterschied.", "Ein Spiel wird oft mit sehr kurzen Ballwechseln entschieden.", "11"],
    ["leichtathletik", "Leichtathletik", "athletics.svg", "Leichtathletik umfasst Sprint, Sprung und Wurf. Viele Sportler trainieren dort Kraft, Technik und explosive Bewegungen.", "Die 100-Meter-Sprintzeit gehört zu den schnellsten Disziplinen im Sport.", "12"]
  ];

  const TRAINING_META = {
    basketball: { title: 'Basketball-Dribbling', duration: '00:42', subtitle: 'Tempo & Kontrolle' },
    schwimmen: { title: 'Schwimmtechnik', duration: '00:38', subtitle: 'Atem & Kraft' },
    fussball: { title: 'Fußball-Übung', duration: '00:45', subtitle: 'Pass & Ballgefühl' },
    laufen: { title: 'Lauf-Intervalle', duration: '00:36', subtitle: 'Ausdauer & Rhythmus' },
    tennis: { title: 'Tennis-Volleys', duration: '00:41', subtitle: 'Präzision & Reaktion' },
    radfahren: { title: 'Radfahren-Tempo', duration: '00:33', subtitle: 'Kondition & Balance' },
    volleyball: { title: 'Volleyball-Block', duration: '00:39', subtitle: 'Sprung & Koordination' },
    boxen: { title: 'Boxen-Combo', duration: '00:32', subtitle: 'Fußarbeit & Technik' },
    handball: { title: 'Handball-Pass', duration: '00:37', subtitle: 'Wurf & Bewegung' },
    turnen: { title: 'Turnen-Koordination', duration: '00:35', subtitle: 'Balance & Kraft' },
    tischtennis: { title: 'Tischtennis-Return', duration: '00:28', subtitle: 'Reaktion & Genauigkeit' },
    leichtathletik: { title: 'Leichtathletik-Sprint', duration: '00:34', subtitle: 'Sprint & Kraft' }
  };

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  const progress = $('#progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      progress.style.transform = `scaleX(${max ? root.scrollTop / max : 0})`;
    }, { passive: true });
  }

  const menu = $('#menu');
  const burger = $('#burger');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });

    $$('#menu a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sectionHost = $('#sportSections');
  if (sectionHost) {
    sectionHost.innerHTML = SPORTS.map((sport, index) => `
      <section class="sport reveal-section" id="${sport[0]}" data-index="${index + 1}">
        <div class="sport-media tilt">
          <img src="assets/${sport[2]}" alt="${sport[1]}" loading="lazy">
          <div class="media-number">${sport[5]}</div>
          <div class="shine"></div>
        </div>
        <div class="sport-copy">
          <div class="sport-kicker">${String(index + 1).padStart(2, '0')} / SPORTART</div>
          <h2 class="scramble">${sport[1]}</h2>
          <p>${sport[3]}</p>
          <div class="fact"><b>Wusstest du schon?</b><span>${sport[4]}</span></div>
          <a class="text-link" href="#${index < SPORTS.length - 1 ? SPORTS[index + 1][0] : SPORTS[0][0]}">Nächste Sportart <span>→</span></a>
        </div>
      </section>
    `).join('');
  }

  const marquee = $('#marqueeTrack');
  if (marquee) {
    const cards = SPORTS.map((sport) => `
      <a class="mini-card" href="#${sport[0]}">
        <img src="assets/${sport[2]}" alt="${sport[1]}">
        <span>${sport[1]}</span>
      </a>
    `).join('');
    marquee.innerHTML = cards + cards;
  }

  const buildSportVideo = (sport, index, compact = false) => {
    const meta = TRAINING_META[sport[0]] || { title: sport[1], duration: '00:35', subtitle: 'Training' };
    const summary = [
      'Dribbling • Sprung • Präzision',
      'Technik • Ausdauer • Atmung',
      'Ballkontrolle • Pass • Sprint',
      'Start • Tempo • Ausdauer',
      'Aufschlag • Fußarbeit • Reaktion',
      'Tritt • Balance • Ausdauer',
      'Baggern • Sprung • Aufschlag',
      'Fußarbeit • Deckung • Technik',
      'Pass • Wurf • Bewegung',
      'Balance • Kraft • Koordination',
      'Reaktion • Schlag • Platzierung',
      'Sprint • Sprung • Wurf'
    ];

    return `
      <article class="video-card reveal-video${compact ? ' compact' : ''}">
        <div class="video-wrap">
          <video muted loop playsinline preload="metadata" poster="assets/${sport[2]}">
            <source src="assets/videos/sports/${sport[0]}.mp4" type="video/mp4">
          </video>
          <div class="video-badges">
            <span class="video-tag">${String(index + 1).padStart(2, '0')}</span>
            <span class="video-duration">${meta.duration}</span>
          </div>
          <div class="video-actions">
            <button class="sound-toggle" type="button" aria-label="Ton ${sport[1]} an/aus">🔊</button>
            <button class="fullscreen-toggle" type="button" aria-label="${sport[1]} Vollbild">⛶</button>
          </div>
        </div>
        <div class="video-info">
          <div class="meta-pill">${meta.subtitle}</div>
          <h3>${meta.title}</h3>
          <p>${compact ? 'Sportvideo • ' + sport[1] : summary[index] || 'Training • Bewegung • Fokus'}</p>
        </div>
      </article>
    `;
  };

  const addVideoControls = (card) => {
    const video = $('video', card);
    const sound = $('.sound-toggle', card);
    const fullscreen = $('.fullscreen-toggle', card);
    const playBtn = $('.video-play', card);

    if (!video) return;

    if (sound) {
      sound.addEventListener('click', () => {
        video.muted = !video.muted;
        sound.textContent = video.muted ? '🔊' : '🔇';
        sound.setAttribute('aria-label', video.muted ? 'Ton an' : 'Ton aus');
      });
    }

    if (fullscreen) {
      fullscreen.addEventListener('click', () => {
        if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
      });
    }

    const ensurePlayButton = () => {
      if (playBtn) return playBtn;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'video-play';
      button.setAttribute('aria-label', 'Video abspielen');
      button.textContent = '▶';
      const wrap = $('.video-wrap', card);
      if (wrap) wrap.appendChild(button);
      return button;
    };

    const currentPlayBtn = ensurePlayButton();
    const togglePlay = () => {
      if (video.paused) {
        video.play();
        card.classList.add('playing');
        currentPlayBtn.textContent = 'Ⅱ';
      } else {
        video.pause();
        card.classList.remove('playing');
        currentPlayBtn.textContent = '▶';
      }
    };

    currentPlayBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', () => {
      if (video.readyState >= 2) togglePlay();
    });

    const durationBadge = $('.video-duration', card);
    if (durationBadge && Number.isFinite(video.duration) && video.duration > 0) {
      durationBadge.textContent = new Date(video.duration * 1000).toISOString().slice(14, 19);
    }

    video.muted = true;
  };

  const videoGrid = $('#videoGrid');
  if (videoGrid) {
    videoGrid.innerHTML = SPORTS.map((sport, index) => buildSportVideo(sport, index)).join('');
    $$('.video-card', videoGrid).forEach((card) => {
      addVideoControls(card);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      observer.observe(card);
    });
  }

  const wallGrid = $('#sportVideoWall');
  if (wallGrid) {
    wallGrid.innerHTML = SPORTS.map((sport, index) => buildSportVideo(sport, index, true)).join('');
    $$('.video-card', wallGrid).forEach((card) => addVideoControls(card));
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%';
  const scramble = (element) => {
    if (reduce || element.dataset.done) return;
    element.dataset.done = '1';
    const finalText = element.textContent;
    let tick = 0;
    const timer = setInterval(() => {
      element.textContent = [...finalText].map((char, index) => {
        if (char === ' ') return ' ';
        return index < tick / 1.7 ? char : chars[Math.random() * chars.length | 0];
      }).join('');

      if (++tick > finalText.length * 1.7) {
        element.textContent = finalText;
        clearInterval(timer);
      }
    }, 24);
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        const heading = $('.scramble', entry.target);
        if (heading) scramble(heading);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  $$('.reveal-section').forEach((section) => revealObserver.observe(section));

  const spyLinks = $$('#menu a');
  if (spyLinks.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          spyLinks.forEach((link) => {
            link.classList.toggle('on', link.hash === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    $$('.sport').forEach((sport) => spy.observe(sport));
  }

  $$('.tilt').forEach((card) => {
    const image = $('img', card);
    if (!image) return;

    card.addEventListener('pointermove', (event) => {
      if (reduce) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      image.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.06)`;
    });

    card.addEventListener('pointerleave', () => {
      image.style.transform = '';
    });
  });

  $$('.word').forEach((word) => {
    word.addEventListener('click', () => word.classList.toggle('flip'));
  });

  const glow = $('.cursor-glow');
  if (glow) {
    window.addEventListener('pointermove', (event) => {
      if (!reduce) {
        glow.style.transform = `translate(${event.clientX - 80}px, ${event.clientY - 80}px)`;
      }
    });
  }

  $$('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      if (reduce) return;
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });

    button.addEventListener('pointerleave', () => {
      button.style.transform = '';
    });
  });

  const canvas = $('#fx');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let points = [];

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      points = Array.from({ length: Math.min(110, Math.floor(window.innerWidth / 12)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        v: 0.25 + Math.random() * 1.3,
        r: 0.5 + Math.random() * 2
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      if (!reduce) {
        points.forEach((point) => {
          point.x += point.v * window.devicePixelRatio;
          if (point.x > width + 30) point.x = -30;
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.r * window.devicePixelRatio, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255,255,255,.28)';
          ctx.fill();
        });
      }
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
  }
})();
