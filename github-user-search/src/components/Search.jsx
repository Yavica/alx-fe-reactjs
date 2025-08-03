// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service function

function Search() {
  // State to store the value of the search input
  const [username, setUsername] = useState('');
  // State to manage loading status
  const [loading, setLoading] = useState(false);
  // State to store user data
  const [userData, setUserData] = useState(null);
  // State to manage error messages
  const [error, setError] = useState(null);

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setUsername(event.target.value); // Update username state with input value
  };

  // Function to handle form submission
  const handleSearchSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)

    // Ensure username is not empty before searching
    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      setUserData(null);
      return;
    }

    // Reset states before a new search
    setLoading(true);
    setUserData(null);
    setError(null);

    try {
      // Call the actual API service function
      const data = await fetchUserData(username);
      setUserData(data); // Set the fetched user data
    } catch (err) {
      // Set the error message from the API service
      setError(err.message);
    } finally {
      setLoading(false); // Always set loading to false after the operation
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSearchSubmit} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading} // Disable input while loading
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Conditional rendering for loading, error, and user data */}
      {loading && (
        <p className="text-center text-blue-600">Loading...</p>
      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {userData && (
        <div className="mt-4 p-4 border border-gray-200 rounded-lg flex items-center space-x-4">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            className="w-16 h-16 rounded-full" 
            // Add onerror to handle broken image links gracefully
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=No+Avatar"; }}
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{userData.name || userData.login}</h2>
            <p className="text-gray-600">
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                @{userData.login} on GitHub
              </a>
            </p>
            {/* We'll add more details like location/repos in Task 2 */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;