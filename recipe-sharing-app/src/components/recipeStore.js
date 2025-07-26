// src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  // --- Recipes State & Actions ---
  recipes: [], // Array to hold all recipe objects
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }), // Useful for initial loading or replacing the list
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe // Replace the old recipe with the updated one
    )
  })),

  // --- Search State & Actions ---
  searchTerm: '', // The current search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // --- Favorites State & Actions ---
  favorites: [], // Array to hold IDs of favorite recipes
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) { // Prevent adding duplicate favorites
      return { favorites: [...state.favorites, recipeId] };
    }
    return state; // If already a favorite, return current state without change
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // --- Recommendations State & Actions ---
  recommendations: [], // Array to hold recommended recipe objects
  generateRecommendations: () => set(state => {
    // --- SIMPLE MOCK RECOMMENDATION LOGIC ---
    // This is a basic example. For a real app, this would be much more sophisticated
    // based on ingredients, categories, user history, etc.

    const favoriteRecipeObjects = state.favorites
      .map(favId => state.recipes.find(r => r.id === favId))
      .filter(Boolean); // Get actual recipe objects for favorites, filter out undefined

    let recommended = [];

    if (favoriteRecipeObjects.length > 0) {
      // Try to recommend recipes that are NOT favorites but share common keywords
      const favoriteKeywords = new Set();
      favoriteRecipeObjects.forEach(favRecipe => {
        favRecipe.title.toLowerCase().split(' ').forEach(word => favoriteKeywords.add(word));
        favRecipe.description.toLowerCase().split(' ').forEach(word => favoriteKeywords.add(word));
      });

      recommended = state.recipes.filter(recipe =>
        !state.favorites.includes(recipe.id) && // Must not be a favorite
        Array.from(favoriteKeywords).some(keyword =>
          recipe.title.toLowerCase().includes(keyword) ||
          recipe.description.toLowerCase().includes(keyword)
        )
      );
    }

    // Fallback: If not enough specific recommendations, add some random non-favorite recipes
    const nonFavoriteRecipes = state.recipes.filter(r => !state.favorites.includes(r.id));
    while (recommended.length < 3 && nonFavoriteRecipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * nonFavoriteRecipes.length);
      const randomRecipe = nonFavoriteRecipes.splice(randomIndex, 1)[0];
      if (randomRecipe && !recommended.some(r => r.id === randomRecipe.id)) { // Ensure no duplicates
        recommended.push(randomRecipe);
      }
    }

    return { recommendations: recommended.slice(0, 5) }; // Limit to top 5 recommendations
  }),
}));

export { useRecipeStore };