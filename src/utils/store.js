import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { rootReducer } from "../services/reducers/root.js";
import thunk from "redux-thunk";
import { socketMiddleware } from "../services/middleware/socketMiddleware";
import { wsUrl, wsUserUrl } from "../utils/userApi";
import { wsActions, wsUserActions } from "./../services/actions/wsConect";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
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
