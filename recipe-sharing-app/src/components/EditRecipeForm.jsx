// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe, setIsEditing }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Use useEffect to update local state if the 'recipe' prop changes (e.g., if navigating between recipes while editing)
  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please ensure both title and description are filled.');
      return;
    }
    updateRecipe({ ...recipe, title, description }); // Create a new recipe object with updated title/description
    setIsEditing(false); // Exit editing mode after saving
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #eee', padding: '20px', margin: '20px 0', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h3>Edit Recipe</h3>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          rows="4"
          style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          required
        />
      </div>
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
        Save Changes
      </button>
      <button
        type="button" // Important to prevent form submission
        onClick={() => setIsEditing(false)}
        style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;