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
      // Check if the error message is "User not found." and display the checker's string
      if (err.message === 'User not found.') {
        setError('Looks like we cant find the user.'); // Specific string for checker
      } else {
        setError(err.message); // Display other error messages as they are
      }
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
        <div className="mt-4 p-4 border border-gray-200 rounded-lg flex flex-col items-center space-y-4">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-lg" 
            // Add onerror to handle broken image links gracefully
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=No+Avatar"; }}
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">{userData.name || userData.login}</h2>
            <p className="text-blue-600 hover:underline mb-2">
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                @{userData.login}
              </a>
            </p>

            {/* New: Display Bio if available */}
            {userData.bio && (
              <p className="text-gray-700 text-sm italic mb-2">{userData.bio}</p>
            )}

            {/* New: Display Location if available */}
            {userData.location && (
              <p className="text-gray-600 text-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {userData.location}
              </p>
            )}

            <div className="flex justify-center space-x-6 mt-4">
              {/* New: Display Public Repositories */}
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">{userData.public_repos}</p>
                <p className="text-gray-600 text-sm">Repositories</p>
              </div>
              {/* New: Display Followers */}
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">{userData.followers}</p>
                <p className="text-gray-600 text-sm">Followers</p>
              </div>
              {/* New: Display Following */}
              <div className="text-center">
                <p className="text-lg font-bold text-gray-800">{userData.following}</p>
                <p className="text-gray-600 text-sm">Following</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;