import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user.js";

import { logoutUser } from "../../services/actions/user.js";

function Profile() {
  const { user } = useSelector((store) => store.user);
  const [form, setForm] = React.useState({
    name: user.name,
    login: user.email,
    password: "",
  });
  const dispatch = useDispatch();

  const fields = [
    { name: "name", placeholder: "", type: "text" },
    { name: "login", placeholder: "", type: "text" },
    { name: "password", placeholder: "", type: "password" },
  ];

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getUpdateUser(form));
  };

  const setActive = ({ isActive }) =>
    isActive ? style.active : style.profile_link;

  const logout = () => {
    console.log("выход");
    dispatch(logoutUser());
  };

  return (
    <section className={style.profile_wrapper}>
      <div>
        <nav className={style.profile_nav}>
          <h2>Профиль</h2>
          <NavLink to="orders" className={setActive}>
            История заказов
          </NavLink>
          <button
            type="button"
            className={`${style.button_exit} text text_type_main-medium text_color_inactive`}
            onClick={logout}
          >
            Выход
          </button>
        </nav>
        <p className={style.profile_caption}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form
          fields={fields}
          buttonText="Сохранить"
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
          //ressetPasword={ressetPasword}
        />
      </div>
    </section>
  );
}
export default Profile;
