// src/Navbar.jsx

import React from 'react';
// Import the 'Link' component from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Define the Navbar functional component
function Navbar() {
  return (
    // Main navigation bar container with inline styling
    <nav style={{
      backgroundColor: '#333', // Dark background for the navbar
      padding: '15px 20px',    // Padding inside the navbar
      display: 'flex',         // Use flexbox for horizontal alignment of links
      justifyContent: 'center',// Center the links horizontally
      borderRadius: '8px',     // Rounded corners for the navbar
      marginBottom: '20px',    // Margin below the navbar
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)' // Subtle shadow
    }}>
      {/* List of navigation links */}
      <ul style={{
        listStyle: 'none',     // Remove bullet points from list items
        margin: 0,             // Remove default margin
        padding: 0,            // Remove default padding
        display: 'flex',       // Use flexbox for horizontal alignment of list items
        gap: '30px'            // Space between list items
      }}>
        <li>
          {/* Link component for Home page */}
          <Link to="/" style={{
            color: 'white',        // White text color
            textDecoration: 'none',// Remove underline
            fontSize: '1.1em',     // Font size
            fontWeight: 'bold',    // Bold text
            transition: 'color 0.3s ease' // Smooth color transition on hover
          }} onMouseOver={(e) => e.target.style.color = '#007bff'} // Change color on hover
            onMouseOut={(e) => e.target.style.color = 'white'} // Revert color on mouse out
          >Home</Link>
        </li>
        <li>
          {/* Link component for About page */}
          <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#007bff'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >About</Link>
        </li>
        <li>
          {/* Link component for Services page */}
          <Link to="/services" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#007bff'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >Services</Link>
        </li>
        <li>
          {/* Link component for Contact page */}
          <Link to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#007bff'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// Export the Navbar component
export default Navbar;
