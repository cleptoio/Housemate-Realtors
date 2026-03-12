/* ============================================
   HOUSEMATE REALTORS — PREMIUM INTERACTIONS
   Inspired by maman-corp.com
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initScrollReveal();
  initCounters();
  initSmoothScroll();
  initMobileMenu();
  initContactForm();
  initScrollProgress();
  initCardTilt();
  initTextReveal();
  initMagneticButtons();
  initSectionIndicator();
});

/* ── Premium Preloader (Maman-style %) ──── */
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  const counter = document.querySelector('.preloader__counter');
  const tagline = document.querySelector('.preloader__tagline');
  if (!preloader) return;

  let count = 0;
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 2;
    if (count > 100) count = 100;
    if (counter) counter.textContent = count;

    if (count >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('loaded');
        document.body.classList.add('page-loaded');
      }, 400);
    }
  }, 50);

  // Fallback
  setTimeout(() => {
    if (!preloader.classList.contains('loaded')) {
      if (counter) counter.textContent = '100';
      preloader.classList.add('loaded');
      document.body.classList.add('page-loaded');
    }
  }, 4000);
}

/* ── Scroll Progress Bar ──────────────── */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + '%';
  }, { passive: true });
}

/* ── Navbar Scroll Effect ──────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  const onScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Auto-hide on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 300) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
    }
    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link highlighting
  const links = navbar.querySelectorAll('.navbar__links a:not(.btn)');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ── Mobile Menu ───────────────────────── */
function initMobileMenu() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinks = document.querySelector('.navbar__links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── Text Mask Reveal (Maman-style) ────── */
function initTextReveal() {
  const revealTexts = document.querySelectorAll('.text-reveal');
  if (!revealTexts.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lines = entry.target.querySelectorAll('.text-reveal__line');
          lines.forEach((line, i) => {
            setTimeout(() => {
              line.classList.add('revealed');
            }, i * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  revealTexts.forEach(el => observer.observe(el));
}

/* ── Scroll Reveal (IntersectionObserver) ── */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          if (entry.target.classList.contains('stagger')) {
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, i * 120);
            });
          }

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  revealElements.forEach(el => observer.observe(el));
  document.querySelectorAll('.stagger').forEach(el => observer.observe(el));

  document.querySelectorAll('.stagger > *').forEach(el => {
    if (!el.classList.contains('reveal') && !el.classList.contains('reveal-scale')) {
      el.classList.add('reveal');
      observer.observe(el);
    }
  });
}

/* ── Animated Counters ─────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.textContent = current.toLocaleString('en-IN') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ── Smooth Scroll ─────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ── Contact Form Handling ─────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#name')?.value || '';
    const phone = form.querySelector('#phone')?.value || '';
    const service = form.querySelector('#service')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    const waMessage = encodeURIComponent(
      `Hello Housemate Realtors! 🏠\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service}\n` +
      `*Message:* ${message}\n\n` +
      `I'd like to discuss my property needs.`
    );

    const waUrl = `https://wa.me/918149388788?text=${waMessage}`;
    window.open(waUrl, '_blank');

    showFormSuccess(form);
  });
}

function showFormSuccess(form) {
  const btn = form.querySelector('button[type="submit"]');
  if (!btn) return;

  const originalText = btn.innerHTML;
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Message Sent!
  `;
  btn.style.background = '#27AE60';

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    form.reset();
  }, 3000);
}

/* ── Enhanced Parallax ────────────────── */
window.addEventListener('scroll', () => {
  const heroes = document.querySelectorAll('.hero__bg img');
  heroes.forEach(img => {
    const speed = 0.3;
    const yPos = window.scrollY * speed;
    img.style.transform = `scale(1.05) translateY(${yPos}px)`;
  });

  const particles = document.querySelector('.hero__particles');
  if (particles) {
    particles.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }
}, { passive: true });

/* ── Magnetic Buttons (Maman-style) ────── */
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn--primary, .btn--whatsapp, .navbar__cta');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ── 3D Card Tilt Effect ──────────────── */
function initCardTilt() {
  const cards = document.querySelectorAll('.service-card, .property-card, .trust-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -4;
      const rotateY = (x - centerX) / centerX * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}

/* ── Section Progress Indicator ────────── */
function initSectionIndicator() {
  const indicator = document.querySelector('.section-indicator');
  if (!indicator) return;

  const sections = document.querySelectorAll('section');
  const totalSections = sections.length;
  const currentEl = indicator.querySelector('.section-indicator__current');
  const totalEl = indicator.querySelector('.section-indicator__total');

  if (totalEl) totalEl.textContent = String(totalSections).padStart(2, '0');

  window.addEventListener('scroll', () => {
    let currentSection = 1;
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2) {
        currentSection = i + 1;
      }
    });
    if (currentEl) currentEl.textContent = String(currentSection).padStart(2, '0');
  }, { passive: true });
}

/* ── Testimonial Auto-Scroll ──────────── */
function initTestimonialCarousel() {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  let currentIndex = 0;
  const cards = track.children;
  const total = cards.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    track.scrollTo({
      left: cards[currentIndex].offsetLeft,
      behavior: 'smooth'
    });
  }, 5000);
}
