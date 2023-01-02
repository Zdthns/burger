import React from "react";
import { logoutUser } from "../../../services/actions/user";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Routes, Route } from "react-router-dom";
import Profile from "../../../pages/Profile/Profile";
import OrderInfo from "../../feedComponents/OrderInfo/OrderInfo";
import Test from "../Test";
import Form from "../../Form/Form";
import { getUpdateUser } from "../../../services/actions/user";
function NavBar() {
  const dispatch = useDispatch();
  const setActive = ({ isActive }) =>
    isActive ? style.activeLink : style.link;

  const { user } = useSelector((store) => store.user);
  const logout = () => {
    console.log("выход");
    dispatch(logoutUser());
  };
  const [form, setForm] = React.useState({
    name: user.name,
    login: user.email,
    password: "",
  });

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
  return (
    <>
      <nav className={style.nav}>
        <NavLink to="/profile/" className={setActive}>
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
      <Routes>
        <Route
          to="/profile"
          element={
            <Profile
              element={
                <Form
                  fields={fields}
                  buttonText="Сохранить"
                  form={form}
                  onChange={onChange}
                  onSubmit={onSubmit}
                />
              }
            >
              <Route to="order" element={<Test />} />
            </Profile>
          }
        />

        {/*<Route path="/order/:id" element={<></>} />*/}
      </Routes>
    </>
  );
}

export default NavBar;
