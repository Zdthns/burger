import style from "./cardBlock.module.css";

import React from "react";

import IngredientCard from "../IngredientCard/IngredientCard";
import {
  AppStateType,
  IngredientType,
  useAppSelector,
} from "../../utils/types/types";

type PropType = { type: string; name: string; onClick: (event: any) => void };

const CardBlock = React.forwardRef<HTMLLIElement, PropType>(
  ({ type, name, onClick }, ref) => {
    const ingredients = useAppSelector(
      (state: AppStateType) => state.ingredients.ingredients
    );

    return (
      <li ref={ref}>
        <h2 className="text text_type_main-medium text_color_primary">
          {name}
        </h2>
        <div className={style.container}>
          {ingredients &&
            ingredients
              .filter((item: { type: string }) => item.type === type)
              .map((element: IngredientType) => (
                <IngredientCard
                  elem={element}
                  onClick={() => onClick(element)}
                  key={element._id}
                />
              ))}
        </div>
      </li>
    );
  }
);

export default CardBlock;
