// src/Home.jsx

import React from 'react';

// Define the Home functional component
function Home() {
  return (
    // Simple div with inline styling for padding and text alignment
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f8ff', borderRadius: '8px', margin: '20px' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em' }}>Welcome to Our Company</h1>
      <p style={{ color: '#555', fontSize: '1.2em', lineHeight: '1.6' }}>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

// Export the Home component for use in App.jsx (for routing)
export default Home;
