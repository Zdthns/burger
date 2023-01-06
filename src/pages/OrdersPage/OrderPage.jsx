import { React, useEffect } from "react";
import style from "./style.module.css";

import { useDispatch, useSelector } from "react-redux";

import {
  WS_USER_CONNECTION_START,
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
      {
        type: WS_USER_CONNECTION_START,
        payload: `${wsUserUrl}?token=${token?.replace("Bearer ", "")}`,
      }
      //wsUserConnectionStart(
      //  `${wsUserUrl}?token=${token?.replace("Bearer ", "")}`
    );

    //const ws = new WebSocket(wsUserUrl);
    //console.log(ws.readyState);
    return () => {
      dispatch(wsUserConnectionClosed());
    };
  }, []);

  const orders = useSelector((store) => store.wsReducer.userMessages.orders);
  console.log(orders);

  return (
    <ul className={style.section}>
      <Orders data={orders} />
    </ul>
  );
}

export default OrderPage;
