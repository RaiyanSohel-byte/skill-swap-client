import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Loading from "../../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return (
    <Navigate state={location} to={`/auth/login`}>
      {children}
    </Navigate>
  );
};

export default PrivateRoute;
