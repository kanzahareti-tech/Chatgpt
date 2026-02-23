import { Suspense } from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/recipe/RecipeCard';
import FilterForm from '@/components/forms/FilterForm';
import SearchForm from '@/components/forms/SearchForm';
import { fetchRecipes } from '@/lib/api';

export const metadata: Metadata = {
  title: 'All Recipes - HotEasyRecipes',
  description: 'Browse our collection of quick and easy recipes for breakfast, lunch, dinner, and more.',
};

export const revalidate = 3600;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RecipesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const category = typeof params.category === 'string' ? params.category : '';
  const cuisine = typeof params.cuisine === 'string' ? params.cuisine : '';
  const search = typeof params.q === 'string' ? params.q : '';

  const { recipes } = await fetchRecipes({
    first: 12,
    category,
    cuisine,
    search,
  });

  const allRecipes = recipes.edges.map((edge) => edge.node);

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-center">
            All Recipes
          </h1>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-8">
            Discover our complete collection of delicious, easy-to-make recipes for every occasion.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <SearchForm />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24">
              <FilterForm />
            </div>
          </aside>

          {/* Recipe Grid */}
          <main className="lg:w-3/4">
            {allRecipes.length > 0 ? (
              <>
                <div className="mb-4 text-stone-600">
                  Showing <strong>{allRecipes.length}</strong> recipes
                  {search && (
                    <> for &quot;<strong>{search}</strong>&quot;</>
                  )}
                  {category && (
                    <> in <strong>{category}</strong></>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {allRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>

                {recipes.pageInfo.hasNextPage && (
                  <div className="mt-12 text-center">
                    <button className="btn-primary">
                      Load More Recipes
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <h2 className="font-serif text-2xl text-stone-900 mb-4">
                  No recipes found
                </h2>
                <p className="text-stone-600 mb-6">
                  Try adjusting your filters or search terms.
                </p>
                <a href="/recipes" className="btn-secondary">
                  Clear Filters
                </a>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
