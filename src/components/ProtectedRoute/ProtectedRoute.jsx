import { Route, redirect, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function RouterProvider({ children, anonymous = false }) {
  const { isAuth } = useSelector((store) => store.user);
  const location = useLocation();

  if (!anonymous && !isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (anonymous && isAuth) {
    const { from } = location?.state || { from: { pathname: "/" } };
    return <Navigate to={from.pathname} state={from.state} replace />;
  }
  return children;
}

export default RouterProvider;
