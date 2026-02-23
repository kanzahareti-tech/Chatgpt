import { Link } from 'react-router-dom';
import { Clock, Users, Star, Heart } from 'lucide-react';
import { Recipe } from '@/types';
import { useStore } from '@/store/useStore';

interface RecipeCardProps {
  recipe: Recipe;
  featured?: boolean;
}

export function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  const { savedRecipes, toggleSaveRecipe, isAuthenticated } = useStore();
  const isSaved = savedRecipes.includes(recipe.id);
  
  const avgRating = recipe.reviews.length > 0
    ? recipe.reviews.reduce((sum, r) => sum + r.rating, 0) / recipe.reviews.length
    : 0;

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <article className={`group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 ${featured ? 'md:flex' : ''}`}>
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'aspect-[4/3]'}`}>
        <Link to={`/recipe/${recipe.slug}`}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${featured ? 'h-64 md:h-full' : ''}`}
          />
        </Link>
        
        {/* Category Badge */}
        <Link
          to={`/category/${recipe.category.toLowerCase()}`}
          className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-stone-700 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
        >
          {recipe.category}
        </Link>

        {/* Save Button */}
        {isAuthenticated && (
          <button
            onClick={() => toggleSaveRecipe(recipe.id)}
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
              isSaved 
                ? 'bg-orange-500 text-white' 
                : 'bg-white/90 backdrop-blur-sm text-stone-600 hover:text-orange-500'
            }`}
          >
            <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        )}

        {/* Difficulty Badge */}
        <div className={`absolute bottom-4 left-4 px-2 py-1 text-xs font-medium rounded ${
          recipe.difficulty === 'Easy' ? 'bg-green-500 text-white' :
          recipe.difficulty === 'Medium' ? 'bg-yellow-500 text-white' :
          'bg-red-500 text-white'
        }`}>
          {recipe.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className={`p-5 ${featured ? 'md:w-1/2 md:p-8 md:flex md:flex-col md:justify-center' : ''}`}>
        <Link to={`/recipe/${recipe.slug}`}>
          <h3 className={`font-bold text-stone-800 group-hover:text-orange-500 transition-colors ${featured ? 'text-2xl mb-3' : 'text-lg mb-2'}`}>
            {recipe.title}
          </h3>
        </Link>
        
        <p className={`text-stone-500 line-clamp-2 ${featured ? 'text-base mb-4' : 'text-sm mb-3'}`}>
          {recipe.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-stone-500">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {totalTime} min
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {recipe.servings} servings
          </span>
          {avgRating > 0 && (
            <span className="flex items-center gap-1 text-orange-500">
              <Star className="h-4 w-4 fill-current" />
              {avgRating.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
