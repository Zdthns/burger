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
import { useForm } from "../../components/Form/hook/useForm";

const RegisterPage: FC = () => {
  //const [form, setForm] = React.useState({ name: "", email: "", password: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((store) => store.user);

  const fieldsForm: TFields[] = [
    { name: "name", placeholder: "имя", type: "text" },
    { name: "email", placeholder: "e-mail", type: "email" },
    { name: "password", placeholder: "пароль", type: "password" },
  ];

  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(registrationUser({ ...values }));
    navigate("/profile", { replace: true });
  };

  return (
    <section className={style.wrapper}>
      <h1>Регистрация</h1>
      <Form
        fields={fieldsForm}
        buttonText="Регистрация"
        form={values}
        onChange={handleChange}
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
