import { getCookie } from "../../utils/cookie";

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
