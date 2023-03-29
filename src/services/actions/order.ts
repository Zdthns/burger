import { getOrderNumber } from "../../utils/burger";
import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../../utils/types/constants";
import { AppDispatch, AppThunk, OrderType } from "../../utils/types/types";

export type order =
  IdetOrderRequest
  | IdetOrderSuccess
  | IdetOrderFailed


interface IdetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST,
}

interface IdetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS,
  readonly order: OrderType

}
interface IdetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED,
}

const getOrderRequest = (): IdetOrderRequest => ({ type: GET_ORDER_REQUEST })

const getOrderSuccess = (res: OrderType): IdetOrderSuccess => ({
  type: GET_ORDER_SUCCESS,
  order: res
})
const getOrderFailed = (): IdetOrderFailed => ({ type: GET_ORDER_FAILED })


export const getOrder: AppThunk = (orderNumber) => {
  return function (dispatch: AppDispatch) {
    dispatch(getOrderRequest());
    getOrderNumber(orderNumber)
      .then((res) => {
        if (res) {
          dispatch(getOrderSuccess(res));
        } else {
          dispatch(getOrderFailed());
        }
      })

      .catch(() => dispatch(getOrderFailed()));
  };
}
