import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { rootReducer } from "./reducers/root";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsUrl, wsUserUrl } from "../utils/userApi";
import { wsActions, wsUserActions } from "./actions/wsConect";




const composeEnhancers =
  //@ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    //@ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions, false),
    socketMiddleware(wsUserUrl, wsUserActions, true)
  )
);

export const store = createStore(rootReducer, enhancer);






