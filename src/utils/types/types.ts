import { TICons } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { rootReducer } from "../../services/reducers/root";
import { checkResponse } from "../userApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { store } from "../../services/store";
import { ActionCreator, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { TActions } from "../../services/actions/actionType";


export const useAppDispatch = () => useDispatch<AppDispatch & AppThunk>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TActions>
>;

export type TFields = {
  name: string,
  placeholder: string,
  type: "text" | "password" | "email" | undefined,
  icon?: keyof TICons | undefined,
}
export type TForm = {
  [name: string]: string | undefined;
}

export type TUser = {
  name?: string;
  login?: string;
  email?: string;
  password?: string
  token?: string | undefined;
};

//детали ингредиента
export type IngredientType = {
  _id: string;
  name: string;
  type: 'bun' | 'main' | 'sauce';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  key?: string
  count?: TCount[] | number,
  index: number;
};

export type ownerType = {
  name: string,
  email: string,
  createdAt?: string,
  updatedAt?: string,
}

export type OrderType<S = string[]> = {
  ingredients: S,
  owner?: ownerType,
  _id?: string
  status: string
  name: string
  createdAt: string
  updatedAt: string
  number: number,
  price?: number,
  count?: TCount[] | number
}

export type IOrderMessage = {
  orders: Array<OrderType>,
  total: number,
  totalToday: number,
}

export type TCount = {
  [index: string]: number
}
//данные с сервера
export type TOrder = {
  success: boolean;
  orders: OrderType[];
  total: number;
  totalToday: number;
};


// универсальные шапка
type universalType = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  body?: string;
};
//универсальный запрос
export const universalRequestType = (url: string, options?: universalType) => {
  return fetch(url, options).then(checkResponse)
}

// стандартный ответ от сервера
export type ResponseDefaultType<S = string> = {
  success: boolean;
  message: S;
};


//export type User = {
//  email: string
//  name: string
//}

//export type ResponseUserMessages = {
  //  orders: OrderType<string[]>,
  //  total: number,
  //  totalToday: number
  //}

//export interface TNumber {
//  [index: string]: number
//};
//export type IngredientID = string[] | null


// обновление токена
//export type refreshTokenResponseType = {
//  success: boolean;
//  accessToken: string;
//  refreshToken: string;
//};