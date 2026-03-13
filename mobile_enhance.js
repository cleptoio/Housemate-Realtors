const fs = require('fs');

const mobileCss = `
/* ═══════════════════════════════════════════════════════
   PREMIUM MOBILE-FIRST ENHANCEMENTS
   Designed for the luxury mobile audience — finger-friendly,
   visually stunning, conversion-optimized.
   ═══════════════════════════════════════════════════════ */

/* ── Mobile Spacing Overrides ───────────── */
@media (max-width: 768px) {
  :root {
    --space-lg: 3rem;
    --space-xl: 4.5rem;
  }
}

/* ── Premium Mobile Navigation ────────────
   Full-screen overlay menu with gold accents */
@media (max-width: 768px) {
  .navbar {
    padding: 0 1.25rem;
    height: 68px;
  }

  .navbar.scrolled {
    background: rgba(11, 11, 11, 0.97);
    backdrop-filter: blur(24px);
  }

  .navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh; /* Dynamic viewport height for mobile browsers */
    background: #0a0a0a;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
    border-left: 2px solid rgba(200, 164, 86, 0.3);
    padding: 0 3rem;
  }

  .navbar__links.open {
    transform: translateX(0);
  }

  .navbar__links a {
    font-size: 1.6rem;
    font-family: var(--font-heading);
    font-style: italic;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.7);
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    width: 100%;
    transition: color 0.3s, padding-left 0.3s;
  }

  .navbar__links a:hover,
  .navbar__links a.active {
    color: var(--gold);
    padding-left: 1rem;
  }

  .navbar__links a::after {
    display: none;
  }

  .navbar__cta.btn {
    background: var(--gold) !important;
    color: #111 !important;
    padding: 1rem 2rem;
    font-size: 1rem !important;
    font-family: var(--font-body) !important;
    font-style: normal !important;
    letter-spacing: 0.1em;
    width: 100%;
    text-align: center;
    border: none !important;
  }

  .navbar__hamburger {
    display: flex;
    z-index: 1002;
    padding: 8px;
  }

  .navbar__hamburger span {
    width: 24px;
    height: 2px;
    background: var(--white);
    border-radius: 2px;
    transition: all 0.4s var(--ease-out);
  }
}

/* ── Hero Section — Mobile ─────────────────
   Full-height cinematic treatment */
@media (max-width: 768px) {
  .hero {
    min-height: 100dvh;
    align-items: flex-end;
    padding-bottom: 5rem;
  }

  .hero__content {
    text-align: left;
    padding: 0 1.5rem;
    max-width: 100%;
  }

  .hero__badge {
    font-size: 0.75rem;
    padding: 6px 14px;
    border-radius: 40px;
    margin-bottom: 1.25rem;
  }

  .hero__title {
    font-size: clamp(2.2rem, 8vw, 3rem);
    line-height: 1.12;
    margin-bottom: 1rem;
  }

  .hero__subtitle {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: rgba(255,255,255,0.65);
    max-width: 100%;
  }

  .hero__buttons {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }

  .hero__buttons .btn {
    width: 100%;
    justify-content: center;
    padding: 1.1rem 1.5rem;
    font-size: 0.95rem;
    border-radius: 6px;
  }
}

/* ── Stats Bar — Mobile ────────────────────
   Bold 2×2 grid with golden numbers */
@media (max-width: 768px) {
  .stats-bar .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }

  .stat-item {
    padding: 2rem 1rem;
    flex: unset;
    position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  /* Remove vertical divider lines on mobile */
  .stat-item::after {
    display: none !important;
  }

  /* Alternate items get subtle gold left border */
  .stat-item:nth-child(odd) {
    border-right: 1px solid rgba(200, 164, 86, 0.12);
  }

  .stat-item__number {
    font-size: clamp(2.2rem, 9vw, 3rem);
    margin-bottom: 0.25rem;
  }

  .stat-item__label {
    font-size: 0.7rem;
    letter-spacing: 0.08em;
  }
}

/* ── Section Headings — Mobile ─────────────
   Centered + tighter for small screens */
@media (max-width: 768px) {
  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .section-header h2 {
    font-size: clamp(1.6rem, 6vw, 2.2rem);
    line-height: 1.2;
  }

  .section-header p {
    font-size: 0.95rem;
  }
}

/* ── Service Cards — Mobile ────────────────
   Full-width scrolling horizontal cards on small */
@media (max-width: 768px) {
  .services-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .service-card {
    flex: unset !important;
    max-width: 100% !important;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    border-left: 3px solid var(--gold);
  }

  .service-card__icon {
    background: rgba(200, 164, 86, 0.1);
    border-radius: 0;
    margin-bottom: 1rem;
    width: 48px;
    height: 48px;
  }
}

/* ── Property Cards — Mobile ───────────────
   Single column with large imagery */
@media (max-width: 768px) {
  .properties-grid {
    grid-template-columns: 1fr !important;
    gap: 1.25rem;
  }

  .property-card__image {
    height: 220px;
  }

  .property-card__details {
    gap: 0.4rem;
    flex-wrap: wrap;
  }
}

/* ── Testimonials — Mobile ─────────────────*/
@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr !important;
    gap: 1.25rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}

/* ── CTA Banner — Mobile ──────────────────*/
@media (max-width: 768px) {
  .cta-banner {
    padding: 4rem 0;
    text-align: left;
  }

  .cta-banner > .container {
    padding: 0 1.5rem;
  }

  .cta-banner h2 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: 1rem;
    text-align: left;
  }

  .cta-banner p {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    text-align: left;
    color: rgba(255,255,255,0.6);
  }

  .cta-banner .hero__buttons {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }

  .cta-banner .hero__buttons .btn {
    width: 100%;
    justify-content: center;
  }
}

/* ── Footer — Mobile ──────────────────────*/
@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr !important;
    gap: 2.5rem;
  }

  .footer__brand p {
    font-size: 0.9rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.5);
  }

  .footer__column h4 {
    margin-bottom: 1rem;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .footer__column ul li {
    margin-bottom: 0.6rem;
  }

  .footer__contact-item {
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .footer__bottom {
    flex-direction: column-reverse;
    text-align: center;
    gap: 0.5rem;
    padding-top: 1.5rem;
    font-size: 0.8rem;
  }
}

/* ── WhatsApp Float — Mobile ──────────────
   Larger, more tactile for thumbs */
@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 58px;
    height: 58px;
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
  }

  .whatsapp-float svg {
    width: 30px;
    height: 30px;
  }
}

/* ── Page Hero (Inner Pages) — Mobile ──────*/
@media (max-width: 768px) {
  .page-hero {
    padding: 7rem 1.5rem 3rem;
    text-align: left;
  }

  .page-hero h1 {
    font-size: clamp(1.9rem, 7vw, 2.5rem);
    margin: 0.5rem 0 1rem;
  }

  .page-hero p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.65);
  }

  .breadcrumbs {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    opacity: 0.7;
  }
}

/* ── About Page — Mobile ──────────────────*/
@media (max-width: 768px) {
  .about-story {
    grid-template-columns: 1fr !important;
    gap: 2rem;
  }

  .about-story__image {
    height: 250px;
    overflow: hidden;
  }

  .about-story__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .credentials-bar {
    gap: 1rem;
    padding: 1.5rem 0;
  }

  .credential-item {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }

  .values-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 1rem;
  }
}

/* ── Values Cards — 2-column on mobile ─────*/
@media (max-width: 480px) {
  .values-grid {
    grid-template-columns: 1fr !important;
  }
}

/* ── Projects Page — Mobile ───────────────*/
@media (max-width: 768px) {
  .project-showcase {
    display: flex !important;
    flex-direction: column !important;
    gap: 0 !important;
  }

  .project-showcase__content {
    padding: 2rem 1.5rem !important;
    transform: none !important;
    background: var(--white) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important;
    order: 2;
    width: 100%;
    max-width: 100%;
  }

  .project-showcase__image-wrapper {
    order: 1;
    aspect-ratio: 16/9;
    width: 100%;
    border-radius: 0;
    grid-column: unset !important;
    grid-row: unset !important;
    transform: none !important;
  }

  .project-tag {
    font-size: 0.7rem;
  }

  .project-features li {
    font-size: 0.85rem;
  }

  .interior-gallery {
    grid-template-columns: 1fr 1fr !important;
    gap: 0.5rem;
  }

  .interior-gallery__item {
    aspect-ratio: 2/3;
    border-radius: 8px;
  }
}

/* ── Contact Page — Mobile ────────────────*/
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr !important;
    gap: 2em;
  }

  .contact-info-item {
    flex-direction: row;
    text-align: left;
  }
}

/* ── Touch Optimizations ──────────────────
   Minimum 44px targets for accessibility */
@media (max-width: 768px) {
  .btn {
    min-height: 48px;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    font-size: 0.9rem;
  }

  /* Prevent hover effects on touch */
  .service-card:hover,
  .property-card:hover,
  .area-card:hover {
    transform: none;
    box-shadow: none;
  }

  /* Better tap feedback */
  .btn:active {
    transform: scale(0.97);
    transition: transform 0.1s;
  }

  /* Prevent scroll jitter */
  .hero__bg img {
    transform: none !important;
  }
}

/* ── Contact Modal — Mobile ───────────────*/
@media (max-width: 768px) {
  .contact-modal__content {
    width: 96%;
    max-width: none;
    padding: 2rem 1.5rem;
    border-radius: 16px 16px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    top: auto;
    max-height: 90dvh;
    overflow-y: auto;
    transform: translateY(100%) !important;
  }

  .contact-modal.active .contact-modal__content {
    transform: translateY(0) !important;
  }

  .contact-modal {
    align-items: flex-end;
  }
}

/* ── Fluid Section Padding for Mobile ──────*/
@media (max-width: 480px) {
  .section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1.25rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }
}
`;

let css = fs.readFileSync('css/styles.css', 'utf8');

// Remove old basic mobile media queries within 768px and 480px blocks
// We'll inject a clean, premium one at the end
css = css + '\n' + mobileCss;

fs.writeFileSync('css/styles.css', css);
console.log('Premium mobile CSS injected successfully!');
