import { Navigate, Outlet } from "react-router-dom";

// Simulate authentication (change to false to test redirect)
const isAuthenticated = true;

export default function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
