import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RecipeHero from '@/components/recipe/RecipeHero';
import IngredientList from '@/components/recipe/IngredientList';
import StepsList from '@/components/recipe/StepsList';
import NutritionFacts from '@/components/recipe/NutritionFacts';
import ShareButtons from '@/components/recipe/ShareButtons';
import RecipeCard from '@/components/recipe/RecipeCard';
import { fetchRecipe, fetchRecipes } from '@/lib/api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { recipe } = await fetchRecipe(slug);

  if (!recipe) {
    return {
      title: 'Recipe Not Found - HotEasyRecipes',
    };
  }

  return {
    title: `${recipe.title} - HotEasyRecipes`,
    description: recipe.excerpt,
    openGraph: {
      title: recipe.title,
      description: recipe.excerpt,
      type: 'article',
      publishedTime: recipe.date,
      authors: [recipe.author?.node?.name || 'HotEasyRecipes'],
      images: [recipe.featuredImage?.node?.sourceUrl || ''],
    },
  };
}

export async function generateStaticParams() {
  const { recipes } = await fetchRecipes({ first: 20 });
  return recipes.edges.map((edge) => ({
    slug: edge.node.slug,
  }));
}

export const revalidate = 86400; // ISR: Revalidate once per day

export default async function RecipeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const { recipe } = await fetchRecipe(slug);

  if (!recipe) {
    notFound();
  }

  // Get related recipes (same category)
  const categorySlug = recipe.recipeCategories?.nodes?.[0]?.slug;
  const { recipes: relatedRecipes } = await fetchRecipes({
    first: 3,
    category: categorySlug,
  });
  const related = relatedRecipes.edges
    .map((edge) => edge.node)
    .filter((r) => r.slug !== recipe.slug)
    .slice(0, 3);

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.excerpt,
    image: recipe.featuredImage?.node?.sourceUrl,
    author: {
      '@type': 'Person',
      name: recipe.author?.node?.name,
    },
    datePublished: recipe.date,
    prepTime: `PT${parseInt(recipe.recipeFields.prepTime)}M`,
    cookTime: `PT${parseInt(recipe.recipeFields.cookTime)}M`,
    totalTime: `PT${parseInt(recipe.recipeFields.prepTime) + parseInt(recipe.recipeFields.cookTime)}M`,
    recipeYield: `${recipe.recipeFields.servings} servings`,
    recipeCategory: recipe.recipeCategories?.nodes?.[0]?.name,
    recipeCuisine: recipe.recipeCuisines?.nodes?.[0]?.name,
    recipeIngredient: recipe.recipeFields.ingredients?.map(
      (ing) => `${ing.quantity} ${ing.unit} ${ing.item}`
    ),
    recipeInstructions: recipe.recipeFields.steps?.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: step.step,
    })),
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${recipe.recipeFields.nutrition?.calories} calories`,
      proteinContent: `${recipe.recipeFields.nutrition?.protein}g`,
      carbohydrateContent: `${recipe.recipeFields.nutrition?.carbs}g`,
      fatContent: `${recipe.recipeFields.nutrition?.fat}g`,
    },
    aggregateRating: recipe.rating && {
      '@type': 'AggregateRating',
      ratingValue: recipe.rating,
      ratingCount: recipe.ratingCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <RecipeHero recipe={recipe} />

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Ingredients */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <IngredientList
                ingredients={recipe.recipeFields.ingredients || []}
                servings={recipe.recipeFields.servings}
                baseServings={recipe.recipeFields.servings}
              />

              {/* Nutrition */}
              {recipe.recipeFields.nutrition && (
                <div className="mt-6">
                  <NutritionFacts
                    nutrition={recipe.recipeFields.nutrition}
                    servings={recipe.recipeFields.servings}
                  />
                </div>
              )}

              {/* Share */}
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                <ShareButtons title={recipe.title} />
              </div>
            </div>
          </div>

          {/* Right Column - Instructions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">About This Recipe</h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-700 leading-relaxed">{recipe.content}</p>
              </div>
            </div>

            {/* Steps */}
            <StepsList steps={recipe.recipeFields.steps || []} />

            {/* Tips */}
            {recipe.recipeFields.tips && recipe.recipeFields.tips.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Chef&apos;s Tips</h2>
                <ul className="space-y-3">
                  {recipe.recipeFields.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-amber-500 font-bold">•</span>
                      <span className="text-stone-700">{tip.tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Variations */}
            {recipe.recipeFields.variations && recipe.recipeFields.variations.length > 0 && (
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Variations</h2>
                <ul className="space-y-3">
                  {recipe.recipeFields.variations.map((variation, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold">•</span>
                      <span className="text-stone-700">{variation.variation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Storage */}
            {recipe.recipeFields.storage && (
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Storage</h2>
                <p className="text-stone-700">{recipe.recipeFields.storage}</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Recipes */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
