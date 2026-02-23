import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Users, ChefHat, Flame, Heart, Share2, Printer, 
  Star, CheckCircle, ArrowLeft 
} from 'lucide-react';
import { useStore } from '@/store/useStore';

export function RecipeDetail() {
  const { slug } = useParams();
  const { recipes, savedRecipes, toggleSaveRecipe, isAuthenticated, user, addReview } = useStore();
  const recipe = recipes.find(r => r.slug === slug);

  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-stone-800 mb-4">Recipe not found</h1>
        <Link to="/recipes" className="text-orange-500 hover:text-orange-600">
          Browse all recipes
        </Link>
      </div>
    );
  }

  const isSaved = savedRecipes.includes(recipe.id);
  const totalTime = recipe.prepTime + recipe.cookTime;
  const avgRating = recipe.reviews.length > 0
    ? recipe.reviews.reduce((sum, r) => sum + r.rating, 0) / recipe.reviews.length
    : 0;

  const toggleIngredient = (index: number) => {
    setCheckedIngredients(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleStep = (index: number) => {
    setCheckedSteps(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    addReview(recipe.id, reviewContent, reviewRating);
    setReviewContent('');
    setReviewRating(5);
    setShowReviewForm(false);
  };

  // JSON-LD Schema for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.description,
    "image": recipe.image,
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${totalTime}M`,
    "recipeYield": `${recipe.servings} servings`,
    "recipeCategory": recipe.category,
    "recipeCuisine": recipe.cuisine,
    "recipeIngredient": recipe.ingredients,
    "recipeInstructions": recipe.instructions.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "text": step
    }))
  };

  return (
    <div>
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to recipes
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Link
                to={`/category/${recipe.category.toLowerCase()}`}
                className="px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full"
              >
                {recipe.category}
              </Link>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                recipe.difficulty === 'Easy' ? 'bg-green-500 text-white' :
                recipe.difficulty === 'Medium' ? 'bg-yellow-500 text-white' :
                'bg-red-500 text-white'
              }`}>
                {recipe.difficulty}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {recipe.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {totalTime} min total
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {recipe.servings} servings
              </span>
              <span className="flex items-center gap-2">
                <Flame className="h-5 w-5" />
                {recipe.calories} cal/serving
              </span>
              {avgRating > 0 && (
                <span className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  {avgRating.toFixed(1)} ({recipe.reviews.length} reviews)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-stone-600">Prep: {recipe.prepTime} min</span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600">Cook: {recipe.cookTime} min</span>
            </div>
            
            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <button
                  onClick={() => toggleSaveRecipe(recipe.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isSaved
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-stone-100 text-stone-600 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved' : 'Save'}
                </button>
              )}
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-600 rounded-lg hover:bg-stone-200"
              >
                <Printer className="h-4 w-4" />
                Print
              </button>
              <button
                onClick={() => navigator.share?.({ title: recipe.title, url: window.location.href })}
                className="flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-600 rounded-lg hover:bg-stone-200"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <p className="text-lg text-stone-600 mb-8">
              {recipe.description}
            </p>

            {/* Tabs - Mobile */}
            <div className="lg:hidden mb-8">
              <div className="flex border-b border-stone-200">
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`flex-1 py-3 text-center font-medium ${
                    activeTab === 'ingredients'
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-stone-500'
                  }`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab('instructions')}
                  className={`flex-1 py-3 text-center font-medium ${
                    activeTab === 'instructions'
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-stone-500'
                  }`}
                >
                  Instructions
                </button>
              </div>

              {activeTab === 'ingredients' && (
                <div className="mt-6">
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ing, i) => (
                      <li
                        key={i}
                        onClick={() => toggleIngredient(i)}
                        className={`flex items-center gap-3 p-3 bg-stone-50 rounded-lg cursor-pointer ${
                          checkedIngredients.includes(i) ? 'opacity-50' : ''
                        }`}
                      >
                        <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                          checkedIngredients.includes(i) ? 'text-green-500' : 'text-stone-300'
                        }`} />
                        <span className={checkedIngredients.includes(i) ? 'line-through' : ''}>
                          {ing}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'instructions' && (
                <div className="mt-6">
                  <ol className="space-y-6">
                    {recipe.instructions.map((step, i) => (
                      <li
                        key={i}
                        onClick={() => toggleStep(i)}
                        className={`flex gap-4 cursor-pointer ${
                          checkedSteps.includes(i) ? 'opacity-50' : ''
                        }`}
                      >
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          checkedSteps.includes(i)
                            ? 'bg-green-500 text-white'
                            : 'bg-orange-500 text-white'
                        }`}>
                          {i + 1}
                        </span>
                        <p className={`text-stone-600 pt-1 ${checkedSteps.includes(i) ? 'line-through' : ''}`}>
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Instructions - Desktop */}
            <div className="hidden lg:block">
              <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                <ChefHat className="h-6 w-6 text-orange-500" />
                Instructions
              </h2>
              
              <ol className="space-y-6">
                {recipe.instructions.map((step, i) => (
                  <li
                    key={i}
                    onClick={() => toggleStep(i)}
                    className={`flex gap-4 cursor-pointer hover:bg-stone-50 p-4 -mx-4 rounded-lg transition-colors ${
                      checkedSteps.includes(i) ? 'opacity-50' : ''
                    }`}
                  >
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                      checkedSteps.includes(i)
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {i + 1}
                    </span>
                    <p className={`text-stone-600 text-lg pt-2 ${checkedSteps.includes(i) ? 'line-through' : ''}`}>
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips */}
            {recipe.tips.length > 0 && (
              <div className="mt-12 p-6 bg-orange-50 rounded-2xl">
                <h3 className="text-lg font-bold text-stone-800 mb-4">💡 Pro Tips</h3>
                <ul className="space-y-2">
                  {recipe.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-stone-600">
                      <span className="text-orange-500">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reviews Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-stone-800">
                  Reviews ({recipe.reviews.length})
                </h2>
                {isAuthenticated && !showReviewForm && (
                  <button
                    onClick={() => setShowReviewForm(true)}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Write a Review
                  </button>
                )}
              </div>

              {/* Review Form */}
              {showReviewForm && (
                <form onSubmit={handleSubmitReview} className="bg-stone-50 p-6 rounded-xl mb-8">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Your Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="text-2xl"
                        >
                          <Star className={`h-6 w-6 ${
                            star <= reviewRating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-stone-300'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      value={reviewContent}
                      onChange={(e) => setReviewContent(e.target.value)}
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                      placeholder="Share your experience with this recipe..."
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                    >
                      Submit Review
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="px-6 py-2 text-stone-600 hover:text-stone-800"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Reviews List */}
              {recipe.reviews.length > 0 ? (
                <div className="space-y-6">
                  {recipe.reviews.map(review => (
                    <div key={review.id} className="border-b border-stone-100 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-stone-800">{review.userName}</span>
                        <span className="text-sm text-stone-400">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-stone-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-stone-600">{review.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-stone-500 text-center py-8">
                  No reviews yet. Be the first to share your thoughts!
                </p>
              )}
            </div>
          </div>

          {/* Sidebar - Ingredients */}
          <div className="hidden lg:block">
            <div className="sticky top-36">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-stone-800 mb-6">
                  Ingredients
                </h2>
                
                <ul className="space-y-3">
                  {recipe.ingredients.map((ing, i) => (
                    <li
                      key={i}
                      onClick={() => toggleIngredient(i)}
                      className={`flex items-center gap-3 p-3 bg-stone-50 rounded-lg cursor-pointer hover:bg-stone-100 transition-colors ${
                        checkedIngredients.includes(i) ? 'opacity-50' : ''
                      }`}
                    >
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                        checkedIngredients.includes(i) ? 'text-green-500' : 'text-stone-300'
                      }`} />
                      <span className={checkedIngredients.includes(i) ? 'line-through' : ''}>
                        {ing}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-stone-100">
                  <p className="text-sm text-stone-500">
                    Click ingredients to mark them as prepared
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-stone-700 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/search?q=${tag}`}
                      className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full hover:bg-orange-100 hover:text-orange-600"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
