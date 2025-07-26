// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm); // Get current search term to control input

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm} // Makes the input a controlled component
      onChange={handleChange}
      placeholder="Search recipes by title or description..."
      style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ddd', marginBottom: '20px' }}
    />
  );
};

export default SearchBar;