import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Review, NewsletterSubscriber, Recipe } from '@/types';
import { recipes as initialRecipes } from '@/data/recipes';

interface AppState {
  // User
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  
  // Recipes
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (id: string, recipe: Partial<Recipe>) => void;
  deleteRecipe: (id: string) => void;
  
  // Reviews
  addReview: (recipeId: string, content: string, rating: number) => void;
  
  // Newsletter
  subscribers: NewsletterSubscriber[];
  subscribe: (email: string, name?: string) => boolean;
  
  // Saved Recipes
  savedRecipes: string[];
  toggleSaveRecipe: (recipeId: string) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Filters
  filters: {
    category: string;
    difficulty: string;
    cuisine: string;
    maxTime: number;
  };
  setFilters: (filters: Partial<AppState['filters']>) => void;
  resetFilters: () => void;
}

const defaultFilters = {
  category: '',
  difficulty: '',
  cuisine: '',
  maxTime: 999
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // User
      user: null,
      isAuthenticated: false,
      
      login: (email: string, password: string) => {
        // Mock login - in real app would validate against backend
        if (email && password.length >= 6) {
          const isAdmin = email.toLowerCase() === 'admin@deliciousbites.com';
          set({
            user: {
              id: '1',
              email,
              name: email.split('@')[0],
              role: isAdmin ? 'admin' : 'user',
              createdAt: new Date().toISOString()
            },
            isAuthenticated: true
          });
          return true;
        }
        return false;
      },
      
      register: (email: string, password: string, name: string) => {
        if (email && password.length >= 6 && name) {
          set({
            user: {
              id: Date.now().toString(),
              email,
              name,
              role: 'user',
              createdAt: new Date().toISOString()
            },
            isAuthenticated: true
          });
          return true;
        }
        return false;
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      
      // Recipes
      recipes: initialRecipes,
      
      addRecipe: (recipe: Recipe) => {
        set(state => ({
          recipes: [recipe, ...state.recipes]
        }));
      },
      
      updateRecipe: (id: string, updates: Partial<Recipe>) => {
        set(state => ({
          recipes: state.recipes.map(r => 
            r.id === id ? { ...r, ...updates, updatedAt: new Date().toISOString() } : r
          )
        }));
      },
      
      deleteRecipe: (id: string) => {
        set(state => ({
          recipes: state.recipes.filter(r => r.id !== id)
        }));
      },
      
      // Reviews
      addReview: (recipeId: string, content: string, rating: number) => {
        const { user, recipes } = get();
        if (!user) return;
        
        const review: Review = {
          id: Date.now().toString(),
          recipeId,
          userId: user.id,
          userName: user.name,
          content,
          rating,
          createdAt: new Date().toISOString()
        };
        
        set({
          recipes: recipes.map(r => 
            r.id === recipeId 
              ? { ...r, reviews: [...r.reviews, review] }
              : r
          )
        });
      },
      
      // Newsletter
      subscribers: [],
      
      subscribe: (email: string, name?: string) => {
        const { subscribers } = get();
        if (subscribers.some(s => s.email === email)) {
          return false;
        }
        
        set({
          subscribers: [...subscribers, {
            id: Date.now().toString(),
            email,
            name,
            subscribedAt: new Date().toISOString()
          }]
        });
        return true;
      },
      
      // Saved Recipes
      savedRecipes: [],
      
      toggleSaveRecipe: (recipeId: string) => {
        const { savedRecipes } = get();
        if (savedRecipes.includes(recipeId)) {
          set({ savedRecipes: savedRecipes.filter(id => id !== recipeId) });
        } else {
          set({ savedRecipes: [...savedRecipes, recipeId] });
        }
      },
      
      // Search
      searchQuery: '',
      setSearchQuery: (query: string) => set({ searchQuery: query }),
      
      // Filters
      filters: defaultFilters,
      setFilters: (filters) => set(state => ({
        filters: { ...state.filters, ...filters }
      })),
      resetFilters: () => set({ filters: defaultFilters })
    }),
    {
      name: 'food-blog-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        subscribers: state.subscribers,
        savedRecipes: state.savedRecipes,
        recipes: state.recipes
      })
    }
  )
);
