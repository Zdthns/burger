import { combineReducers } from "redux";

import ingredientsReducer from "./ingredients.js";
import constructorReducer from "./constructor.js";
import ingredientDetailsReducer from "./ingredient.js";
import orderReducer from "./order.js";
import modalsReducer from "./modals.js";
import userReducer from "./userReduser.js";
import { wsReducer } from "./wsReducer";
import { wsUserReducer } from "./wsUserReducer";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  modals: modalsReducer,
  user: userReducer,
  wsReducer: wsReducer,
  wsUser: wsUserReducer,
});
