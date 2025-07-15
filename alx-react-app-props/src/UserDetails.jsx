// src/UserDetails.jsx

// Import React and the useContext hook.
// useContext is a hook that lets you read context from your component.
import React, { useContext } from 'react';
// Import the UserContext object we created earlier.
import UserContext from './UserContext';

// UserDetails component.
// Notice that 'userData' is NO LONGER passed as a prop here.
function UserDetails() {
  // Use the useContext hook to access the 'userData' value
  // that was provided by UserContext.Provider higher up in the component tree (in App.jsx).
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid #ddd',       // Light gray border
      padding: '15px',                // Padding inside the box
      margin: '15px auto',            // Margin and horizontal centering
      borderRadius: '8px',            // Rounded corners
      maxWidth: '300px',              // Max width for better presentation
      backgroundColor: '#f8f9fa',     // Very light background
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)' // Subtle shadow
    }}>
      {/* Display user name and email, now accessed directly from the userData object
          obtained via useContext. */}
      <p style={{ fontSize: '1.1em', marginBottom: '8px', color: '#333' }}>
        <span style={{ fontWeight: 'bold' }}>Name:</span> {userData.name}
      </p>
      <p style={{ fontSize: '1.1em', color: '#333' }}>
        <span style={{ fontWeight: 'bold' }}>Email:</span> {userData.email}
      </p>
    </div>
  );
}

// Export the UserDetails component.
export default UserDetails;
