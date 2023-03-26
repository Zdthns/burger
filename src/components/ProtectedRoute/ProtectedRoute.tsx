import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode, FC, ReactElement } from "react";
import { AppStateType } from "../../utils/types/types";

interface IrouterProvider {
  children: ReactElement;
  anonymous?: boolean;
}

const RouterProvider: FC<IrouterProvider> = ({
  children,
  anonymous = false,
}): ReactElement => {
  const { isAuth } = useSelector((state: AppStateType) => state.user);
  const location = useLocation();

  if (!anonymous && !isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (anonymous && isAuth) {
    const { from } = location?.state || { from: { pathname: "/" } };
    return <Navigate to={from.pathname} state={from.state} replace />;
  }
  return children;
};

export default RouterProvider;
