import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "../style.module.css";

import Form from "../../components/Form/Form";
import { registrationUser } from "../../services/actions/user.js";

function RegisterPage() {
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.user);

  const fields = [
    { name: "name", placeholder: "имя", type: "text" },
    { name: "email", placeholder: "e-mail", type: "email" },
    { name: "password", placeholder: "пароль", type: "password" },
  ];

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(registrationUser({ ...form }));
  };

  if (isAuth) {
    return navigate("/profile", { replace: true });
  }

  return (
    <section className={style.wrapper}>
      <h1>Регистрация</h1>
      <Form
        fields={fields}
        buttonText="Регистрация"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <p className={style.caption}>
        Уже зарегистрированы?
        <Link to="/login">Войти</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
