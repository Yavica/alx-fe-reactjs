// src/components/UserProfile.jsx

import React from 'react'; // React is imported for JSX functionality

// UserProfile component receives props (properties) like name, age, and bio
function UserProfile(props) {
  return (
    // The main container div for the user profile information.
    // Inline styles are applied using a JavaScript object.
    <div style={{
      border: '1px solid #ccc',       // A light gray border around the profile box
      padding: '20px',                // Space inside the box, between content and border
      margin: '20px auto',            // 20px margin top/bottom, 'auto' centers it horizontally
      borderRadius: '10px',           // Rounds the corners of the profile box
      backgroundColor: '#f9f9f9',     // Very light gray background for the box
      maxWidth: '400px',              // Limits the maximum width of the box for better readability
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Adds a subtle shadow for a lifted effect
    }}>
      {/* Heading for the user's name */}
      <h2 style={{
        color: '#333',                // Dark gray color for the name text
        fontSize: '1.8em',            // Larger font size for the name
        marginBottom: '10px'          // Space below the name heading
      }}>{props.name}</h2>

      {/* Paragraph for age information */}
      <p style={{
        fontSize: '1.1em',            // Slightly larger font size for the paragraph text
        lineHeight: '1.5'             // Increases space between lines for readability
      }}>
        Age:
        {/* Span for the actual age value, styled to be bold and blue */}
        <span style={{ fontWeight: 'bold', color: '#007bff' }}>{props.age}</span>
      </p>

      {/* Paragraph for bio information */}
      <p style={{
        fontSize: '1.1em',            // Slightly larger font size for the paragraph text
        lineHeight: '1.5'             // Increases space between lines for readability
      }}>
        Bio:
        {/* Span for the bio text, styled to be italic and a darker gray */}
        <span style={{ fontStyle: 'italic', color: '#555' }}>{props.bio}</span>
      </p>
    </div>
  );
}

// Export the UserProfile component for use in App.jsx
export default UserProfile;
