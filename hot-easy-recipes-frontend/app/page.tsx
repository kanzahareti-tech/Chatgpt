import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>HotEasyRecipes</h1>
      <p>Hot, Easy, Delicious Recipes</p>
      <p><Link href="/recipes">Browse recipes</Link></p>
    </main>
  );
}
