import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { requestCode } from "../../services/actions/user";

function ForgotPassword() {
  const [form, setForm] = React.useState({ email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isReplacePassword, isAuth } = useSelector((store) => store.user);

  const fields = [
    { name: "email", placeholder: "Укажите e-mail", type: "email" },
  ];

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(requestCode(form.email));
  };

  if (isReplacePassword) {
    return navigate("/resetpassword", { replace: true });
  }
  if (isAuth) {
    return navigate("/", { replace: true });
  }
  return (
    <section className={style.wrapper}>
      <h1>Восстановление пароля</h1>
      <Form
        fields={fields}
        buttonText="Восстановить"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        //ressetForm={ressetPasword}
      />
      <div className={style.caption}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
          <Link to="/login" className={style.link}>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}
export default ForgotPassword;
