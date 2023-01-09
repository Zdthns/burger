import style from "./cardBlock.module.css";
import PropTypes from "prop-types";

import React from "react";
import { useSelector } from "react-redux";

import IngredientCard from "../IngredientCard/IngredientCard";

const CardBlock = React.forwardRef(({ type, name, onClick }, ref) => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);

  return (
    <li ref={ref}>
      <h2 className="text text_type_main-medium text_color_primary">{name}</h2>
      <div className={style.container}>
        {ingredients &&
          ingredients
            .filter((item) => item.type === type)
            .map((element) => (
              <IngredientCard
                elem={element}
                onClick={() => onClick(element)}
                key={element._id}
              />
            ))}
      </div>
    </li>
  );
});

CardBlock.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardBlock;
