import React from "react";
import style from "../style.module.css";
import PropTypes from "prop-types";

function Ingredient({ ingredientimage, ingredientName }) {
  return (
    <div className={style.border}>
      <div className={style.item}>
        <img className={style.img} src={ingredientimage} alt={ingredientName} />
      </div>
    </div>
  );
}

export default Ingredient;
Ingredient.propTypes = {
  ingredientName: PropTypes.string.isRequired,
  ingredientimage: PropTypes.string.isRequired,
};
