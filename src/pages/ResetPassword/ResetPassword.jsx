import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import style from "../style.module.css";
import { resetPassword } from "../../services/actions/user.js";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname;

  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const dispatch = useDispatch();

  const fields = [
    {
      name: "password",
      placeholder: "Введите новый пароль",
      type: "password",
      icon: "ShowIcon",
    },
    {
      name: "cod",
      placeholder: "Введите код из письма",
      type: "text",
      icon: "",
    },
  ];

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(form));
  };

  function resetPassword() {
    if (fromPage) {
      return (
        <Form
          fields={fields}
          buttonText="Сохранить"
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
          buttonVisible={false}
        />
      );
    } else {
      return <ForgotPassword />;
    }
  }
  return (
    <section className={style.wrapper}>
      <h1>Востановление пароля</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {resetPassword()}
      </div>
      <p className={style.caption}>
        Вспомнили пароль?
        <a href="#">Войти</a>
      </p>
    </section>
  );
}

export default ResetPassword;
