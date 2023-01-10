import React from "react";
import style from "./ingredientDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function IngredientDetails() {
  const { id } = useParams();
  const ingredient = useSelector((store) =>
    store.ingredients.ingredients.find((item) => item._id === id)
  );

  return (
    <>
      {ingredient && (
        <section className={style.container}>
          <img src={ingredient.image_large} alt={ingredient.name} />
          <h4 className="text_type_main-medium mb-8 mt-4">{ingredient.name}</h4>
          <div className={`${style.info}`}>
            <div className={`${style.infoItem} mr-5`}>
              <span className="text_type_main-default mb-2">Калории,ккал</span>
              <span className="text_type_digits-default">
                {ingredient.calories}
              </span>
            </div>
            <div className={`${style.infoItem} mr-5`}>
              <span className="text_type_main-default mb-2">Белки, г</span>
              <span className="text_type_digits-default">
                {ingredient.proteins}
              </span>
            </div>
            <div className={`${style.infoItem} mr-5`}>
              <span className="text_type_main-default mb-2">Жиры, г</span>
              <span className="text_type_digits-default">{ingredient.fat}</span>
            </div>
            <div className={`${style.infoItem}`}>
              <span className="text_type_main-default mb-2">Углеводы, г</span>
              <span className="text_type_digits-default">
                {ingredient.carbohydrates}
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default IngredientDetails;
