// src/Services.jsx

import React from 'react';

// Define the Services functional component
function Services() {
  return (
    // Simple div with inline styling for padding and text alignment
    <div style={{ padding: '20px', backgroundColor: '#d9ecff', borderRadius: '8px', margin: '20px' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em', textAlign: 'center' }}>Our Services</h1>
      <ul style={{ listStyleType: 'disc', paddingLeft: '40px', fontSize: '1.2em', color: '#555' }}>
        <li style={{ marginBottom: '10px' }}>Technology Consulting</li>
        <li style={{ marginBottom: '10px' }}>Market Analysis</li>
        <li style={{ marginBottom: '10px' }}>Product Development</li>
      </ul>
    </div>
  );
}

// Export the Services component
export default Services;
