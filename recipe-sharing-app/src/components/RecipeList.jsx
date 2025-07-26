// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  // Filter recipes based on the searchTerm (case-insensitive, checks title and description)
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Available Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found matching your search criteria. Try a different term or add a new recipe!</p>
      ) : (
        filteredRecipes.map(recipe => (
          // Each recipe links to its detail page
          <Link to={`/recipes/${recipe.id}`} key={recipe.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', cursor: 'pointer', backgroundColor: '#fdfdfd', borderRadius: '4px' }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;