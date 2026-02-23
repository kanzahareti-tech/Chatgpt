import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import { RecipeCard } from '@/components/RecipeCard';
import { useStore } from '@/store/useStore';
import { categories } from '@/data/categories';

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { recipes } = useStore();
  
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    difficulty: '',
    maxTime: 999,
    cuisine: '',
    dietary: ''
  });

  const cuisines = [...new Set(recipes.map(r => r.cuisine))];

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setQuery(q);
  }, [searchParams]);

  const results = useMemo(() => {
    if (!query && !filters.category && !filters.difficulty && !filters.cuisine) {
      return [];
    }

    return recipes.filter(recipe => {
      // Text search
      if (query) {
        const lowerQuery = query.toLowerCase();
        const matchesText = 
          recipe.title.toLowerCase().includes(lowerQuery) ||
          recipe.description.toLowerCase().includes(lowerQuery) ||
          recipe.tags.some(t => t.toLowerCase().includes(lowerQuery)) ||
          recipe.ingredients.some(i => i.toLowerCase().includes(lowerQuery)) ||
          recipe.cuisine.toLowerCase().includes(lowerQuery) ||
          recipe.category.toLowerCase().includes(lowerQuery);
        if (!matchesText) return false;
      }

      // Filters
      if (filters.category && recipe.category !== filters.category) return false;
      if (filters.difficulty && recipe.difficulty !== filters.difficulty) return false;
      if (filters.cuisine && recipe.cuisine !== filters.cuisine) return false;
      if (filters.maxTime < 999 && (recipe.prepTime + recipe.cookTime) > filters.maxTime) return false;

      return true;
    });
  }, [query, filters, recipes]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      difficulty: '',
      maxTime: 999,
      cuisine: '',
      dietary: ''
    });
  };

  const hasActiveFilters = filters.category || filters.difficulty || filters.cuisine || filters.maxTime < 999;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Search Recipes</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Find the perfect recipe by searching for ingredients, dish names, cuisines, or dietary preferences.
        </p>
      </div>

      {/* Search Form */}
      <div className="max-w-3xl mx-auto mb-12">
        <form onSubmit={handleSearch} className="relative">
          <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for recipes, ingredients, or cuisines..."
            className="w-full pl-14 pr-32 py-4 text-lg border-2 border-stone-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Advanced Filters Toggle */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              showAdvanced || hasActiveFilters
                ? 'bg-orange-100 text-orange-600'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Advanced Filters
            {hasActiveFilters && (
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                Active
              </span>
            )}
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-orange-500 hover:text-orange-600"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Advanced Filters Panel */}
        {showAdvanced && (
          <div className="mt-4 p-6 bg-stone-50 rounded-2xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Difficulty
                </label>
                <select
                  value={filters.difficulty}
                  onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Any Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Cuisine
                </label>
                <select
                  value={filters.cuisine}
                  onChange={(e) => setFilters({ ...filters, cuisine: e.target.value })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Cuisines</option>
                  {cuisines.map(cuisine => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Max Cook Time
                </label>
                <select
                  value={filters.maxTime}
                  onChange={(e) => setFilters({ ...filters, maxTime: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value={999}>Any Duration</option>
                  <option value={15}>15 minutes or less</option>
                  <option value={30}>30 minutes or less</option>
                  <option value={60}>1 hour or less</option>
                  <option value={120}>2 hours or less</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {(query || hasActiveFilters) && (
        <div>
          <div className="mb-6 text-stone-600">
            Found {results.length} recipe{results.length !== 1 ? 's' : ''}
            {query && <> for "<strong>{query}</strong>"</>}
          </div>

          {results.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-stone-50 rounded-2xl">
              <p className="text-stone-500 text-lg mb-4">
                No recipes found matching your search.
              </p>
              <p className="text-stone-400">
                Try different keywords or adjust your filters.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Initial State - Popular Searches */}
      {!query && !hasActiveFilters && (
        <div className="text-center">
          <h2 className="text-xl font-bold text-stone-800 mb-6">Popular Searches</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['pasta', 'chicken', 'quick meals', 'vegetarian', 'dessert', 'healthy', 'breakfast', 'curry'].map(term => (
              <button
                key={term}
                onClick={() => {
                  setQuery(term);
                  setSearchParams({ q: term });
                }}
                className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
