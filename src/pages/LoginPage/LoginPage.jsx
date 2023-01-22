import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import style from "./style.module.css";
import Form from "../../components/Form/Form";
import { loginUser } from "../../services/actions/user";

function LoginPage() {
  const [form, setForm] = React.useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const { isAuth } = useSelector((store) => store.user);
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  const fields = [
    { name: "email", placeholder: "e-mail", type: "text" },
    { name: "password", placeholder: "пароль", type: "password" },
  ];

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(loginUser(form));
  };
  //React.useEffect(() => {
  //  if (isAuth) {
  //    return navigate(`${fromPage}`);
  //  }
  //});

  return (
    <section className={style.wrapper}>
      <h1>Вход</h1>

      <Form
        fields={fields}
        buttonText="  Войти"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        //ressetForm={ressetForm}
      />

      <div className={style.caption}>
        <p>
          <span>Вы — новый пользователь?</span>
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </p>
        <p>
          Забыли пароль?
          <NavLink to="/forgotpassword">Восстановить пароль</NavLink>
        </p>
      </div>
    </section>
  );
}
export default LoginPage;
