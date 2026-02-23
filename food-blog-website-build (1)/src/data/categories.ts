import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Italian',
    slug: 'italian',
    description: 'Classic Italian recipes from pasta to pizza, risotto to tiramisu.',
    image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&auto=format&fit=crop',
    recipeCount: 1
  },
  {
    id: '2',
    name: 'Asian',
    slug: 'asian',
    description: 'Explore the diverse flavors of Asian cuisine from Thai to Japanese.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop',
    recipeCount: 2
  },
  {
    id: '3',
    name: 'Breakfast',
    slug: 'breakfast',
    description: 'Start your day right with delicious breakfast and brunch recipes.',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop',
    recipeCount: 2
  },
  {
    id: '4',
    name: 'Desserts',
    slug: 'desserts',
    description: 'Indulge in sweet treats from cakes to cookies and everything in between.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop',
    recipeCount: 1
  },
  {
    id: '5',
    name: 'Salads',
    slug: 'salads',
    description: 'Fresh, healthy, and flavorful salad recipes for every season.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    recipeCount: 1
  },
  {
    id: '6',
    name: 'Mexican',
    slug: 'mexican',
    description: 'Vibrant Mexican cuisine with bold flavors and fresh ingredients.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop',
    recipeCount: 1
  },
  {
    id: '7',
    name: 'Indian',
    slug: 'indian',
    description: 'Aromatic Indian dishes with rich spices and complex flavors.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop',
    recipeCount: 1
  },
  {
    id: '8',
    name: 'Seafood',
    slug: 'seafood',
    description: 'Fresh catches prepared with care - fish, shrimp, and more.',
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&auto=format&fit=crop',
    recipeCount: 1
  },
  {
    id: '9',
    name: 'Baking',
    slug: 'baking',
    description: 'From bread to pastries, master the art of baking at home.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop',
    recipeCount: 1
  },
  {
    id: '10',
    name: 'Sides',
    slug: 'sides',
    description: 'Perfect accompaniments to complete any meal.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    recipeCount: 1
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
