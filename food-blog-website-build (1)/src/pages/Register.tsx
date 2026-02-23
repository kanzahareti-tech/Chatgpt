import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, Eye, EyeOff } from 'lucide-react';
import { useStore } from '@/store/useStore';

export function Register() {
  const navigate = useNavigate();
  const { register } = useStore();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (register(email, password, name)) {
      navigate('/');
    } else {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <ChefHat className="h-10 w-10 text-orange-500" />
            <span className="text-2xl font-bold text-stone-800">Delicious<span className="text-orange-500">Bites</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-stone-800 mb-2">Create Account</h1>
          <p className="text-stone-600">Join our community of home cooks</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="John Doe"
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
                  placeholder="At least 6 characters"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-stone-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Confirm your password"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                className="mt-1 rounded border-stone-300 text-orange-500 focus:ring-orange-500"
              />
              <span className="text-sm text-stone-600">
                I agree to the{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600">Privacy Policy</a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-stone-600">
              Already have an account?{' '}
              <Link to="/login" className="text-orange-500 hover:text-orange-600 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
