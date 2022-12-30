import React from "react";
import { Link, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./style.module.css";

import Order from "../../Order/Order";

export function UserOrders() {
  const location = useNavigation();

  const orders = useSelector((store) => store.wsUserReducer.orders);

  console.log(orders);

  return (
    <section className={style.wrapper}>
      {orders.map((order) => {
        return (
          <Link
            to={{
              pathname: `/profile/orders/${order._id}`,
              state: { background: location },
            }}
            className={style.link}
            key={order._id}
          >
            {order.status === "done" && (
              <Order
                status="Выполнен"
                orderNumber={order.number}
                orderCreateTime={order.createdAt}
                burgerName={order.name}
                ingredients={order.ingredients}
              />
            )}
            {order.status === "created" && (
              <Order
                status="Создан"
                orderNumber={order.number}
                orderCreateTime={order.createdAt}
                burgerName={order.name}
                ingredients={order.ingredients}
              />
            )}
            {order.status === "pending" && (
              <Order
                status="Готовится"
                orderNumber={order.number}
                orderCreateTime={order.createdAt}
                burgerName={order.name}
                ingredients={order.ingredients}
              />
            )}
          </Link>
        );
      })}
    </section>
  );
}

export default UserOrders;
