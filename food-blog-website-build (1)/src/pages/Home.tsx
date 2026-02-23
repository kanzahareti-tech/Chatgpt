import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Clock, Star, TrendingUp } from 'lucide-react';
import { RecipeCard } from '@/components/RecipeCard';
import { CategoryCard } from '@/components/CategoryCard';
import { useStore } from '@/store/useStore';
import { categories } from '@/data/categories';
import { useState } from 'react';

export function Home() {
  const { recipes, subscribe } = useStore();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredRecipes = recipes.filter(r => r.featured).slice(0, 4);
  const latestRecipes = recipes.slice(0, 6);
  const topCategories = categories.slice(0, 6);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribe(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&auto=format&fit=crop"
            alt="Food background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-orange-400 mb-4">
              <ChefHat className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Homemade with Love</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Recipes That <span className="text-orange-400">Inspire</span> Your Kitchen
            </h1>
            <p className="text-lg text-stone-300 mb-8">
              From quick weeknight dinners to impressive weekend feasts, find recipes that match your mood, skill level, and taste.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/recipes"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                Explore Recipes
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/categories"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-colors"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{recipes.length}+</div>
                <div className="text-sm text-stone-400">Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{categories.length}</div>
                <div className="text-sm text-stone-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">15K+</div>
                <div className="text-sm text-stone-400">Happy Cooks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">4.9</div>
                <div className="text-sm text-stone-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-2">
              <Star className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Featured</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800">Editor's Picks</h2>
          </div>
          <Link
            to="/recipes"
            className="hidden sm:flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} featured={index === 0} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-orange-500 mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Browse</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-800">Popular Categories</h2>
            </div>
            <Link
              to="/categories"
              className="hidden sm:flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600"
            >
              All Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Recipes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Fresh</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800">Latest Recipes</h2>
          </div>
          <Link
            to="/recipes"
            className="hidden sm:flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Weekly Recipe Inspiration
            </h2>
            <p className="text-orange-100 mb-8">
              Join 15,000+ home cooks and get our best recipes delivered to your inbox every week.
            </p>
            
            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <p className="text-white font-medium">🎉 Thanks for subscribing! Check your inbox soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-300"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-stone-900 text-white font-medium rounded-lg hover:bg-stone-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
