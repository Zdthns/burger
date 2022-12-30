import React from "react";
import { NavLink, Route, Routes, useMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user.js";

import { logoutUser } from "../../services/actions/user.js";
import UserOrders from "../../components/profileComponents/UserOrders/UserOrders";

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
  const ordersMatch = useMatch("/profile/orders");
  return (
    <section className={style.profile_wrapper}>
      <div>
        <nav className={style.profile_nav}>
          <NavLink to="/profile">Профиль</NavLink>
          <NavLink to="/profile/orders" className={setActive}>
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
      {/*<Routes location={background || location}>*/}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {ordersMatch ? (
          <UserOrders />
        ) : (
          <Form
            fields={fields}
            buttonText="Сохранить"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        )}

        {/*<Route to="/profile/orders" element={<UserOrders />} />
          <Route to="/profile/orders/:id" element={<OrderInformation />} />*/}
        {/*<Route
            path="/profile"
            element={
              <Form
                fields={fields}
                buttonText="Сохранить"
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
              />
            }
          />*/}
      </div>
      {/*</Routes>*/}
    </section>
  );
}
export default Profile;
