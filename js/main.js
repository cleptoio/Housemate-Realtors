/* ============================================
   HOUSEMATE REALTORS — INTERACTIONS
   Enterprise-Grade Real Estate Website
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
});

/* ── Preloader ────────────────────────── */
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 600);
  });

  // Fallback: remove after 3s even if load event doesn't fire
  setTimeout(() => {
    preloader.classList.add('loaded');
  }, 3000);
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

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
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

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
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

          // If parent has stagger class, reveal children
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

  // Also observe stagger containers
  document.querySelectorAll('.stagger').forEach(el => observer.observe(el));

  // Observe individual children of stagger for their own reveal
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

    // Ease out cubic
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

    // Gather form data
    const name = form.querySelector('#name')?.value || '';
    const phone = form.querySelector('#phone')?.value || '';
    const service = form.querySelector('#service')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    // Build WhatsApp message
    const waMessage = encodeURIComponent(
      `Hello Housemate Realtors! 🏠\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${service}\n` +
      `*Message:* ${message}\n\n` +
      `I'd like to discuss my property needs.`
    );

    // Open WhatsApp with pre-filled message
    const waUrl = `https://wa.me/919XXXXXXXXX?text=${waMessage}`;
    window.open(waUrl, '_blank');

    // Show success feedback
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

/* ── Enhanced Parallax Effect ──────────── */
window.addEventListener('scroll', () => {
  const heroes = document.querySelectorAll('.hero__bg img');
  heroes.forEach(img => {
    const speed = 0.3;
    const yPos = window.scrollY * speed;
    img.style.transform = `scale(1.05) translateY(${yPos}px)`;
  });

  // Parallax for particles too
  const particles = document.querySelector('.hero__particles');
  if (particles) {
    const pSpeed = 0.15;
    particles.style.transform = `translateY(${window.scrollY * pSpeed}px)`;
  }
}, { passive: true });

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

      const rotateX = (y - centerY) / centerY * -5;
      const rotateY = (x - centerX) / centerX * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── Testimonial Auto-Scroll (if carousel exists) ── */
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
