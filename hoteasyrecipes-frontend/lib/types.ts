// TypeScript types for HotEasyRecipes

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  recipeFields: RecipeFields;
  recipeCategories: {
    nodes: Category[];
  };
  recipeCuisines?: {
    nodes: Category[];
  };
  author: {
    node: {
      name: string;
    };
  };
  date: string;
  rating?: number;
  ratingCount?: number;
}

export interface RecipeFields {
  prepTime: string;
  cookTime: string;
  totalTime?: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: Ingredient[];
  steps: Step[];
  nutrition: Nutrition;
  tips?: Tip[];
  variations?: Variation[];
  storage?: string;
}

export interface Ingredient {
  quantity: string;
  unit: string;
  item: string;
  notes?: string;
}

export interface Step {
  step: string;
  image?: string;
  timer?: number;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sodium?: number;
}

export interface Tip {
  tip: string;
}

export interface Variation {
  variation: string;
}

export interface Category {
  name: string;
  slug: string;
  count?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  author: {
    node: {
      name: string;
    };
  };
  date: string;
  categories: {
    nodes: Category[];
  };
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export interface RecipesConnection {
  edges: {
    node: Recipe;
    cursor: string;
  }[];
  pageInfo: PageInfo;
}

export interface RecipesQueryResult {
  recipes: RecipesConnection;
}

export interface RecipeQueryResult {
  recipe: Recipe;
}

export interface CategoriesQueryResult {
  recipeCategories: {
    nodes: Category[];
  };
}

export interface BlogPostsQueryResult {
  posts: {
    edges: {
      node: BlogPost;
    }[];
    pageInfo: PageInfo;
  };
}
