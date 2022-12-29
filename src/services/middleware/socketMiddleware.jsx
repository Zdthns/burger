import { getCookie } from "../../utils/cookie";
export const wsUrl = "wss://norma.nomoreparties.space/orders/all";
export const wsAuthUrl = "wss://norma.nomoreparties.space/orders";

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_ORDERS,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
  wsClose: WS_CONNECTION_CLOSE,
};

export const wsAuthActions = {
  wsInit: WS_AUTH_CONNECTION_START,
  wsSendMessage: WS_AUTH_SEND_ORDERS,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onError: WS_AUTH_CONNECTION_ERROR,
  onMessage: WS_AUTH_GET_ORDERS,
  wsClose: WS_AUTH_CONNECTION_CLOSE,
};
export const socketMiddleware = (wsUrl, wsActions, isAuth = false) => {
  return (store) => {
    let socket = null;

    const {
      wsInit,
      wsSendMessage,
      onOpen,
      onClose,
      onError,
      onMessage,
      wsClose,
    } = wsActions;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      //const { isAuth } = getState().authReducer;

      if (type === wsInit) {
        if (!isAuth) {
          socket = new WebSocket(wsUrl);
        } else {
          const accessToken = getCookie("token");
          socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
        }
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders));
        }

        if (wsClose && type === wsClose && socket) {
          socket.close();
        }
      }
      next(action);
    };
  };
};
