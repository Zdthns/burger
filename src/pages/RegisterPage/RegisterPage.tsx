import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { registrationUser } from "../../services/actions/user";
import {
  TFields,
  useAppDispatch,
  useAppSelector,
} from "../../utils/types/types";

const RegisterPage: FC = () => {
  const [form, setForm] = React.useState({ name: "", email: "", password: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((store) => store.user);

  const fieldsForm: TFields[] = [
    { name: "name", placeholder: "имя", type: "text" },
    { name: "email", placeholder: "e-mail", type: "email" },
    { name: "password", placeholder: "пароль", type: "password" },
  ];

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(registrationUser({ ...form }));
    navigate("/profile", { replace: true });
  };

  //if (isAuth) {
  //  return navigate("/profile", { replace: true });
  //}

  return (
    <section className={style.wrapper}>
      <h1>Регистрация</h1>
      <Form
        fields={fieldsForm}
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
};

export default RegisterPage;
