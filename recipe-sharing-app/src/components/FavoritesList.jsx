// src/components/FavoritesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  // Map favorite IDs to actual recipe objects
  const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean); // Filter out any undefineds if a favorite ID doesn't correspond to an existing recipe

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't added any favorite recipes yet. Click the "Add to Favorites" button on a recipe's detail page!</p>
      ) : (
        favoriteRecipes.map(recipe => (
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

export default FavoritesList;