import { React, useMemo, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { useSelector } from "react-redux";

import style from "../style.module.css";
import Order from "../../Order/Order";

export function Orders() {
  const location = useLocation();
  const orders = useSelector((store) => store.wsReducer.messages.orders);

  return (
    <>
      {orders.map((order) => {
        return (
          <Link
            to={{
              pathname: `/feed/${order._id}`,
              state: { background: location },
            }}
            className={style.link}
            key={order._id}
          >
            <Order
              status=""
              orderNumber={order.number}
              orderCreateTime={order.createdAt}
              burgerName={order.name}
              ingredients={order.ingredients}
            />
          </Link>
        );
      })}
    </>
  );
}
export default Orders;
