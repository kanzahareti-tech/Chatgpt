import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, Eye, EyeOff } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function Login() {
  const navigate = useNavigate();
  const { login } = useStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/');
    } else {
      setError('Invalid credentials. Password must be at least 6 characters.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <ChefHat className="h-10 w-10 text-orange-500" />
            <span className="text-2xl font-bold text-stone-800">Delicious<span className="text-orange-500">Bites</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-stone-800 mb-2">Welcome Back</h1>
          <p className="text-stone-600">Sign in to access your saved recipes and more</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-stone-300 text-orange-500 focus:ring-orange-500" />
                <span className="text-sm text-stone-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-stone-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-orange-500 hover:text-orange-600 font-medium">
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-stone-50 rounded-lg">
            <p className="text-sm text-stone-600 mb-2">
              <strong>Demo Credentials:</strong>
            </p>
            <p className="text-sm text-stone-500">
              Admin: admin@deliciousbites.com (any 6+ char password)<br />
              User: any email (any 6+ char password)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
