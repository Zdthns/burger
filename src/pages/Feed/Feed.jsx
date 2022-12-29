import React from "react";
import style from "./style.module.css";
import { wsStart, wsClose } from "../../services/actions/wsConect";
import Orders from "../Orders/Orders";
import { useDispatch } from "react-redux";

function Feed() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(wsStart());
    return () => {
      dispatch(wsClose());
    };
  }, [dispatch]);

  return (
    <section className={style.page}>
      <article className={`pl-2 pr-2 ${style.feed_section}`}>
        <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
        <div className={`mt-5 ${style.section}`}></div>
      </article>
    </section>
  );
}

export default Feed;
