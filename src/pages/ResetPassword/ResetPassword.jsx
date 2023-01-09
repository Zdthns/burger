import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import ResetPasswordForm from "./ResetPaswordForm";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname;
  console.log(fromPage);
  const redirected = !fromPage;
  console.log(redirected);
  function resetPassword() {
    if (fromPage) {
      return <ResetPasswordForm />;
    } else {
      return <ForgotPassword />;
    }
  }
  return (
    <>
      {resetPassword()}
      <div>{fromPage}</div>
      {/*{{ fromPage } && <ResetPasswordForm />}
      {{ redirected } && <ForgotPassword />}*/}
    </>
  );
}

export default ResetPassword;
