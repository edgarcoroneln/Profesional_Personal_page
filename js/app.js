// ═══════════════════════════════════════════════════════
//  app.js — SPA Portfolio · Behaviors + i18n (ES / EN)
// ═══════════════════════════════════════════════════════

// ─── TRANSLATIONS ───────────────────────────────────────
const translations = {
  es: {
    'nav.about':      'Sobre Mí',
    'nav.experience': 'Trayectoria',
    'nav.education':  'Formación',
    'nav.certs':      'Certificaciones',
    'nav.skills':     'Skills',
    'nav.hobbies':    'Hobbies',
    'nav.contact':    'Contacto →',

    'hero.label':  'Delivery Manager',
    'hero.sub':    'Siemens DISW &nbsp;·&nbsp; LATAM &amp; North America &nbsp;·&nbsp; +20 años de experiencia',
    'hero.cta1':   'Ver Trayectoria',
    'hero.cta2':   'Contacto',

    'about.title': 'Sobre Mí',
    'about.p1':    'Soy un líder de Transformación Digital y Delivery Manager con más de 20 años de experiencia dirigiendo iniciativas digitales end-to-end en LATAM y Norteamérica. A lo largo de mi carrera he liderado programas complejos de software, infraestructura e Industria 4.0 en empresas como Siemens e IBM, gestionando equipos multiculturales, P&amp;L y la relación directa con C-Levels.',
    'about.p2':    'Cuento con un MBA con enfoque tecnológico por la Southern New Hampshire University (GPA 3.939) y actualmente curso la Maestría en Tecnologías de Información e Inteligencia Analítica en la Universidad Anáhuac. Soy apasionado por la IA generativa, Industry 4.0 y la creación de valor a través de la tecnología y la innovación estratégica.',
    'lang.es.label': 'Nativo',
    'lang.en.label': 'Fluido',

    'exp.title':       'Trayectoria Profesional',
    'exp1.date':       'Jun 2018 — Presente',
    'exp1.role':       'Delivery Manager',
    'exp1.b1': 'Lideró programas de transformación digital multi-país con 95%+ de cumplimiento en tiempo.',
    'exp1.b2': 'Implementaciones end-to-end de Teamcenter (PLM), Insights Hub (IIoT), Senseye, NX/Tecnomatix y soluciones de integración complejas.',
    'exp1.b3': 'Gestión de P&amp;L, forecasting de ingresos y presupuestos de hasta $1M USD.',
    'exp1.b4': 'Representante ejecutivo de Siemens ante C-Levels y VP en steering committees de alto nivel.',
    'exp1.b5': 'Parte del Canada PMO como Project Manager para clientes Bombardier y New Flyer.',
    'exp1.award1': "🏆 Excellence in Project Execution '19 · '21 · '22 · '23 · '24 · '25",
    'exp1.award2': '⭐ Top Service Contributor 2021 · ACE Awards',

    'exp2.date': 'Ago 2014 — Jun 2018',
    'exp2.role': 'SAP/IT Project Manager Sr.',
    'exp2.b1': 'Programas SAP: Hana, Carve-in, Carve-out, Merge, COPA, Archiving — México, Canadá y Costa Rica.',
    'exp2.b2': 'Implementación exitosa de todos los servicios IT en el nuevo Delivery Center de Siemens Costa Rica.',
    'exp2.b3': 'Reporte ejecutivo a CIO, CFO y Steering Committee; reconocido constantemente por el FLT (Top Siemens Management Board).',
    'exp2.b4': "Proyecto Cancún (fusión de Divisiones MX y CAM): distinguido como el proyecto más importante de Siemens en LATAM 2017.",

    'exp3.date': 'Jul 2011 — Oct 2013',
    'exp3.role': 'Program &amp; Project Manager',
    'exp3.b1': 'Dual-role Program Manager &amp; Sr. PM para el Programa de Mejora Continua de Iusacell: más de 100 iniciativas de excelencia operacional.',
    'exp3.b2': 'Más de 20 proyectos de transformación de infraestructura enterprise.',
    'exp3.b3': 'Reportes directos al VP de IBM y CIOs del cliente; gestión de KPIs, dashboards y SLA/SLO con AT&amp;T.',

    'exp4.date':    '2005 — 2011',
    'exp4.role':    'Experiencias Anteriores',
    'exp4.company': '+6 años en roles de PM &amp; PMO',
    'earlier.caeli':  'PMO / Delivery Manager — Mar 2010 · Jul 2011',
    'earlier.nextel': 'Project Manager Sr. — Jun 2009 · Mar 2010',
    'earlier.praxis': 'Project Manager — Feb 2008 · Feb 2009',
    'earlier.rtw':    'Project Manager — Feb 2007 · Ene 2008',
    'earlier.marti':  'Project Manager — Jun 2005 · Feb 2007',

    'edu.title':    'Formación Académica',
    'edu1.badge':   'En Curso',
    'edu1.degree':  'Maestría en Tecnologías de Información e Inteligencia Analítica',
    'edu1.detail':  'MTIIA · Ciudad de México',
    'edu2.badge':   'Completado',
    'edu2.detail':  'GPA: 3.939 · Cum Laude',
    'edu3.badge':   'Completado',
    'edu3.degree':  'Ingeniería en Sistemas Computacionales',
    'edu3.detail':  'Veracruz, México',

    'certs.title':  'Certificaciones &amp; Reconocimientos',
    'certs.panel':  'Certificaciones',
    'reco.panel':   'Reconocimientos',
    'reco1.year':   "2019 · 2021 · 2022 · 2023 · 2024 · 2025",
    'reco1.name':   'Excellence in Project Execution Award',
    'reco1.org':    'Siemens DISW — Meso Region &amp; Canada (2021)',
    'reco2.year':   '2021',
    'reco2.name':   'Top Service Contributor',
    'reco2.org':    'Siemens — ACE Awards 2021',
    'reco3.year':   '2017',
    'reco3.name':   'Proyecto más importante del año en Siemens LATAM',
    'reco3.org':    'Siemens IT — Proyecto Cancún (fusión Divisiones MX/CAM)',

    'skills.title':  'Skills',
    'skills.group1': 'Gestión &amp; Liderazgo',
    'skills.group2': 'Tecnología',
    'skills.group3': 'Habilidades Blandas',
    'level.prod': 'Producción',
    'level.adv':  'Avanzado',
    'level.int':  'Intermedio',

    'hobbies.title': 'Intereses &amp; Hobbies',
    'hobby1': 'Lectura',
    'hobby2': 'NFL Football',
    'hobby3': 'Boxeo',
    'hobby4': 'Viajes',

    'footer.title':  'Contacto',
    'footer.sub':    '¿Tienes un proyecto o quieres conectar? Escríbeme.',
    'footer.credit': 'Desarrollado con Google Stitch · Claude AI · GitHub Pages',

    'lang.toggle.label': 'EN',
    'lang.toggle.aria':  'Switch to English',
  },

  en: {
    'nav.about':      'About Me',
    'nav.experience': 'Experience',
    'nav.education':  'Education',
    'nav.certs':      'Certifications',
    'nav.skills':     'Skills',
    'nav.hobbies':    'Hobbies',
    'nav.contact':    'Contact →',

    'hero.label':  'Delivery Manager',
    'hero.sub':    'Siemens DISW &nbsp;·&nbsp; LATAM &amp; North America &nbsp;·&nbsp; 20+ years of experience',
    'hero.cta1':   'See Experience',
    'hero.cta2':   'Contact',

    'about.title': 'About Me',
    'about.p1':    'I am a Digital Transformation and Delivery Manager with over 20 years of experience leading end-to-end digital initiatives across LATAM and North America. Throughout my career, I have led complex software, infrastructure, and Industry 4.0 programs at companies such as Siemens and IBM, managing multicultural teams, P&amp;L, and direct C-Level relationships.',
    'about.p2':    "I hold an MBA with a technology focus from Southern New Hampshire University (GPA 3.939) and am currently pursuing a Master's in Information Technology and Analytical Intelligence at Universidad Anáhuac. I am passionate about generative AI, Industry 4.0, and creating value through technology and strategic innovation.",
    'lang.es.label': 'Native',
    'lang.en.label': 'Fluent',

    'exp.title':   'Professional Experience',
    'exp1.date':   'Jun 2018 — Present',
    'exp1.role':   'Delivery Manager',
    'exp1.b1': 'Led multi-country digital transformation programs with 95%+ on-time delivery.',
    'exp1.b2': 'End-to-end implementations of Teamcenter (PLM), Insights Hub (IIoT), Senseye, NX/Tecnomatix, and complex integration solutions.',
    'exp1.b3': 'P&amp;L management, revenue forecasting, and budgets up to $1M USD.',
    'exp1.b4': 'Executive representative for Siemens before C-Levels and VP in high-level steering committees.',
    'exp1.b5': 'Part of the Canada PMO as Project Manager for Bombardier and New Flyer customers.',
    'exp1.award1': "🏆 Excellence in Project Execution '19 · '21 · '22 · '23 · '24 · '25",
    'exp1.award2': '⭐ Top Service Contributor 2021 · ACE Awards',

    'exp2.date': 'Aug 2014 — Jun 2018',
    'exp2.role': 'SAP/IT Senior Project Manager',
    'exp2.b1': 'SAP programs: Hana, Carve-in, Carve-out, Merge, COPA, Archiving — Mexico, Canada, and Costa Rica.',
    'exp2.b2': 'Successful implementation of all IT services at the new Siemens Delivery Center in Costa Rica.',
    'exp2.b3': 'Executive reporting to CIO, CFO, and Steering Committee; constantly recognized by the FLT (Top Siemens Management Board).',
    'exp2.b4': "Cancún Project (MX and CAM Divisions merger): recognized as Siemens LATAM's most important project of 2017.",

    'exp3.date': 'Jul 2011 — Oct 2013',
    'exp3.role': 'Program &amp; Project Manager',
    'exp3.b1': "Dual-role Program Manager &amp; Sr. PM for Iusacell's Continuous Improvement Program: 100+ operational excellence initiatives.",
    'exp3.b2': 'Over 20 enterprise infrastructure transformation projects.',
    'exp3.b3': 'Direct reports to IBM VP and client CIOs; KPI, dashboard, and SLA/SLO management with AT&amp;T.',

    'exp4.date':    '2005 — 2011',
    'exp4.role':    'Earlier Experience',
    'exp4.company': '+6 years in PM &amp; PMO roles',
    'earlier.caeli':  'PMO / Delivery Manager — Mar 2010 · Jul 2011',
    'earlier.nextel': 'Senior Project Manager — Jun 2009 · Mar 2010',
    'earlier.praxis': 'Project Manager — Feb 2008 · Feb 2009',
    'earlier.rtw':    'Project Manager — Feb 2007 · Jan 2008',
    'earlier.marti':  'Project Manager — Jun 2005 · Feb 2007',

    'edu.title':    'Academic Background',
    'edu1.badge':   'In Progress',
    'edu1.degree':  "Master's in Information Technology and Analytical Intelligence",
    'edu1.detail':  'MTIIA · Mexico City',
    'edu2.badge':   'Completed',
    'edu2.detail':  'GPA: 3.939 · Cum Laude',
    'edu3.badge':   'Completed',
    'edu3.degree':  'Computer Systems Engineering',
    'edu3.detail':  'Veracruz, Mexico',

    'certs.title':  'Certifications &amp; Achievements',
    'certs.panel':  'Certifications',
    'reco.panel':   'Achievements',
    'reco1.year':   "2019 · 2021 · 2022 · 2023 · 2024 · 2025",
    'reco1.name':   'Excellence in Project Execution Award',
    'reco1.org':    'Siemens DISW — Meso Region &amp; Canada (2021)',
    'reco2.year':   '2021',
    'reco2.name':   'Top Service Contributor',
    'reco2.org':    'Siemens — ACE Awards 2021',
    'reco3.year':   '2017',
    'reco3.name':   'Project of the Year — Siemens LATAM',
    'reco3.org':    'Siemens IT — Cancún Project (MX/CAM Divisions Merger)',

    'skills.title':  'Skills',
    'skills.group1': 'Management &amp; Leadership',
    'skills.group2': 'Technology',
    'skills.group3': 'Soft Skills',
    'level.prod': 'Production',
    'level.adv':  'Advanced',
    'level.int':  'Intermediate',

    'hobbies.title': 'Interests &amp; Hobbies',
    'hobby1': 'Reading',
    'hobby2': 'NFL Football',
    'hobby3': 'Boxing',
    'hobby4': 'Traveling',

    'footer.title':  'Contact',
    'footer.sub':    "Have a project or want to connect? Let's talk.",
    'footer.credit': 'Built with Google Stitch · Claude AI · GitHub Pages',

    'lang.toggle.label': 'ES',
    'lang.toggle.aria':  'Cambiar a español',
  }
};

// ─── i18n ENGINE ────────────────────────────────────────
let currentLang = 'es';

function applyTranslation(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  currentLang = lang;
  const btn = document.getElementById('langToggle');
  btn.textContent   = t['lang.toggle.label'];
  btn.setAttribute('aria-label', t['lang.toggle.aria']);
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

// ─── NAVBAR scroll effect + back-to-top ─────────────────
const navbar    = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('visible', window.scrollY > 400);
});

// ─── Active nav link via IntersectionObserver ────────────
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

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

// ─── Scroll-triggered animations ────────────────────────
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
      let delay = 0;
      siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));

// ─── Animate skill bars on scroll ────────────────────────
const skillSection = document.getElementById('skills');

document.querySelectorAll('.skill-fill').forEach(bar => {
  bar.dataset.width = bar.style.width;
  bar.style.width   = '0';
});

const skillObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
    skillObserver.disconnect();
  }
}, { threshold: 0.2 });

if (skillSection) skillObserver.observe(skillSection);

// ─── Mobile nav toggle ───────────────────────────────────
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

// ─── Back to top ────────────────────────────────────────
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Language toggle ─────────────────────────────────────
document.getElementById('langToggle').addEventListener('click', () => {
  applyTranslation(currentLang === 'es' ? 'en' : 'es');
});

// Init: restore saved language preference
const savedLang = localStorage.getItem('lang') || 'es';
if (savedLang !== 'es') applyTranslation(savedLang);
