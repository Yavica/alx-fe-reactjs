// src/ProfilePage.jsx

import React from 'react';
import UserInfo from './UserInfo'; // UserInfo is still a child component

// ProfilePage component.
// It NO LONGER receives 'userData' as a prop because UserInfo (and UserDetails)
// now get the data from Context.
function ProfilePage() {
  return (
    <div style={{
      padding: '20px',
      margin: '20px auto',
      border: '1px solid #b0c4de', // Light blue border
      borderRadius: '12px',
      backgroundColor: '#f0f4f8', // Very light blue background
      maxWidth: '450px',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)' // More pronounced shadow
    }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>User Profile Page</h1>
      {/* UserInfo now directly consumes UserContext, so we no longer
          pass 'userData' as a prop here. This eliminates another level of prop drilling. */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage; // Export the ProfilePage component
