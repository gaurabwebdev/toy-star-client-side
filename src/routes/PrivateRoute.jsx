import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="my-20 flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  } else if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
