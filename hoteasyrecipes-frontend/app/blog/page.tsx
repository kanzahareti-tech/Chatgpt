import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { mockBlogPosts } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Blog - HotEasyRecipes',
  description: 'Cooking tips, techniques, recipe guides, and more from our food blog.',
};

export const revalidate = 3600;

export default function BlogPage() {
  const posts = mockBlogPosts;

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container-custom">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-center">
            From Our Blog
          </h1>
          <p className="text-stone-600 text-center max-w-2xl mx-auto">
            Cooking tips, techniques, and behind-the-scenes stories from our kitchen to yours.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden card-shadow">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.featuredImage?.node?.sourceUrl || '/images/placeholder.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-stone-500 mb-3">
                    <span className="text-orange-600 font-medium">
                      {post.categories.nodes[0]?.name}
                    </span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-stone-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-stone-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
