import React, { FC } from "react";
import style from "../style.module.css";

type PropsType = {
  ingredientimage: string;
  ingredientName: string;
};

const Ingredient: FC<PropsType> = ({ ingredientimage, ingredientName }) => {
  return (
    <div className={style.border}>
      <div className={style.item}>
        <img className={style.img} src={ingredientimage} alt={ingredientName} />
      </div>
    </div>
  );
};

export default Ingredient;
