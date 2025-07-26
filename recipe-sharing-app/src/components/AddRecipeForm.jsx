// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and description for the recipe.');
      return;
    }
    // Generate a simple unique ID using current timestamp
    addRecipe({ id: Date.now(), title, description });
    setTitle(''); // Clear the form fields
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #eee', padding: '20px', margin: '20px 0', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>Add New Recipe</h2>
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
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;