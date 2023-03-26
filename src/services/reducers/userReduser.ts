import { TUser } from "../../utils/types/types";
import {
  FORGOT_CODE_REQUEST,
  FORGOT_CODE_ERROR,
  FORGOT_CODE_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  TOGGLE_IS_PRELOADER,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_ERROR,
} from "../../utils/types/constants";
import { TActions } from "../actions/actionType";


export type initialStateUserType = {
  user: TUser
  isAuth: boolean,

  // востановление пароля
  isCodeRequest: boolean,
  isCodeFailed: boolean,
  isReplacePassword: boolean,

  isReplacePasswordRequest: boolean,
  isReplacePasswordSuccess: boolean,
  isReplacePasswordFailed: boolean,
  //регистрация
  IsRegisterUserRequest: boolean,
  IsRegisterUserSuccess: boolean,
  IsRegisterUserFailed: boolean,
  // запрос данных пользователя
  isGetUserRequest: boolean,
  isGetUserSuccess: boolean,
  isGetUserFailed: boolean,
  // обновление данных пользователя
  isUpdateUserRequest: boolean,
  isUpdateUserSuccess: boolean,
  isUpdateUserFailed: boolean,
  //авторизация
  isAuthUserRequest: boolean,
  isAuthUserFailed: boolean,
  // логин
  isLoginUserRequest: boolean,
  isLoginUserSuccess: boolean,
  isLoginUserFailed: boolean,
  //выход
  isLogoutUserRequest: boolean,
  isLogoutUserFailed: boolean,
  // токен
  isTokenRequest: boolean,
  isTokenSuccess: boolean,
  isTokenFailed: boolean,
  //загрузка
  preloader: boolean,
}

const initialState: initialStateUserType = {
  user: {
    name: '',
    email: '',
  },
  isAuth: false,

  // востановление пароля
  isCodeRequest: false,
  isCodeFailed: false,
  isReplacePassword: false,

  isReplacePasswordRequest: false,
  isReplacePasswordSuccess: true,
  isReplacePasswordFailed: false,
  //регистрация
  IsRegisterUserRequest: false,
  IsRegisterUserSuccess: false,
  IsRegisterUserFailed: false,
  // запрос данных пользователя
  isGetUserRequest: false,
  isGetUserSuccess: false,
  isGetUserFailed: false,
  // обновление данных пользователя
  isUpdateUserRequest: false,
  isUpdateUserSuccess: false,
  isUpdateUserFailed: false,
  //авторизация
  isAuthUserRequest: false,
  isAuthUserFailed: false,
  // логин
  isLoginUserRequest: false,
  isLoginUserSuccess: false,
  isLoginUserFailed: false,
  //выход
  isLogoutUserRequest: false,
  isLogoutUserFailed: false,
  // токен
  isTokenRequest: false,
  isTokenSuccess: false,
  isTokenFailed: false,
  //загрузка
  preloader: false,
};
const userReducer = (state: initialStateUserType = initialState, action: TActions): initialStateUserType => {
  switch (action.type) {
    // востановление пароля
    // запрос начал выполняться
    case FORGOT_CODE_REQUEST: {
      return {
        ...state,
        isCodeRequest: true,
        isCodeFailed: false,
      };
    }
    // запрос выполнился успешно
    case FORGOT_CODE_SUCCESS: {
      return {
        ...state,
        //user: {
        //  name: action.user.name,
        //  email: action.user.email,
        //},
        isCodeRequest: false,
        isCodeFailed: false,
        isReplacePassword: true,
      };
    }
    // запрос выполнился с ошибкой
    case FORGOT_CODE_ERROR: {
      return {
        ...state,
        isCodeRequest: false,
        isCodeFailed: true,
        isAuth: false,
      };
    }
    // запрос вып
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        isReplacePasswordRequest: true,
        isReplacePasswordFailed: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isReplacePasswordRequest: false,
        isReplacePasswordSuccess: true,
        isReplacePasswordFailed: false,
      };
    }
    case FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        isReplacePassword: false,
        isReplacePasswordFailed: true,
      };
    }
    // Регистрация
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        IsRegisterUserRequest: true,
        IsRegisterUserSuccess: false,
        isAuth: false,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        IsRegisterUserRequest: false,
        IsRegisterUserSuccess: true,
        isAuth: true,
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
        IsRegisterUserFailed: true,
        IsRegisterUserSuccess: false,
      };
    }
    // запрос данных о пользователе
    case GET_USER_REQUEST: {
      return {
        ...state,
        isGetUserRequest: true,
        isGetUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isGetUserRequest: false,
        isGetUserFailed: false,
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        isGetUserRequest: false,
        isGetUserFailed: true,
      };
    }
    // изменение данных о пользователя
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        isUpdateUserRequest: true,
        isUpdateUserFailed: false,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isUpdateUserRequest: false,
        isUpdateUserFailed: false,
      };
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        isUpdateUserRequest: false,
        isUpdateUserFailed: true,
      };
    }
    // токен
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        isTokenRequest: true,
        isTokenSuccess: false,
        isTokenFailed: false,
      };
    }
    case UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        isTokenRequest: false,
        isTokenSuccess: true,
        isTokenFailed: false,
      };
    }
    case UPDATE_TOKEN_ERROR: {
      return {
        ...state,
        isTokenRequest: false,
        isTokenSuccess: false,
        isTokenFailed: true,
      };
    }

    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        isLoginUserRequest: true,
        isLoginUserFailed: false,
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isLoginUserRequest: false,
        isLoginUserFailed: false,
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        isLoginUserRequest: false,
        isLoginUserFailed: true,
      };
    }
    // выход
    case LOGOUT_USER_REQUEST: {
      return {
        ...state,
        isLogoutUserRequest: true,
        isLogoutUserFailed: false,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        user: {
          name: '',
          email: '',
        },
        isLogoutUserRequest: false,
        isLogoutUserFailed: false,
      };
    }
    case LOGOUT_USER_ERROR: {
      return {
        ...state,
        isAuth: false,
        isLogoutUserRequest: false,
        isLogoutUserFailed: true,
      };
    }
    //прелоадер
    //case TOGGLE_IS_PRELOADER: {
    //  return {
    //    ...state,
    //    TOGGLE_IS_PRELOADER: action.preloader,
    //  };
    //}
    default: {
      return state;
    }
  }
};
export default userReducer;
