import { combineReducers } from "redux";

import ingredientsReducer from "./ingredients";
import constructorReducer from "./constructor";
import ingredientDetailsReducer from "./ingredient";
import orderReducer from "./order";
import modalsReducer from "./modals";
import userReducer from "./userReduser";
import wsReducer from "./wsReducer";


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  modals: modalsReducer,
  user: userReducer,
  wsReducer: wsReducer,
});


