import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, PlusCircle, Edit3, Trash2, Image, FileText, 
  BarChart3, Settings, Mail, ChefHat, Search, Sparkles
} from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Recipe } from '@/types';

type Tab = 'dashboard' | 'recipes' | 'add' | 'subscribers' | 'seo' | 'labs';

export function Admin() {
  const { user, recipes, subscribers, deleteRecipe } = useStore();
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  // Redirect non-admin users
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  const stats = [
    { label: 'Total Recipes', value: recipes.length, icon: ChefHat, color: 'bg-orange-500' },
    { label: 'Subscribers', value: subscribers.length, icon: Mail, color: 'bg-blue-500' },
    { label: 'Total Views', value: '24.5K', icon: BarChart3, color: 'bg-green-500' },
    { label: 'Avg. Rating', value: '4.8', icon: Sparkles, color: 'bg-purple-500' },
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'recipes', label: 'Recipes', icon: FileText },
    { id: 'add', label: 'Add Recipe', icon: PlusCircle },
    { id: 'subscribers', label: 'Subscribers', icon: Mail },
    { id: 'seo', label: 'SEO Tools', icon: Search },
    { id: 'labs', label: 'Labs', icon: Sparkles },
  ] as const;

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-stone-900 text-white min-h-screen p-6 hidden lg:block">
          <div className="flex items-center gap-2 mb-8">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">Admin</span>
          </div>

          <nav className="space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-stone-700">
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:text-white"
            >
              ← Back to Site
            </Link>
          </div>
        </aside>

        {/* Mobile Nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50 p-2">
          <div className="flex justify-around">
            {tabs.slice(0, 4).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 rounded-lg ${
                  activeTab === tab.id ? 'bg-orange-100 text-orange-500' : 'text-stone-500'
                }`}
              >
                <tab.icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 pb-24 lg:pb-8">
          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-2xl font-bold text-stone-800 mb-6">Dashboard</h1>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-stone-800">{stat.value}</div>
                    <div className="text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-stone-800 mb-4">Recent Recipes</h2>
                  <div className="space-y-3">
                    {recipes.slice(0, 5).map(recipe => (
                      <div key={recipe.id} className="flex items-center gap-4">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-stone-800 truncate">{recipe.title}</div>
                          <div className="text-sm text-stone-500">{recipe.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-stone-800 mb-4">Recent Subscribers</h2>
                  {subscribers.length > 0 ? (
                    <div className="space-y-3">
                      {subscribers.slice(0, 5).map(sub => (
                        <div key={sub.id} className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <div className="font-medium text-stone-800">{sub.email}</div>
                            <div className="text-sm text-stone-500">
                              {new Date(sub.subscribedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-stone-500">No subscribers yet</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Recipes Management */}
          {activeTab === 'recipes' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-stone-800">Manage Recipes</h1>
                <button
                  onClick={() => setActiveTab('add')}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  <PlusCircle className="h-4 w-4" />
                  Add Recipe
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-stone-500">Recipe</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-stone-500 hidden md:table-cell">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-stone-500 hidden lg:table-cell">Date</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-stone-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {recipes.map(recipe => (
                      <tr key={recipe.id} className="hover:bg-stone-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={recipe.image}
                              alt={recipe.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-medium text-stone-800">{recipe.title}</div>
                              <div className="text-sm text-stone-500 md:hidden">{recipe.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full">
                            {recipe.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-stone-500 hidden lg:table-cell">
                          {new Date(recipe.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/recipe/${recipe.slug}`}
                              className="p-2 text-stone-400 hover:text-stone-600"
                              title="View"
                            >
                              <Search className="h-4 w-4" />
                            </Link>
                            <button
                              className="p-2 text-stone-400 hover:text-blue-600"
                              title="Edit"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm('Delete this recipe?')) {
                                  deleteRecipe(recipe.id);
                                }
                              }}
                              className="p-2 text-stone-400 hover:text-red-600"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Add Recipe */}
          {activeTab === 'add' && (
            <AddRecipeForm onSuccess={() => setActiveTab('recipes')} />
          )}

          {/* Subscribers */}
          {activeTab === 'subscribers' && (
            <div>
              <h1 className="text-2xl font-bold text-stone-800 mb-6">Newsletter Subscribers</h1>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-stone-800">{subscribers.length}</div>
                    <div className="text-stone-500">Total Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-stone-500">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">45%</div>
                    <div className="text-stone-500">Click Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-stone-500">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-stone-500 hidden md:table-cell">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-stone-500">Subscribed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {subscribers.length > 0 ? (
                      subscribers.map(sub => (
                        <tr key={sub.id}>
                          <td className="px-6 py-4 text-stone-800">{sub.email}</td>
                          <td className="px-6 py-4 text-stone-600 hidden md:table-cell">
                            {sub.name || '-'}
                          </td>
                          <td className="px-6 py-4 text-stone-500">
                            {new Date(sub.subscribedAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="px-6 py-8 text-center text-stone-500">
                          No subscribers yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SEO Tools */}
          {activeTab === 'seo' && (
            <div>
              <h1 className="text-2xl font-bold text-stone-800 mb-6">SEO Tools</h1>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-stone-800 mb-4">Meta Tag Generator</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Page Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-stone-200 rounded-lg"
                        placeholder="Enter page title..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Meta Description</label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-2 border border-stone-200 rounded-lg"
                        placeholder="Enter meta description..."
                      />
                    </div>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                      Generate Tags
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-stone-800 mb-4">Schema Generator</h2>
                  <p className="text-stone-600 mb-4">
                    Automatically generates Recipe schema markup for all recipes.
                  </p>
                  <div className="p-4 bg-stone-50 rounded-lg">
                    <code className="text-sm text-stone-600">
                      All recipes include JSON-LD schema automatically
                    </code>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-stone-800 mb-4">Sitemap</h2>
                  <p className="text-stone-600 mb-4">
                    Your sitemap is automatically generated and includes all recipes.
                  </p>
                  <button className="px-4 py-2 bg-stone-100 text-stone-600 rounded-lg hover:bg-stone-200">
                    Regenerate Sitemap
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-stone-800 mb-4">Keyword Analyzer</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-stone-200 rounded-lg"
                      placeholder="Enter a keyword..."
                    />
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                      Analyze
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Labs */}
          {activeTab === 'labs' && (
            <div>
              <h1 className="text-2xl font-bold text-stone-800 mb-2">Experimental Labs</h1>
              <p className="text-stone-600 mb-6">
                Try out experimental features and tools. These are works in progress!
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Image className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">AI Image Generator</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Generate food photography using AI. Coming soon!
                  </p>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                    Coming Soon
                  </span>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-orange-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">HTML Importer</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Import recipes from other websites automatically.
                  </p>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    Beta
                  </span>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-orange-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">AI Recipe Writer</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Generate recipes using AI assistance.
                  </p>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
                    Coming Soon
                  </span>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-orange-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">A/B Tester</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Test different recipe titles and images.
                  </p>
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                    Coming Soon
                  </span>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-dashed border-orange-200">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Rich Editor</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Advanced WYSIWYG editor for recipe content.
                  </p>
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">
                    In Development
                  </span>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Add Recipe Form Component
function AddRecipeForm({ onSuccess }: { onSuccess: () => void }) {
  const { addRecipe } = useStore();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: 'Italian',
    cuisine: 'Italian',
    difficulty: 'Medium' as 'Easy' | 'Medium' | 'Hard',
    prepTime: 30,
    cookTime: 30,
    servings: 4,
    calories: 300,
    ingredients: '',
    instructions: '',
    tips: '',
    tags: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipe: Recipe = {
      id: Date.now().toString(),
      title: formData.title,
      slug: formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      description: formData.description,
      image: formData.image || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop',
      category: formData.category,
      cuisine: formData.cuisine,
      difficulty: formData.difficulty,
      prepTime: formData.prepTime,
      cookTime: formData.cookTime,
      servings: formData.servings,
      calories: formData.calories,
      ingredients: formData.ingredients.split('\n').filter(Boolean),
      instructions: formData.instructions.split('\n').filter(Boolean),
      tips: formData.tips.split('\n').filter(Boolean),
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ratings: [],
      reviews: []
    };

    addRecipe(recipe);
    onSuccess();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-stone-800 mb-6">Add New Recipe</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="Recipe title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="https://..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Description *</label>
          <textarea
            required
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500"
            placeholder="Brief description of the recipe"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg"
            >
              <option>Italian</option>
              <option>Asian</option>
              <option>Breakfast</option>
              <option>Desserts</option>
              <option>Salads</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Seafood</option>
              <option>Baking</option>
              <option>Sides</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Difficulty</label>
            <select
              value={formData.difficulty}
              onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as 'Easy' | 'Medium' | 'Hard' })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Prep Time (min)</label>
            <input
              type="number"
              value={formData.prepTime}
              onChange={(e) => setFormData({ ...formData, prepTime: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Cook Time (min)</label>
            <input
              type="number"
              value={formData.cookTime}
              onChange={(e) => setFormData({ ...formData, cookTime: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Ingredients * (one per line)
            </label>
            <textarea
              required
              rows={8}
              value={formData.ingredients}
              onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg font-mono text-sm"
              placeholder="1 cup flour&#10;2 eggs&#10;1/2 cup sugar"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Instructions * (one step per line)
            </label>
            <textarea
              required
              rows={8}
              value={formData.instructions}
              onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              className="w-full px-4 py-2 border border-stone-200 rounded-lg font-mono text-sm"
              placeholder="Preheat oven to 350°F&#10;Mix dry ingredients&#10;Add wet ingredients"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-4 py-2 border border-stone-200 rounded-lg"
            placeholder="dinner, quick, vegetarian"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Create Recipe
          </button>
          <button
            type="button"
            onClick={onSuccess}
            className="px-6 py-2 text-stone-600 hover:text-stone-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
