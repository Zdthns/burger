import { React, useEffect } from "react";
import style from "./style.module.css";

import { useDispatch, useSelector } from "react-redux";

import {
  wsUserConnectionStart,
  wsUserConnectionClose,
  wsUserConnectionClosed,
} from "../../services/actions/wsConect";
import { getCookie } from "../../utils/cookie.js";
import { wsUserUrl } from "../../utils/userApi.js";
import Orders from "../../components/feedComponents/Orders/Orders";
import NavBar from "../../components/profileComponents/NavBar/NavBar";
import Caption from "../../components/profileComponents/Caption/Caption";

function OrderPage() {
  const dispatch = useDispatch();
  const token = getCookie("token");
  useEffect(() => {
    dispatch(
      wsUserConnectionStart(
        `${wsUserUrl}?token=${token?.replace("Bearer ", "")}`
      )
    );
    return () => {
      dispatch(wsUserConnectionClosed());
    };
  }, [dispatch, token]);

  const orders = useSelector((store) => store.wsReducer.userMessages.orders);

  return (
    <section className={style.section_wrapper}>
      <div>
        <NavBar />
        <Caption />
      </div>
      <ul className={style.section}>
        <Orders data={orders} />
      </ul>
    </section>
  );
}

export default OrderPage;
