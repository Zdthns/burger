export const WS_AUTH_CONNECTION_START = "WS_AUTH_CONNECTION_START";
export const WS_AUTH_CONNECTION_SUCCESS = "WS_AUTH_CONNECTION_SUCCESS";
export const WS_AUTH_CONNECTION_ERROR = "WS_AUTH_CONNECTION_ERROR";
export const WS_AUTH_CONNECTION_CLOSED = "WS_AUTH_CONNECTION_CLOSED";
export const WS_AUTH_CONNECTION_CLOSE = "WS_AUTH_CONNECTION_CLOSE";
export const WS_AUTH_GET_ORDERS = "WS_AUTH_GET_ORDERS";
export const WS_AUTH_SEND_ORDERS = "WS_AUTH_SEND_ORDERS";
export const wsUrl = "wss://norma.nomoreparties.space/orders/all";
export const wsAuthUrl = "wss://norma.nomoreparties.space/orders";

export const wsAuthActions = {
  wsInit: WS_AUTH_CONNECTION_START,
  wsSendMessage: WS_AUTH_SEND_ORDERS,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onError: WS_AUTH_CONNECTION_ERROR,
  onMessage: WS_AUTH_GET_ORDERS,
  wsClose: WS_AUTH_CONNECTION_CLOSE,
};

export const wsAuthConnectionSuccess = () => {
  return {
    type: WS_AUTH_CONNECTION_SUCCESS,
  };
};

export const wsAuthConnectionError = () => {
  return {
    type: WS_AUTH_CONNECTION_ERROR,
  };
};

export const wsAuthConnectionClosed = () => {
  return {
    type: WS_AUTH_CONNECTION_CLOSED,
  };
};

export const wsAuthGetOrders = (order) => {
  return {
    type: WS_AUTH_GET_ORDERS,
    payload: order,
  };
};

export const wsAuthSendOrders = (order) => {
  return {
    type: WS_AUTH_SEND_ORDERS,
    payload: order,
  };
};

export const wsAuthConnectionClose = () => {
  return {
    type: WS_AUTH_CONNECTION_CLOSE,
  };
};
