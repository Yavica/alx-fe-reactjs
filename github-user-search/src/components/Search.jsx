// src/components/Search.jsx
import React, { useState } from 'react'; // Import useState hook

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

    // Reset states before a new search
    setLoading(true);
    setUserData(null);
    setError(null);

    // For now, just log the username. We'll integrate API call here next.
    console.log('Searching for:', username);

    // Simulate an API call for demonstration (remove later)
    setTimeout(() => {
      setLoading(false);
      // Simulate success or error for now
      if (username === 'testuser') { // Example: 'testuser' is found
        setUserData({
          login: 'testuser',
          avatar_url: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Test',
          html_url: 'https://github.com/testuser',
          name: 'Test User',
          location: 'Simulated City',
          public_repos: 5
        });
      } else if (username === 'error') { // Example: 'error' triggers an error
        setError('Looks like we cant find the user.');
      } else { // Default not found
        setError('Looks like we cant find the user.');
      }
    }, 1500); // Simulate network delay
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSearchSubmit} className="flex mb-4"> {/* Attach onSubmit handler */}
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username} // Bind input value to state
          onChange={handleInputChange} // Attach onChange handler
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Searching...' : 'Search'} {/* Change button text based on loading */}
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