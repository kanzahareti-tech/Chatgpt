import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { RecipeCard } from '@/components/RecipeCard';
import { useStore } from '@/store/useStore';
import { getCategoryBySlug } from '@/data/categories';

export function CategoryPage() {
  const { slug } = useParams();
  const { recipes } = useStore();
  const category = getCategoryBySlug(slug || '');

  const categoryRecipes = recipes.filter(
    r => r.category.toLowerCase() === slug?.toLowerCase()
  );

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-stone-800 mb-4">Category not found</h1>
        <Link to="/categories" className="text-orange-500 hover:text-orange-600">
          Browse all categories
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-64 md:h-80">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              All Categories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-white/90 max-w-2xl text-lg">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Recipes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-stone-600">
            {categoryRecipes.length} recipes in this category
          </p>
        </div>

        {categoryRecipes.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-stone-500 text-lg">
              No recipes in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
