import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="logon" />;
  }

  return children;
};

export default PrivateRoute;
