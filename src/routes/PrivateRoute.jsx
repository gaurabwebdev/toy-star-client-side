import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const targetRoute = useLocation();
  if (loading) {
    return (
      <div className="my-20 flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  } else if (!user) {
    return (
      <Navigate state={{ from: targetRoute }} to={"/login"} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
