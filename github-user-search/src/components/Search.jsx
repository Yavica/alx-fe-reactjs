// src/components/Search.jsx
import React from 'react';

function Search() {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
      <form className="flex">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
      {/* Search results will be displayed here later */}
    </div>
  );
}

export default Search;