import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import Orders from "../../components/feedComponents/Orders/Orders";
import OrdersStatus from "../../components/feedComponents/OrderStatus/OrderStatus";
import {
  wsConnectionClose,
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/actions/wsConect";
import { useLocation, useParams } from "react-router-dom";
import { wsUrl } from "../../utils/userApi.js";

function Feed() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(wsConnectionStart(wsUrl));

    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch, location]);

  const orders = useSelector((store) => store.wsReducer.messages.orders);
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
}

export default Feed;
