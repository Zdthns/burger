import { PayloadAction } from "@reduxjs/toolkit";
import {
  ADD_INGREDIENT_TO_CONSTRUCTOR,
  DELETE_INGREDIENT_DATA,
  DELETE_INGREDIENT_FROM_CONSTRUCTOR, MOVE_INGREDIENT
} from "../../utils/types/constants";

import { IngredientType } from "../../utils/types/types";
import { TActions } from "../actions/actionType";

type TinitialStateConstructor = {
  constructorIngredients: IngredientType[],
}

const initialState: TinitialStateConstructor = {
  constructorIngredients: [],
};

const constructorReducer = (state = initialState, action: TActions): TinitialStateConstructor => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_CONSTRUCTOR: {
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.draggedIngredient,
        ],
      };
    }

    case DELETE_INGREDIENT_FROM_CONSTRUCTOR: {
      let itemToDeleteIndex = state.constructorIngredients
        .map((item) => item.key)
        .indexOf(action.key);
      return {
        ...state,
        constructorIngredients: [...state.constructorIngredients].filter(
          (item, index) => index !== itemToDeleteIndex
        ),
      };
    }
    case MOVE_INGREDIENT: {
      const replacedConstructorIngredients = [...state.constructorIngredients];
      const draggedIngredient =
        replacedConstructorIngredients[action.payload.dragIndex];
      replacedConstructorIngredients.splice(action.payload.dragIndex, 1);
      replacedConstructorIngredients.splice(
        action.payload.hoverIndex,
        0,
        draggedIngredient
      );
      return {
        ...state,
        constructorIngredients: replacedConstructorIngredients,
      };
    }
    case DELETE_INGREDIENT_DATA: {
      return {
        constructorIngredients: [],
      }

    };
    default: {
      return state;
    }
  }
}

export default constructorReducer;
