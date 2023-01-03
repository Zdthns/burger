import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../../services/actions/wsConect";
import { getCookie } from "../../../utils/cookie.js";
import style from "./style.module.css";
import Order from "../../Order/Order";

import { wsAuthUrl } from "../../../services/actions/wsUser";

export function UserOrders() {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `${wsAuthUrl}?token=${accessToken?.replace("Bearer ", "")}`,
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
