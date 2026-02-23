import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Recipes } from '@/pages/Recipes';
import { RecipeDetail } from '@/pages/RecipeDetail';
import { Categories } from '@/pages/Categories';
import { CategoryPage } from '@/pages/CategoryPage';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Newsletter } from '@/pages/Newsletter';
import { Search } from '@/pages/Search';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { SavedRecipes } from '@/pages/SavedRecipes';
import { Admin } from '@/pages/Admin';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Route - no layout */}
        <Route path="/admin" element={<Admin />} />
        
        {/* Public Routes with Layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipe/:slug" element={<RecipeDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/saved" element={<SavedRecipes />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
