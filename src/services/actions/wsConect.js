export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_CONNECTION_CLOSE = "WS_CONNECTION_CLOSE";
export const WS_GET_ORDERS = "WS_GET_ORDERS";
export const WS_SEND_ORDERS = "WS_SEND_ORDERS";

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_ORDERS,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
  wsClose: WS_CONNECTION_CLOSE,
};

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (order) => {
  return {
    type: WS_GET_ORDERS,
    payload: order,
  };
};

export const wsClose = () => {
  return {
    type: WS_CONNECTION_CLOSE,
  };
};

export const wsStart = () => {
  return { type: WS_CONNECTION_START };
};
