import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../../services/actions/wsConect";
import { getCookie } from "../../../utils/cookie.js";
import style from "./style.module.css";
import Order from "../../Order/Order";
import NavBar from "../NavBar/NavBar";
import { WEB_SOCKET_URL } from "../../../utils/webSocket";

export function UserOrders() {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `${WEB_SOCKET_URL}?token=${accessToken?.replace("Bearer ", "")}`,
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED,
      });
    };
  }, [dispatch, accessToken]);

  const orders = useSelector((state) => state.wsReducer.messages.orders);

  return (
    <div className={style.wrapper}>
      <NavBar />
      <ul className={style.orders}>
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
