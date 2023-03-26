import { getCookie } from "./cookie";
import { IngredientType, universalRequestType } from "./types/types";
import { api, checkResponse } from "./userApi";


export const getIngredientsApi = () =>
  fetch(`${api}/ingredients`).then(checkResponse);


export const getOrderNumber = (data: IngredientType[]) =>
  universalRequestType(`${api}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  })
    .then((data) => {
      if (data?.success) return data.order;
      //return Promise.reject(data);
    });
