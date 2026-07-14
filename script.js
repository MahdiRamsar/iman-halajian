// ============================================
// داده‌ها
// ============================================

// صحنه‌های هیرو با افکت زوم
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

// پروژه‌ها
const PROJECTS = [
  {
    id: 1,
    title: 'آشپزخانه کلاسیک',
    tag: 'چوب و ام‌دی‌اف',
    desc: 'کابینت‌های ممبران با روکش چوب طبیعی و جزیره مرکزی، فضایی گرم و مجلل برای آشپزخانه.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fm=webp&q=80',
    fullDesc: `
      <p>این آشپزخانه با الهام از سبک کلاسیک اروپایی و تلفیق آن با هنر اصیل ایرانی طراحی شده است. استفاده از <strong>چوب طبیعی گردو</strong> در کنار <strong>ام‌دی‌اف با روکش ممبران</strong>، فضایی گرم، صمیمی و در عین حال مجلل را به ارمغان آورده است.</p>
      <p><strong>متریال‌های به‌کاررفته:</strong></p>
      <ul>
        <li>چوب گردوی روسی برای کابینت‌ها و جزیره مرکزی</li>
        <li>ام‌دی‌اف ممبران با روکش براق و مقاوم در برابر رطوبت</li>
        <li>سنگ تراورتن برای رویه‌ی جزیره و کانترها</li>
        <li>پارکت چوبی طرح هریگبون برای کف‌پوش</li>
        <li>یراق‌آلات برنجی کهنه‌کار برای دستگیره‌ها</li>
      </ul>
      <p>نورپردازی مخفی زیر کابینت‌های بالایی، علاوه بر افزایش زیبایی، کارایی فضا را برای آشپزی نیز دوچندان کرده است.</p>
    `,
  },
  {
    id: 2,
    title: 'اتاق خواب مدرن',
    tag: 'مینیمال',
    desc: 'هدبورد چوبی همراه با نورپردازی مخفی و کمدهای ام‌دی‌اف براق، حس آرامش و لوکس.',
    img: 'https://images.unsplash.com/photo-1616046229478-5d7e9c1f9b5a?w=600&fm=webp&q=80',
    fullDesc: `
      <p>اتاق خواب مدرن ناژو، پاسخی است به نیاز انسان امروز به <strong>سادگی، آرامش و دوری از هیاهو</strong>. این فضا با بهره‌گیری از اصول مینیمالیسم طراحی شده؛ جایی که «کمتر، واقعاً بیشتر است».</p>
      <p><strong>متریال‌های به‌کاررفته:</strong></p>
      <ul>
        <li>چوب طبیعی با طرح عمودی برای هدبورد و دیوار پشت تخت</li>
        <li>ام‌دی‌اف هایگلاس براق برای کمدهای دیواری</li>
        <li>پارکت چوبی رنگ روشن برای کف‌پوش</li>
        <li>نورپردازی مخفی LED در پشت هدبورد</li>
      </ul>
      <p>هدبورد چوبی با طرح عمودی، دیوار پشت تخت را به نقطه‌ی کانونی فضا تبدیل کرده و با نورپردازی مخفی LED، حس گرما و صمیمیت را دوچندان می‌کند.</p>
    `,
  },
  {
    id: 3,
    title: 'سالن پذیرایی کلاسیک',
    tag: 'پارکت و گچ‌بری',
    desc: 'ترکیب پارکت چوبی با دیوارپوش‌های ام‌دی‌اف و شومینه، فضایی رسمی و دلنشین.',
    img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&fm=webp&q=80',
    fullDesc: `
      <p>سالن پذیرایی کلاسیک ناژو، نمادی از <strong>شکوه، اصالت و هنر ماندگار</strong> است. تلفیق المان‌های کلاسیک نظیر گچ‌بری‌های ظریف، شومینه و لوسترهای کریستالی با متریال‌های مدرن، فضایی مجلل و دلنشین خلق کرده است.</p>
      <p><strong>متریال‌های به‌کاررفته:</strong></p>
      <ul>
        <li>گچ‌بری‌های دست‌ساز روی دیوارها و سقف</li>
        <li>ام‌دی‌اف با روکش چوبی برای دیوارپوش‌ها</li>
        <li>پارکت چوبی طرح هریگبون با رنگ تیره</li>
        <li>لوستر کریستالی و دیوارکوب‌های برنجی</li>
        <li>مبلمان مخمل‌پوش با رنگ‌های گرم</li>
      </ul>
      <p>شومینه‌ی گچی با آجرهای نمایان، نقطه‌ی کانونی سالن است که حس گرما و صمیمیت را به فضا هدیه می‌دهد.</p>
    `,
  },
  {
    id: 4,
    title: 'آشپزخانه مدرن',
    tag: 'هایگلاس',
    desc: 'کابینت‌های براق سفید و جزیره مینیمال، تلفیق کارایی بالا با زیبایی روز.',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&fm=webp&q=80',
    fullDesc: `
      <p>آشپزخانه مدرن ناژو، نمونهای برجسته از <strong>طراحی مینیمال</strong> و <strong>کارآمد</strong> است که در آن زیبایی و عملکرد دست در دست هم داده‌اند.</p>
      <p><strong>متریال‌های به‌کاررفته:</strong></p>
      <ul>
        <li>ام‌دی‌اف هایگلاس سفید برای کابینت‌ها با دستگیره‌های پنهان</li>
        <li>سنگ کوارتز برای رویه‌ی جزیره و کانترها</li>
        <li>شیشه‌ی سندبلاست برای پشت‌کار آشپزخانه با نورپردازی داخلی</li>
        <li>سرامیک ساب‌دار برای کف‌پوش</li>
      </ul>
      <p>کابینت‌های هایگلاس سفید با دستگیره‌های پنهان، ظاهری کاملاً مینیمال و یکدست به فضا بخشیده‌اند.</p>
    `,
  },
  {
    id: 5,
    title: 'اتاق خواب نئوکلاسیک',
    tag: 'چوب و پارچه',
    desc: 'پنل‌های دیواری چوبی همراه با پارچه‌های مخمل، اتاق خوابی شیک و دلباز.',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&fm=webp&q=80',
    fullDesc: `
      <p>اتاق خواب نئوکلاسیک ناژو، پلی است میان <strong>شکوه و اصالت کلاسیک</strong> با <strong>سادگی و کارآمدی مدرن</strong>. ترکیب پنل‌های دیواری چوبی با پارچه‌های مخمل و رنگ‌های خنثی، فضایی لوکس و آرام خلق کرده است.</p>
      <p><strong>متریال‌های به‌کاررفته:</strong></p>
      <ul>
        <li>پنل‌های دیواری چوبی با طرح عمودی</li>
        <li>ام‌دی‌اف با روکش چوبی برای کمدهای دیواری</li>
        <li>پارکت چوبی رنگ گرم</li>
        <li>پارچه‌های مخمل برای روتختی و پرده‌ها</li>
        <li>نورپردازی مخفی LED در پشت پنل‌های چوبی</li>
      </ul>
      <p>پنل‌های چوبی عمودی با نورپردازی مخفی، جلوهای مدرن به المان‌های کلاسیک بخشیده‌اند.</p>
    `,
  },
  {
    id: 6,
    title: 'سالن تلویزیون و پذیرایی',
    tag: 'مدرن',
    desc: 'دکوراسیون داخلی با المان‌های چوبی و روشنایی گرم، فضایی مناسب برای دورهمی‌ها.',
    img: 'https://images.unsplash.com/photo-1618219740975-d0e7e1db4e3d?w=600&fm=webp&q=80',
    fullDesc: `
      <p>سالن تلویزیون و پذیرایی ناژو، نمونهای از <strong>طراحی مدرن و کاربرپسند</strong> است که با تأکید بر گرما، صمیمیت و کارایی شکل گرفته است.</p>
      <p><strong>متریال‌های به‌کاررفته:</strong></p>
      <ul>
        <li>چوب طبیعی برای دیوار تلویزیون با پنل‌های عمودی</li>
        <li>ام‌دی‌اف برای قفسه‌های دیواری</li>
        <li>پارکت مهندسی‌شده رنگ روشن برای کف‌پوش</li>
        <li>مبلمان ماژولار با روکش پارچه‌ای</li>
        <li>نورپردازی مخفی LED در پشت دیوار تلویزیون</li>
      </ul>
      <p>دیوار تلویزیون با پنل‌های چوبی عمودی و نورپردازی مخفی، نقطه کانونی سالن است.</p>
    `,
  },
];

// ============================================
// آبجکت اصلی برنامه
// ============================================
const App = {
  init() {
    this.cacheDOM();
    this.buildScenes();
    this.buildProjects();
    this.setupTheme();
    this.setupMenu();
    this.setupHeroZoom();
    this.setupModal();
    this.setupScrollAnimations();
    this.setupBackToTop();
    this.setupContactForm();
    this.setupServiceWorker();
    this.setupScrollProgress();
    this.setupHeaderShadow();
    this.setupLazyImages();
    this.setupShareButton();
    this.setupLinkPreload();
    this.setupZoomDots();
  },

  cacheDOM() {
    this.stage = document.getElementById('zoomStage');
    this.dotsBox = document.getElementById('zoomDots');
    this.hint = document.getElementById('zoomHint');
    this.grid = document.getElementById('projectsGrid');
    this.modal = document.getElementById('articleModal');
    this.modalClose = document.getElementById('modalClose');
    this.modalImg = document.getElementById('modalImg');
    this.modalTag = document.getElementById('modalTag');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalBody = document.getElementById('modalBody');
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = document.getElementById('themeIcon');
    this.hamburger = document.getElementById('hamburgerBtn');
    this.navMenu = document.getElementById('navMenu');
    this.backTop = document.getElementById('backTop');
    this.progressBar = document.getElementById('scrollProgress');
    this.header = document.getElementById('header');
    this.form = document.getElementById('contactForm');
    this.formStatus = document.getElementById('formStatus');
    this.formSubmit = document.getElementById('formSubmit');
    this.shareBtn = document.getElementById('shareBtn');
    this.formName = document.getElementById('formName');
    this.formEmail = document.getElementById('formEmail');
    this.formMessage = document.getElementById('formMessage');
    this.nameError = document.getElementById('formNameError');
    this.emailError = document.getElementById('formEmailError');
    this.messageError = document.getElementById('formMessageError');
  },

  // ===== ساخت صحنه‌های هیرو =====
  buildScenes() {
    this.sceneEls = SCENES.map((s, j) => {
      const el = document.createElement('div');
      el.className = 'scene';
      el.setAttribute('data-index', j);
      el.innerHTML = `
        <div class="scene__img-wrap" style="transform-origin:${s.focal}">
          <img class="scene__img" src="${s.img}" alt="${s.tag}" draggable="false" loading="${j === 0 ? 'eager' : 'lazy'}" decoding="async" />
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
        </div>
      `;
      this.stage.appendChild(el);
      return el;
    });

    // نقاط ناوبری
    this.dotEls = SCENES.map((s, i) => {
      const b = document.createElement('button');
      b.className = 'zoom-dot';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', s.tag);
      b.addEventListener('click', () => {
        const section = document.querySelector('.zoom-section');
        const scrollable = section.offsetHeight - window.innerHeight;
        const top = section.offsetTop + (i / (SCENES.length - 1)) * scrollable;
        window.scrollTo({ top, behavior: 'smooth' });
      });
      this.dotsBox.appendChild(b);
      return b;
    });
  },

  // ===== پروژه‌ها =====
  buildProjects() {
    PROJECTS.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.setAttribute('role', 'listitem');
      card.innerHTML = `
        <div class="project-card__image-wrap">
          <img data-src="${p.img}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect fill='rgba(26,23,20,0.5)' width='100%25' height='100%25'/%3E%3C/svg%3E" alt="${p.title}" loading="lazy" decoding="async" />
        </div>
        <div class="project-card__info">
          <h3 class="project-card__title">${p.title}</h3>
          <span class="project-card__tag">${p.tag}</span>
          <p class="project-card__desc">${p.desc}</p>
          <button class="project-card__link" data-id="${p.id}">ادامه مطلب <i class="fa-solid fa-arrow-left"></i></button>
        </div>
      `;
      this.grid.appendChild(card);
    });

    this.grid.querySelectorAll('.project-card__link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = parseInt(btn.dataset.id);
        this.openModal(id);
      });
    });
  },

  // ===== منطق زوم هیرو =====
  setupHeroZoom() {
    const ZOOM = 5;
    const n = SCENES.length;
    const section = document.querySelector('.zoom-section');
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    let zoom = 0,
      ticking = false;

    section.style.height = n * 120 + 'vh';

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = clamp(-rect.top / scrollable, 0, 1);
      zoom = progress * (n - 1);
      this.renderZoom(zoom, n);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
  },

  renderZoom(zoom, n) {
    const activeIndex = Math.round(Math.min(Math.max(zoom, 0), n - 1));

    this.sceneEls.forEach((el, j) => {
      const rel = zoom - j;
      const visible = rel > -1.05 && rel < 1.05;
      el.style.display = visible ? 'block' : 'none';
      if (!visible) return;

      const scale = Math.pow(5, rel);
      let opacity =
        rel >= 0
          ? 1 - Math.min(Math.max((rel - 0.55) / 0.45, 0), 1)
          : Math.min(Math.max((rel + 0.6) / 0.6, 0), 1);

      el.style.opacity = opacity;
      el.style.zIndex = rel >= 0 ? 20 - Math.round(rel * 2) : 10 + Math.round(rel * 2);
      el.querySelector('.scene__img-wrap').style.transform = `scale(${scale})`;

      const textOpacity = Math.min(Math.max(1 - Math.abs(rel) / 0.5, 0), 1);
      const content = el.querySelector('.scene__content');
      content.style.opacity = textOpacity;
      content.style.transform = `translateY(${(1 - textOpacity) * 24}px)`;
    });

    this.dotEls.forEach((d, i) => d.classList.toggle('is-active', i === activeIndex));
    this.hint.style.opacity = zoom < 0.3 ? 1 : 0;
  },

  setupZoomDots() {
    // dots already created in buildScenes
  },

  // ===== Lazy Load تصاویر =====
  setupLazyImages() {
    const images = document.querySelectorAll('.project-card__image-wrap img');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });
    images.forEach(img => observer.observe(img));
  },

  // ===== Theme =====
  setupTheme() {
    const saved = localStorage.getItem('theme');
    const theme = saved || 'dark';
    this.setTheme(theme);

    this.themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const newTheme = current === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
    });
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    document.getElementById('themeColor').content = theme === 'dark' ? '#080706' : '#f5f3f0';
    document.body.style.backgroundColor = theme === 'dark' ? '#0b0a08' : '#f5f3f0';
    document.body.style.color = theme === 'dark' ? '#f2ebe1' : '#1a1714';
  },

  // ===== منو =====
  setupMenu() {
    this.hamburger.addEventListener('click', () => {
      const isOpen = this.navMenu.classList.toggle('is-open');
      this.hamburger.setAttribute('aria-expanded', isOpen);
    });
    this.navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.navMenu.classList.remove('is-open');
        this.hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  },

  // ===== مودال =====
  setupModal() {
    this.modalClose.addEventListener('click', () => this.closeModal());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  },

  openModal(id) {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return;
    this.modalImg.src = project.img;
    this.modalImg.alt = project.title;
    this.modalTag.textContent = project.tag;
    this.modalTitle.textContent = project.title;
    this.modalBody.innerHTML = project.fullDesc;
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.querySelector('header').setAttribute('inert', '');
    document.querySelector('footer').setAttribute('inert', '');
    this.modalClose.focus();
  },

  closeModal() {
    this.modal.classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('header').removeAttribute('inert');
    document.querySelector('footer').removeAttribute('inert');
  },

  // ===== انیمیشن اسکرول =====
  setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    sections.forEach(s => observer.observe(s));
    cards.forEach((card, i) => {
      observer.observe(card);
      card.style.transitionDelay = `${i * 0.05}s`;
    });
  },

  // ===== بازگشت به بالا =====
  setupBackToTop() {
    window.addEventListener('scroll', () => {
      this.backTop.classList.toggle('show', window.scrollY > 400);
    });
    this.backTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  // ===== اعتبارسنجی فرم =====
  setupContactForm() {
    this.formName.addEventListener('blur', () => this.validateField('name'));
    this.formEmail.addEventListener('blur', () => this.validateField('email'));
    this.formMessage.addEventListener('blur', () => this.validateField('message'));

    this.formName.addEventListener('input', () => this.clearFieldError('name'));
    this.formEmail.addEventListener('input', () => this.clearFieldError('email'));
    this.formMessage.addEventListener('input', () => this.clearFieldError('message'));

    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const isNameValid = this.validateField('name');
      const isEmailValid = this.validateField('email');
      const isMessageValid = this.validateField('message');

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        this.formStatus.textContent = '❌ لطفاً همه فیلدها را به‌درستی پر کنید.';
        this.formStatus.className = 'form-status error';
        return;
      }

      const formData = new FormData(this.form);
      const data = Object.fromEntries(formData.entries());

      this.formStatus.textContent = 'در حال ارسال...';
      this.formStatus.className = 'form-status';
      this.formSubmit.disabled = true;

      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        const response = await fetch('https://formspree.io/f/yourFormID', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          signal: controller.signal
        });
        clearTimeout(timeout);

        if (response.ok) {
          this.formStatus.textContent = '✅ پیام شما با موفقیت ارسال شد! به زودی تماس می‌گیریم.';
          this.formStatus.className = 'form-status';
          this.form.reset();
          document.querySelectorAll('.contact__form input, .contact__form textarea').forEach(el => {
            el.classList.remove('error');
          });
        } else {
          this.formStatus.textContent = '❌ خطا در ارسال. لطفاً دوباره تلاش کنید.';
          this.formStatus.className = 'form-status error';
        }
      } catch (err) {
        this.formStatus.textContent = '❌ خطای شبکه. لطفاً بعداً تلاش کنید.';
        this.formStatus.className = 'form-status error';
      } finally {
        this.formSubmit.disabled = false;
        setTimeout(() => {
          this.formStatus.textContent = '';
          this.formStatus.className = 'form-status';
        }, 6000);
      }
    });
  },

  validateField(field) {
    let isValid = true;
    let errorEl = null;
    let inputEl = null;

    switch (field) {
      case 'name':
        inputEl = this.formName;
        errorEl = this.nameError;
        if (!inputEl.value.trim()) {
          isValid = false;
          errorEl.textContent = 'لطفاً نام خود را وارد کنید';
        } else {
          errorEl.textContent = '';
        }
        break;
      case 'email':
        inputEl = this.formEmail;
        errorEl = this.emailError;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!inputEl.value.trim()) {
          isValid = false;
          errorEl.textContent = 'لطفاً ایمیل خود را وارد کنید';
        } else if (!emailRegex.test(inputEl.value.trim())) {
          isValid = false;
          errorEl.textContent = 'لطفاً یک ایمیل معتبر وارد کنید (مثال: name@domain.com)';
        } else {
          errorEl.textContent = '';
        }
        break;
      case 'message':
        inputEl = this.formMessage;
        errorEl = this.messageError;
        if (!inputEl.value.trim()) {
          isValid = false;
          errorEl.textContent = 'لطفاً پیام خود را وارد کنید';
        } else if (inputEl.value.trim().length < 10) {
          isValid = false;
          errorEl.textContent = 'پیام باید حداقل ۱۰ کاراکتر باشد';
        } else {
          errorEl.textContent = '';
        }
        break;
    }

    if (inputEl) {
      inputEl.classList.toggle('error', !isValid);
      errorEl.classList.toggle('show', !isValid);
    }

    return isValid;
  },

  clearFieldError(field) {
    const map = {
      name: { input: this.formName, error: this.nameError },
      email: { input: this.formEmail, error: this.emailError },
      message: { input: this.formMessage, error: this.messageError }
    };
    const item = map[field];
    if (item) {
      item.input.classList.remove('error');
      item.error.classList.remove('show');
      item.error.textContent = '';
    }
  },

  // ===== Service Worker =====
  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('SW registered'))
        .catch(() => console.log('SW registration failed'));
    }
  },

  // ===== اشتراک‌گذاری =====
  setupShareButton() {
    if (this.shareBtn) {
      this.shareBtn.addEventListener('click', async () => {
        try {
          if (navigator.share) {
            await navigator.share({
              title: 'استودیو طراحی داخلی ناژو | ایمان حلاجیان',
              text: 'طراحی داخلی لوکس با چوب و ام‌دی‌اف در رامسر و حومه.',
              url: window.location.href
            });
          } else {
            await navigator.clipboard.writeText(window.location.href);
            this.shareBtn.innerHTML = '<i class="fa-solid fa-check"></i> لینک کپی شد!';
            setTimeout(() => {
              this.shareBtn.innerHTML = '<i class="fa-solid fa-share-nodes"></i> اشتراک‌گذاری';
            }, 3000);
          }
        } catch (err) {
          console.log('Share cancelled:', err);
        }
      });
    }
  },

  // ===== پیش‌بارگذاری لینک‌ها =====
  setupLinkPreload() {
    const links = document.querySelectorAll('a[href]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const link = entry.target;
          const href = link.getAttribute('href');
          if (href && !href.startsWith('http') && href !== '#') {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'prefetch';
            preloadLink.href = href;
            document.head.appendChild(preloadLink);
          }
          observer.unobserve(link);
        }
      });
    }, { rootMargin: '200px' });
    links.forEach(link => observer.observe(link));
  },

  // ===== نوار پیشرفت =====
  setupScrollProgress() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      this.progressBar.style.width = progress + '%';
    });
  },

  // ===== سایه هدر =====
  setupHeaderShadow() {
    window.addEventListener('scroll', () => {
      this.header.classList.toggle('scrolled', window.scrollY > 80);
    });
  }
};

// ===== راه‌اندازی =====
document.addEventListener('DOMContentLoaded', () => App.init());
