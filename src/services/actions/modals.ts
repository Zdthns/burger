import { OPEN_INGREDIENT_DETAILS, CLOSE_INGREDIENT_DETAILS, OPEN_ORDER_DETAILS, CLOSE_ORDER_DETAILS } from "../../utils/types/constants";

export type modal =
  IopenIngredientDetailsModalsType
  | IcloseIngredientDetailsModalsType
  | IopenOrderDetailsModalsType
  | IcloseOrderDetailsModalsType


interface IopenIngredientDetailsModalsType {
  readonly type: typeof OPEN_INGREDIENT_DETAILS
};
interface IcloseIngredientDetailsModalsType {
  readonly type: typeof CLOSE_INGREDIENT_DETAILS,
};
interface IopenOrderDetailsModalsType {
  readonly type: typeof OPEN_ORDER_DETAILS,
};
interface IcloseOrderDetailsModalsType {
  readonly type: typeof CLOSE_ORDER_DETAILS
}

export const openIngredientDetailsModals =
  (): IopenIngredientDetailsModalsType => {
    return {
      type: OPEN_INGREDIENT_DETAILS,
    };
  };

export const closeIngredientDetailsModals =
  (): IcloseIngredientDetailsModalsType => {
    return {
      type: CLOSE_INGREDIENT_DETAILS,
    };
  };

export const openOrderDetailsModals =
  (): IopenOrderDetailsModalsType => {
    return {
      type: OPEN_ORDER_DETAILS,
    };
  };

export const closeOrderDetailsModals =
  (): IcloseOrderDetailsModalsType => {
    return {
      type: CLOSE_ORDER_DETAILS,
    };
  };
