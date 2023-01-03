import { React, useMemo, useEffect } from "react";
import style from "./style.module.css";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from "../../services/actions/wsConect";
import { wsAuthUrl } from "../../services/actions/wsUser";
import Order from "../../components/Order/Order";
import Orders from "../../components/feedComponents/Orders/Orders";
import { getCookie } from "../../utils/cookie.js";

function OrderPage() {
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

  const userOrders = useSelector((state) => state.wsReducer.messages.orders);

  return (
    <ul className={style.section}>
      {userOrders?.map((order) => {
        return (
          <li key={order._id}>
            <Orders order={order} />
          </li>
        );
      })}
    </ul>
  );
}

export default OrderPage;
