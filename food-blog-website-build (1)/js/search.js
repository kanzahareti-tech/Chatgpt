/* Lightweight search scaffold for recipes and posts (no backend) */
(function(){
  const resultsContainer = document.getElementById('results-grid');
  if (!resultsContainer) return;
  const query = new URLSearchParams(window.location.search).get('q') || '';
  // Very simple client-side search over recipes dataset
  const data = (window.SITE_DATA?.recipes || []).concat(window.SITE_DATA?.posts || []);
  const results = data.filter(item => {
    const t = (item.title || '').toLowerCase();
    return t.includes(query.toLowerCase());
  });
  resultsContainer.innerHTML = results.map(r => {
    const slug = r.slug || (r.title.toLowerCase().replace(/[^a-z0-9]+/g,'-'));
    const img = r.image || 'images/recipes/' + slug + '.svg';
    return `<article class="card" style="border-radius:12px; overflow:hidden; box-shadow:var(--shadow-card); background:white;">` +
      `<a href="recipe-single.html?recipe=${slug}" style="display:block; height:180px; background:url('${img}') center/cover no-repeat;"></a>` +
      `<div style="padding:12px;">` +
      `<span class="badge" style="font-size:.75rem; background:#f1f1f1; padding:4px 8px; border-radius:999px;">${item.category || 'Recipe'}</span>` +
      `<h3 style="font-family:var(--font-heading, 'Playfair Display', serif); font-size:1rem; margin:6px 0; height:2.2em; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${r.title || r.name}</h3>` +
      `</div></article>`;
  }).join('');
})();
