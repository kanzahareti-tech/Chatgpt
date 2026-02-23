import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { RecipeCard } from '@/components/RecipeCard';
import { useStore } from '@/store/useStore';

export function SavedRecipes() {
  const { recipes, savedRecipes, isAuthenticated } = useStore();
  
  const saved = recipes.filter(r => savedRecipes.includes(r.id));

  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="h-8 w-8 text-stone-400" />
        </div>
        <h1 className="text-2xl font-bold text-stone-800 mb-4">Sign in to view saved recipes</h1>
        <p className="text-stone-600 mb-6">
          Create an account or sign in to save and access your favorite recipes.
        </p>
        <Link
          to="/login"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600"
        >
          Sign In
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-stone-800 mb-2">Saved Recipes</h1>
          <p className="text-stone-600">
            {saved.length} recipe{saved.length !== 1 ? 's' : ''} saved
          </p>
        </div>
      </div>

      {saved.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {saved.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-stone-50 rounded-2xl">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-stone-400" />
          </div>
          <h2 className="text-xl font-bold text-stone-800 mb-2">No saved recipes yet</h2>
          <p className="text-stone-600 mb-6">
            Start exploring and save recipes you love!
          </p>
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600"
          >
            Browse Recipes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
