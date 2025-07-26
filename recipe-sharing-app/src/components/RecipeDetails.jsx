// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton'; // Import FavoriteButton

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipeId from the URL parameter
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId)) // Find the recipe by ID (parse ID to integer)
  );
  const [isEditing, setIsEditing] = React.useState(false); // State to toggle edit mode

  // If recipe is not found (e.g., invalid ID in URL or deleted recipe)
  if (!recipe) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <p>Recipe not found!</p>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Back to all recipes</Link>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <Link to="/" style={{ display: 'block', marginBottom: '15px', textDecoration: 'none', color: '#007bff' }}>&larr; Back to all recipes</Link>

      {isEditing ? (
        // Render EditRecipeForm if in editing mode
        <EditRecipeForm recipe={recipe} setIsEditing={setIsEditing} />
      ) : (
        // Render recipe details if not in editing mode
        <>
          <h1 style={{ color: '#333', marginBottom: '10px' }}>{recipe.title}</h1>
          <p style={{ color: '#555', lineHeight: '1.6' }}>{recipe.description}</p>
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{ padding: '8px 12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
            >
              Edit Recipe
            </button>
            <DeleteRecipeButton recipeId={recipe.id} />
            <FavoriteButton recipeId={recipe.id} /> {/* Add Favorite button */}
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;