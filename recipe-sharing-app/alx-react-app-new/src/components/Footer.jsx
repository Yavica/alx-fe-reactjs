// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    // Apply inline styling to the footer element
    <footer style={{
      backgroundColor: '#343a40', // Dark gray background for the footer
      color: 'white',             // White text color
      textAlign: 'center',        // Center align the text
      padding: '15px',            // Padding inside the footer
      fontSize: '0.9em',          // Slightly smaller font size
      marginTop: '20px',          // Margin above the footer
      borderRadius: '8px'         // Rounded corners
    }}>
      <p>&copy; 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;
