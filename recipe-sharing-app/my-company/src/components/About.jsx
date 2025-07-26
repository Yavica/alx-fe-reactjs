// src/About.jsx

import React from 'react';

// Define the About functional component
function About() {
  return (
    // Simple div with inline styling for padding and text alignment
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e6f2ff', borderRadius: '8px', margin: '20px' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em' }}>About Us</h1>
      <p style={{ color: '#555', fontSize: '1.2em', lineHeight: '1.6' }}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
    </div>
  );
}

// Export the About component
export default About;
