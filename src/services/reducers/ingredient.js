import {
  ADD_INGREDIENT_DATA,
  DELETE_INGREDIENT_DATA,
} from "../actions/ingredients";

const initialState = {
  currentIngredient: {},
};

const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredient: action.item,
      };
    }
    case DELETE_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredient: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default ingredientDetailsReducer;
