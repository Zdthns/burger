import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user";
import { logoutUser } from "../../services/actions/user";
import { NavLink, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Test from "./Test";
import OrderInfo from "../../components/feedComponents/OrderInfo/OrderInfo";
import Orders from "../../components/feedComponents/Orders/Orders";

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

  const logout = () => {
    console.log("выход");
    dispatch(logoutUser());
  };
  const setActive = ({ isActive }) =>
    isActive ? style.activeLink : style.link;

  return (
    <section className={style.profile_wrapper}>
      <div>
        <nav className={style.nav}>
          <NavLink to="/profile" className={setActive}>
            Профиль
          </NavLink>
          <NavLink to="/profile/orders" className={setActive}>
            История заказов
          </NavLink>
          <button
            type="button"
            className={`${style.button} text text_type_main-medium text_color_inactive`}
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
        <Outlet />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Form
              fields={fields}
              buttonText="Сохранить"
              form={form}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          }
        />
        <Route path="orders" element={<Orders />} />
        {/*<Route path="/order/:id" element={<></>} />*/}
      </Routes>
    </section>
  );
}
export default Profile;
