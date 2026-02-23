import { Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    slug: 'classic-margherita-pizza',
    description: 'A timeless Italian classic with fresh mozzarella, San Marzano tomatoes, and fragrant basil on a perfectly crispy crust.',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop',
    category: 'Italian',
    cuisine: 'Italian',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    calories: 285,
    ingredients: [
      '500g tipo 00 flour',
      '325ml warm water',
      '7g active dry yeast',
      '10g salt',
      '400g San Marzano tomatoes',
      '250g fresh mozzarella',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Sea salt'
    ],
    instructions: [
      'Dissolve yeast in warm water and let stand for 5 minutes until foamy.',
      'Mix flour and salt, then add yeast mixture. Knead for 10 minutes until smooth.',
      'Let dough rise in a covered bowl for 2 hours until doubled.',
      'Crush tomatoes by hand and season with salt.',
      'Preheat oven to 500°F (260°C) with a pizza stone.',
      'Stretch dough into a 12-inch circle.',
      'Spread tomato sauce, add torn mozzarella pieces.',
      'Bake for 12-15 minutes until crust is golden and cheese is bubbly.',
      'Top with fresh basil and drizzle with olive oil.'
    ],
    tips: [
      'Use room temperature mozzarella for even melting',
      'Don\'t overload the pizza with toppings',
      'A pizza stone makes a huge difference'
    ],
    tags: ['pizza', 'italian', 'vegetarian', 'dinner'],
    featured: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '2',
    title: 'Thai Green Curry',
    slug: 'thai-green-curry',
    description: 'Aromatic and creamy Thai green curry with tender chicken, fresh vegetables, and authentic Thai basil.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&auto=format&fit=crop',
    category: 'Asian',
    cuisine: 'Thai',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    calories: 380,
    ingredients: [
      '500g chicken breast, sliced',
      '400ml coconut milk',
      '3 tbsp green curry paste',
      '200g Thai eggplant',
      '100g bamboo shoots',
      '2 kaffir lime leaves',
      'Thai basil leaves',
      '2 tbsp fish sauce',
      '1 tbsp palm sugar',
      '1 red chili, sliced'
    ],
    instructions: [
      'Heat 1/4 cup coconut cream in a wok until oil separates.',
      'Add curry paste and fry until fragrant, about 2 minutes.',
      'Add chicken and stir-fry until cooked through.',
      'Pour in remaining coconut milk and bring to a simmer.',
      'Add eggplant, bamboo shoots, and kaffir lime leaves.',
      'Season with fish sauce and palm sugar.',
      'Simmer for 10 minutes until vegetables are tender.',
      'Stir in Thai basil and serve with jasmine rice.'
    ],
    tips: [
      'Use full-fat coconut milk for the best flavor',
      'Adjust curry paste amount to your spice preference',
      'Fresh Thai basil is essential'
    ],
    tags: ['curry', 'thai', 'chicken', 'spicy', 'dinner'],
    featured: true,
    createdAt: '2024-01-14T10:00:00Z',
    updatedAt: '2024-01-14T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '3',
    title: 'Avocado Toast with Poached Eggs',
    slug: 'avocado-toast-poached-eggs',
    description: 'The ultimate brunch dish featuring creamy avocado, perfectly poached eggs, and a sprinkle of everything bagel seasoning.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop',
    category: 'Breakfast',
    cuisine: 'American',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    calories: 320,
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '2 large eggs',
      '1 tbsp white vinegar',
      'Everything bagel seasoning',
      'Red pepper flakes',
      'Fresh lemon juice',
      'Salt and pepper',
      'Microgreens for garnish'
    ],
    instructions: [
      'Toast sourdough bread until golden and crispy.',
      'Mash avocado with lemon juice, salt, and pepper.',
      'Bring a pot of water to a gentle simmer and add vinegar.',
      'Create a swirl in the water and gently drop in eggs.',
      'Poach eggs for 3-4 minutes for runny yolks.',
      'Spread avocado mixture on toast.',
      'Top with poached eggs and season with everything bagel seasoning.',
      'Garnish with microgreens and red pepper flakes.'
    ],
    tips: [
      'Use the freshest eggs possible for best poaching results',
      'The vinegar helps the egg whites set quickly',
      'Season the avocado well for maximum flavor'
    ],
    tags: ['breakfast', 'brunch', 'healthy', 'vegetarian', 'quick'],
    featured: true,
    createdAt: '2024-01-13T10:00:00Z',
    updatedAt: '2024-01-13T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '4',
    title: 'Chocolate Lava Cake',
    slug: 'chocolate-lava-cake',
    description: 'Decadent individual chocolate cakes with a molten center that flows when you cut into them. Pure chocolate heaven!',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&auto=format&fit=crop',
    category: 'Desserts',
    cuisine: 'French',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    calories: 420,
    ingredients: [
      '200g dark chocolate (70%)',
      '100g unsalted butter',
      '2 whole eggs',
      '2 egg yolks',
      '50g sugar',
      '2 tbsp flour',
      'Pinch of salt',
      'Butter and cocoa for ramekins',
      'Vanilla ice cream for serving'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Butter 4 ramekins and dust with cocoa powder.',
      'Melt chocolate and butter together over a double boiler.',
      'Whisk eggs, yolks, and sugar until pale and thick.',
      'Fold melted chocolate into egg mixture.',
      'Sift in flour and salt, fold gently.',
      'Divide batter among ramekins.',
      'Bake for 12 minutes until edges are set but center jiggles.',
      'Let rest 1 minute, then invert onto plates.',
      'Serve immediately with vanilla ice cream.'
    ],
    tips: [
      'Use high-quality chocolate for the best results',
      'Don\'t overbake - the center should be liquid',
      'Can be prepared ahead and refrigerated, add 2 min to bake time'
    ],
    tags: ['dessert', 'chocolate', 'french', 'romantic', 'baking'],
    featured: true,
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '5',
    title: 'Mediterranean Quinoa Salad',
    slug: 'mediterranean-quinoa-salad',
    description: 'A refreshing and nutritious salad packed with protein-rich quinoa, crisp vegetables, feta cheese, and a zesty lemon dressing.',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&auto=format&fit=crop',
    category: 'Salads',
    cuisine: 'Mediterranean',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 15,
    servings: 6,
    calories: 245,
    ingredients: [
      '1 cup quinoa',
      '1 cucumber, diced',
      '1 pint cherry tomatoes, halved',
      '1/2 red onion, finely diced',
      '1 cup kalamata olives',
      '200g feta cheese, crumbled',
      '1/4 cup fresh parsley, chopped',
      '1/4 cup fresh mint, chopped',
      '1/4 cup olive oil',
      '3 tbsp lemon juice',
      '2 garlic cloves, minced'
    ],
    instructions: [
      'Rinse quinoa and cook according to package directions.',
      'Let quinoa cool completely.',
      'Prepare all vegetables and herbs.',
      'Whisk together olive oil, lemon juice, garlic, salt, and pepper.',
      'Combine cooled quinoa with vegetables in a large bowl.',
      'Add olives, herbs, and feta cheese.',
      'Pour dressing over salad and toss gently.',
      'Refrigerate for at least 30 minutes before serving.'
    ],
    tips: [
      'Toast the quinoa before cooking for extra nutty flavor',
      'Make ahead - it tastes even better the next day',
      'Add grilled chicken for a complete meal'
    ],
    tags: ['salad', 'healthy', 'mediterranean', 'vegetarian', 'meal-prep'],
    featured: false,
    createdAt: '2024-01-11T10:00:00Z',
    updatedAt: '2024-01-11T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '6',
    title: 'Homemade Ramen',
    slug: 'homemade-ramen',
    description: 'Rich, flavorful tonkotsu-style ramen with a creamy pork broth, tender chashu, soft-boiled eggs, and all the classic toppings.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop',
    category: 'Asian',
    cuisine: 'Japanese',
    difficulty: 'Hard',
    prepTime: 60,
    cookTime: 480,
    servings: 4,
    calories: 650,
    ingredients: [
      '2 lbs pork bones',
      '1 lb pork belly for chashu',
      '4 portions fresh ramen noodles',
      '4 soft-boiled eggs',
      'Nori sheets',
      'Green onions, sliced',
      'Corn kernels',
      'Wood ear mushrooms',
      'Sesame seeds',
      'Tare (soy sauce, mirin, sake)'
    ],
    instructions: [
      'Blanch pork bones, then simmer for 8 hours for rich broth.',
      'Roll and tie pork belly, braise in soy, mirin, and sake.',
      'Prepare soft-boiled eggs and marinate in tare.',
      'Strain broth and season with salt and tare.',
      'Cook ramen noodles according to package directions.',
      'Slice chashu into thin rounds.',
      'Assemble: noodles, broth, chashu, egg, and toppings.',
      'Garnish with nori, green onions, and sesame seeds.'
    ],
    tips: [
      'The longer you simmer the broth, the richer it gets',
      'Marinate the eggs overnight for best flavor',
      'Use fresh ramen noodles if possible'
    ],
    tags: ['ramen', 'japanese', 'soup', 'pork', 'comfort-food'],
    featured: false,
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '7',
    title: 'Classic Beef Tacos',
    slug: 'classic-beef-tacos',
    description: 'Authentic Mexican street-style tacos with seasoned ground beef, fresh pico de gallo, and all your favorite toppings.',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop',
    category: 'Mexican',
    cuisine: 'Mexican',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    calories: 380,
    ingredients: [
      '1 lb ground beef',
      '1 packet taco seasoning or homemade blend',
      '12 small corn tortillas',
      '1 cup pico de gallo',
      '1 cup shredded lettuce',
      '1 cup shredded cheese',
      'Sour cream',
      'Fresh cilantro',
      'Lime wedges',
      'Hot sauce'
    ],
    instructions: [
      'Brown ground beef in a skillet over medium-high heat.',
      'Drain excess fat and add taco seasoning with water.',
      'Simmer for 5 minutes until sauce thickens.',
      'Warm tortillas on a dry skillet or over gas flame.',
      'Prepare pico de gallo and other toppings.',
      'Assemble tacos with meat and desired toppings.',
      'Serve with lime wedges and hot sauce.'
    ],
    tips: [
      'Double the corn tortillas for durability',
      'Warm tortillas are essential - never skip this step',
      'Use fresh limes for the best flavor'
    ],
    tags: ['tacos', 'mexican', 'beef', 'quick', 'family-friendly'],
    featured: false,
    createdAt: '2024-01-09T10:00:00Z',
    updatedAt: '2024-01-09T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '8',
    title: 'Butter Chicken',
    slug: 'butter-chicken',
    description: 'Creamy, aromatic Indian butter chicken (Murgh Makhani) with tender chicken pieces in a rich tomato-based sauce.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop',
    category: 'Indian',
    cuisine: 'Indian',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    calories: 490,
    ingredients: [
      '1 kg chicken thighs, cubed',
      '1 cup plain yogurt',
      '2 tbsp garam masala',
      '400g crushed tomatoes',
      '1 cup heavy cream',
      '4 tbsp butter',
      '1 onion, finely diced',
      '4 garlic cloves, minced',
      '2 inch ginger, grated',
      'Fresh cilantro',
      'Kashmiri chili powder'
    ],
    instructions: [
      'Marinate chicken in yogurt, garam masala, and salt for 2 hours.',
      'Grill or pan-fry marinated chicken until charred.',
      'Sauté onion in butter until golden.',
      'Add garlic and ginger, cook until fragrant.',
      'Add tomatoes and spices, simmer for 15 minutes.',
      'Blend sauce until smooth, return to pan.',
      'Add cream and cooked chicken.',
      'Simmer for 10 minutes, finish with butter.',
      'Garnish with cilantro and serve with naan.'
    ],
    tips: [
      'Marinating overnight gives the best flavor',
      'Use Kashmiri chili for color without too much heat',
      'Finish with a pat of butter for authentic taste'
    ],
    tags: ['indian', 'chicken', 'curry', 'creamy', 'comfort-food'],
    featured: false,
    createdAt: '2024-01-08T10:00:00Z',
    updatedAt: '2024-01-08T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '9',
    title: 'Fresh Berry Smoothie Bowl',
    slug: 'fresh-berry-smoothie-bowl',
    description: 'A vibrant, Instagram-worthy smoothie bowl loaded with fresh berries, granola, and nutritious superfoods.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&auto=format&fit=crop',
    category: 'Breakfast',
    cuisine: 'American',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    calories: 340,
    ingredients: [
      '1 cup frozen mixed berries',
      '1 frozen banana',
      '1/2 cup almond milk',
      '1 tbsp almond butter',
      '1/4 cup granola',
      'Fresh strawberries, sliced',
      'Fresh blueberries',
      'Chia seeds',
      'Coconut flakes',
      'Honey drizzle'
    ],
    instructions: [
      'Add frozen berries, banana, and almond milk to blender.',
      'Add almond butter for creaminess.',
      'Blend until thick and smooth (thicker than a regular smoothie).',
      'Pour into a bowl.',
      'Arrange toppings in rows or sections.',
      'Drizzle with honey.',
      'Serve immediately.'
    ],
    tips: [
      'Use frozen fruit for a thick, ice-cream like texture',
      'Don\'t add too much liquid - it should be thick',
      'Prep toppings ahead for quick assembly'
    ],
    tags: ['breakfast', 'healthy', 'smoothie', 'vegan', 'quick'],
    featured: false,
    createdAt: '2024-01-07T10:00:00Z',
    updatedAt: '2024-01-07T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '10',
    title: 'Garlic Parmesan Roasted Vegetables',
    slug: 'garlic-parmesan-roasted-vegetables',
    description: 'Crispy, caramelized roasted vegetables with golden garlic and nutty Parmesan cheese. The perfect side dish!',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop',
    category: 'Sides',
    cuisine: 'American',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    calories: 180,
    ingredients: [
      '2 cups broccoli florets',
      '2 cups cauliflower florets',
      '2 zucchinis, sliced',
      '1 red bell pepper, chunked',
      '1 yellow bell pepper, chunked',
      '6 garlic cloves, minced',
      '4 tbsp olive oil',
      '1/2 cup grated Parmesan',
      'Italian herbs',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Cut all vegetables into similar-sized pieces.',
      'Toss vegetables with olive oil, garlic, and seasonings.',
      'Spread in a single layer on baking sheets.',
      'Roast for 25 minutes, stirring halfway.',
      'Sprinkle with Parmesan cheese.',
      'Roast for another 10 minutes until golden.',
      'Serve hot with extra Parmesan.'
    ],
    tips: [
      'Don\'t overcrowd the pan for crispy results',
      'Cut vegetables to similar sizes for even cooking',
      'Add hardy vegetables first, delicate ones later'
    ],
    tags: ['vegetables', 'sides', 'healthy', 'vegetarian', 'roasted'],
    featured: false,
    createdAt: '2024-01-06T10:00:00Z',
    updatedAt: '2024-01-06T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '11',
    title: 'Classic French Croissants',
    slug: 'classic-french-croissants',
    description: 'Buttery, flaky, golden croissants made from scratch. A labor of love that\'s absolutely worth the effort.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop',
    category: 'Baking',
    cuisine: 'French',
    difficulty: 'Hard',
    prepTime: 120,
    cookTime: 20,
    servings: 12,
    calories: 280,
    ingredients: [
      '500g all-purpose flour',
      '10g salt',
      '80g sugar',
      '10g instant yeast',
      '300ml whole milk',
      '280g cold unsalted butter',
      '1 egg for wash'
    ],
    instructions: [
      'Mix flour, salt, sugar, yeast, and milk into a dough.',
      'Knead until smooth, refrigerate for 1 hour.',
      'Pound butter into a flat rectangle.',
      'Wrap butter in dough and perform 3 turns.',
      'Refrigerate between each turn for 30 minutes.',
      'Roll out and cut into triangles.',
      'Shape croissants and proof for 2 hours.',
      'Brush with egg wash.',
      'Bake at 400°F for 15-20 minutes until golden.'
    ],
    tips: [
      'Keep everything cold for flaky layers',
      'Don\'t rush the turns and resting periods',
      'Use high-quality European butter'
    ],
    tags: ['baking', 'french', 'breakfast', 'pastry', 'advanced'],
    featured: false,
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-05T10:00:00Z',
    ratings: [],
    reviews: []
  },
  {
    id: '12',
    title: 'Grilled Salmon with Lemon Dill',
    slug: 'grilled-salmon-lemon-dill',
    description: 'Perfectly grilled salmon fillets with a bright lemon-dill butter sauce. Healthy, elegant, and ready in 20 minutes.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop',
    category: 'Seafood',
    cuisine: 'American',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    calories: 320,
    ingredients: [
      '4 salmon fillets (6 oz each)',
      '4 tbsp butter',
      '2 lemons',
      '4 tbsp fresh dill, chopped',
      '4 garlic cloves, minced',
      'Olive oil',
      'Salt and pepper',
      'Lemon wedges for serving'
    ],
    instructions: [
      'Pat salmon dry and season with salt and pepper.',
      'Brush with olive oil.',
      'Preheat grill to medium-high.',
      'Grill salmon 4-5 minutes per side.',
      'Melt butter with garlic and lemon juice.',
      'Stir in fresh dill.',
      'Spoon sauce over grilled salmon.',
      'Serve with lemon wedges.'
    ],
    tips: [
      'Don\'t move the salmon until it releases naturally from the grill',
      'Internal temperature should reach 145°F',
      'Let it rest for 2 minutes before serving'
    ],
    tags: ['seafood', 'salmon', 'healthy', 'grilling', 'quick'],
    featured: false,
    createdAt: '2024-01-04T10:00:00Z',
    updatedAt: '2024-01-04T10:00:00Z',
    ratings: [],
    reviews: []
  }
];

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find(r => r.slug === slug);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  return recipes.filter(r => r.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedRecipes = (): Recipe[] => {
  return recipes.filter(r => r.featured);
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowerQuery = query.toLowerCase();
  return recipes.filter(r => 
    r.title.toLowerCase().includes(lowerQuery) ||
    r.description.toLowerCase().includes(lowerQuery) ||
    r.tags.some(t => t.toLowerCase().includes(lowerQuery)) ||
    r.ingredients.some(i => i.toLowerCase().includes(lowerQuery))
  );
};
