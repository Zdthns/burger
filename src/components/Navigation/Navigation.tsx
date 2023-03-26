import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./navigation.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Navigation: FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? style.active : style.text;
  const location = useLocation();
  const isFeed = location.pathname.includes("feed");
  const isConstructor = location.pathname.includes("/");
  const isProfile = location.pathname.includes("/profile");

  return (
    <>
      <nav className={style.nav}>
        <li className={`${style.li} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <NavLink to={{ pathname: "/" }} className={setActive}>
            <BurgerIcon type={isConstructor ? "primary" : "secondary"} />
            <span className={`${style.text} ml-2 text_type_main-default`}>
              Конструктор
            </span>
          </NavLink>
        </li>

        <li className={`${style.li} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <NavLink to="/feed" className={setActive}>
            <ListIcon type={isFeed ? "primary" : "secondary"} />
            <span className={`${style.text} ml-2  text_type_main-default`}>
              Лента заказов
            </span>
          </NavLink>
        </li>

        <div className={style.logo}>
          <Logo />
        </div>

        <li className={`${style.li} pt-4 pr-5 pb-4 pl-5 mr-2`}>
          <NavLink to="/profile" className={setActive}>
            <ProfileIcon type={isProfile ? "primary" : "secondary"} />
            <span className={`${style.text} ml-2 text_type_main-default`}>
              Личный кабинет
            </span>
          </NavLink>
        </li>
      </nav>
    </>
  );
};

export default Navigation;
