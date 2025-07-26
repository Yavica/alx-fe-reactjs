// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // Navigate back to the home page after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ padding: '8px 12px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;