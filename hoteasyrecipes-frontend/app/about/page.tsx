import Image from 'next/image';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChefHat, Heart, Clock, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - HotEasyRecipes',
  description: 'Learn about HotEasyRecipes and our mission to help home cooks create amazing meals.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          alt="Cooking in kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
              About HotEasyRecipes
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Making home cooking accessible, enjoyable, and delicious for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-stone lg:prose-lg max-w-none text-stone-600 leading-relaxed">
              <p>
                HotEasyRecipes was born from a simple idea: everyone deserves to cook delicious meals at home, regardless of their cooking experience. We believe that great food brings people together, and that the joy of cooking should be accessible to all.
              </p>
              <p>
                Founded in 2020, our team of passionate chefs and food enthusiasts have been working tirelessly to create recipes that are not only delicious but also practical for everyday life. We understand that modern life is busy, which is why we focus on recipes that can be prepared in 30 minutes or less, using ingredients you can find at your local grocery store.
              </p>
              <p>
                Every recipe on our site has been tested, tasted, and refined to ensure it works every single time. We include detailed instructions, helpful tips, and variations so you can make each dish your own.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-stone-50">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-12 text-center">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Quality First</h3>
              <p className="text-stone-600 text-sm">Every recipe is thoroughly tested to ensure perfect results.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Made with Love</h3>
              <p className="text-stone-600 text-sm">We put passion into every recipe we create.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Time Conscious</h3>
              <p className="text-stone-600 text-sm">Quick recipes that fit your busy lifestyle.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">Excellence</h3>
              <p className="text-stone-600 text-sm">We strive for perfection in everything we do.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&q=80"
                  alt="Chef Maria"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900">Chef Maria</h3>
              <p className="text-orange-600 font-medium">Founder & Head Chef</p>
              <p className="text-stone-600 text-sm mt-2">25+ years of culinary experience</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&q=80"
                  alt="Chef Tom"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900">Chef Tom</h3>
              <p className="text-orange-600 font-medium">Recipe Developer</p>
              <p className="text-stone-600 text-sm mt-2">Asian cuisine specialist</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&q=80"
                  alt="Chef Elena"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900">Chef Elena</h3>
              <p className="text-orange-600 font-medium">Food Stylist</p>
              <p className="text-stone-600 text-sm mt-2">Nutritionist & wellness expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-orange-600">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Start Cooking?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who have discovered the joy of cooking with HotEasyRecipes.
          </p>
          <a href="/recipes" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-colors">
            Browse All Recipes
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
