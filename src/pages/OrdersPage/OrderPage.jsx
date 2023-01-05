import { React, useEffect } from "react";
import style from "./style.module.css";

import { useDispatch, useSelector } from "react-redux";

import {
  wsUserConnectionStart,
  wsUserConnectionClosed,
} from "../../services/actions/wsConect";

import Orders from "../../components/feedComponents/Orders/Orders";

function OrderPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsUserConnectionStart());
    return () => {
      dispatch(wsUserConnectionClosed());
    };
  }, []);

  const orders = useSelector((store) => store.messages.orders);
  console.log(orders);

  return (
    <ul className={style.section}>
      <Orders data={orders} />
    </ul>
  );
}

export default OrderPage;
