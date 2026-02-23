'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Star, Heart } from 'lucide-react';
import { Recipe } from '@/lib/types';
import { useState } from 'react';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    // In a real app, this would save to localStorage or backend
  };

  const totalTime = recipe.recipeFields.totalTime ||
    `${parseInt(recipe.recipeFields.prepTime) + parseInt(recipe.recipeFields.cookTime)} mins`;

  return (
    <Link href={`/recipes/${recipe.slug}`} className="group">
      <article className="bg-white rounded-xl overflow-hidden card-shadow transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={recipe.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg'}
            alt={recipe.featuredImage?.node?.altText || recipe.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Difficulty Badge */}
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
            recipe.recipeFields.difficulty === 'Easy'
              ? 'bg-green-100 text-green-700'
              : recipe.recipeFields.difficulty === 'Medium'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {recipe.recipeFields.difficulty}
          </span>
          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isFavorited ? 'fill-orange-500 text-orange-500' : 'text-stone-400'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-1 mb-2">
            {recipe.recipeCategories?.nodes?.slice(0, 2).map((category) => (
              <span
                key={category.slug}
                className="text-xs text-orange-600 font-medium"
              >
                {category.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {recipe.title}
          </h3>

          {/* Excerpt */}
          <p className="text-stone-600 text-sm line-clamp-2 mb-4">
            {recipe.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-stone-500">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{totalTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{recipe.recipeFields.servings}</span>
              </div>
            </div>
            {recipe.rating && (
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{recipe.rating}</span>
                <span className="text-stone-400">({recipe.ratingCount})</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
