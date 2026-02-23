import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fetchCategories } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Categories - HotEasyRecipes',
  description: 'Browse recipes by category: breakfast, lunch, dinner, desserts, snacks, and more.',
};

export const revalidate = 3600;

export default async function CategoriesPage() {
  const { recipeCategories } = await fetchCategories();
  const categories = recipeCategories.nodes;

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-center">
            Recipe Categories
          </h1>
          <p className="text-stone-600 text-center max-w-2xl mx-auto">
            Browse our recipes by category to find exactly what you&apos;re looking for.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group bg-white rounded-xl overflow-hidden card-shadow hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className={`absolute inset-0 flex items-center justify-center ${
                  category.slug === 'breakfast' ? 'bg-amber-100' :
                  category.slug === 'lunch' ? 'bg-green-100' :
                  category.slug === 'dinner' ? 'bg-orange-100' :
                  category.slug === 'dessert' ? 'bg-pink-100' :
                  category.slug === 'snacks' ? 'bg-purple-100' :
                  'bg-blue-100'
                }`}>
                  <span className={`font-serif text-6xl font-bold ${
                    category.slug === 'breakfast' ? 'text-amber-600' :
                    category.slug === 'lunch' ? 'text-green-600' :
                    category.slug === 'dinner' ? 'text-orange-600' :
                    category.slug === 'dessert' ? 'text-pink-600' :
                    category.slug === 'snacks' ? 'text-purple-600' :
                    'text-blue-600'
                  }`}>
                    {category.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h2>
                <p className="text-stone-600">
                  {category.count} recipes
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
