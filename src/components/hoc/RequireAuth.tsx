import React, { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../../utils/types/types";

type PropsType = {
  children: ReactElement;
};

const RequireAuth: FC<PropsType> = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAppSelector((store) => store.user);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
