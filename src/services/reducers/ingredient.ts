import {
  ADD_INGREDIENT_DATA,
  DELETE_INGREDIENT_DATA,
} from "../../utils/types/constants";
import { IngredientType } from "../../utils/types/types";
import { TActions } from "../actions/actionType";

type TinitialStateingredientDetails = {
  currentIngredient: IngredientType | null,
};

const initialState: TinitialStateingredientDetails = {
  currentIngredient: null,
};

const ingredientDetailsReducer = (state = initialState, action: TActions): TinitialStateingredientDetails => {
  switch (action.type) {
    case ADD_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredient: action.ingredients,
      };
    }
    case DELETE_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientDetailsReducer;
