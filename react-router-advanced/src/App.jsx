import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Static routes */}
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
