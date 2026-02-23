import { useState } from 'react';
import { Mail, CheckCircle, Gift, BookOpen, Clock, Star } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function Newsletter() {
  const { subscribe } = useStore();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribe(email, name)) {
      setSubscribed(true);
      setError('');
    } else {
      setError('This email is already subscribed!');
    }
  };

  const benefits = [
    {
      icon: BookOpen,
      title: 'Weekly Recipe Roundup',
      description: 'Get 5 hand-picked recipes delivered to your inbox every Friday'
    },
    {
      icon: Gift,
      title: 'Exclusive Content',
      description: 'Subscriber-only recipes, tips, and behind-the-scenes content'
    },
    {
      icon: Clock,
      title: 'Early Access',
      description: 'Be the first to try new recipes before they go public'
    },
    {
      icon: Star,
      title: 'Special Offers',
      description: 'Discounts on cooking classes, cookbooks, and kitchen tools'
    }
  ];

  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
              <Mail className="h-4 w-4" />
              Free Newsletter
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              Get Delicious Recipes <span className="text-orange-500">Weekly</span>
            </h1>
            
            <p className="text-lg text-stone-600 mb-8">
              Join 15,000+ home cooks who receive our weekly newsletter packed with 
              tested recipes, cooking tips, and exclusive content.
            </p>

            {subscribed ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-stone-800 mb-2">You're In! 🎉</h2>
                <p className="text-stone-600">
                  Thanks for subscribing! Check your inbox for a confirmation email 
                  and your free welcome gift.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    First Name (optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="you@example.com"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
                >
                  Subscribe - It's Free!
                </button>

                <p className="text-sm text-stone-500 text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

          {/* Right - Benefits */}
          <div className="bg-stone-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-stone-800 mb-8">
              What You'll Get
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-1">{benefit.title}</h3>
                    <p className="text-stone-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <blockquote className="italic text-stone-600 mb-4">
                "This newsletter has completely transformed my meal planning. 
                The recipes are always delicious and the tips are so helpful!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  M
                </div>
                <div>
                  <div className="font-medium text-stone-800">Maria G.</div>
                  <div className="text-sm text-stone-500">Subscriber since 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
