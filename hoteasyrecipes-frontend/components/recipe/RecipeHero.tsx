import Image from 'next/image';
import { Clock, Users, Star, Calendar } from 'lucide-react';
import { Recipe } from '@/lib/types';

interface RecipeHeroProps {
  recipe: Recipe;
}

export default function RecipeHero({ recipe }: RecipeHeroProps) {
  const totalTime = recipe.recipeFields.totalTime ||
    `${parseInt(recipe.recipeFields.prepTime) + parseInt(recipe.recipeFields.cookTime)} mins`;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="relative h-[50vh] md:h-[60vh] min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={recipe.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg'}
          alt={recipe.featuredImage?.node?.altText || recipe.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container-custom pb-12">
          <div className="max-w-3xl">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.recipeCategories?.nodes?.map((category) => (
                <span
                  key={category.slug}
                  className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full"
                >
                  {category.name}
                </span>
              ))}
              {recipe.recipeCuisines?.nodes?.map((cuisine) => (
                <span
                  key={cuisine.slug}
                  className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm"
                >
                  {cuisine.name}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {recipe.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              {/* Author & Date */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">
                    {recipe.author?.node?.name?.charAt(0) || 'A'}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{recipe.author?.node?.name || 'Chef'}</p>
                  <p className="text-sm text-white/70 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(recipe.date)}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center space-x-1">
                <Clock className="h-5 w-5" />
                <span>{totalTime}</span>
              </div>

              {/* Servings */}
              <div className="flex items-center space-x-1">
                <Users className="h-5 w-5" />
                <span>{recipe.recipeFields.servings} servings</span>
              </div>

              {/* Rating */}
              {recipe.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{recipe.rating}</span>
                  <span className="text-white/70">({recipe.ratingCount} reviews)</span>
                </div>
              )}

              {/* Difficulty */}
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                recipe.recipeFields.difficulty === 'Easy'
                  ? 'bg-green-500/20 text-green-300'
                  : recipe.recipeFields.difficulty === 'Medium'
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-red-500/20 text-red-300'
              }`}>
                {recipe.recipeFields.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
