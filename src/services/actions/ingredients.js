import { getIngredientsApi } from "../../utils/burger.js";
export const ADD_INGREDIENT_DATA = "ADD_INGREDIENT_DATA";
export const DELETE_INGREDIENT_DATA = "DELETE_INGREDIENT_DATA";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    getIngredientsApi()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch(() => dispatch({ type: GET_INGREDIENTS_FAILED }));
  };
}
export function addIngredientData(item) {
  return {
    type: ADD_INGREDIENT_DATA,
    item: item,
  };
}

export function deleteIngredienData() {
  return {
    type: DELETE_INGREDIENT_DATA,
    item: "",
  };
}
