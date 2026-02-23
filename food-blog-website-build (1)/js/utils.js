// Utility helpers used across pages
function formatTime(mins){ if (typeof mins === 'string') return mins; if (mins < 60) return mins + ' mins'; const h = Math.floor(mins/60); const m = mins % 60; return h + 'h ' + (m ? m + 'm' : ''); }
function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }
// Global slug helper (used in multiple pages)
function slugify(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
