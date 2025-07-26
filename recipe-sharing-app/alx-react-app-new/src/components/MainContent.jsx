// src/components/MainContent.jsx

import React from 'react';

function MainContent() {
  return (
    // Apply inline styling to the main content div
    <div style={{
      padding: '30px',          // More padding for content area
      backgroundColor: '#e9ecef', // Light gray background to distinguish it
      textAlign: 'center',      // Center align the text
      fontSize: '1.2em',        // Slightly larger font size
      lineHeight: '1.6',        // Improved line spacing
      color: '#495057',         // Darker text color
      margin: '20px 0',         // Margin top and bottom
      borderRadius: '8px'       // Rounded corners
    }}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </div>
  );
}

export default MainContent;
