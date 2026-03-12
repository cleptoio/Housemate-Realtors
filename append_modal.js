const fs = require('fs');

// 1. Append CSS
const css = `
/* ── Contact Modal (Popup) ── */
.contact-modal {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.contact-modal.active {
  pointer-events: auto;
  opacity: 1;
}
.contact-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(14, 23, 47, 0.9);
  backdrop-filter: blur(8px);
}
.contact-modal__content {
  position: relative;
  background: var(--white);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  width: 90%;
  max-width: 500px;
  transform: translateY(30px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.25);
  border: 1px solid rgba(200, 164, 86, 0.3);
}
.contact-modal.active .contact-modal__content {
  transform: translateY(0);
}
.contact-modal__close {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  background: none;
  border: none;
  font-size: 2.2rem;
  color: var(--slate);
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s;
}
.contact-modal__close:hover {
  color: var(--gold);
}
.contact-modal h3 {
  color: var(--navy);
  margin-bottom: var(--space-xs);
}
.contact-modal p {
  color: var(--slate);
  font-size: 0.9rem;
  margin-bottom: var(--space-md);
}
.contact-modal form {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
.contact-modal input {
  padding: 1rem;
  border: 1px solid var(--gray-light);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  width: 100%;
}
.contact-modal input:focus {
  outline: none;
  border-color: var(--gold);
}
.property-clickable {
  cursor: pointer;
}
`;
fs.appendFileSync('css/styles.css', css);

// 2. Modify JS
let js = fs.readFileSync('js/main.js', 'utf8');
js = js.replace('initCounters();', 'initCounters();\n  initContactModal();');

const modalJs = `
/* ── Contact Modal (Popup) ── */
function initContactModal() {
  const modalHTML = \`
    <div class="contact-modal" id="contact-modal">
      <div class="contact-modal__backdrop"></div>
      <div class="contact-modal__content">
        <button class="contact-modal__close" aria-label="Close modal">&times;</button>
        <h3>Inquire <span class="text-gold">Now</span></h3>
        <p>Fill out the form below and our team will get back to you shortly.</p>
        <form action="https://formsubmit.co/info@housematerealtors.com" method="POST">
           <input type="hidden" name="_next" value="https://housematerealtors.com/">
           <input type="text" name="name" placeholder="Your Name" required>
           <input type="email" name="email" placeholder="Your Email" required>
           <input type="tel" name="phone" placeholder="Your Phone Number" required>
           <button type="submit" class="btn btn--primary" style="margin-top: 10px;">Submit Request</button>
        </form>
      </div>
    </div>
  \`;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('contact-modal');
  const closeBtn = modal.querySelector('.contact-modal__close');
  const backdrop = modal.querySelector('.contact-modal__backdrop');

  const openModal = (e) => {
    e.preventDefault();
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
`;

fs.writeFileSync('js/main.js', js + '\n' + modalJs);
console.log('Appended modal scripts successfully');
