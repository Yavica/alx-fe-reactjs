// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the Navbar component
import Navbar from './components/Navbar'; // NEW: Import the Navbar component

// Import the page components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      {/*
        The Navbar is placed here, outside of <Routes>, so it is rendered
        on every page, regardless of the current route.
      */}
      <Navbar />

      {/*
        Routes component will render the specific page component
        based on the current URL path.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
