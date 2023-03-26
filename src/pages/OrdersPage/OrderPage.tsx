import { FC, useEffect } from "react";
import style from "./style.module.css";
import {
  wsUserConnectionStart,
  wsUserConnectionClosed,
} from "../../services/actions/wsConect";
import { getCookie } from "../../utils/cookie";
import { wsUserUrl } from "../../utils/userApi";
import Orders from "../../components/feedComponents/Orders/Orders";
import NavBar from "../../components/profileComponents/NavBar/NavBar";
import Caption from "../../components/profileComponents/Caption/Caption";
import { useAppDispatch, useAppSelector } from "../../utils/types/types";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const token = getCookie("token");
  const url = `${wsUserUrl}?token=${token?.replace("Bearer ", "")}`;
  useEffect(() => {
    dispatch(wsUserConnectionStart(url));
    return () => {
      dispatch(wsUserConnectionClosed());
    };
  }, [dispatch, token]);

  const orders = useAppSelector((store) => store.wsReducer.userMessages.orders);

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
};

export default OrderPage;
