import React, { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../../components/Form/Form";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import style from "../style.module.css";
import { resetPassword } from "../../services/actions/user";
import { TFields, TForm, useAppDispatch } from "../../utils/types/types";
import Caption from "../../components/caption/Caption";
import { useForm } from "../../components/Form/hook/useForm";

const ResetPasswordPage: FC = () => {
  const location = useLocation();
  const fromPage = location.state?.from?.pathname;
  const [token, setToken] = useState<string>("");
  const dispatch = useAppDispatch();

  const fields: TFields[] = [
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
      icon: undefined,
    },
  ];

  const { values, handleChange, setValues } = useForm({
    name: "",
    email: "",
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(resetPassword(values, token));
  };

  function handlerResetPassword() {
    if (fromPage) {
      return (
        <Form
          fields={fields}
          buttonText="Сохранить"
          form={values}
          onChange={handleChange}
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
      <div className={style.wrapper_form}>{handlerResetPassword()}</div>
      <div className={style.caption}>
        <Caption />
      </div>
    </section>
  );
};

export default ResetPasswordPage;
