import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_CLOSE,
  WS_GET_ORDERS,
} from "../actions/wsConect";

const initialState = {
  wsConnected: false,
  wsError: undefined,
  messages: {
    orders: [],
    total: 0,
    totalToday: 0,
  },
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: undefined,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsError: action.payload,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        wsError: undefined,
      };

    case WS_GET_ORDERS:
      return {
        ...state,
        messages: { ...action.payload },
      };

    //case WS_CONNECTION_CLOSE:
    //  return {
    //    ...initialState,
    //    wsConnected: false,
    //    wsError: undefined,
    //  };
    default:
      return state;
  }
};
