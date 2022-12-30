import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { rootReducer } from "../services/reducers/root.js";
import thunk from "redux-thunk";
import { socketMiddleware } from "../services/middleware/socketMiddleware";
import { wsUrl, wsAuthUrl, wsAuthActions } from "./../services/actions/wsUser";
import { wsActions } from "./../services/actions/wsConect";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsUrl, wsActions, false),
    socketMiddleware(wsAuthUrl, wsAuthActions, true)
  )
);

export const store = createStore(rootReducer, enhancer);
