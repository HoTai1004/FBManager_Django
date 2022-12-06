import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  if (user) {
    return children ? children : <Outlet />;
  }
  return <Navigate to="/login" />;
};
