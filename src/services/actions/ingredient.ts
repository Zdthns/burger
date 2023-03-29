import { ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA } from "../../utils/types/constants";
import { IngredientType } from "../../utils/types/types";


export type addIngredientDataType = {
  readonly type: typeof ADD_INGREDIENT_DATA;
  readonly ingredients: IngredientType
}
export type deleteIngredientDataType = {
  readonly type: typeof DELETE_INGREDIENT_DATA;
  readonly ingredients: []
}

export type TaddIngredients =
  addIngredientDataType
  | deleteIngredientDataType

export const addIngredientData = (item: IngredientType): addIngredientDataType => {
  return {
    type: ADD_INGREDIENT_DATA,
    ingredients: item,
  };
}
export function clearConstructor(): deleteIngredientDataType {
  return {
    type: DELETE_INGREDIENT_DATA,
    ingredients: [],
  };
}
