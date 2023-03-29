import { ADD_INGREDIENT_TO_CONSTRUCTOR, DELETE_INGREDIENT_FROM_CONSTRUCTOR, MOVE_INGREDIENT } from "../../utils/types/constants"
import { AppDispatch, AppThunk, IngredientType } from "../../utils/types/types"


export type constructor =
  IaddIngredientToConstructor
  | IdeletIngredientFromConstructor
  | moveItemsType

export interface IaddIngredientToConstructor {
  readonly type: typeof ADD_INGREDIENT_TO_CONSTRUCTOR
  readonly draggedIngredient: IngredientType,
};

export interface IdeletIngredientFromConstructor {
  readonly type: typeof DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  readonly key: string
};
export interface moveItemsType {
  type: typeof MOVE_INGREDIENT,
  payload: {
    dragIndex: number,
    hoverIndex: number,
  },
}
export const moveItems = (dragIndex: number, hoverIndex: number): moveItemsType => {
  return {
    type: MOVE_INGREDIENT,
    payload: {
      dragIndex,
      hoverIndex,
    },
  };
};

export const addIngredientToConstructor = (draggedIngredient: IngredientType
): IaddIngredientToConstructor => {
  return {
    type: ADD_INGREDIENT_TO_CONSTRUCTOR,
    draggedIngredient
  }
}
export const deleteIngredientFromConstructor = (key: string): IdeletIngredientFromConstructor => {
  return {
    type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
    key,
  }
}
