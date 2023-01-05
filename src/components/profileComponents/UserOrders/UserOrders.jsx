import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WS_USER_CONNECTION_START,
  wsUserConnectionStart,
  wsUserConnectionClosed,
} from "../../../services/actions/wsConect";
import { getCookie } from "../../../utils/cookie.js";
import style from "./style.module.css";
import Order from "../../Order/Order";

import { wsUserUrl } from "../../../utils/userApi.js";

export function UserOrders() {
  const dispatch = useDispatch();
  const token = getCookie("token");

  console.log(token);

  useEffect(() => {
    dispatch(
      wsUserConnectionStart()
      //  {
      //  type: WS_USER_CONNECTION_START,
      //  payload: `${wsUserUrl}?token=${token?.replace("Bearer ", "")}`,
      //}
    );
    return () => {
      dispatch(wsUserConnectionClosed());
    };
  }, []);

  const orders = useSelector((state) => state.wsReducer.messages.orders);

  return (
    <div className={style.wrapper}>
      <ul className={style.section}>
        {orders?.map((order) => {
          return (
            <li key={order._id}>
              <Order
                status=""
                orderNumber={order.number}
                orderCreateTime={order.createdAt}
                burgerName={order.name}
                ingredients={order.ingredients}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default UserOrders;
