import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/recipe/RecipeCard';
import FilterForm from '@/components/forms/FilterForm';
import SearchForm from '@/components/forms/SearchForm';
import { fetchRecipes } from '@/lib/api';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata: Metadata = {
  title: 'Search Recipes - HotEasyRecipes',
  description: 'Search our collection of quick and easy recipes.',
};

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = typeof params.q === 'string' ? params.q : '';
  const category = typeof params.category === 'string' ? params.category : '';
  const cuisine = typeof params.cuisine === 'string' ? params.cuisine : '';

  const { recipes } = await fetchRecipes({
    first: 20,
    search: query,
    category,
    cuisine,
  });

  const results = recipes.edges.map((edge) => edge.node);

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-center">
            Search Recipes
          </h1>
          <p className="text-stone-600 text-center max-w-2xl mx-auto mb-8">
            Find the perfect recipe for any occasion.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <SearchForm />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container-custom py-12">
        {query && (
          <div className="mb-6">
            <p className="text-stone-600">
              {results.length} results for &quot;<strong>{query}</strong>&quot;
              {category && <> in <strong>{category}</strong></>}
            </p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <FilterForm />
          </aside>

          {/* Results Grid */}
          <main className="lg:w-3/4">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="font-serif text-2xl text-stone-900 mb-4">
                  No recipes found
                </h2>
                <p className="text-stone-600 mb-6">
                  Try different search terms or browse our categories.
                </p>
                <a href="/recipes" className="btn-primary">
                  Browse All Recipes
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
