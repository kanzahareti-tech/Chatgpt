'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Heart, ChefHat } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Categories', href: '/categories' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-orange-600 p-2 rounded-lg group-hover:bg-orange-700 transition-colors">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-stone-900">
                HotEasy<span className="text-orange-600">Recipes</span>
              </span>
              <span className="text-xs text-stone-500 -mt-1">Hot, Easy, Delicious</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-600 hover:text-orange-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-stone-600 hover:text-orange-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/favorites"
              className="p-2 text-stone-600 hover:text-orange-600 transition-colors relative"
              aria-label="Favorites"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-stone-600"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-stone-600"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-100 py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-stone-600 hover:text-orange-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/favorites"
                className="flex items-center space-x-2 text-stone-600 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="h-5 w-5" />
                <span>Favorites</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-4 animate-slide-up">
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="flex-1 outline-none text-lg"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-stone-400 hover:text-stone-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100">
              <p className="text-sm text-stone-500 mb-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['chicken', 'pasta', 'quick meals', 'desserts', 'vegetarian'].map((tag) => (
                  <Link
                    key={tag}
                    href={`/search?q=${tag}`}
                    className="px-3 py-1 bg-stone-100 rounded-full text-sm text-stone-600 hover:bg-orange-100 hover:text-orange-700 transition-colors"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
