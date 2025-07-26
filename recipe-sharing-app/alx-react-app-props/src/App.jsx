// src/App.jsx

import React from 'react';
import ProfilePage from './ProfilePage';
// CORRECTED PATH: Use './UserContext' because UserContext.js is in the same 'src' directory as App.jsx
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
