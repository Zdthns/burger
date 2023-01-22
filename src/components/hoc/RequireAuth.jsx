import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import {useSelector} from "react-redux"

function RequireAuth({children}) {
  const location = useLocation();
  const { isAuth } = useSelector((store) => store.user);

  if (!isAuth){
    return <Navigate to="/login" state={{from: location}}/>
  }
  
  return children;
}

export default RequireAuth;
