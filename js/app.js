// ═══════════════════════════════════════════════════════
//  app.js — SPA Portfolio · Behaviors + i18n (ES / EN)
// ═══════════════════════════════════════════════════════

// ─── TRANSLATIONS ───────────────────────────────────────
const translations = {
  es: {
    'nav.about':       'Sobre Mí',
    'nav.experience':  'Trayectoria',
    'nav.venture':     'Emprendimiento',
    'nav.education':   'Formación',
    'nav.activities':  'Actividades',
    'nav.certs':       'Certificaciones',
    'nav.skills':      'Skills',
    'nav.hobbies':     'Hobbies',
    'nav.contact':     'Contacto →',

    'hero.label':  'Executive Technology &amp; Digital Transformation Leader',
    'hero.sub':    'Siemens &amp; IBM &nbsp;·&nbsp; LATAM, Centroamérica &amp; Canadá &nbsp;·&nbsp; Gobernanza ejecutiva &amp; C-Level',
    'hero.cta1':   'Ver Trayectoria',
    'hero.cta2':   'Contacto',

    'impact.intro': 'Impacto Ejecutivo Seleccionado',
    'impact.l1':    'Portafolio de delivery gobernado — forecast, revenue, costo y margen',
    'impact.l2':    'Mejora en 15 plantas con equipo cross-divisional de Siemens',
    'impact.l3':    'Portfolio health sostenido — schedule, costo, alcance y riesgos',
    'impact.l4':    'Iniciativas de mejora continua gobernadas (IBM–Iusacell)',
    'impact.l5':    'Transformaciones de infraestructura end-to-end',
    'impact.l6':    'Siemens Excellence in Project Execution Award',
    'impact.l7':    'Satisfacción del cliente en engagements medidos formalmente',
    'impact.l8':    'Programas SAP liderados en portafolio regional',
    'impact.l9':    'MXN/unidad optimizados y validados en 18 plantas',
    'impact.l10':   'Reportes directos y profesionales en matriz liderados',

    'about.title': 'Sobre Mí',
    'about.p1':    'Ejecutivo de tecnología y transformación con más de 20 años de experiencia en Siemens e IBM, convirtiendo prioridades de negocio en portafolios ejecutables, soluciones enterprise y resultados medibles para el cliente. Lidero delivery regional y cross-funcional en México, LATAM, Centroamérica y Canadá, con interacción recurrente a nivel gerencial, directivo y C-Level.',
    'about.p2':    'Combino liderazgo de estrategia-a-ejecución, gobernanza de portafolio, disciplina financiera, customer success y desarrollo de talento a través de SAP, cloud/SaaS, PLM, MES, IIoT, modernización de infraestructura y transformación habilitada por analytics. MBA con enfoque tecnológico por Southern New Hampshire University (GPA 3.939) y Maestría en Tecnologías de Información e Inteligencia Analítica (Anáhuac, en curso).',
    'about.p3':    'Mi trayectoria abarca digitalización industrial, telecomunicaciones, retail e IT enterprise, liderando equipos directos y matriciales geográficamente distribuidos. Me enfoco en la relación ejecutiva con el cliente, la recuperación de engagements críticos y la conversión de necesidades en oportunidades de valor, siempre con gobernanza clara, disciplina financiera y decisiones basadas en datos. Apasionado por la IA generativa, Industry 4.0 y la creación de valor a través de la tecnología.',
    'about.sectors.label': 'Sectores atendidos',
    'about.sector1': 'Manufactura · Industrial',
    'about.sector2': 'Telecomunicaciones',
    'about.sector4': 'IT &amp; Consultoría',
    'about.motto':   'Desarrollar personas · Remover obstáculos · Crear accountability',
    'about.outcome': 'Equipos más sólidos. Decisiones más rápidas. Entrega predecible.',
    'lang.es.label': 'Nativo',
    'lang.en.label': 'Fluido',

    'exp.title':       'Trayectoria Profesional',
    'exp1.date':       'Jun 2018 — Presente',
    'exp1.role':       'Delivery Manager',
    'exp1.b1': 'Lideró programas de transformación digital multi-país con 95%+ de cumplimiento en tiempo.',
    'exp1.b2': 'Implementaciones end-to-end de Teamcenter (PLM), Insights Hub (IIoT), Senseye, NX/Tecnomatix y soluciones de integración complejas.',
    'exp1.b3': 'Gestión de P&amp;L, forecasting de ingresos y portafolio de delivery de hasta US $2M.',
    'exp1.b4': 'Representante ejecutivo de Siemens ante C-Levels y VP en steering committees de alto nivel.',
    'exp1.b5': 'Parte del Canada PMO como Project Manager para clientes Bombardier y New Flyer.',
    'exp1.b6': 'Recuperación de cuentas críticas mediante análisis de causa raíz, gobernanza ejecutiva y planes de recuperación estructurados; conversión de necesidades del cliente en oportunidades de expansión con Ventas.',
    'exp1.award1': "🏆 Excellence in Project Execution '19 · '21 · '22 · '24 · '25",
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

    'exp4.date':    '2005 — 2010',
    'exp4.role':    'Experiencias Anteriores',
    'exp4.company': 'Fundamentos en Project &amp; Program Management',
    'earlier.nextel': 'Project Manager Sr. — Jun 2009 · Mar 2010',
    'earlier.nextel.desc': 'Habilité la compra de tarjetas de prepago en las principales cadenas de retail; ~USD 30K en ventas del primer mes y ~15% de crecimiento mensual promedio durante el primer año.',
    'earlier.praxis': 'Project Manager — Feb 2008 · Feb 2009',
    'earlier.praxis.desc': 'Coordiné a más de 50 stakeholders en 28 departamentos y alta dirección durante una implementación GRP y el desarrollo de un plan estratégico institucional a cinco años.',
    'earlier.rtw':    'Project Manager — Feb 2007 · Ene 2008',
    'earlier.rtw.desc': 'Lideré implementaciones de ERP Microsoft Dynamics NAV e iniciativas de desarrollo de software para el sector retail, sentando las bases de la entrega tecnológica enterprise.',
    'earlier.marti':  'Project Manager — Jun 2005 · Feb 2007',
    'earlier.marti.desc': 'Gestioné proyectos tempranos de tecnología y retail, estableciendo disciplina de delivery, prioridades y ejecución operativa en entornos multitienda.',

    'venture.title':   'Emprendimiento',
    'venture.period':  'Mar 2010 — Jul 2012',
    'venture.role':    'Delivery Manager &amp; Socio Fundador',
    'venture.tagline': 'Empresa de Consultoría en Tecnologías de Información y Comunicaciones',
    'venture.desc':    'Co-fundador y Delivery Manager de CAELI, firma especializada en consultoría y gestión de proyectos de TIC. Lideré la operación de entrega de proyectos tecnológicos para clientes del sector privado, coordinando equipos multidisciplinarios y estableciendo las bases de PMO de la empresa desde cero.',
    'venture.stat1':   'años de operación',
    'venture.stat2':   'desde cero',
    'venture.stat3':   'consultoría',

    'act.title':    'Actividades Extracurriculares',
    'act1.duration':'+4 años · Siemens',
    'act1.title':   'Diversity ERG — Voluntario',
    'act1.desc':    'Miembro activo del Employee Resource Group de Diversidad e Inclusión de Siemens durante más de 4 años, promoviendo un ambiente de trabajo equitativo e inclusivo dentro de la organización.',
    'act2.duration':'Siemens Assembly Events',
    'act2.title':   'Speaker — Masterclases',
    'act2.desc':    'Speaker en masterclases corporativas de Siemens en eventos Assembly, impartiendo temas de Project Management, Metodologías Ágiles e Inteligencia Artificial aplicada en gestión de proyectos.',
    'act3.duration':'+4 años · Siemens DISW',
    'act3.title':   'Compliance Ambassador',
    'act3.desc':    'Primer punto de contacto para temas de Compliance en Siemens DISW durante más de 4 años, promoviendo la cultura ética y de cumplimiento normativo en la división.',
    'act4.duration':'Continuo',
    'act4.title':   'Mentor &amp; Crecimiento Personal',
    'act4.desc':    'Apasionado del desarrollo humano y el crecimiento personal. Mentor activo de profesionales en etapas tempranas de su carrera en gestión de proyectos y transformación digital; un mentee avanzó a un rol global de Customer Success Manager.',

    'edu.title':    'Formación Académica',
    'edu1.badge':   'En Curso',
    'edu1.degree':  'Maestría en Tecnologías de Información e Inteligencia Analítica',
    'edu1.detail':  'MTIIA · Ciudad de México',
    'edu2.badge':   'Completado',
    'edu2.detail':  'GPA: 3.939 · Cum Laude',
    'edu3.badge':   'Completado',
    'edu3.degree':  'Ingeniería en Sistemas Computacionales',
    'edu3.detail':  'Veracruz, México',

    'certs.title':   'Certificaciones &amp; Reconocimientos',
    'certs.formal':  'Certificaciones Formales',
    'certs.linkedin':'LinkedIn Learning',
    'reco1.year':   "2019 · 2021 · 2022 · 2024 · 2025",
    'reco1.name':   'Excellence in Project Execution Award (5×)',
    'reco1.org':    'Siemens DISW — Meso Region &amp; Canada (2021)',
    'reco2.year':   '2021',
    'reco2.name':   'Top Service Contributor',
    'reco2.org':    'Siemens — ACE Awards 2021',
    'reco3.year':   '2017',
    'reco3.name':   'Proyecto más importante del año en Siemens LATAM',
    'reco3.org':    'Siemens IT — Proyecto Cancún (fusión Divisiones MX/CAM)',

    'caps.title':    'Executive Capabilities',
    'caps.c1.title': 'Customer, Escalation &amp; Growth',
    'caps.c2.title': 'Program Delivery &amp; Governance',
    'caps.c3.title': 'Operations &amp; Service Continuity',
    'caps.c4.title': 'Financial, Vendor &amp; People',
    'caps.c5.title': 'Technology Environment',
    'caps.c6.title': 'Strategy &amp; Transformation',

    'skills.title':  'Skills',
    'skills.group1': 'Gestión &amp; Liderazgo',
    'skills.group2': 'Tecnología &amp; Datos',
    'skills.group3': 'Habilidades Blandas',
    'level.prod': 'Experto',
    'level.adv':  'Avanzado',
    'level.int':  'Intermedio',
    'level.bas':  'Básico',

    'hobbies.title': 'Intereses &amp; Hobbies',
    'hobby1': 'Lectura',
    'hobby2': 'NFL Football',
    'hobby3': 'Boxeo',
    'hobby4': 'Viajes',
    'hobby5': 'Películas',
    'hobby6': 'Perros',

    'footer.title':  'Contacto',
    'footer.sub':    '¿Tienes un proyecto o quieres conectar? Escríbeme.',
    'footer.email':  'Enviar correo',
    'footer.credit': 'Ciudad de México · edgar.coronel@gmail.com',

    'lang.toggle.label': 'EN',
    'lang.toggle.aria':  'Switch to English',
    'theme.toggle.aria.toLight': 'Cambiar a tema claro',
    'theme.toggle.aria.toDark':  'Cambiar a tema oscuro',
  },

  en: {
    'nav.about':       'About Me',
    'nav.experience':  'Experience',
    'nav.venture':     'Ventures',
    'nav.education':   'Education',
    'nav.activities':  'Activities',
    'nav.certs':       'Certifications',
    'nav.skills':      'Skills',
    'nav.hobbies':     'Hobbies',
    'nav.contact':     'Contact →',

    'hero.label':  'Executive Technology &amp; Digital Transformation Leader',
    'hero.sub':    'Siemens &amp; IBM &nbsp;·&nbsp; LATAM, Central America &amp; Canada &nbsp;·&nbsp; Executive Governance &amp; C-Level',
    'hero.cta1':   'See Experience',
    'hero.cta2':   'Contact',

    'impact.intro': 'Selected Executive Impact',
    'impact.l1':    'Delivery portfolio governed — forecast, revenue, cost and margin',
    'impact.l2':    'Improvement across 15 plants with a cross-divisional Siemens team',
    'impact.l3':    'Portfolio health sustained — schedule, cost, scope and risks',
    'impact.l4':    'Continuous-improvement initiatives governed (IBM–Iusacell)',
    'impact.l5':    'End-to-end infrastructure transformations',
    'impact.l6':    'Siemens Excellence in Project Execution Award',
    'impact.l7':    'Customer satisfaction across formally measured engagements',
    'impact.l8':    'SAP programs led across a regional portfolio',
    'impact.l9':    'MXN/unit cost optimization validated across 18 plants',
    'impact.l10':   'Direct reports and matrix professionals led',

    'about.title': 'About Me',
    'about.p1':    'Technology and transformation executive with 20+ years of experience across Siemens and IBM, turning business priorities into executable portfolios, enterprise solutions, and measurable customer outcomes. I lead regional and cross-functional delivery across Mexico, LATAM, Central America, and Canada, with recurring engagement at manager, director, and C-Level.',
    'about.p2':    "I combine strategy-to-execution leadership, portfolio governance, financial discipline, customer success, and talent development across SAP, cloud/SaaS, PLM, MES, IIoT, infrastructure modernization, and analytics-enabled transformation. MBA with a technology focus from Southern New Hampshire University (GPA 3.939) and a Master's in Information Technology and Analytical Intelligence (Anáhuac, in progress).",
    'about.p3':    'My career spans industrial digitalization, telecommunications, retail, and enterprise IT, leading direct and matrix teams across geographies. I focus on executive customer relationships, recovering critical engagements, and turning needs into value opportunities — always with clear governance, financial discipline, and data-driven decisions. Passionate about generative AI, Industry 4.0, and creating value through technology.',
    'about.sectors.label': 'Sectors served',
    'about.sector1': 'Manufacturing · Industrial',
    'about.sector2': 'Telecommunications',
    'about.sector4': 'IT &amp; Consulting',
    'about.motto':   'Develop people · Remove obstacles · Create accountability',
    'about.outcome': 'Stronger teams. Faster decisions. Predictable delivery.',
    'lang.es.label': 'Native',
    'lang.en.label': 'Fluent',

    'exp.title':   'Professional Experience',
    'exp1.date':   'Jun 2018 — Present',
    'exp1.role':   'Delivery Manager',
    'exp1.b1': 'Led multi-country digital transformation programs with 95%+ on-time delivery.',
    'exp1.b2': 'End-to-end implementations of Teamcenter (PLM), Insights Hub (IIoT), Senseye, NX/Tecnomatix, and complex integration solutions.',
    'exp1.b3': 'P&amp;L management, revenue forecasting, and a delivery portfolio up to US $2M.',
    'exp1.b4': 'Executive representative for Siemens before C-Levels and VP in high-level steering committees.',
    'exp1.b5': 'Part of the Canada PMO as Project Manager for Bombardier and New Flyer customers.',
    'exp1.b6': 'Recovered critical customer engagements through root-cause analysis, executive governance, and structured recovery plans; converted customer needs into expansion opportunities with Sales.',
    'exp1.award1': "🏆 Excellence in Project Execution '19 · '21 · '22 · '24 · '25",
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

    'exp4.date':    '2005 — 2010',
    'exp4.role':    'Earlier Experience',
    'exp4.company': 'Foundations in Project &amp; Program Management',
    'earlier.nextel': 'Senior Project Manager — Jun 2009 · Mar 2010',
    'earlier.nextel.desc': 'Enabled prepaid-card purchases across major retail chains; ~USD 30K in first-month sales and ~15% average monthly growth during the first year.',
    'earlier.praxis': 'Project Manager — Feb 2008 · Feb 2009',
    'earlier.praxis.desc': 'Coordinated 50+ stakeholders across 28 departments and senior management during a GRP implementation and a five-year institutional strategic plan.',
    'earlier.rtw':    'Project Manager — Feb 2007 · Jan 2008',
    'earlier.rtw.desc': 'Led Microsoft Dynamics NAV ERP implementations and retail software-development initiatives, laying the foundation for enterprise technology delivery.',
    'earlier.marti':  'Project Manager — Jun 2005 · Feb 2007',
    'earlier.marti.desc': 'Managed early technology and retail projects, building delivery discipline, prioritization, and operational execution across multi-store environments.',

    'venture.title':   'Entrepreneurship',
    'venture.period':  'Mar 2010 — Jul 2012',
    'venture.role':    'Delivery Manager &amp; Co-Founder',
    'venture.tagline': 'IT &amp; Communications Consulting Firm',
    'venture.desc':    'Co-founded and led CAELI, a consulting firm specialized in IT and communications project management. Led delivery operations for private sector technology projects, coordinating multidisciplinary teams and building the company PMO from scratch.',
    'venture.stat1':   'years of operation',
    'venture.stat2':   'built from scratch',
    'venture.stat3':   'consulting',

    'act.title':    'Extracurricular Activities',
    'act1.duration':'4+ years · Siemens',
    'act1.title':   'Diversity ERG — Volunteer',
    'act1.desc':    'Active member of the Siemens Diversity &amp; Inclusion Employee Resource Group for over 4 years, promoting a fair and inclusive work environment within the organization.',
    'act2.duration':'Siemens Assembly Events',
    'act2.title':   'Speaker — Master Classes',
    'act2.desc':    'Speaker at Siemens corporate masterclasses at Assembly events, covering Project Management, Agile Methodologies, and Artificial Intelligence applied to project management.',
    'act3.duration':'4+ years · Siemens DISW',
    'act3.title':   'Compliance Ambassador',
    'act3.desc':    'Primary point of contact for Compliance topics at Siemens DISW for over 4 years, promoting ethical culture and regulatory compliance within the division.',
    'act4.duration':'Ongoing',
    'act4.title':   'Mentor &amp; Personal Growth',
    'act4.desc':    'Passionate about human development and personal growth. Active mentor for professionals in early stages of their careers in project management and digital transformation; one mentee advanced into a global Customer Success Manager role.',

    'edu.title':    'Academic Background',
    'edu1.badge':   'In Progress',
    'edu1.degree':  "Master's in Information Technology and Analytical Intelligence",
    'edu1.detail':  'MTIIA · Mexico City',
    'edu2.badge':   'Completed',
    'edu2.detail':  'GPA: 3.939 · Cum Laude',
    'edu3.badge':   'Completed',
    'edu3.degree':  'Computer Systems Engineering',
    'edu3.detail':  'Veracruz, Mexico',

    'certs.title':   'Certifications &amp; Achievements',
    'certs.formal':  'Formal Certifications',
    'certs.linkedin':'LinkedIn Learning',
    'reco1.year':   "2019 · 2021 · 2022 · 2024 · 2025",
    'reco1.name':   'Excellence in Project Execution Award (5×)',
    'reco1.org':    'Siemens DISW — Meso Region &amp; Canada (2021)',
    'reco2.year':   '2021',
    'reco2.name':   'Top Service Contributor',
    'reco2.org':    'Siemens — ACE Awards 2021',
    'reco3.year':   '2017',
    'reco3.name':   'Project of the Year — Siemens LATAM',
    'reco3.org':    'Siemens IT — Cancún Project (MX/CAM Divisions Merger)',

    'caps.title':    'Executive Capabilities',
    'caps.c1.title': 'Customer, Escalation &amp; Growth',
    'caps.c2.title': 'Program Delivery &amp; Governance',
    'caps.c3.title': 'Operations &amp; Service Continuity',
    'caps.c4.title': 'Financial, Vendor &amp; People',
    'caps.c5.title': 'Technology Environment',
    'caps.c6.title': 'Strategy &amp; Transformation',

    'skills.title':  'Skills',
    'skills.group1': 'Management &amp; Leadership',
    'skills.group2': 'Technology &amp; Data',
    'skills.group3': 'Soft Skills',
    'level.prod': 'Expert / SME',
    'level.adv':  'Advanced',
    'level.int':  'Intermediate',
    'level.bas':  'Basic',

    'hobbies.title': 'Interests &amp; Hobbies',
    'hobby1': 'Reading',
    'hobby2': 'NFL Football',
    'hobby3': 'Boxing',
    'hobby4': 'Traveling',
    'hobby5': 'Movies',
    'hobby6': 'Dogs',

    'footer.title':  'Contact',
    'footer.sub':    "Have a project or want to connect? Let's talk.",
    'footer.email':  'Send email',
    'footer.credit': 'Mexico City · edgar.coronel@gmail.com',

    'lang.toggle.label': 'ES',
    'lang.toggle.aria':  'Cambiar a español',
    'theme.toggle.aria.toLight': 'Switch to light theme',
    'theme.toggle.aria.toDark':  'Switch to dark theme',
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
  updateThemeToggleUI();
}

// ─── THEME (light / dark) ───────────────────────────────
function currentTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function updateThemeToggleUI() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isLight = currentTheme() === 'light';
  const icon = btn.querySelector('i');
  if (icon) icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  const t = translations[currentLang];
  btn.setAttribute('aria-label', isLight ? t['theme.toggle.aria.toDark'] : t['theme.toggle.aria.toLight']);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isLight ? '#f6f8fb' : '#050d1a');
}

function applyTheme(theme) {
  if (theme === 'light') document.documentElement.dataset.theme = 'light';
  else document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('theme', theme);
  updateThemeToggleUI();
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

// ─── Theme toggle ────────────────────────────────────────
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
});

// Init: restore saved theme (fallback to OS preference, default dark)
const savedTheme = localStorage.getItem('theme')
  || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
applyTheme(savedTheme);

// Init: restore saved language preference
const savedLang = localStorage.getItem('lang') || 'es';
if (savedLang !== 'es') applyTranslation(savedLang);
else updateThemeToggleUI();
