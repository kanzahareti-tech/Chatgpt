export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  tags: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  ratings: Rating[];
  reviews: Review[];
}

export interface Rating {
  id: string;
  recipeId: string;
  userId: string;
  value: number;
  createdAt: string;
}

export interface Review {
  id: string;
  recipeId: string;
  userId: string;
  userName: string;
  content: string;
  rating: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  recipeCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
  createdAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  subscribedAt: string;
}
