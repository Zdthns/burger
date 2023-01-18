import { combineReducers } from "redux";

import ingredientsReducer from "./ingredients.js";
import constructorReducer from "./constructor.js";
import ingredientDetailsReducer from "./ingredient.js";
import orderReducer from "./order.js";
import userReducer from "./userReduser.js";
import wsReducer from "./wsReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  user: userReducer,
  wsReducer: wsReducer,
});
