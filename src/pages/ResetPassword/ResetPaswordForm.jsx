import React from "react";
import {
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "../style.module.css";

function ResetPassword() {
  const [value, setValue] = React.useState("password");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <section className={style.wrapper}>
      <h1>Востановление пароля</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PasswordInput
          onChange={onChange}
          value={value}
          name={"password"}
          placeholder={"Введите новый пароль"}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={onChange}
          value={value}
          name={"password"}
          placeholder={"Введите код из письма"}
          extraClass="mb-6"
          icon="undefined"
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Сохранить
      </Button>
      <p className={style.caption}>
        Вспомнили пароль?
        <a href="#">Войти</a>
      </p>
    </section>
  );
}

export default ResetPassword;
