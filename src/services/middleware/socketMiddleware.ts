import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookie";
import { AppDispatch, RootState } from "../../utils/types/types";
import { wsActionsTypeApplication } from "../actions/wsConect";


export const socketMiddleware = (url: string, wsActions: wsActionsTypeApplication, isAuth = false): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    const {
      wsInit,
      onMessage,
      onOpen,
      onClose,
      onError,
      wsSendMessage,
      wsClose,
    } = wsActions;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === wsInit) {
        if (!isAuth) {
          socket = new WebSocket(url);
        } else {
          const accessToken = getCookie("token")?.split("Bearer ")[1];
          socket = new WebSocket(`${url}?token=${accessToken}`);
        }
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
          console.log("соединение открывается");
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
          console.log("соединение не удалось");
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: parsedData });
          //restParsedData
          console.log("получение данных");
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
          console.log("соединение закрыто");
        };

        if (type === wsSendMessage) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders));
        }

        if (wsClose && type === wsClose && socket) {
          socket.close();
          console.log("соединение закрывается");
        }
      }
      next(action);
    };
  };
};
