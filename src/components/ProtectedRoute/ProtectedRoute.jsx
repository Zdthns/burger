import { Route, redirect, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function RouterProvider({ children, anonymous = false }) {
  const { isAuth } = useSelector((store) => store.user);
  const location = useLocation();
  const from = location.state?.from || "/";

  if (!anonymous && !isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  if (anonymous && isAuth) {
    return <Navigate to={from} />;
  }
  return children;
}

export default RouterProvider;
