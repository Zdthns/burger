import { useLocation, Link } from "react-router-dom";

import style from "../style.module.css";
import Order from "../../Order/Order";
import { OrderType } from "../../../utils/types/types";
import { FC } from "react";

type PropsType = {
  data: OrderType[];
};

const Orders: FC<PropsType> = ({ data }) => {
  const location = useLocation();
  const orders = data; // массив заказов

  return (
    <>
      {orders?.map((order) => {
        return (
          <Link
            state={{ background: location }}
            to={{
              pathname: `${location.pathname}/${order._id}`,
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
};
export default Orders;
