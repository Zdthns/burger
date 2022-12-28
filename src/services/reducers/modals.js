import {
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
  OPEN_ORDER_DETAILS,
  CLOSE_ORDER_DETAILS,
} from "../actions/modals";

const initialState = {
  ingredientDetailsVisible: false,
  orderVisible: false,
};

export const modalsReducer = (state = initialState, action) => {
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
