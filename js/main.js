/* ============================================
   HOUSEMATE REALTORS — PREMIUM INTERACTIONS
   Elegant, minimalist interactions for luxury real estate
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScrollReveal();
  initSmoothScroll();
  initMobileMenu();
  initCounters();
  initContactModal();
});

/* ── Navbar Scroll Effect ──────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  const onScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Auto-hide on scroll down, show on scroll up for cleaner reading experience
    if (currentScroll > lastScroll && currentScroll > 400) {
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

/* ── Elegant Scroll Reveal ───────────── */
function initSmoothScrollReveal() {
  // Select all elements that should reveal cleanly
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .hero__title, .hero__subtitle, .section-header, .property-card, .service-card, .trust-card');

  if (!revealElements.length) return;

  // Set initial state for JS-enabled reveals
  revealElements.forEach(el => {
    if (!el.classList.contains('revealed')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  // Stagger children if needed
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach(container => {
    const children = container.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 100}ms`;
      observer.observe(child);
    });
  });

  // Dedicate an observer for project showcases to trigger block-reveals without messing up their CSS transforms
  const showcaseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          showcaseObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.project-showcase, .project-showcase__image-wrapper').forEach(el => {
    showcaseObserver.observe(el);
  });

  revealElements.forEach(el => observer.observe(el));
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

/* ── Animated Counters ─────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-item__number');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-count') || '0', 10);
          const suffix = target.getAttribute('data-suffix') || '';

          let currentCount = 0;
          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);

          // Easing function for professional deceleration
          const easeOutExp = t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

          let frame = 0;
          const counter = setInterval(() => {
            frame++;
            const progress = easeOutExp(frame / totalFrames);
            currentCount = Math.round(countTo * progress);

            target.innerText = currentCount + suffix;

            if (frame >= totalFrames) {
              clearInterval(counter);
              target.innerText = countTo + suffix;
            }
          }, frameDuration);

          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}


/* ── Contact Modal (Popup) ── */
function initContactModal() {
  const modalHTML = `
    <div class="contact-modal" id="contact-modal">
      <div class="contact-modal__backdrop"></div>
      <div class="contact-modal__content">
        <button class="contact-modal__close" aria-label="Close modal">&times;</button>
        <h3>Inquire <span class="text-gold">Now</span></h3>
        <p>Fill out the form below and our team will get back to you shortly.</p>
        <form action="https://formsubmit.co/info@housematerealtors.com" method="POST">
           <input type="hidden" name="_next" value="https://housematerealtors.com/">
           <input type="hidden" name="property_inquiry" id="modal-property-name" value="General Inquiry">
           <input type="text" name="name" placeholder="Your Name" required>
           <input type="email" name="email" placeholder="Your Email" required>
           <input type="tel" name="phone" placeholder="Your Phone Number" required>
           <button type="submit" class="btn btn--primary" style="margin-top: 10px;">Submit Request</button>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('contact-modal');
  const closeBtn = modal.querySelector('.contact-modal__close');
  const backdrop = modal.querySelector('.contact-modal__backdrop');

  const openModal = (e) => {
    e.preventDefault();
    const propertyName = e.currentTarget.getAttribute('data-property') || 'General Inquiry';
    const hiddenInput = document.getElementById('modal-property-name');
    if (hiddenInput) {
      hiddenInput.value = propertyName;
    }
    modal.classList.add('active');
  };

  const closeModal = () => {
    modal.classList.remove('active');
  };

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Attach to CTAs and properties
  const triggers = document.querySelectorAll('a[href*="contact"], .project-showcase__image-wrapper, .interior-gallery__item');
  triggers.forEach(el => {
    // Only hijack if it's not the actual navbar link
    if (!el.classList.contains('navbar__links') && !el.closest('.navbar__links')) {
      if (!el.hasAttribute('href')) {
        el.classList.add('property-clickable');
      }
      el.addEventListener('click', openModal);
    }
  });
}
