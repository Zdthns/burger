import { React, useEffect } from "react";
import style from "./style.module.css";

import { useDispatch, useSelector } from "react-redux";

import {
  wsUserConnectionStart,
  wsUserConnectionClosed,
} from "../../services/actions/wsConect";
import { getCookie } from "../../utils/cookie.js";
import { wsUserUrl } from "../../utils/userApi.js";
import Orders from "../../components/feedComponents/Orders/Orders";

function OrderPage() {
  const dispatch = useDispatch();
  const token = getCookie("token");
  useEffect(() => {
    dispatch(
      wsUserConnectionStart(
        `${wsUserUrl}?token=${token?.replace("Bearer ", "")}`
      )
    );
    return () => {
      dispatch(wsUserConnectionClosed());
    };
  }, []);
  //const ws = new WebSocket("wss://norma.nomoreparties.space/orders");
  //console.log(ws.onmessage);
  const orders = useSelector((store) => store.wsReducer.userMessages.orders);
  //ws.onmessage = (event) => {
  //  console.log(`Получены данные: ${event.data}`);
  //};

  return (
    <ul className={style.section}>
      <Orders data={orders} />
    </ul>
  );
}

export default OrderPage;
