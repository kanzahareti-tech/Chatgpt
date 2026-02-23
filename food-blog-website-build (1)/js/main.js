/* Core functionality for the demo food blog site */
(function(){
  // Theme toggle (light/dark) with localStorage persistence
  const themeKey = 'rk_theme';
  function applyTheme(mode){ document.documentElement.style.colorScheme = mode; if (mode==='dark'){ document.body.style.backgroundColor = '#111'; } else { document.body.style.backgroundColor = ''; } }
  function detectPref(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
  const saved = localStorage.getItem(themeKey) || detectPref(); applyTheme(saved);
  const btnTheme = document.getElementById('btn-theme');
  if (btnTheme){ btnTheme.addEventListener('click', ()=>{ const current = localStorage.getItem(themeKey) || 'light'; const next = current === 'dark' ? 'light' : 'dark'; localStorage.setItem(themeKey, next); applyTheme(next); }); }

  // Header shrink on scroll
  const header = document.querySelector('.site-header');
  let lastY = 0;
  function onScroll(){ const y = window.scrollY; if (y > 80){ header.style.background = 'rgba(255,255,255,0.95)'; header.style.boxShadow = '0 2px 8px rgba(0,0,0,.05)'; } else { header.style.background = 'rgba(255,255,255,0.75)'; header.style.boxShadow = 'none'; } lastY = y; }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Search modal (quick mock)
  const btnSearch = document.getElementById('btn-search');
  if (btnSearch){ btnSearch.addEventListener('click', ()=>{ alert('Search modal would open in a full implementation.'); }); }

  // Back to top
  const backToTop = document.createElement('button'); backToTop.textContent = '↑ Top'; backToTop.className = 'btn'; backToTop.style.position = 'fixed'; backToTop.style.right = '20px'; backToTop.style.bottom = '20px'; backToTop.style.display = 'none'; backToTop.addEventListener('click', ()=> window.scrollTo({ top:0, behavior:'smooth'})); document.body.appendChild(backToTop);
  window.addEventListener('scroll', ()=>{ backToTop.style.display = window.scrollY > 500 ? 'block' : 'none'; });
})();
