import { getCookie } from "./cookie";
import { TForm, TUser, universalRequestType } from "./types/types";
export const api = "https://norma.nomoreparties.space/api";

export const wsUrl: string = "wss://norma.nomoreparties.space/orders/all";
export const wsUserUrl: string = "wss://norma.nomoreparties.space/orders";

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
// регистрация
export const getRegistrationUser = (data: TUser) =>
  universalRequestType(`${api}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
    }),
  })

//логин
export const getUserLogin = (data: TUser) =>
  universalRequestType(`${api}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),

  })

// выход
export const getUserLogout = () =>
  universalRequestType(`${api}/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("jwt") }),
  })

// сброс пароля
export const getPasswordReset = (email: string) => {
  return universalRequestType(`${api}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
};

export const setNewPassword = (password: TForm, token: string) => {
  return universalRequestType(`${api}/password-reset/reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: password, token: token }),
  })
}

//получение  данных пользователя
export const getUser = () =>
  universalRequestType(`${api}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
  })
// обновление данных пользователя

export const updateUser = (data: TUser) =>
  universalRequestType(`${api}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
    body: JSON.stringify(data),
  })

// обновить токен
export const updateToken = () =>
  universalRequestType(`${api}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getCookie("token")}`,
    },
    body: JSON.stringify({
      token: localStorage.getItem("jwt"),
    }),
  })
