import React from "react";
import style from "./style.module.css";
import { useLocation } from "react-router-dom";

function Caption() {
  const location = useLocation();
  const isOrders = location.pathname.includes("orders");

  function textCaption(isOrders) {
    if (isOrders) {
      return "В этом разделе вы можете просмотреть свою историю заказов";
    } else {
      return " В этом разделе вы можете изменить свои персональные данные";
    }
  }
  return <p className={style.profile_caption}>{textCaption(isOrders)}</p>;
}

export default Caption;
