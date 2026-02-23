import { ChefHat, Award, Users, Heart, Instagram, Twitter, Youtube } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&auto=format&fit=crop"
            alt="Kitchen"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ChefHat className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About DeliciousBites
          </h1>
          <p className="text-xl text-stone-300">
            Where passion for food meets the joy of home cooking
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                DeliciousBites started in a tiny kitchen with a big dream: to make home cooking 
                accessible, enjoyable, and absolutely delicious for everyone.
              </p>
              <p>
                Founded in 2020, we've grown from a personal recipe collection to a community 
                of over 15,000 home cooks who share our passion for creating memorable meals.
              </p>
              <p>
                Every recipe you'll find here has been tested multiple times in our kitchen. 
                We believe in clear instructions, honest cook times, and ingredients you can 
                actually find at your local grocery store.
              </p>
              <p>
                Whether you're a complete beginner or a seasoned home chef, our goal is to 
                inspire you to get into the kitchen and create something amazing.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&auto=format&fit=crop"
              alt="Chef cooking"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">5+ Years</div>
              <div className="text-orange-100">of Cooking Joy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Chef */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1583394293214-28ez1c10be2a?w=800&auto=format&fit=crop"
                alt="Chef Sarah"
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800&auto=format&fit=crop';
                }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-stone-800 mb-2">Meet Sarah Chen</h2>
              <p className="text-orange-500 font-medium mb-6">Founder & Head Chef</p>
              <div className="space-y-4 text-stone-600">
                <p>
                  With a culinary degree from Le Cordon Bleu and 10 years of restaurant experience, 
                  Sarah brings professional techniques into the home kitchen.
                </p>
                <p>
                  Her philosophy? Great food doesn't have to be complicated. The best meals are 
                  made with love, good ingredients, and a little know-how.
                </p>
                <p>
                  When she's not developing new recipes, Sarah loves exploring farmers markets, 
                  teaching cooking classes, and sharing food with friends and family.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-stone-600">Le Cordon Bleu</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-stone-600">James Beard Nominee</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-stone-600 hover:text-orange-500">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-stone-600 hover:text-orange-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-stone-600 hover:text-orange-500">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">
          What We Stand For
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ChefHat className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Quality Recipes</h3>
            <p className="text-stone-600 text-sm">
              Every recipe is tested multiple times before publishing
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Community First</h3>
            <p className="text-stone-600 text-sm">
              We listen to our readers and create what you ask for
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Made with Love</h3>
            <p className="text-stone-600 text-sm">
              Cooking is an act of love we want to share with you
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Excellence</h3>
            <p className="text-stone-600 text-sm">
              We strive for excellence in everything we create
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
