import { Nutrition } from '@/lib/types';

interface NutritionFactsProps {
  nutrition: Nutrition;
  servings: number;
}

export default function NutritionFacts({ nutrition, servings }: NutritionFactsProps) {
  const nutritionItems = [
    { label: 'Calories', value: nutrition.calories, unit: '' },
    { label: 'Protein', value: nutrition.protein, unit: 'g' },
    { label: 'Carbohydrates', value: nutrition.carbs, unit: 'g' },
    { label: 'Fat', value: nutrition.fat, unit: 'g' },
    { label: 'Fiber', value: nutrition.fiber || 0, unit: 'g' },
    { label: 'Sodium', value: nutrition.sodium || 0, unit: 'mg' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Nutrition Facts</h2>
        <span className="text-sm text-stone-500">Per serving</span>
      </div>

      <div className="border-2 border-stone-900 rounded-lg p-4">
        <div className="text-center border-b-2 border-stone-900 pb-3 mb-3">
          <p className="text-sm font-bold uppercase tracking-wider text-stone-600">Nutrition Facts</p>
          <p className="text-3xl font-black text-stone-900">{nutrition.calories}</p>
          <p className="text-sm text-stone-600">Calories per serving</p>
        </div>

        <div className="space-y-2">
          {nutritionItems.slice(1).map((item, index) => (
            <div key={item.label} className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-bold text-stone-900">{item.label}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-stone-900 mr-1">
                  {Math.round(item.value / servings)}
                </span>
                <span className="text-stone-600">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t-2 border-stone-900 text-xs text-stone-500">
          * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
        </div>
      </div>
    </div>
  );
}
