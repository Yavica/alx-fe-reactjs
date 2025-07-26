// src/App.jsx

import React from 'react'; // Import React for JSX
import Header from './components/Header'; // Import Header component
import UserProfile from './components/UserProfile'; // Import UserProfile component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer'; // Import Footer component
import Counter from './components/counter'; // NEW: Import the Counter component

function App() {
  // Define user data to pass as props to UserProfile
  const user = {
    name: 'Jamie Maina',
    age: 18,
    bio: 'Aspirant software developer with a passion for technology and continuous learning. Enjoys hiking and exploring new ideas.',
  };

  return (
    // Main container div for the entire application
    <div style={{ fontFamily: 'Inter, sans-serif', maxWidth: '900px', margin: '0 auto', padding: '20px', backgroundColor: '#282c34', color: '#f0f0f0', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}>
      {/* Render the Header component */}
      <Header />

      {/* Render the MainContent component */}
      <MainContent />

      {/* Render the UserProfile component, passing user data as props */}
      <UserProfile name={user.name} age={user.age} bio={user.bio} />

      {/* NEW: Render the Counter component */}
      <Counter />

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default App; // Export the App component as the default export
