/* shared.js — Nav, Footer y CSS base compartidos para todas las páginas de CartoData */
(function () {
  /* ── Inyectar site.css (design system) si no está ya cargado ── */
  if (!document.querySelector('link[href*="site.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './site.css';
    document.head.prepend(link);
  }

  /* ── Estilos compartidos ── */
  const style = document.createElement('style');
  style.textContent = `
    /* Nav — pixel-match con el React bundle del index */
    .cd-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 clamp(1rem,3vw,2.5rem); height: 64px;
      background: rgba(5,8,22,0.85);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      font-family: 'DM Sans', 'Inter', system-ui, sans-serif;
    }
    :root:not(.dark) .cd-nav {
      background: rgba(248,250,252,0.88);
      border-bottom: 1px solid rgba(0,0,0,0.08);
    }
    :root:not(.dark) .cd-nav-brand { color: #0f172a; }
    :root:not(.dark) .cd-nav-links {
      background: rgba(0,0,0,0.04);
      border-color: rgba(0,0,0,0.1);
    }
    :root:not(.dark) .cd-nav-links a { color: rgba(15,23,42,0.55); }
    :root:not(.dark) .cd-nav-links a:hover { color: #0f172a; background: rgba(0,0,0,0.05); }
    :root:not(.dark) .cd-nav-links a.cd-active { color: #0f172a; background: rgba(0,0,0,0.06); }
    :root:not(.dark) .cd-nav-links li + li::before { background: rgba(0,0,0,0.12); }
    :root:not(.dark) .cd-nav-lang { color: rgba(15,23,42,0.55); }
    :root:not(.dark) .cd-nav-lang:hover { color: #0f172a; }
    :root:not(.dark) .cd-nav-theme { color: rgba(15,23,42,0.55); }
    :root:not(.dark) .cd-nav-theme:hover { color: #0f172a; }
    .cd-nav-brand {
      display: flex; align-items: center; gap: 8px;
      text-decoration: none; color: #f8fafc; flex-shrink: 0;
    }
    .cd-nav-brand img { height: 28px; width: auto; }
    /* Pill group — matches React bundle nav */
    .cd-nav-links {
      display: flex; align-items: center; list-style: none; margin: 0; padding: 0;
      position: absolute; left: 50%; transform: translateX(-50%);
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 999px;
      padding: 4px;
      gap: 0;
    }
    .cd-nav-links li { display: flex; align-items: center; }
    /* divider between items */
    .cd-nav-links li + li::before {
      content: ''; display: block;
      width: 1px; height: 14px;
      background: rgba(255,255,255,0.12);
      flex-shrink: 0;
    }
    .cd-nav-links a {
      display: inline-flex; align-items: center;
      padding: 0.38rem 1rem;
      text-decoration: none; color: rgba(248,250,252,0.55);
      font-size: 0.72rem; font-weight: 500;
      letter-spacing: 0.08em; text-transform: uppercase;
      border-radius: 999px;
      transition: color 150ms, background 150ms;
      white-space: nowrap;
    }
    .cd-nav-links a:hover { color: #f8fafc; background: rgba(255,255,255,0.07); }
    .cd-nav-links a.cd-active { color: #f8fafc; background: rgba(255,255,255,0.08); }
    /* Dropdown */
    .cd-nav-links li { position: relative; }
    .cd-nav-links .cd-has-dropdown > a { gap: 4px; }
    .cd-nav-links .cd-has-dropdown > a::after {
      content: '';
      display: inline-block; width: 6px; height: 6px;
      border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor;
      transform: rotate(45deg) translateY(-2px);
      opacity: 0.6; transition: transform 150ms;
    }
    .cd-nav-links .cd-has-dropdown.cd-open > a::after { transform: rotate(-135deg) translateY(-2px); }
    .cd-dropdown {
      display: none; position: absolute; top: calc(100% + 10px); left: 50%;
      transform: translateX(-50%);
      background: rgba(10,14,35,0.97);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px; padding: 6px;
      min-width: 160px; z-index: 10000;
      flex-direction: column; gap: 1px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }
    .cd-has-dropdown.cd-open .cd-dropdown { display: flex; }
    .cd-dropdown a {
      display: block; padding: 0.45rem 0.9rem;
      border-radius: 6px; text-decoration: none;
      color: rgba(248,250,252,0.65); font-size: 0.72rem;
      font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase;
      white-space: nowrap; transition: color 120ms, background 120ms;
      border-radius: 6px;
    }
    .cd-dropdown a:hover { color: #f8fafc; background: rgba(255,255,255,0.08); }
    :root:not(.dark) .cd-dropdown {
      background: rgba(248,250,252,0.97);
      border-color: rgba(0,0,0,0.1);
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    }
    :root:not(.dark) .cd-dropdown a { color: rgba(15,23,42,0.6); }
    :root:not(.dark) .cd-dropdown a:hover { color: #0f172a; background: rgba(0,0,0,0.05); }
    .cd-nav-right { display: flex; align-items: center; gap: 0.25rem; }
    .cd-nav-lang {
      padding: 0.25rem 0.5rem; background: none; border: none; cursor: pointer;
      color: rgba(248,250,252,0.6); font-size: 0.65rem; font-weight: 400;
      letter-spacing: 0.15em; text-transform: uppercase;
      font-family: 'DM Sans', system-ui, sans-serif;
      transition: color 150ms;
    }
    .cd-nav-lang:hover { color: #f8fafc; }
    .cd-nav-theme {
      display: flex; align-items: center; justify-content: center;
      width: 28px; height: 28px; background: none; border: none; cursor: pointer;
      color: rgba(248,250,252,0.6); transition: color 150ms;
      border-radius: 6px;
    }
    .cd-nav-theme:hover { color: #f8fafc; }
    .cd-nav-theme svg { width: 14px; height: 14px; }
    .cd-nav-cta {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 0.42rem 1.1rem; border-radius: 999px;
      background: #2563eb; color: #fff;
      text-decoration: none; font-size: 0.72rem; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      transition: background 150ms; margin-left: 0.25rem;
    }
    .cd-nav-cta:hover { background: #1d4ed8; }
    @media (max-width: 768px) {
      .cd-nav-links { display: none; }
      .cd-nav { padding: 0 1rem; }
    }

    /* Footer */
    .cd-shared-footer {
      font-family: 'DM Sans', system-ui, sans-serif;
      background: #050816;
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 0 clamp(1.5rem,5vw,4rem);
      color: rgba(248,250,252,0.55);
      font-size: 0.8rem;
    }
    .cd-footer-main {
      display: grid;
      grid-template-columns: 1.6fr auto 1fr 1fr;
      gap: 3rem;
      padding: 3rem 0 2.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      align-items: start;
    }
    .cd-footer-brand-col img { height: 30px; width: auto; margin-bottom: 0.9rem; display: block; }
    .cd-footer-copy {
      font-size: 0.75rem; line-height: 1.6;
      color: rgba(248,250,252,0.45); max-width: 280px;
      text-transform: uppercase; letter-spacing: 0.04em;
    }
    .cd-footer-nav-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;
      border-left: 1px solid rgba(255,255,255,0.08);
      padding-left: 3rem;
    }
    .cd-footer-nav-btn {
      display: block; padding: 0.55rem 1.1rem;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 6px; text-decoration: none;
      color: rgba(248,250,252,0.65); font-size: 0.72rem;
      font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
      text-align: center; transition: color 200ms, border-color 200ms;
      white-space: nowrap;
    }
    .cd-footer-nav-btn:hover { color: #f8fafc; border-color: rgba(255,255,255,0.3); }
    .cd-footer-col-title {
      font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em;
      text-transform: uppercase; color: #f8fafc;
      margin-bottom: 1rem; display: block;
    }
    .cd-footer-col-links { display: flex; flex-direction: column; gap: 0.55rem; }
    .cd-footer-col-links a {
      color: rgba(248,250,252,0.55); text-decoration: none;
      font-size: 0.8rem; transition: color 200ms;
    }
    .cd-footer-col-links a:hover { color: #f8fafc; }
    .cd-footer-social {
      display: flex; gap: 0.7rem; margin-top: 1rem; flex-wrap: wrap;
    }
    .cd-footer-social a {
      display: flex; align-items: center; justify-content: center;
      width: 30px; height: 30px; border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.15);
      color: rgba(248,250,252,0.6); text-decoration: none;
      font-size: 0.75rem; transition: color 200ms, border-color 200ms;
    }
    .cd-footer-social a:hover { color: #f8fafc; border-color: rgba(255,255,255,0.4); }
    .cd-footer-bottom {
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 0.75rem; padding: 1.25rem 0;
      font-size: 0.72rem; color: rgba(248,250,252,0.35);
    }
    .cd-footer-legal { display: flex; gap: 1.5rem; flex-wrap: wrap; }
    .cd-footer-legal a {
      color: rgba(248,250,252,0.35); text-decoration: none; transition: color 200ms;
    }
    .cd-footer-legal a:hover { color: rgba(248,250,252,0.7); }
    @media (max-width: 860px) {
      .cd-footer-main { grid-template-columns: 1fr 1fr; }
      .cd-footer-nav-grid { border-left: none; padding-left: 0; }
    }
    @media (max-width: 500px) {
      .cd-footer-main { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);

  /* ── Detectar página activa ── */
  const path = window.location.pathname;
  function isActive(href) {
    if (href === './index.html') return path === '/' || path.endsWith('index.html');
    if (href === './historia.html') return path.endsWith('historia.html');
    return false;
  }

  const NAV_LINKS = [
    { label: 'Impacto',    href: './index.html#impacto',    children: [
        { label: 'Ciudades',       en: 'Cities',        href: './index.html#ciudades'       },
        { label: 'Infraestructura',en: 'Infrastructure',href: './index.html#infraestructura'},
        { label: 'Minería',        en: 'Mining',        href: './index.html#minas'          },
        { label: 'Instituciones',  en: 'Institutions',  href: './index.html#instituciones'  },
      ]},
    { label: 'Tecnología', href: './index.html#tecnologia', children: [
        { label: 'Procesos',    en: 'Processes',   href: './index.html#procesos'    },
        { label: 'Cartográfica',en: 'Cartographic',href: './index.html#cartografica'},
        { label: 'GeoSoftware', en: 'GeoSoftware', href: './index.html#geosoftware' },
      ]},
    { label: 'Cultura',    href: './index.html#cultura',    children: [
        { label: 'Historia', en: 'History', href: './historia.html'        },
        { label: 'Equipo',   en: 'Team',    href: './index.html#equipo'    },
      ]},
    { label: 'Noticias',   href: './index.html#noticias'    },
    { label: 'X-Ray',      href: './index.html#xray'        },
  ];

  /* ── Estado: idioma y tema ── */
  let lang  = localStorage.getItem('cartodata-lang') || 'es';
  let theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme(t) {
    theme = t;
    localStorage.setItem('theme', t);
    document.documentElement.classList.toggle('dark', t === 'dark');
    const btn = document.getElementById('cd-theme-btn');
    if (btn) btn.innerHTML = t === 'dark' ? SVG_SUN : SVG_MOON;
    const logo = document.getElementById('cd-nav-logo');
    if (logo) logo.src = t === 'dark'
      ? './manus-storage/logo-white-h-proper_641226e9.png'
      : './manus-storage/logo-black-h-proper_e8a1da9d.png';
  }

  function applyLang(l) {
    lang = l;
    localStorage.setItem('cartodata-lang', l);
    document.documentElement.lang = l;
    const btn = document.getElementById('cd-lang-btn');
    if (btn) btn.textContent = l === 'es' ? 'EN' : 'ES';
    /* Actualizar texto de links del nav según idioma */
    updateNavLabels();
  }

  function updateNavLabels() {
    NAV_LINKS.forEach((item, i) => {
      const li = document.querySelector(`.cd-nav-links li:nth-child(${i + 1})`);
      if (!li) return;
      const topA = li.querySelector(':scope > a');
      if (topA) topA.firstChild.textContent = (lang === 'en' && item.en) ? item.en : item.label;
      if (item.children) {
        item.children.forEach((child, j) => {
          const childA = li.querySelectorAll('.cd-dropdown a')[j];
          if (childA) childA.textContent = (lang === 'en' && child.en) ? child.en : child.label;
        });
      }
    });
  }

  const NAV_LABELS_EN = { 'Impacto':'Impact','Tecnología':'Technology','Cultura':'Culture','Noticias':'News' };

  const SVG_SUN  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;
  const SVG_MOON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  /* ── Inyectar Nav (inmediato) ── */
  const nav = document.createElement('nav');
  nav.className = 'cd-nav';
  nav.innerHTML = `
    <a href="./index.html" class="cd-nav-brand">
      <img id="cd-nav-logo" src="./manus-storage/logo-white-h-proper_641226e9.png" alt="CartoData" />
    </a>
    <ul class="cd-nav-links">
      ${NAV_LINKS.map(l => `
        <li class="${l.children ? 'cd-has-dropdown' : ''}">
          <a href="${l.href}" ${isActive(l.href) ? 'class="cd-active"' : ''}>${l.label}</a>
          ${l.children ? `
          <div class="cd-dropdown">
            ${l.children.map(c => `<a href="${c.href}">${c.label}</a>`).join('')}
          </div>` : ''}
        </li>
      `).join('')}
    </ul>
    <div class="cd-nav-right">
      <button id="cd-lang-btn" class="cd-nav-lang" aria-label="Cambiar idioma">
        ${lang === 'es' ? 'EN' : 'ES'}
      </button>
      <button id="cd-theme-btn" class="cd-nav-theme" aria-label="Cambiar tema">
        ${theme === 'dark' ? SVG_SUN : SVG_MOON}
      </button>
    </div>`;
  document.body.insertBefore(nav, document.body.firstChild);

  /* Aplicar tema inicial */
  applyTheme(theme);

  /* Event listeners — lang / theme */
  document.getElementById('cd-lang-btn').addEventListener('click', () => {
    applyLang(lang === 'es' ? 'en' : 'es');
  });
  document.getElementById('cd-theme-btn').addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  });

  /* Dropdowns — toggle al click, cerrar al hacer click fuera */
  nav.querySelectorAll('.cd-has-dropdown > a').forEach(a => {
    a.addEventListener('click', e => {
      const li = a.parentElement;
      const isOpen = li.classList.contains('cd-open');
      nav.querySelectorAll('.cd-has-dropdown').forEach(el => el.classList.remove('cd-open'));
      if (!isOpen) { li.classList.add('cd-open'); e.preventDefault(); }
    });
  });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      nav.querySelectorAll('.cd-has-dropdown').forEach(el => el.classList.remove('cd-open'));
    }
  });

  /* ── Inyectar Footer (al final del DOM) ── */
  function injectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'cd-shared-footer';
  footer.innerHTML = `
    <div class="cd-footer-main">
      <!-- Marca -->
      <div class="cd-footer-brand-col">
        <img src="./manus-storage/logo-white-h-proper_641226e9.png" alt="CartoData" />
        <p class="cd-footer-copy">© 2026 CartoData — Dando contexto geográfico a tu decisión</p>
      </div>

      <!-- Nav grid (estilo index) -->
      <div class="cd-footer-nav-grid">
        <a href="./index.html#impacto"        class="cd-footer-nav-btn">Impacto</a>
        <a href="./index.html#tecnologia"     class="cd-footer-nav-btn">Tecnología</a>
        <a href="./index.html#cultura"        class="cd-footer-nav-btn">Cultura</a>
        <a href="./historia.html"             class="cd-footer-nav-btn">Historia</a>
      </div>

      <!-- Contacto -->
      <div>
        <span class="cd-footer-col-title">Contacto</span>
        <div class="cd-footer-col-links">
          <a href="tel:+523336271552">+52 333 627 1552</a>
          <a href="mailto:info@cartodata.com">info@cartodata.com</a>
          <a href="https://wa.me/523336271552" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div class="cd-footer-social">
          <a href="#" aria-label="YouTube">&#9654;</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="X">✕</a>
          <a href="https://wa.me/523336271552" aria-label="WhatsApp" target="_blank" rel="noreferrer">wa</a>
        </div>
      </div>

      <!-- Info -->
      <div>
        <span class="cd-footer-col-title">Info</span>
        <div class="cd-footer-col-links">
          <a href="#">Ubicaciones</a>
          <a href="#">Kit de prensa</a>
          <a href="./index.html#aviso-privacidad">Aviso de privacidad</a>
          <a href="./index.html#terminos">Términos y condiciones</a>
        </div>
      </div>
    </div>

    <div class="cd-footer-bottom">
      <span>© 2026 CartoData S. de R.L. de C.V. Todos los derechos reservados.</span>
      <div class="cd-footer-legal">
        <a href="./index.html#aviso-privacidad">Aviso de privacidad</a>
        <a href="./index.html#terminos">Términos y condiciones</a>
      </div>
    </div>`;
  document.body.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }

})();
