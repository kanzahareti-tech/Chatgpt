'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Trash2, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/recipe/RecipeCard';
import { Recipe } from '@/lib/types';
import { mockRecipes } from '@/lib/api';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('hoteasy_favorites');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites);
      setFavorites(favoriteIds);

      // Get full recipe data for favorites
      const recipes = mockRecipes.filter(r => favoriteIds.includes(r.id));
      setFavoriteRecipes(recipes);
    }
    setIsLoaded(true);
  }, []);

  const removeFavorite = (recipeId: string) => {
    const newFavorites = favorites.filter(id => id !== recipeId);
    setFavorites(newFavorites);
    localStorage.setItem('hoteasy_favorites', JSON.stringify(newFavorites));
    setFavoriteRecipes(recipe => recipe.filter(r => r.id !== recipeId));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    setFavoriteRecipes([]);
    localStorage.removeItem('hoteasy_favorites');
  };

  if (!isLoaded) {
    return (
      <>
        <Header />
        <div className="container-custom py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-stone-200 rounded w-48 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-xl h-80"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-center">
            My Favorites
          </h1>
          <p className="text-stone-600 text-center max-w-2xl mx-auto">
            Your saved recipes for quick access.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        {favoriteRecipes.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-stone-600">
                {favoriteRecipes.length} saved recipe{favoriteRecipes.length !== 1 ? 's' : ''}
              </p>
              <button
                onClick={clearAllFavorites}
                className="text-red-600 hover:text-red-700 font-medium flex items-center space-x-2"
              >
                <Trash2 className="h-4 w-4" />
                <span>Clear All</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRecipes.map((recipe) => (
                <div key={recipe.id} className="relative">
                  <RecipeCard recipe={recipe} />
                  <button
                    onClick={() => removeFavorite(recipe.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-red-50 transition-colors"
                    aria-label="Remove from favorites"
                  >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-stone-400" />
            </div>
            <h2 className="font-serif text-2xl text-stone-900 mb-4">
              No favorites yet
            </h2>
            <p className="text-stone-600 mb-8 max-w-md mx-auto">
              Start exploring recipes and click the heart icon to save your favorites for later.
            </p>
            <Link href="/recipes" className="btn-primary inline-flex items-center space-x-2">
              <span>Browse Recipes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
