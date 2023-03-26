import {
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  CLOSE_ORDER_DETAILS,
} from "../../utils/types/constants";
import { TActions } from "../actions/actionType";

type initialStateType = {
  ingredientDetailsVisible: boolean,
  orderVisible: boolean,
}


const initialState: initialStateType = {
  ingredientDetailsVisible: false,
  orderVisible: false,
};
export const modalsReducer = (
  state = initialState, action: TActions
): initialStateType => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetailsVisible: true,
      };
    }
    case CLOSE_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetailsVisible: false,
      };
    }
    case OPEN_ORDER_DETAILS: {
      return {
        ...state,
        orderVisible: true,
      };
    }
    case CLOSE_ORDER_DETAILS: {
      return {
        ...state,
        orderVisible: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default modalsReducer;
