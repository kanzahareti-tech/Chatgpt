'use client';

import { useState, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { mockCategories, mockCuisines } from '@/lib/api';

interface FilterFormProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  category: string;
  cuisine: string;
  difficulty: string;
}

export default function FilterForm({ onFilterChange }: FilterFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get('category') || '',
    cuisine: searchParams.get('cuisine') || '',
    difficulty: searchParams.get('difficulty') || '',
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newFilters = {
      category: searchParams.get('category') || '',
      cuisine: searchParams.get('cuisine') || '',
      difficulty: searchParams.get('difficulty') || '',
    };
    setFilters(newFilters);
  }, [searchParams]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);

    // Update URL
    const params = new URLSearchParams();
    if (newFilters.category) params.set('category', newFilters.category);
    if (newFilters.cuisine) params.set('cuisine', newFilters.cuisine);
    if (newFilters.difficulty) params.set('difficulty', newFilters.difficulty);

    const query = searchParams.get('q');
    if (query) params.set('q', query);

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : '/recipes');
  };

  const clearFilters = () => {
    const emptyFilters = { category: '', cuisine: '', difficulty: '' };
    setFilters(emptyFilters);
    onFilterChange?.(emptyFilters);

    const query = searchParams.get('q');
    router.push(query ? `?q=${query}` : '/recipes');
  };

  const hasActiveFilters = filters.category || filters.cuisine || filters.difficulty;

  const difficulties = ['Easy', 'Medium', 'Hard'];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-stone-900 font-medium"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
              {[filters.category, filters.cuisine, filters.difficulty].filter(Boolean).length}
            </span>
          )}
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-orange-600 hover:text-orange-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Filter Options */}
      <div className={`space-y-4 ${isOpen ? '' : 'hidden'}`}>
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:border-orange-500"
          >
            <option value="">All Categories</option>
            {mockCategories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name} ({cat.count})
              </option>
            ))}
          </select>
        </div>

        {/* Cuisine Filter */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Cuisine</label>
          <select
            value={filters.cuisine}
            onChange={(e) => handleFilterChange('cuisine', e.target.value)}
            className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:border-orange-500"
          >
            <option value="">All Cuisines</option>
            {mockCuisines.map((cuisine) => (
              <option key={cuisine.slug} value={cuisine.slug}>
                {cuisine.name}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Difficulty</label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => handleFilterChange('difficulty', filters.difficulty === diff ? '' : diff)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filters.difficulty === diff
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
