//ingredientDetails
export const OPEN_INGREDIENT_DETAILS = "OPEN_INGREDIENT_DETAILS";
export const CLOSE_INGREDIENT_DETAILS = "CLOSE_INGREDIENT_DETAILS";
//orderDetails
export const OPEN_ORDER_DETAILS = "OPEN_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS = "CLOSE_ORDER_DETAILS";

export const openIngredientDetailsModals = () => {
  return {
    type: OPEN_INGREDIENT_DETAILS,
  };
};

export const closeIngredientDetailsModals = () => {
  return {
    type: CLOSE_INGREDIENT_DETAILS,
  };
};

export const openOrderDetailsModals = () => {
  return {
    type: OPEN_ORDER_DETAILS,
  };
};

export const closeOrderDetailsModals = () => {
  return {
    type: CLOSE_ORDER_DETAILS,
  };
};
