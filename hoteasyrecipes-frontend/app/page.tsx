import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Utensils, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/recipe/RecipeCard';
import SearchForm from '@/components/forms/SearchForm';
import { fetchFeaturedRecipes, fetchCategories, mockBlogPosts } from '@/lib/api';

export const revalidate = 3600; // ISR: Revalidate every hour

export default async function HomePage() {
  const { recipes } = await fetchFeaturedRecipes();
  const { recipeCategories } = await fetchCategories();

  const featuredRecipes = recipes.edges.map((edge) => edge.node);
  const categories = recipeCategories.nodes;
  const recentPosts = mockBlogPosts.slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
            alt="Delicious food spread"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative container-custom">
          <div className="max-w-2xl">
            <span className="inline-flex items-center space-x-2 bg-orange-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Over 500+ Delicious Recipes</span>
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Cook <span className="text-orange-400">Amazing</span> Meals at Home
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover quick, easy, and delicious recipes for every occasion. From weeknight dinners to special celebration treats.
            </p>

            {/* Search */}
            <div className="max-w-lg">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Quick & Easy</h3>
              <p className="text-stone-600">Most recipes ready in 30 minutes or less. Perfect for busy weeknights.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Step by Step</h3>
              <p className="text-stone-600">Clear instructions with timers and tips for perfect results every time.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Chef Tips</h3>
              <p className="text-stone-600">Learn professional techniques and get variations to make each recipe your own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-stone-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                Featured Recipes
              </h2>
              <p className="text-stone-600">Our most popular and loved recipes</p>
            </div>
            <Link
              href="/recipes"
              className="hidden md:flex items-center space-x-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/recipes" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Recipes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-2">
              Browse by Category
            </h2>
            <p className="text-stone-600">Find exactly what you&apos;re looking for</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group bg-stone-50 rounded-xl p-6 text-center hover:bg-orange-50 hover:shadow-lg transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-orange-700 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-stone-500">
                  {category.count} recipes
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="py-16 bg-stone-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-2">
                From Our Blog
              </h2>
              <p className="text-stone-600">Cooking tips, techniques, and more</p>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center space-x-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden card-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-video">
                    <Image
                      src={post.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-orange-600 font-medium mb-2">
                      {post.categories.nodes[0]?.name}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2 line-clamp-2 group-hover:text-orange-600">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Never Miss a Recipe
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              Join thousands of home cooks who get delicious recipes delivered to their inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
