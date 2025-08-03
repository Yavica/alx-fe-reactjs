// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData, fetchUserRepositories } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const trimmed = username.trim();
    if (!trimmed) {
      setError('Please enter a GitHub username.');
      setUserData(null);
      setUserRepos([]);
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);
    setUserRepos([]);

    try {
      const data = await fetchUserData(trimmed);
      const repos = await fetchUserRepositories(trimmed);

      setUserData(data);
      setUserRepos(repos);
    } catch (err) {
      const isUserNotFound = err.message === 'User not found.';
      setError(isUserNotFound ? 'Looks like we can’t find the user.' : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row gap-2 mb-6"
        aria-label="GitHub user search form"
      >
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          aria-label="GitHub username"
          disabled={loading}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && (
        <p className="text-center text-blue-500 animate-pulse">Fetching data...</p>
      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {userData && (
        <section className="text-center mb-6">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 shadow-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/150x150/cccccc/000000?text=No+Avatar';
            }}
          />
          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            {userData.name || userData.login}
          </h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-1"
          >
            @{userData.login}
          </a>

          {userData.bio && (
            <p className="text-sm italic text-gray-700 mt-2">{userData.bio}</p>
          )}

          {userData.location && (
            <p className="flex items-center justify-center text-sm text-gray-600 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {userData.location}
            </p>
          )}
        </section>
      )}

      {userRepos.length > 0 && (
        <section aria-label="User repositories">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Repositories</h3>
          <ul className="space-y-3">
            {userRepos.map((repo) => (
              <li key={repo.id} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="text-sm text-gray-700 mt-1">{repo.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default Search;
