// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites); // Dependency to re-generate when favorites change

  // Regenerate recommendations when the component mounts or favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]); // Ensure generateRecommendations is stable or memoized if it were expensive

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <h2>Recipe Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available right now. Try favoriting some recipes to get personalized suggestions!</p>
      ) : (
        recommendations.map(recipe => (
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

export default RecommendationsList;