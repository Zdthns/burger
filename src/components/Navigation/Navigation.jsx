import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./navigation.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Navigation() {
  const setActive = ({ isActive }) => (isActive ? style.active : style.text);
  const [type, setType] = React.useState("home");
  return (
    <>
      <nav className={style.nav}>
        <li className={`${style.li} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <NavLink
            to={{ pathname: "/" }}
            className={setActive}
            onClick={() => setType("home")}
          >
            <BurgerIcon type={type === "home" ? "primary" : "secondary"} />
            <span className={`${style.text} ml-2 text_type_main-default`}>
              Конструктор
            </span>
          </NavLink>
        </li>

        <li className={`${style.li} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <NavLink
            to="/feed"
            className={setActive}
            onClick={() => setType("len")}
          >
            <ListIcon type={type === "len" ? "primary" : "secondary"} />
            <span className={`${style.text} ml-2  text_type_main-default`}>
              Лента заказов
            </span>
          </NavLink>
        </li>

        <div className={style.logo}>
          <Logo />
        </div>

        <li className={`${style.li} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <NavLink
            to="/profile"
            className={setActive}
            onClick={() => setType("profile")}
          >
            <ProfileIcon type={type === "profile" ? "primary" : "secondary"} />
            <span className={`${style.text} ml-2 text_type_main-default`}>
              Личный кабинет
            </span>
          </NavLink>
        </li>
      </nav>
    </>
  );
}

export default Navigation;
