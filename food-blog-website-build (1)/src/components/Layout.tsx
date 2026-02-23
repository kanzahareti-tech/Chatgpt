import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Heart, ChefHat } from 'lucide-react';
import { useStore } from '@/store/useStore';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useStore();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/categories', label: 'Categories' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-stone-800">Delicious<span className="text-orange-500">Bites</span></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-orange-500'
                      : 'text-stone-600 hover:text-orange-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <Link to="/search" className="p-2 text-stone-600 hover:text-orange-500">
                <Search className="h-5 w-5" />
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link to="/saved" className="p-2 text-stone-600 hover:text-orange-500">
                    <Heart className="h-5 w-5" />
                  </Link>
                  <div className="relative group">
                    <button className="flex items-center gap-2 p-2 text-stone-600 hover:text-orange-500">
                      <User className="h-5 w-5" />
                      <span className="hidden lg:block text-sm">{user?.name}</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {user?.role === 'admin' && (
                        <Link to="/admin" className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100">
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  className="hidden sm:inline-flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Sign In
                </Link>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    isActive(link.href)
                      ? 'text-orange-500'
                      : 'text-stone-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {!isAuthenticated && (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-orange-500"
                >
                  Sign In
                </Link>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">Delicious<span className="text-orange-500">Bites</span></span>
              </Link>
              <p className="text-stone-400 text-sm">
                Discover delicious recipes from around the world. Cook with confidence and share the joy of good food.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-stone-400 hover:text-orange-500 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                {['Italian', 'Asian', 'Breakfast', 'Desserts', 'Salads'].map(cat => (
                  <li key={cat}>
                    <Link to={`/category/${cat.toLowerCase()}`} className="text-stone-400 hover:text-orange-500 text-sm">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-stone-400 text-sm mb-4">
                Subscribe for new recipes and cooking tips!
              </p>
              <Link
                to="/newsletter"
                className="inline-flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400 text-sm">
            <p>© {new Date().getFullYear()} DeliciousBites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
