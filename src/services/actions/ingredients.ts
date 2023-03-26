import { getIngredientsApi } from "../../utils/burger";
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, ADD_INGREDIENT_DATA, DELETE_INGREDIENT_DATA } from "../../utils/types/constants";
import { IngredientType, AppThunk, AppDispatch } from "../../utils/types/types";


export type TgetIngredients =
  TgetIngredientsRequest
  | TgetIngredientsSuccess
  | TgetIngredientsError

export type TgetIngredientsRequest = {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export type TgetIngredientsSuccess = {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: IngredientType[]
}

export type TgetIngredientsError = {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}



const getIngredientsRequest = (): TgetIngredientsRequest => {
  return {
    type: GET_INGREDIENTS_REQUEST
  }
}
const getIngredientsSuccess = (ingredients: IngredientType[]): TgetIngredientsSuccess => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients,
  }
}
const getIngredientsFailed = (): TgetIngredientsError => {
  return {
    type: GET_INGREDIENTS_FAILED
  }
}


export const getIngredients: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getIngredientsRequest());
    getIngredientsApi()
      .then((res) => {
        if (res && res.success) {
          dispatch(getIngredientsSuccess(res.data));
        } else {
          dispatch(getIngredientsFailed());
        }
      })
      .catch(() => dispatch(getIngredientsFailed()));
  };
}


