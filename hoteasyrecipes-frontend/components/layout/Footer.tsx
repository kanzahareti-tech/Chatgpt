import Link from 'next/link';
import { ChefHat, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: 'Breakfast', href: '/categories/breakfast' },
    { name: 'Lunch', href: '/categories/lunch' },
    { name: 'Dinner', href: '/categories/dinner' },
    { name: 'Desserts', href: '/categories/dessert' },
    { name: 'Quick Meals', href: '/categories/quick-meals' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Newsletter Section */}
      <div className="border-b border-stone-800">
        <div className="container-custom py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Get Delicious Recipes Delivered
            </h3>
            <p className="text-stone-400 mb-6">
              Subscribe to our newsletter and get the latest recipes, cooking tips, and meal ideas delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-600 p-2 rounded-lg">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                HotEasy<span className="text-orange-500">Recipes</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Your source for quick, easy, and delicious recipes. From weeknight dinners to special occasion desserts, we've got you covered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-orange-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-orange-500 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <p>Have a question or suggestion?</p>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Get in touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>© {currentYear} HotEasyRecipes. All rights reserved.</p>
            <p>Made with ❤️ for food lovers everywhere.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
