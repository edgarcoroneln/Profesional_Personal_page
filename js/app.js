// ═══════════════════════════════════════════════════════
//  app.js — SPA Portfolio Behaviors
// ═══════════════════════════════════════════════════════

// ─── Navbar scroll effect + back-to-top visibility ───
const navbar    = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

// ─── Active nav link via IntersectionObserver ───
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ─── Scroll-triggered animations ───
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings inside the same parent
      const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
      let delay = 0;
      siblings.forEach((el, idx) => {
        if (el === entry.target) delay = idx * 80;
      });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));

// ─── Animate skill bars when section scrolls into view ───
const skillSection = document.getElementById('skills');

const skillObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
    skillObserver.disconnect();
  }
}, { threshold: 0.2 });

if (skillSection) skillObserver.observe(skillSection);

// Set data-width from inline style before zeroing (preserves CSS-defined widths)
document.querySelectorAll('.skill-fill').forEach(bar => {
  bar.dataset.width = bar.style.width;
  bar.style.width   = '0';
});

// ─── Mobile nav toggle ───
const navToggle  = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});

navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

// ─── Back to top ───
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
