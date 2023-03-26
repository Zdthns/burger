import { FC, useMemo } from "react";
import style from "./burgerConstructor.module.css";

import Total from "../Total/Total";
import BurgerConstructorItem from "../BurgerConstructorItem/BurgerConstructorItem";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { v4 as uuidv4 } from "uuid";

import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";

import {
  IngredientType,
  useAppDispatch,
  useAppSelector,
} from "../../utils/types/types";
import {
  addIngredientToConstructor,
  deleteIngredientFromConstructor,
} from "../../services/actions/constructor";

type PropsType = {
  isAuth: boolean;
  createOrder: (orderData: IngredientType[]) => void;
};

const BurgerConstructor: FC<PropsType> = ({ isAuth, createOrder }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const constructorIngredients = useAppSelector(
    (store) => store.constructorReducer.constructorIngredients
  );

  const ingredientBun = constructorIngredients.filter(
    (item: IngredientType) => item.type === "bun"
  );

  const ingredientOther = constructorIngredients
    .filter((item: IngredientType) => item.type !== "bun")
    .map((item: IngredientType) => item._id);

  const orderBun = constructorIngredients.find(
    (item: IngredientType) => item.type === "bun"
  );

  const orderData = useMemo(() => {
    if (!orderBun || !ingredientOther.length) return [];
    return [...ingredientOther, orderBun, orderBun];
  }, [orderBun, ingredientOther]);

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: IngredientType) {
      if (item.type === "bun") {
        for (let i = 0; i < 2; i++) {
          if (ingredientBun.length > 0) {
            dispatch(deleteIngredientFromConstructor("bun"));
          }
          dispatch(addIngredientToConstructor({ ...item, key: "bun" }));
        }
      } else {
        dispatch(addIngredientToConstructor({ ...item, key: uuidv4() }));
      }
    },
  });

  const openOrder = () => {
    if (isAuth) {
      createOrder(orderData as IngredientType[]);
    } else {
      navigate("/login");
    }
  };
  return (
    <section className={style.wrapper}>
      <div className={`${style.container} `} ref={dropTarget}>
        <div className={`${style.item} mb-4 pr-8`}>
          {ingredientBun.length > 0 && (
            <div className={`${style.item} mb-4 pr-8`}>
              <ConstructorElement
                type="top"
                isLocked={false}
                text={`${ingredientBun[0].name} (верх)`}
                price={ingredientBun[0].price}
                thumbnail={ingredientBun[0].image}
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
          {ingredientBun.length > 0 && (
            <div className={`${style.item} mb-4 pr-8`}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${ingredientBun[0].name} (низ)`}
                price={ingredientBun[0].price}
                thumbnail={ingredientBun[0].image}
              />
            </div>
          )}
        </div>
      </div>
      <Total openOrder={openOrder} />
    </section>
  );
};

export default BurgerConstructor;
