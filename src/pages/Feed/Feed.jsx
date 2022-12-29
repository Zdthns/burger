import React from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./style.module.css";

import Orders from "../Orders/Orders";

function Feed() {
  const orders = useSelector((store) => store.ws.orders);
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
            <Orders
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

export default Feed;
