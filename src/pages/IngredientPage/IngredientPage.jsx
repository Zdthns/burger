import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

const IngredientPage = () => {
  const { id } = useParams();
  const ingredients = useSelector(
    (store) => store.ingredientDetails.currentIngredient
  );
  const currentIngredient = React.useMemo(
    () => ingredients.find((item) => item._id === id),
    [ingredients]
  );

  return (
    <div className={style.container}>
      {currentIngredient && (
        <IngredientDetails ingredient={currentIngredient} />
      )}
    </div>
  );
};

export default IngredientPage;
