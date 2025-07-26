// src/UserInfo.jsx

import React from 'react';
import UserDetails from './UserDetails'; // UserDetails is still a child component

// UserInfo component.
// It NO LONGER receives 'userData' as a prop because UserDetails gets it from Context.
function UserInfo() {
  return (
    <div style={{
      padding: '10px',
      margin: '10px auto',
      backgroundColor: '#e2e6ea', // Slightly darker background for distinction
      borderRadius: '8px',
      maxWidth: '350px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)' // Subtle shadow
    }}>
      <h3 style={{ textAlign: 'center', color: '#444' }}>User Information</h3>
      {/* UserDetails now directly consumes UserContext, so we no longer
          pass 'userData' as a prop here. This eliminates one level of prop drilling. */}
      <UserDetails />
    </div>
  );
}

export default UserInfo; // Export the UserInfo component
