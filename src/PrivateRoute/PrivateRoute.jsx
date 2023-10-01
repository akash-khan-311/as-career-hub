import React, { useContext } from "react";
import { AuthContext } from "../CoontextApi/UserContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return <Spinner className="h-16 w-16 text-gray-900/50" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
