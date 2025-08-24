// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// Simple authentication hook (stub for now)
const useAuth = () => {
  // In a real app, you'd check auth state (token, context, etc.)
  // For demo purposes, let's just return false (not authenticated).
  const user = null; // change this to an object if you want to simulate a logged-in user
  return { user };
};

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to home (or login) if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
