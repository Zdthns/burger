import React, { FC, SyntheticEvent } from "react";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import style from "./ingredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";
import { IngredientType, useAppSelector } from "../../utils/types/types";

type PropTypes = {
  elem: IngredientType;
  onClick: (item: IngredientType) => void;
};

const IngredientCard: FC<PropTypes> = ({ elem, onClick }) => {
  const location = useLocation();
  const ingredientId = elem._id;
  const constructorIngredients = useAppSelector(
    (store) => store.constructorReducer.constructorIngredients
  );
  const counter = React.useMemo(() => {
    return constructorIngredients.filter((item) => item._id === elem._id)
      .length;
  }, [constructorIngredients, elem._id]);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: elem,
  });

  return (
    <Link
      key={ingredientId}
      state={{ background: location }}
      to={{
        pathname: `/ingredients/${ingredientId}`,
      }}
      className={style.card}
      id={elem._id}
      onClick={() => onClick(elem)}
      ref={dragRef}
      draggable={true}
    >
      {counter !== 0 && <Counter count={counter} size="default" />}
      <img src={elem.image} className={style.image} alt={elem.name} />
      <p className={style.price}>
        <span className="text text_type_digits-default">{elem.price}</span>
        <CurrencyIcon type="primary" />
      </p>
      <p className={`${style.name} text_type_main-default`}>{elem.name}</p>
    </Link>
  );
};

export default IngredientCard;
