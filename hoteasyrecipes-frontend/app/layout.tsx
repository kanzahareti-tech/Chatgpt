import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'HotEasyRecipes - Hot, Easy, Delicious Recipes',
  description: 'Discover quick, approachable recipes with stunning photography, intuitive navigation, and interactive cooking tools.',
  keywords: ['recipes', 'cooking', 'easy recipes', 'quick meals', 'food'],
  openGraph: {
    title: 'HotEasyRecipes - Hot, Easy, Delicious Recipes',
    description: 'Discover quick, approachable recipes with stunning photography and interactive cooking tools.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HotEasyRecipes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
