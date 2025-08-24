// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
