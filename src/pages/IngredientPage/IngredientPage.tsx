import React, { FC } from "react";
import style from "./style.module.css";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import { useAppSelector } from "../../utils/types/types";

const IngredientPage: FC = () => {
  const ingredients = useAppSelector(
    (store) => store.ingredientDetails.currentIngredient
  );

  return (
    <div className={style.container}>
      {ingredients && <IngredientDetails />}
    </div>
  );
};

export default IngredientPage;
