import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/recipe/RecipeCard';
import { fetchRecipes, fetchCategories } from '@/lib/api';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { recipeCategories } = await fetchCategories();
  const category = recipeCategories.nodes.find((c) => c.slug === slug);

  return {
    title: category ? `${category.name} Recipes - HotEasyRecipes` : 'Category - HotEasyRecipes',
    description: category ? `Browse our collection of ${category.name.toLowerCase()} recipes.` : 'Browse recipes by category.',
  };
}

export async function generateStaticParams() {
  const { recipeCategories } = await fetchCategories();
  return recipeCategories.nodes.map((category) => ({
    slug: category.slug,
  }));
}

export const revalidate = 3600;

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const searchParamsResolved = await searchParams;
  const cuisine = typeof searchParamsResolved.cuisine === 'string' ? searchParamsResolved.cuisine : '';
  const difficulty = typeof searchParamsResolved.difficulty === 'string' ? searchParamsResolved.difficulty : '';

  const { recipeCategories } = await fetchCategories();
  const category = recipeCategories.nodes.find((c) => c.slug === slug);

  const { recipes } = await fetchRecipes({
    first: 12,
    category: slug,
    cuisine,
  });

  const categoryRecipes = recipes.edges.map((edge) => edge.node);

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container-custom">
          <nav className="text-sm text-stone-500 mb-4">
            <a href="/categories" className="hover:text-orange-600">Categories</a>
            <span className="mx-2">/</span>
            <span className="text-stone-900">{category?.name || slug}</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            {category?.name || slug} Recipes
          </h1>
          <p className="text-stone-600 max-w-2xl">
            {category?.count || 0} recipes in this category
          </p>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="container-custom py-12">
        {categoryRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="font-serif text-2xl text-stone-900 mb-4">
              No recipes found
            </h2>
            <p className="text-stone-600 mb-6">
              We don&apos;t have any {category?.name || slug} recipes yet. Check back soon!
            </p>
            <a href="/categories" className="btn-primary">
              View All Categories
            </a>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
