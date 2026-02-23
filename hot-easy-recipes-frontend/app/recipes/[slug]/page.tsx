import React from 'react';
import { notFound } from 'next/navigation';

export default function RecipeDetail({ params }: { params: { slug: string }}) {
  const slug = params.slug;
  if (!slug) return notFound();
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Recipe: {slug}</h1>
      <p>Detail view will render here (skeleton).</p>
    </section>
  );
}
