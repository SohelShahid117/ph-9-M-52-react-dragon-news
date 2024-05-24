import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

//52_5-6 Create Private Route And Do Not Redirect On Reload

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   const { location, setLocation } = useLocation();
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  if (loading) {
    return <span className="loading loading-infinity loading-md"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
