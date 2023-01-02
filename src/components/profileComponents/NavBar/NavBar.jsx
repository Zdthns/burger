import React from "react";
import { logoutUser } from "../../../services/actions/user";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const setActive = ({ isActive }) =>
    isActive ? style.activeLink : style.link;

  const logout = () => {
    console.log("выход");
    dispatch(logoutUser());
  };
  return (
    <nav className={style.nav}>
      <NavLink to="/profile">Профиль</NavLink>
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
  );
}

export default NavBar;
