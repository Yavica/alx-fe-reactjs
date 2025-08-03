// src/App.jsx
import React from 'react';
import Search from './components/Search'; // Import the new Search component

function App() {
  return (
    // Main container for the application
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">GitHub User Search</h1>

      {/* Render the Search component here */}
      <Search /> 

      {/* We'll add Tailwind CSS here later */}
      {/* We'll add search functionality and user display here soon. */}
      {/* Placeholder for future components */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<div>Search Page</div>} />
          <Route path="/user/:username" element={<div>User Details Page</div>} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;