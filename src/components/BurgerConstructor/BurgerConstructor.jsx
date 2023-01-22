import { React, useMemo } from "react";
import style from "./burgerConstructor.module.css";

import PropTypes from "prop-types";

import Total from "../Total/Total";
import BurgerConstructorItem from "../BurgerConstructorItem/BurgerConstructorItem";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";
import { wsGetMessage } from "../../services/actions/wsConect";

import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  //addIngredientToConstructor,
  //DeleteIngredientFromConstructor,
} from "../../services/actions/constructor.js";

function BurgerConstructor({ createOrder }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => store.user);
  const constructorIngredients = useSelector(
    (store) => store.constructorReducer.constructorIngredients
  );
  const orderBun = useMemo(() =>
    constructorIngredients.find((item) => item.type === "bun")
  );

  const burgerBun = useMemo(() =>
    constructorIngredients.filter((item) => item.type === "bun")
  );

  const orderToppings = useMemo(() =>
    constructorIngredients
      .filter((item) => item.type !== "bun")
      .map((item) => item._id)
  );

  const orderData = useMemo(() => {
    if (!orderBun || !orderToppings.length) return [];
    return [orderBun._id, ...orderToppings, orderBun._id];
  }, [orderBun, orderToppings]);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.type === "bun") {
        for (let i = 0; i < 2; i++) {
          if (burgerBun.length > 0) {
            dispatch({
              type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
              id: "bun",
            });
          }
          dispatch({
            type: ADD_INGREDIENT_TO_CONSTRUCTOR,
            draggedIngredient: { ...item, key: "bun" },
          });
        }
      } else {
        dispatch({
          type: ADD_INGREDIENT_TO_CONSTRUCTOR,
          draggedIngredient: { ...item, key: uuidv4() },
        });
      }
    },
  });

  const openOrder = () => {
    if (isAuth) {
      createOrder(orderData);
      dispatch(wsGetMessage(orderData));
    } else {
      navigate("/login");
    }
  };
  return (
    <section className={style.wrapper}>
      <div className={`${style.container} `} ref={dropTarget}>
        <div className={`${style.item} mb-4 pr-8`}>
          {burgerBun.length > 0 && (
            <div className={`${style.item} mb-4 pr-8`}>
              <ConstructorElement
                type="top"
                isLocked={false}
                text={`${burgerBun[0].name} (верх)`}
                price={burgerBun[0].price}
                thumbnail={burgerBun[0].image}
              />
            </div>
          )}
        </div>
        <div className={`${style.bar} mb-4 pr-4`}>
          {constructorIngredients.map(
            (item, index) =>
              item.type !== "bun" && (
                <BurgerConstructorItem
                  item={item}
                  key={item.key}
                  index={index}
                />
              )
          )}
        </div>
        <div className={`${style.item} mb-4 pr-8`}>
          {burgerBun.length > 0 && (
            <div className={`${style.item} mb-4 pr-8`}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${burgerBun[0].name} (низ)`}
                price={burgerBun[0].price}
                thumbnail={burgerBun[0].image}
              />
            </div>
          )}
        </div>
      </div>
      <Total openOrder={openOrder} />
    </section>
  );
}
BurgerConstructor.propTypes = {
  createOrder: PropTypes.func.isRequired,
};
export default BurgerConstructor;
