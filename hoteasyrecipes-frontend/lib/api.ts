import { Recipe, BlogPost, Category } from './types';

// Mock data to simulate WordPress GraphQL API responses
// In production, these would be fetched from the WordPress backend

export const mockCategories: Category[] = [
  { name: 'Breakfast', slug: 'breakfast', count: 12 },
  { name: 'Lunch', slug: 'lunch', count: 18 },
  { name: 'Dinner', slug: 'dinner', count: 24 },
  { name: 'Dessert', slug: 'dessert', count: 15 },
  { name: 'Snacks', slug: 'snacks', count: 10 },
  { name: 'Drinks', slug: 'drinks', count: 8 },
];

export const mockCuisines = [
  { name: 'Italian', slug: 'italian' },
  { name: 'Asian', slug: 'asian' },
  { name: 'Mexican', slug: 'mexican' },
  { name: 'Mediterranean', slug: 'mediterranean' },
  { name: 'American', slug: 'american' },
  { name: 'Indian', slug: 'indian' },
];

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Tuscan Chicken',
    slug: 'creamy-tuscan-chicken',
    excerpt: 'Tender chicken breasts in a rich garlic cream sauce with sun-dried tomatoes and spinach. A restaurant-quality dish ready in just 35 minutes.',
    content: 'This Creamy Tuscan Chicken is the perfect weeknight dinner. Juicy chicken breasts swimming in a luxurious garlic cream sauce with sun-dried tomatoes and fresh spinach. It\'s rich, flavorful, and absolutely irresistible.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
        altText: 'Creamy Tuscan Chicken',
      },
    },
    recipeFields: {
      prepTime: '10 mins',
      cookTime: '25 mins',
      totalTime: '35 mins',
      servings: 4,
      difficulty: 'Easy',
      ingredients: [
        { quantity: '4', unit: 'pieces', item: 'chicken breasts' },
        { quantity: '1', unit: 'cup', item: 'heavy cream' },
        { quantity: '1/2', unit: 'cup', item: 'chicken broth' },
        { quantity: '1', unit: 'tsp', item: 'garlic powder' },
        { quantity: '1/2', unit: 'cup', item: 'sun-dried tomatoes' },
        { quantity: '2', unit: 'cups', item: 'fresh spinach' },
        { quantity: '1/2', unit: 'cup', item: 'parmesan cheese' },
        { quantity: '1', unit: 'tsp', item: 'Italian seasoning' },
        { quantity: '2', unit: 'tbsp', item: 'olive oil' },
      ],
      steps: [
        { step: 'Season chicken breasts with salt, pepper, and Italian seasoning.' },
        { step: 'Heat olive oil in a large skillet over medium-high heat. Cook chicken 6-7 minutes per side until golden and cooked through. Remove and set aside.' },
        { step: 'In the same skillet, add heavy cream, chicken broth, garlic powder, and parmesan cheese. Whisk until smooth.' },
        { step: 'Add sun-dried tomatoes and simmer for 2-3 minutes until sauce thickens.' },
        { step: 'Stir in fresh spinach and cook until wilted. Return chicken to the pan and spoon sauce over top.' },
        { step: 'Serve immediately over pasta or with crusty bread.' },
      ],
      nutrition: {
        calories: 450,
        protein: 38,
        carbs: 8,
        fat: 28,
        fiber: 2,
        sodium: 580,
      },
      tips: [
        { tip: 'Pound chicken breasts to even thickness for more uniform cooking.' },
        { tip: 'Use marinated sun-dried tomatoes for extra flavor.' },
      ],
      variations: [
        { variation: 'Add mushrooms for extra texture.' },
        { variation: 'Substitute turkey breast for a lighter option.' },
      ],
      storage: 'Refrigerate leftovers for up to 3 days in an airtight container.',
    },
    recipeCategories: {
      nodes: [{ name: 'Dinner', slug: 'dinner' }],
    },
    recipeCuisines: {
      nodes: [{ name: 'Italian', slug: 'italian' }],
    },
    author: {
      node: { name: 'Chef Maria' },
    },
    date: '2026-02-15T10:00:00',
    rating: 4.8,
    ratingCount: 124,
  },
  {
    id: '2',
    title: 'Spicy Thai Basil Noodles',
    slug: 'spicy-thai-basil-noodles',
    excerpt: 'Quick and flavorful Thai street food classic with fresh basil, chilies, and your choice of protein. Ready in under 20 minutes!',
    content: 'Experience the bold flavors of Thai street food at home. These Spicy Thai Basil Noodles are packed with fresh herbs, aromatic chilies, and your choice of protein for a satisfying meal.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
        altText: 'Spicy Thai Basil Noodles',
      },
    },
    recipeFields: {
      prepTime: '10 mins',
      cookTime: '10 mins',
      totalTime: '20 mins',
      servings: 2,
      difficulty: 'Easy',
      ingredients: [
        { quantity: '8', unit: 'oz', item: 'rice noodles' },
        { quantity: '1', unit: 'lb', item: 'ground chicken or beef' },
        { quantity: '4', unit: 'cloves', item: 'garlic, minced' },
        { quantity: '3-5', unit: '', item: 'Thai chilies, sliced' },
        { quantity: '2', unit: 'cups', item: 'fresh Thai basil leaves' },
        { quantity: '2', unit: 'tbsp', item: 'fish sauce' },
        { quantity: '1', unit: 'tbsp', item: 'soy sauce' },
        { quantity: '1', unit: 'tbsp', item: 'oyster sauce' },
        { quantity: '1', unit: 'tsp', item: 'sugar' },
        { quantity: '2', unit: 'tbsp', item: 'vegetable oil' },
      ],
      steps: [
        { step: 'Cook rice noodles according to package instructions. Drain and set aside.' },
        { step: 'Heat oil in a wok over high heat. Add garlic and chilies, stir-fry for 30 seconds.' },
        { step: 'Add protein and cook until browned, breaking it apart as it cooks.' },
        { step: 'Add fish sauce, soy sauce, oyster sauce, and sugar. Stir to combine.' },
        { step: 'Add cooked noodles and toss until well coated with the sauce.' },
        { step: 'Remove from heat and fold in fresh Thai basil leaves. Serve immediately.' },
      ],
      nutrition: {
        calories: 520,
        protein: 28,
        carbs: 45,
        fat: 22,
        fiber: 3,
        sodium: 890,
      },
      tips: [
        { tip: 'Have all ingredients prepped before starting - this dish cooks fast!' },
        { tip: 'Adjust chilies to your heat preference.' },
      ],
      variations: [
        { variation: 'Use tofu for a vegetarian version.' },
        { variation: 'Add a fried egg on top for extra richness.' },
      ],
      storage: 'Best enjoyed fresh, but can be refrigerated for 2 days.',
    },
    recipeCategories: {
      nodes: [{ name: 'Dinner', slug: 'dinner' }, { name: 'Lunch', slug: 'lunch' }],
    },
    recipeCuisines: {
      nodes: [{ name: 'Asian', slug: 'asian' }],
    },
    author: {
      node: { name: 'Chef Tom' },
    },
    date: '2026-02-12T10:00:00',
    rating: 4.7,
    ratingCount: 89,
  },
  {
    id: '3',
    title: 'Classic French Omelette',
    slug: 'classic-french-omelette',
    excerpt: 'A perfectly soft and creamy French omelette with fresh herbs. Master this classic technique in just 10 minutes.',
    content: 'Learn to make the perfect French omelette - silky, creamy, and absolutely delicious. This classic technique is easier than you think and makes for an elegant breakfast or quick dinner.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
        altText: 'Classic French Omelette',
      },
    },
    recipeFields: {
      prepTime: '2 mins',
      cookTime: '3 mins',
      totalTime: '5 mins',
      servings: 1,
      difficulty: 'Medium',
      ingredients: [
        { quantity: '3', unit: '', item: 'large eggs' },
        { quantity: '1', unit: 'tbsp', item: 'unsalted butter' },
        { quantity: '1', unit: 'tbsp', item: 'chives, chopped' },
        { quantity: '', unit: '', item: 'salt and pepper to taste' },
        { quantity: '2', unit: 'tbsp', item: 'grated Gruyère cheese (optional)' },
      ],
      steps: [
        { step: 'Crack eggs into a bowl and beat until fully combined. Season with salt and pepper.' },
        { step: 'Heat a non-stick pan over medium-high heat. Add butter and swirl to coat.' },
        { step: 'Pour in eggs and immediately stir with a rubber spatula while shaking the pan.' },
        { step: 'When eggs are mostly set but still slightly wet, stop stirring. Let sit for 10 seconds.' },
        { step: 'Tilt pan and use spatula to roll omelette onto a plate, seam side down.' },
        { step: 'Top with cheese and chives. Serve immediately.' },
      ],
      nutrition: {
        calories: 320,
        protein: 18,
        carbs: 2,
        fat: 26,
        fiber: 0,
        sodium: 380,
      },
      tips: [
        { tip: 'Use medium-high heat - too hot and eggs will brown.' },
        { tip: 'Work quickly - the entire process should take about 3 minutes.' },
      ],
      variations: [
        { variation: 'Fill with sautéed mushrooms and spinach.' },
        { variation: 'Add smoked salmon and cream cheese for a luxury version.' },
      ],
      storage: 'Best served immediately.',
    },
    recipeCategories: {
      nodes: [{ name: 'Breakfast', slug: 'breakfast' }],
    },
    recipeCuisines: {
      nodes: [{ name: 'French', slug: 'french' }],
    },
    author: {
      node: { name: 'Chef Pierre' },
    },
    date: '2026-02-10T10:00:00',
    rating: 4.9,
    ratingCount: 156,
  },
  {
    id: '4',
    title: 'Chocolate Lava Cake',
    slug: 'chocolate-lava-cake',
    excerpt: 'Decadent individual chocolate cakes with a molten center. The perfect romantic dessert that impresses every time.',
    content: 'These Chocolate Lava Cakes are the ultimate dessert for chocolate lovers. A rich, gooey center flows out when you cut into them, creating an unforgettable experience.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
        altText: 'Chocolate Lava Cake',
      },
    },
    recipeFields: {
      prepTime: '15 mins',
      cookTime: '12 mins',
      totalTime: '27 mins',
      servings: 4,
      difficulty: 'Medium',
      ingredients: [
        { quantity: '4', unit: 'oz', item: 'bittersweet chocolate' },
        { quantity: '1/2', unit: 'cup', item: 'unsalted butter' },
        { quantity: '1', unit: 'cup', item: 'powdered sugar' },
        { quantity: '2', unit: '', item: 'whole eggs' },
        { quantity: '2', unit: '', item: 'egg yolks' },
        { quantity: '6', unit: 'tbsp', item: 'all-purpose flour' },
        { quantity: '1', unit: 'tsp', item: 'vanilla extract' },
        { quantity: '', unit: '', item: 'cocoa powder for dusting' },
      ],
      steps: [
        { step: 'Preheat oven to 425°F (220°C). Grease 4 ramekins and dust with cocoa powder.' },
        { step: 'Melt chocolate and butter together in a microwave or double boiler. Stir until smooth.' },
        { step: 'Whisk in powdered sugar until fully combined.' },
        { step: 'Add eggs and egg yolks, one at a time, whisking well after each addition.' },
        { step: 'Fold in flour and vanilla extract until just combined.' },
        { step: 'Divide batter among prepared ramekins. Bake for 12-14 minutes until edges are firm but center is soft.' },
        { step: 'Let cool 1 minute, then invert onto plates. Serve immediately with ice cream or whipped cream.' },
      ],
      nutrition: {
        calories: 480,
        protein: 7,
        carbs: 42,
        fat: 32,
        fiber: 3,
        sodium: 85,
      },
      tips: [
        { tip: 'Don\'t overbake - the center should still be jiggly when you remove them.' },
        { tip: 'Run a knife around the edge before inverting to ensure clean release.' },
      ],
      variations: [
        { variation: 'Add a raspberry coulis for tart contrast.' },
        { variation: 'Use white chocolate for a sweeter version.' },
      ],
      storage: 'Best fresh, but unbaked batter can be refrigerated for 24 hours.',
    },
    recipeCategories: {
      nodes: [{ name: 'Dessert', slug: 'dessert' }],
    },
    recipeCuisines: {
      nodes: [{ name: 'French', slug: 'french' }],
    },
    author: {
      node: { name: 'Chef Marie' },
    },
    date: '2026-02-08T10:00:00',
    rating: 4.9,
    ratingCount: 203,
  },
  {
    id: '5',
    title: 'Mediterranean Quinoa Bowl',
    slug: 'mediterranean-quinoa-bowl',
    excerpt: 'A healthy and colorful bowl packed with quinoa, fresh vegetables, feta, and a zesty lemon herb dressing.',
    content: 'This Mediterranean Quinoa Bowl is as nutritious as it is delicious. Packed with protein-rich quinoa, crisp vegetables, tangy feta, and a refreshing lemon herb dressing.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
        altText: 'Mediterranean Quinoa Bowl',
      },
    },
    recipeFields: {
      prepTime: '15 mins',
      cookTime: '15 mins',
      totalTime: '30 mins',
      servings: 2,
      difficulty: 'Easy',
      ingredients: [
        { quantity: '1', unit: 'cup', item: 'quinoa' },
        { quantity: '2', unit: 'cups', item: 'vegetable broth' },
        { quantity: '1', unit: 'cup', item: 'cherry tomatoes, halved' },
        { quantity: '1', unit: 'cup', item: 'cucumber, diced' },
        { quantity: '1/2', unit: 'cup', item: 'kalamata olives' },
        { quantity: '1/2', unit: 'cup', item: 'feta cheese, crumbled' },
        { quantity: '1/4', unit: 'cup', item: 'red onion, thinly sliced' },
        { quantity: '1/4', unit: 'cup', item: 'fresh parsley' },
        { quantity: '1/4', unit: 'cup', item: 'olive oil' },
        { quantity: '2', unit: 'tbsp', item: 'lemon juice' },
        { quantity: '1', unit: 'tsp', item: 'dried oregano' },
      ],
      steps: [
        { step: 'Rinse quinoa thoroughly. Combine with vegetable broth in a pot and bring to boil.' },
        { step: 'Reduce heat, cover, and simmer for 15 minutes until water is absorbed.' },
        { step: 'Fluff quinoa with a fork and let cool slightly.' },
        { step: 'Whisk together olive oil, lemon juice, oregano, salt, and pepper for the dressing.' },
        { step: 'Combine quinoa with tomatoes, cucumber, olives, red onion, and parsley.' },
        { step: 'Drizzle with dressing and toss to combine.' },
        { step: 'Top with crumbled feta cheese and serve.' },
      ],
      nutrition: {
        calories: 420,
        protein: 14,
        carbs: 38,
        fat: 24,
        fiber: 6,
        sodium: 620,
      },
      tips: [
        { tip: 'Make extra quinoa and use throughout the week.' },
        { tip: 'Add grilled chicken for extra protein.' },
      ],
      variations: [
        { variation: 'Add roasted chickpeas for more protein and crunch.' },
        { variation: 'Substitute bulgur wheat for quinoa.' },
      ],
      storage: 'Refrigerate for up to 4 days in an airtight container.',
    },
    recipeCategories: {
      nodes: [{ name: 'Lunch', slug: 'lunch' }, { name: 'Dinner', slug: 'dinner' }],
    },
    recipeCuisines: {
      nodes: [{ name: 'Mediterranean', slug: 'mediterranean' }],
    },
    author: {
      node: { name: 'Chef Elena' },
    },
    date: '2026-02-05T10:00:00',
    rating: 4.6,
    ratingCount: 78,
  },
  {
    id: '6',
    title: 'Crispy Fish Tacos',
    slug: 'crispy-fish-tacos',
    excerpt: 'Beer-battered fish with fresh slaw, chipotle crema, and pickled onions. The ultimate taco night upgrade!',
    content: 'These Crispy Fish Tacos are loaded with flavor and texture. Crunchy beer-battered fish pairs perfectly with creamy slaw, tangy pickled onions, and a spicy chipotle crema.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80',
        altText: 'Crispy Fish Tacos',
      },
    },
    recipeFields: {
      prepTime: '25 mins',
      cookTime: '15 mins',
      totalTime: '40 mins',
      servings: 4,
      difficulty: 'Medium',
      ingredients: [
        { quantity: '1', unit: 'lb', item: 'white fish fillets (cod, tilapia)' },
        { quantity: '1', unit: 'cup', item: 'all-purpose flour' },
        { quantity: '1', unit: 'cup', item: 'beer' },
        { quantity: '1', unit: 'tsp', item: 'baking powder' },
        { quantity: '8', unit: '', item: 'small corn tortillas' },
        { quantity: '2', unit: 'cups', item: 'cabbage slaw' },
        { quantity: '1/2', unit: 'cup', item: 'mayonnaise' },
        { quantity: '2', unit: 'tbsp', item: 'chipotle in adobo, minced' },
        { quantity: '1', unit: '', item: 'lime, juiced' },
        { quantity: '1/4', unit: 'cup', item: 'red onion, pickled' },
        { quantity: '', unit: '', item: 'fresh cilantro' },
      ],
      steps: [
        { step: 'Cut fish into strips. Season with salt, pepper, and lime juice.' },
        { step: 'Mix flour, baking powder, and beer to make the batter.' },
        { step: 'Heat oil to 375°F (190°C).' },
        { step: 'Dip fish strips in batter, letting excess drip off. Fry until golden, about 3-4 minutes.' },
        { step: 'Mix mayonnaise with chipotle and lime juice for the crema.' },
        { step: 'Warm tortillas and fill with fish, slaw, pickled onions, and chipotle crema.' },
        { step: 'Garnish with fresh cilantro and serve with lime wedges.' },
      ],
      nutrition: {
        calories: 380,
        protein: 24,
        carbs: 32,
        fat: 16,
        fiber: 4,
        sodium: 540,
      },
      tips: [
        { tip: 'Pat fish dry before battering for extra crispiness.' },
        { tip: 'Keep fried fish warm in a 200°F oven while cooking in batches.' },
      ],
      variations: [
        { variation: 'Use shrimp instead of fish.' },
        { variation: 'Add mango salsa for sweetness.' },
      ],
      storage: 'Best served immediately. Store components separately.',
    },
    recipeCategories: {
      nodes: [{ name: 'Dinner', slug: 'dinner' }, { name: 'Lunch', slug: 'lunch' }],
    },
    recipeCuisines: {
      nodes: [{ name: 'Mexican', slug: 'mexican' }],
    },
    author: {
      node: { name: 'Chef Carlos' },
    },
    date: '2026-02-03T10:00:00',
    rating: 4.8,
    ratingCount: 167,
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Tips for Perfect Home Cooking',
    slug: '10-tips-for-perfect-home-cooking',
    excerpt: 'Elevate your home cooking game with these essential tips from professional chefs. Learn techniques that will transform your meals.',
    content: 'Cooking at home doesn\'t have to be complicated. With these ten professional tips, you can elevate your home cooking to restaurant quality.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
        altText: 'Home Cooking Tips',
      },
    },
    author: { node: { name: 'Chef Maria' } },
    date: '2026-02-20T10:00:00',
    categories: { nodes: [{ name: 'Tips', slug: 'tips' }] },
  },
  {
    id: '2',
    title: 'Understanding Flavor Profiles',
    slug: 'understanding-flavor-profiles',
    excerpt: 'Learn how to balance sweet, salty, sour, bitter, and umami for perfectly flavored dishes every time.',
    content: 'Great cooking is all about balance. Understanding how different flavors work together is key to creating delicious meals.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80',
        altText: 'Flavor Profiles',
      },
    },
    author: { node: { name: 'Chef Tom' } },
    date: '2026-02-18T10:00:00',
    categories: { nodes: [{ name: 'Techniques', slug: 'techniques' }] },
  },
  {
    id: '3',
    title: 'Quick Weeknight Dinners Under 30 Minutes',
    slug: 'quick-weeknight-dinners',
    excerpt: 'Busy weeknights don\'t have to mean boring food. Try these quick and delicious dinner ideas that come together in minutes.',
    content: 'Weeknight dinners need to be quick, but they can still be delicious. Here are some recipes that won\'t keep you in the kitchen long.',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80',
        altText: 'Quick Dinners',
      },
    },
    author: { node: { name: 'Chef Elena' } },
    date: '2026-02-15T10:00:00',
    categories: { nodes: [{ name: 'Quick Meals', slug: 'quick-meals' }] },
  },
];

// API functions that simulate WordPress GraphQL queries
export async function fetchRecipes(variables: {
  first?: number;
  after?: string;
  category?: string;
  cuisine?: string;
  search?: string;
}) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  let filtered = [...mockRecipes];

  if (variables.category) {
    filtered = filtered.filter(r =>
      r.recipeCategories.nodes.some(c => c.slug === variables.category)
    );
  }

  if (variables.cuisine) {
    filtered = filtered.filter(r =>
      r.recipeCuisines?.nodes.some(c => c.slug === variables.cuisine)
    );
  }

  if (variables.search) {
    const searchLower = variables.search.toLowerCase();
    filtered = filtered.filter(r =>
      r.title.toLowerCase().includes(searchLower) ||
      r.excerpt.toLowerCase().includes(searchLower)
    );
  }

  const first = variables.first || 12;
  const afterIndex = variables.after
    ? filtered.findIndex(r => r.id === variables.after) + 1
    : 0;

  const edges = filtered
    .slice(afterIndex, afterIndex + first)
    .map(recipe => ({
      node: recipe,
      cursor: recipe.id,
    }));

  return {
    recipes: {
      edges,
      pageInfo: {
        endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
        hasNextPage: afterIndex + first < filtered.length,
      },
    },
  };
}

export async function fetchRecipe(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 100));
  const recipe = mockRecipes.find(r => r.slug === slug);
  return { recipe };
}

export async function fetchCategories() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return { recipeCategories: { nodes: mockCategories } };
}

export async function fetchCuisines() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return { recipeCuisines: { nodes: mockCuisines } };
}

export async function fetchBlogPosts(variables: { first?: number }) {
  await new Promise(resolve => setTimeout(resolve, 100));
  const first = variables.first || 10;
  return {
    posts: {
      edges: mockBlogPosts.slice(0, first).map(post => ({ node: post })),
      pageInfo: {
        endCursor: null,
        hasNextPage: false,
      },
    },
  };
}

export async function fetchBlogPost(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 100));
  const post = mockBlogPosts.find(p => p.slug === slug);
  return { post };
}

export async function fetchFeaturedRecipes() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    recipes: {
      edges: mockRecipes.slice(0, 6).map(recipe => ({ node: recipe })),
    },
  };
}
