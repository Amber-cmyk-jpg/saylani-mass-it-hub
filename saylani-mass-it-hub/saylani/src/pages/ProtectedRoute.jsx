import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ adminOnly }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/" />;

  if (adminOnly && user.role !== "admin") {
    // send non-admin users to their main area
    return <Navigate to="/lostfound" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;