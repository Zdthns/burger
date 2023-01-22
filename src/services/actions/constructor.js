export const ADD_INGREDIENT_TO_CONSTRUCTOR = "ADD_INGREDIENT_TO_CONSTRUCTOR";
export const DELETE_INGREDIENT_FROM_CONSTRUCTOR = "REMOVE_INGREDIENT";
export const MOVE_INGREDIENT = "MOVE_INGREDIENT";

export const moveItems = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_INGREDIENT,
    payload: {
      dragIndex: dragIndex,
      hoverIndex: hoverIndex,
    },
  };
};
//export const DeleteIngredientFromConstructor = (action) => {
//  return {
//    type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
//    id: action.key,
//  };
//};

//export const addIngredientToConstructor = (action) => {
//  return {
//    type: ADD_INGREDIENT_TO_CONSTRUCTOR,
//    payload: {
//      item: action.item,
//      key: action.key,
//    },
//  };
//};
