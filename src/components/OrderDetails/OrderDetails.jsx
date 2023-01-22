import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import style from "./orderDetails.module.css";
import PropTypes from "prop-types";
import img from "../../images/done.png";

function OrderDetails() {
  const orderNumber = useSelector((state) => state.order.order.number);
  return (
    <section className={`${style.container}`}>
      <span className={`${style.title} text_type_digits-large mt-4 mb-8`}>
        {orderNumber}
      </span>
      <p className={`${style.subTitle} text_type_main-medium mb-15`}>
        идентификатор заказа
      </p>
      <img src={img} alt="Заказ принят" className="mb-15" />
      <p className={`${style.orderInfo} text_type_main-default mb-2`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${style.orderInfo} ${style.textColor} text_type_main-default mb-2`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}

export default OrderDetails;

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};
