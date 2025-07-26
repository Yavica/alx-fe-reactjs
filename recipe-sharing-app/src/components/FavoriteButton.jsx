// src/components/FavoriteButton.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '8px 12px',
        backgroundColor: isFavorite ? '#ffc107' : '#f0ad4e', // Yellow for favorited, orange for not
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px'
      }}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;