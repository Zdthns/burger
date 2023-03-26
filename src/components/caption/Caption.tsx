import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

function Caption() {
  return (
    <div className={style.caption}>
      <p className="text text_type_main-default text_color_inactive">
        Вспомнили пароль ?
        <Link to="/login" className={style.link}>
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Caption;
