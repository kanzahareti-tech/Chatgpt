# The Rustic Kitchen – Developer Guide

This project is a production-ready static site skeleton for a food blog. It includes a complete file structure, design system, and sample content to help you customize quickly.

How to customize
- Colors and typography: edit CSS variables in css/style.css. Change --color-primary, --font-heading, --font-body to suit your brand.
- Add recipes: edit js/recipes.js data array. Each recipe object should provide title, category, time, servings, difficulty, description, ingredients, steps, tips, nutrition, image, author, cuisine, and slug.
- Layout tweaks: modify HTML in index.html, recipes.html, recipe-single.html, etc. CSS is responsive-first in css/style.css and css/responsive.css.
- Content updates: replace placeholder text in HTML pages with your own content. Use the built-in data model in js/recipes.js for consistency.
- Deployment: build as static assets, host on any static host (Netlify, Vercel, GitHub Pages). Ensure images exist under images/* and assets under assets/*.

Advanced notes
- Accessibility: all images include alt text, semantic HTML used, and skip links present.
- SEO: JSON-LD Recipe markup is generated in recipe-single.html; ensure titles/descriptions are unique per page.
- Performance: images are lazy-loaded via native browser behavior; additional optimizations can be applied later.
