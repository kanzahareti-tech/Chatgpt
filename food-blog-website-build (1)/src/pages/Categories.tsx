import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';

export function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Recipe Categories</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Explore our diverse collection of recipes organized by category. 
          From quick breakfasts to elaborate dinner parties, find exactly what you're craving.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
