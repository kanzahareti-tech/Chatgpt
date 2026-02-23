import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShareButtons from '@/components/recipe/ShareButtons';
import RecipeCard from '@/components/recipe/RecipeCard';
import { fetchBlogPost, mockBlogPosts, mockRecipes } from '@/lib/api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found - HotEasyRecipes',
    };
  }

  return {
    title: `${post.title} - HotEasyRecipes Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.node.name],
      images: [post.featuredImage?.node?.sourceUrl || ''],
    },
  };
}

export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const revalidate = 3600;

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related recipes (random)
  const relatedRecipes = mockRecipes.slice(0, 3);

  return (
    <>
      <Header />

      {/* Article Header */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={post.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-white/90 mb-4">
                <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">
                  {post.categories.nodes[0]?.name}
                </span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-3 text-white/90">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white">
                    {post.author.node.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium">{post.author.node.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-stone lg:prose-lg max-w-none mb-12">
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="text-stone-800 leading-relaxed space-y-4">
              {post.content.split('. ').map((sentence, index) => (
                <p key={index}>{sentence}.</p>
              ))}
            </div>
          </article>

          {/* Share */}
          <div className="border-t border-b border-stone-200 py-6 mb-12">
            <div className="flex items-center justify-between">
              <span className="font-medium text-stone-900">Share this post:</span>
              <ShareButtons title={post.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Recipes */}
      <div className="bg-stone-50 py-12">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">Related Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
