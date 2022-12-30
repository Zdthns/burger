import { React, useMemo } from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { formatDate, formatStatus } from "../../utils/orders.js";
import { useSelector } from "react-redux";
import Ingredient from "../feedComponents/ingredient/Ingredient";

const OrderElement = (props) => {
  const order = props.order;

  const ingredients = order.ingredients;

  const status = order.status;
  const orderNumber = order.number;

  const orderCreateTime = order.createdAt;
  const burgerName = order.name;
  const ingredientsqty = ingredients.length;

  const hideIngredirntQty = ingredientsqty - 6;

  const allIngredients = useSelector((store) => store.ingredients.ingredients);

  const ingredientsArray = useMemo(() => {
    return ingredients.map((ingredientInOrder) => {
      return allIngredients.find((item) => ingredientInOrder === item._id);
    });
  }, [ingredients, allIngredients]);

  const ingredientData = useMemo(() => {
    return ingredientsArray.map((ingredient) => {
      return ingredient;
    });
  }, [ingredientsArray]);

  const totalOrder = ingredients.reduce((previousValue, currentItem) => {
    const ingredient = allIngredients.find((item) => {
      return currentItem === item._id;
    });

    if (!ingredient) {
      return previousValue;
    }

    return previousValue + ingredient.price;
  }, 0);

  return (
    <section className={`pt-6 pr-6 pl-6 pb-6 mb-6 ${style.order_container}`}>
      <div className={style.technical_info}>
        <p className="text text_type_digits-default">#{orderNumber}</p>
        <p className="text text_type_main-default text_color_inactive">
          {formatDate(orderCreateTime)}
        </p>
      </div>
      <div>
        <h3 className="text text_type_main-medium mb-2">{burgerName}</h3>
        {status !== "Выполнен" ? (
          <p className="text text_type_main-default">{status}</p>
        ) : (
          <p className={`text text_type_main-default ${style.done}`}>
            {status}
          </p>
        )}
      </div>
      <section className={style.order_info}>
        <ul className={style.items}>
          {allIngredients.length &&
            ingredients.length &&
            ingredientsqty <= 5 &&
            ingredientData.map((ing, index) => {
              return (
                <li className={style.list_item} key={index}>
                  {ing && (
                    <Ingredient
                      ingredientimage={ing.image}
                      ingredientName={ing.name}
                    />
                  )}
                </li>
              );
            })}
          {allIngredients.length &&
            ingredients.length &&
            ingredientsqty >= 6 &&
            ingredientData.slice(0, 5).map((ing, index) => {
              return (
                <li className={style.list_item} key={index}>
                  <Ingredient
                    ingredientimage={ing.image}
                    ingredientName={ing.name}
                  />
                </li>
              );
            })}
          {allIngredients.length &&
            ingredients.length &&
            ingredientsqty > 6 && (
              <li className={style.list_item}>
                <p
                  className={`text text_type_main-default ${style.add_qty}`}
                >{`+${hideIngredirntQty}`}</p>
                <div className={style.back}>
                  {ingredientData.slice(5, 6).map((ing, index) => {
                    return (
                      <Ingredient
                        ingredientimage={ing.image}
                        ingredientName={ing.name}
                        key={index}
                      />
                    );
                  })}
                </div>
              </li>
            )}
        </ul>
        <div className={`ml-6 ${style.price_container}`}>
          <p className="text text_type_digits-default mr-2">{totalOrder}</p>
          <CurrencyIcon type="primary" />
        </div>
      </section>
    </section>
  );
};
export default OrderElement;
OrderElement.propTypes = {
  status: PropTypes.string.isRequired,
  orderNumber: PropTypes.number.isRequired,
  orderCreateTime: PropTypes.string.isRequired,
  burgerName: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
};
