import React from "react";
import { logoutUser } from "../../../services/actions/user";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomLink from "./CustomLink";

function NavBar() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <nav className={style.nav}>
      <CustomLink to="/profile">Профиль</CustomLink>
      <CustomLink to="/profile/orders">История заказов</CustomLink>
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
