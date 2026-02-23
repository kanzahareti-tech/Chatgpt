import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative rounded-2xl overflow-hidden aspect-[3/2]"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
          {category.name}
        </h3>
        <p className="text-white/80 text-sm mb-3 line-clamp-2">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
          <span>{category.recipeCount} recipes</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
