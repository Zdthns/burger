import { Route, redirect, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RouterProvider({ children, isAuth, ...props }) {
  const redirectPath = "/login";

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default RouterProvider;
