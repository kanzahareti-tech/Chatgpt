import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { RecipeCard } from '@/components/RecipeCard';
import { useStore } from '@/store/useStore';
import { categories } from '@/data/categories';

const ITEMS_PER_PAGE = 9;

export function Recipes() {
  const { recipes, searchQuery, setSearchQuery, filters, setFilters, resetFilters } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const cuisines = [...new Set(recipes.map(r => r.cuisine))];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          recipe.title.toLowerCase().includes(query) ||
          recipe.description.toLowerCase().includes(query) ||
          recipe.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && recipe.category.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty && recipe.difficulty !== filters.difficulty) {
        return false;
      }

      // Cuisine filter
      if (filters.cuisine && recipe.cuisine !== filters.cuisine) {
        return false;
      }

      // Max time filter
      const totalTime = recipe.prepTime + recipe.cookTime;
      if (filters.maxTime < 999 && totalTime > filters.maxTime) {
        return false;
      }

      return true;
    });
  }, [recipes, searchQuery, filters]);

  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const paginatedRecipes = filteredRecipes.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const hasActiveFilters = searchQuery || filters.category || filters.difficulty || filters.cuisine || filters.maxTime < 999;

  const clearAll = () => {
    setSearchQuery('');
    resetFilters();
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">All Recipes</h1>
        <p className="text-stone-600">
          Explore our collection of {recipes.length} delicious recipes
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search recipes, ingredients, or tags..."
              className="w-full pl-12 pr-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors ${
              showFilters || hasActiveFilters
                ? 'bg-orange-500 text-white border-orange-500'
                : 'border-stone-200 text-stone-600 hover:border-orange-500'
            }`}
          >
            <Filter className="h-5 w-5" />
            Filters
            {hasActiveFilters && (
              <span className="bg-white text-orange-500 text-xs px-2 py-0.5 rounded-full">
                Active
              </span>
            )}
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-stone-100">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => {
                    setFilters({ category: e.target.value });
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Difficulty
                </label>
                <select
                  value={filters.difficulty}
                  onChange={(e) => {
                    setFilters({ difficulty: e.target.value });
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Any Difficulty</option>
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>

              {/* Cuisine */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Cuisine
                </label>
                <select
                  value={filters.cuisine}
                  onChange={(e) => {
                    setFilters({ cuisine: e.target.value });
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Cuisines</option>
                  {cuisines.map(cuisine => (
                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                  ))}
                </select>
              </div>

              {/* Max Time */}
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Max Total Time
                </label>
                <select
                  value={filters.maxTime}
                  onChange={(e) => {
                    setFilters({ maxTime: Number(e.target.value) });
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value={999}>Any Duration</option>
                  <option value={30}>Under 30 min</option>
                  <option value={60}>Under 1 hour</option>
                  <option value={120}>Under 2 hours</option>
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="mt-4 flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600"
              >
                <X className="h-4 w-4" />
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6 text-stone-600">
        Showing {paginatedRecipes.length} of {filteredRecipes.length} recipes
      </div>

      {/* Recipe Grid */}
      {paginatedRecipes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-stone-500 text-lg mb-4">No recipes found matching your criteria.</p>
          <button
            onClick={clearAll}
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Clear filters and try again
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-stone-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-orange-500"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-orange-500 text-white'
                  : 'border border-stone-200 hover:border-orange-500'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-stone-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-orange-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
