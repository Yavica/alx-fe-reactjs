// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './store/recipeStore';

function App() {
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const recipes = useRecipeStore(state => state.recipes);

  // Initialize some recipes when the app loads if the store is empty
  useEffect(() => {
    if (recipes.length === 0) {
      setRecipes([
        { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish made with eggs, hard cheese, cured pork, and black pepper. Quick and easy!' },
        { id: 2, title: 'Chicken Tikka Masala', description: 'Chunks of roasted marinated chicken in a spiced curry sauce, a popular dish from Indian cuisine.' },
        { id: 3, title: 'Vegetable Stir-Fry', description: 'A quick and healthy dish with various colorful vegetables and a savory soy-ginger sauce.' },
        { id: 4, title: 'Tomato Soup', description: 'A comforting and warm soup made with ripe tomatoes and fresh herbs, perfect for a chilly day.' },
        { id: 5, title: 'Beef Stew', description: 'Hearty and wholesome stew with tender beef, carrots, potatoes, and savory broth, slow-cooked to perfection.' },
        { id: 6, title: 'Lemon Garlic Salmon', description: 'Healthy baked salmon fillets seasoned with lemon, garlic, and herbs, a light and flavorful dinner option.' },
        { id: 7, title: 'Quinoa Salad', description: 'Light and refreshing salad with fluffy quinoa, cucumber, tomatoes, bell peppers, and a tangy lemon vinaigrette.' },
        { id: 8, title: 'Classic Pancakes', description: 'Fluffy and golden pancakes, ideal for breakfast or brunch, served with maple syrup and fresh berries.' },
        { id: 9, title: 'Homemade Pizza', description: 'Customize your own pizza with your favorite toppings on a crispy crust, baked fresh at home.' },
        { id: 10, title: 'Chocolate Chip Cookies', description: 'Warm, soft, and chewy chocolate chip cookies, a classic dessert that everyone loves.' },
      ]);
    }
  }, [recipes.length, setRecipes]); // Dependencies for useEffect

  return (
    // BrowserRouter wraps the entire application to enable routing
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '0 15px', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333', paddingBottom: '15px', borderBottom: '1px solid #eee' }}>
          {/* Link to navigate back to the home page */}
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Recipe Sharing Application</Link>
        </h1>

        {/* Routes define which component to render based on the URL */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <div style={{ padding: '20px 0' }}>
              <AddRecipeForm />
              <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #ddd' }}/>
              <SearchBar />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </div>
          } />

          {/* Recipe Details Page Route - dynamic :recipeId parameter */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />

          {/* Catch-all route for unmatched paths (404 Not Found) */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#fff', borderRadius: '8px', margin: '20px 0' }}>
              <h2 style={{ color: '#dc3545' }}>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
              <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Go to Home Page</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;