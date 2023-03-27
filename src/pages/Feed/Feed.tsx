import { FC, useEffect } from "react";
import style from "./style.module.css";
import Orders from "../../components/feedComponents/Orders/Orders";
import OrdersStatus from "../../components/feedComponents/OrderStatus/OrderStatus";
import {
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/actions/wsConect";
import { useLocation } from "react-router-dom";
import { wsUrl } from "../../utils/userApi";
import { useAppDispatch, useAppSelector } from "../../utils/types/types";

const Feed: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(wsConnectionStart(wsUrl));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);
  const orders = useAppSelector((store) => store.wsReducer.messages.orders);

  return (
    <section className={style.page}>
      <article className={`pl-2 pr-2 ${style.feed_section}`}>
        <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
        <div className={`mt-5 ${style.section}`}>
          <Orders data={orders} />
        </div>
      </article>
      <OrdersStatus />
    </section>
  );
};

export default Feed;
