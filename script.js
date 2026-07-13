(function () {
  'use strict';

  // ===== داده‌های صحنه‌ها =====
  const SCENES = [
    {
      img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&fm=webp&q=80',
      focal: '50% 42%',
      tag: 'ناژو',
      title: 'طراحی داخلی\nبا اصالت',
      sub: 'استودیو ناژو به مدیریت ایمان حلاجیان، متخصص در دکوراسیون داخلی با چوب و ام‌دی‌اف در رامسر و حومه.',
    },
    {
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&fm=webp&q=80',
      focal: '50% 55%',
      tag: 'کلاسیک',
      title: 'گرمای چوب\nو اصالت',
      sub: 'طراحی آشپزخانه و اتاق خواب با چوب طبیعی و ام‌دی‌اف، فضایی گرم و ماندگار.',
    },
    {
      img: 'https://images.unsplash.com/photo-1616046229478-5d7e9c1f9b5a?w=1200&fm=webp&q=80',
      focal: '48% 50%',
      tag: 'مدرن',
      title: 'مینیمال\nو کارآمد',
      sub: 'دکوراسیون مدرن با خطوط ساده، کابینت‌های هایگلاس و نورپردازی هوشمند.',
    },
    {
      img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&fm=webp&q=80',
      focal: '50% 46%',
      tag: 'حوزه فعالیت',
      title: 'متمرکز بر\nرامسر و حومه',
      sub: 'ارائه خدمات طراحی داخلی در رامسر، تنکابن، چابکسر و مناطق اطراف.',
    },
  ];

  // ===== داده‌های پروژه‌ها =====
  const PROJECTS = [
    {
      title: 'آشپزخانه کلاسیک',
      tag: 'چوب و ام‌دی‌اف',
      desc: 'کابینت‌های ممبران با روکش چوب طبیعی و جزیره مرکزی، فضایی گرم و مجلل برای آشپزخانه.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fm=webp&q=80',
    },
    {
      title: 'اتاق خواب مدرن',
      tag: 'مینیمال',
      desc: 'هدبورد چوبی همراه با نورپردازی مخفی و کمدهای ام‌دی‌اف براق، حس آرامش و لوکس.',
      img: 'https://images.unsplash.com/photo-1616046229478-5d7e9c1f9b5a?w=600&fm=webp&q=80',
    },
    {
      title: 'سالن پذیرایی کلاسیک',
      tag: 'پارکت و گچ‌بری',
      desc: 'ترکیب پارکت چوبی با دیوارپوش‌های ام‌دی‌اف و شومینه، فضایی رسمی و دلنشین.',
      img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&fm=webp&q=80',
    },
    {
      title: 'آشپزخانه مدرن',
      tag: 'هایگلاس',
      desc: 'کابینت‌های براق سفید و جزیره مینیمال، تلفیق کارایی بالا با زیبایی روز.',
      img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&fm=webp&q=80',
    },
    {
      title: 'اتاق خواب نئوکلاسیک',
      tag: 'چوب و پارچه',
      desc: 'پنل‌های دیواری چوبی همراه با پارچه‌های مخمل، اتاق خوابی شیک و دلباز.',
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&fm=webp&q=80',
    },
    {
      title: 'سالن تلویزیون و پذیرایی',
      tag: 'مدرن',
      desc: 'دکوراسیون داخلی با المان‌های چوبی و روشنایی گرم، فضایی مناسب برای دورهمی‌ها.',
      img: 'https://images.unsplash.com/photo-1618219740975-d0e7e1db4e3d?w=600&fm=webp&q=80',
    },
  ];

  const ZOOM = 5;
  const stage = document.getElementById('zoomStage');
  const section = stage.closest('.zoom-section');
  const dotsBox = document.getElementById('zoomDots');
  const hint = document.getElementById('zoomHint');
  const n = SCENES.length;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // ===== ساخت صحنه‌ها =====
  section.style.height = n * 120 + 'vh';

  const sceneEls = SCENES.map((s, j) => {
    const el = document.createElement('div');
    el.className = 'scene';
    el.innerHTML = `
      <div class="scene__img-wrap" style="transform-origin:${s.focal}">
        <img class="scene__img" src="${s.img}" alt="" draggable="false" loading="${j === 0 ? 'eager' : 'lazy'}" />
        <div class="scene__scrim-1"></div>
        <div class="scene__scrim-2"></div>
        <div class="scene__scrim-3"></div>
      </div>
      <div class="scene__content">
        <div class="scene__inner">
          <div class="scene__tagline"><span class="scene__line"></span><span class="scene__tag">${s.tag}</span></div>
          <h1 class="scene__title">${s.title}</h1>
          <p class="scene__sub">${s.sub}</p>
          ${j === 0 ? `<a href="#projects" class="scene__btn">مشاهده پروژه‌ها ←</a>` : ''}
        </div>
      </div>`;
    stage.insertBefore(el, dotsBox);
    return el;
  });

  // ===== نقاط ناوبری =====
  const dotEls = SCENES.map((s, i) => {
    const b = document.createElement('button');
    b.className = 'zoom-dot';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', s.tag);
    b.addEventListener('click', () => {
      const scrollable = section.offsetHeight - window.innerHeight;
      const top = section.offsetTop + (i / (n - 1)) * scrollable;
      window.scrollTo({ top, behavior: 'smooth' });
    });
    dotsBox.appendChild(b);
    return b;
  });

  // ===== ساخت پروژه‌ها =====
  const grid = document.getElementById('projectsGrid');
  PROJECTS.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-card__image-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async" />
      </div>
      <div class="project-card__info">
        <h3 class="project-card__title">${p.title}</h3>
        <span class="project-card__tag">${p.tag}</span>
        <p class="project-card__desc">${p.desc}</p>
      </div>`;
    grid.appendChild(card);
  });

  // ===== منطق زوم =====
  let zoom = 0,
    ticking = false;

  function update() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    if (scrollable <= 0) return;
    const progress = clamp(-rect.top / scrollable, 0, 1);
    zoom = progress * (n - 1);
    render();
  }

  function render() {
    const activeIndex = clamp(Math.round(zoom), 0, n - 1);

    sceneEls.forEach((el, j) => {
      const rel = zoom - j;
      const visible = rel > -1.05 && rel < 1.05;
      el.style.display = visible ? 'block' : 'none';
      if (!visible) return;

      const scale = Math.pow(ZOOM, rel);
      let opacity =
        rel >= 0
          ? 1 - clamp((rel - 0.55) / 0.45, 0, 1)
          : clamp((rel + 0.6) / 0.6, 0, 1);

      el.style.opacity = opacity;
      el.style.zIndex = rel >= 0 ? 20 - Math.round(rel * 2) : 10 + Math.round(rel * 2);
      el.querySelector('.scene__img-wrap').style.transform = `scale(${scale})`;

      const textOpacity = clamp(1 - Math.abs(rel) / 0.5, 0, 1);
      const content = el.querySelector('.scene__content');
      content.style.opacity = textOpacity;
      content.style.transform = `translateY(${(1 - textOpacity) * 24}px)`;
    });

    dotEls.forEach((d, i) => d.classList.toggle('is-active', i === activeIndex));
    hint.style.opacity = zoom < 0.3 ? 1 : 0;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
  update();

  // ===== منوی همبرگر =====
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('is-open');
    this.setAttribute('aria-expanded', isOpen);
  });

  // بستن منو با کلیک روی لینک‌ها
  document.querySelectorAll('.nav__list a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ===== دکمه بازگشت به بالا =====
  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    backBtn.classList.toggle('show', window.scrollY > 400);
  });
})();