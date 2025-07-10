// src/App.jsx

// Import the Header, MainContent, and Footer components from Task 2.
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// Import the new UserProfile component we just created.
import UserProfile from './components/UserProfile';

// The main App functional component.
// This component will arrange all the other components on our page.
function App() {
  return (
    // The main container for our application.
    <div className="App">
      {/* Render the Header component at the top. */}
      <Header />

      {/* Render the MainContent component below the Header. */}
      <MainContent />

      {/*
        Render the UserProfile component.
        Here, we are passing data to it using attributes:
        - name="Jamie Maina" -> This becomes props.name inside UserProfile
        - age="20"          -> This becomes props.age inside UserProfile
        - bio="..."         -> This becomes props.bio inside UserProfile
        You can change these values to see how the UserProfile component updates!
      */}
      <UserProfile
        name="Jamie Maina"
        age="18"
        bio="Aspiring software developer with a passion for technology and continuous learning. Enjoys hiking and exploring new ideas."
      />

      {/*
        Optional: You can add another UserProfile component with different data
        to see how reusable it is! Uncomment the lines below to try it.
      */}
      {/*
      <UserProfile
        name="Alex Johnson"
        age="24"
        bio="A digital artist who loves creating immersive virtual worlds."
      />
      */}

      {/* Render the Footer component at the bottom. */}
      <Footer />
    </div>
  );
}

// Export the App component.
export default App;
