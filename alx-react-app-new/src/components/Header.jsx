// src/components/Header.jsx

import React from 'react'; // React is imported for JSX functionality

// Define the Header functional component
function Header() {
  return (
    // The <header> HTML element is styled using the 'style' prop.
    // The value of the 'style' prop is a JavaScript object.
    // CSS property names are written in camelCase (e.g., backgroundColor instead of background-color).
    <header style={{
      backgroundColor: 'navy', // Sets the background color of the header to navy blue
      color: 'white',          // Sets the text color inside the header to white
      textAlign: 'center',     // Centers the text horizontally within the header
      padding: '15px',         // Adds 15 pixels of space inside the header, around its content
      borderRadius: '8px'      // Rounds the corners of the header element slightly
    }}>
      {/* The main heading for the application */}
      <h1>My Favorite Cities</h1>
    </header>
  );
}

// Export the Header component so it can be imported and used in other files (like App.jsx)
export default Header;
