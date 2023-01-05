import { getCookie } from "./cookie";

const api = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsApi = () =>
  fetch(`${api}/ingredients`).then(checkResponse);

export const getOrderNumber = (data) =>
  fetch(`${api}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },

    body: JSON.stringify({
      ingredients: data,
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data.order;
      return Promise.reject(data);
    });
