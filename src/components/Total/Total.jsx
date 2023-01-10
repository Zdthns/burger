import React from "react";
import style from "./total.module.css";

import PropTypes from "prop-types";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useSelector } from "react-redux";

export default function Total({ openOrder }) {
  const constructorIngredients = useSelector(
    (store) => store.constructorReducer.constructorIngredients
  );
  const bun =
    Boolean(constructorIngredients) &&
    constructorIngredients.find((item) => item.type === "bun");
  const total = constructorIngredients.reduce((acc, { price }) => {
    return acc + parseInt(price);
  }, 0);

  return (
    <div className={`${style.total} mt-10 pr-8`}>
      <span className={`${style.totalSum} mr-10 text_type_digits-medium`}>
        {total}
        <CurrencyIcon type="primary" />
      </span>
      <Button
        type="primary"
        size="medium"
        onClick={openOrder}
        htmlType="submit"
        disabled={!constructorIngredients.length || !bun}
      >
        Оформить заказ
      </Button>
    </div>
  );
}

Total.propTypes = {
  openOrder: PropTypes.func.isRequired,
};
