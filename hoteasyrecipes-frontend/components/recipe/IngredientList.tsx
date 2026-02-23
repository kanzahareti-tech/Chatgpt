'use client';

import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import { Ingredient } from '@/lib/types';

interface IngredientListProps {
  ingredients: Ingredient[];
  servings: number;
  baseServings: number;
}

export default function IngredientList({ ingredients, servings, baseServings }: IngredientListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [currentServings, setCurrentServings] = useState(servings);

  const multiplier = currentServings / baseServings;

  const scaleQuantity = (quantity: string): string => {
    const num = parseFloat(quantity);
    if (isNaN(num)) return quantity;
    const scaled = num * multiplier;
    // Round to reasonable fractions
    if (scaled === Math.floor(scaled)) return scaled.toString();
    if (scaled % 0.25 === 0) return scaled.toFixed(2).replace(/\.00$/, '').replace(/\.50$/, '.5').replace(/\.25$/, '.25').replace(/\.75$/, '.75');
    if (scaled % 0.5 === 0) return scaled.toFixed(1).replace(/\.0$/, '');
    return scaled.toFixed(1).replace(/\.0$/, '');
  };

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const increaseServings = () => {
    setCurrentServings(prev => prev + 1);
  };

  const decreaseServings = () => {
    if (currentServings > 1) {
      setCurrentServings(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Ingredients</h2>

        {/* Servings Adjuster */}
        <div className="flex items-center space-x-3 bg-stone-100 rounded-lg p-2">
          <button
            onClick={decreaseServings}
            disabled={currentServings <= 1}
            className="p-1 rounded-full hover:bg-stone-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease servings"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="font-medium text-stone-900 min-w-[3rem] text-center">
            {currentServings}
          </span>
          <button
            onClick={increaseServings}
            className="p-1 rounded-full hover:bg-stone-200 transition-colors"
            aria-label="Increase servings"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Ingredients List */}
      <ul className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            className={`flex items-start space-x-3 p-3 rounded-lg transition-all cursor-pointer ${
              checkedItems.has(index) ? 'bg-green-50' : 'hover:bg-stone-50'
            }`}
            onClick={() => toggleItem(index)}
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              checkedItems.has(index)
                ? 'bg-green-500 border-green-500'
                : 'border-stone-300'
            }`}>
              {checkedItems.has(index) && (
                <Check className="h-4 w-4 text-white" />
              )}
            </div>
            <div className="flex-1">
              <span className={`font-medium ${checkedItems.has(index) ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                <span className="text-orange-600">{scaleQuantity(ingredient.quantity)} {ingredient.unit}</span>{' '}
                {ingredient.item}
              </span>
              {ingredient.notes && (
                <span className="text-stone-500 text-sm ml-1">({ingredient.notes})</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {multiplier !== 1 && (
        <p className="mt-4 text-sm text-stone-500 text-center">
          Ingredients scaled for {currentServings} servings (original: {baseServings})
        </p>
      )}
    </div>
  );
}
