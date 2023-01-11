import React from "react";
import { useSelector } from "react-redux";

import style from "../style.module.css";

function OrdersStatus() {
  const { total, totalToday, orders } = useSelector(
    (store) => store.wsReducer.messages
  );

  const ordersDoneArr = orders.filter((order) => {
    return order.status === "done";
  });

  const ordersInProcessArr = orders.filter((order) => {
    return order.status !== "done";
  });

  const firstThirtyItems = (arr) => {
    if (arr.length > 10) {
      return arr.slice(0, 20);
    } else {
      if (arr.length <= 10) {
        return arr;
      }
    }
  };

  return (
    <section className={style.status_container}>
      <article className={style.board}>
        <div className={style.status_lists}>
          <h3 className="text text_type_main-medium pb-6">Готовы:</h3>
          <ul className={style.done_list}>
            {firstThirtyItems(ordersDoneArr).map((order) => (
              <li className="text text_type_digits-default" key={order._id}>
                {order.number}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.status_lists}>
          <h3 className="text text_type_main-medium pb-6">В работе:</h3>
          <ul className={style.inprocess_list}>
            {firstThirtyItems(ordersInProcessArr).map((order) => (
              <li className="text text_type_digits-default" key={order._id}>
                {order.number}
              </li>
            ))}
          </ul>
        </div>
      </article>
      <div>
        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
        <p className={`text text_type_digits-large ${style.done_qty}`}>
          {total}
        </p>
      </div>
      <div>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p className={`text text_type_digits-large ${style.done_qty}`}>
          {totalToday}
        </p>
      </div>
    </section>
  );
}
export default OrdersStatus;
