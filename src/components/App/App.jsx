import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "react-redux";
import style from "./app.module.css";

import Layout from "../Layout.jsx/Layout";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";

import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { authUser, refreshToken } from "../../services/actions/user";
import { getOrder } from "../../services/actions/order.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Orders from "../../pages/Orders/Orders";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { getIngredients } from "../../services/actions/ingredients.js";
import {
  deleteIngredienData,
  addIngredientData,
} from "../../services/actions/ingredients.js";

import { getCookie } from "../../utils/cookie";

import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  const { isAuth } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetailsOpen, setOrderDetailsOpen] = React.useState(false);
  const { currentIngredient } = useSelector((store) => store.ingredientDetails);
  const background = location.state?.background;
  const cookie = getCookie("token");
  const refreshTokenData = localStorage.getItem("token");
  const updateTokenSuccess = useSelector((store) => store.user.isTokenSuccess);
  const [ingredientOpen, setIngredientOpen] = React.useState(false);
  // order
  const closeModal = () => {
    dispatch(deleteIngredienData());

    setOrderDetailsOpen(false);
    navigate("/");
  };
  const openOrderModal = () => {
    setOrderDetailsOpen(true);
  };
  //ingredient
  const openIngredientModal = (item) => {
    dispatch(addIngredientData(item));
    setIngredientOpen(true);
  };

  React.useEffect(() => {
    if (!isAuth && localStorage.getItem("jwt")) {
      dispatch(authUser());
    }
  }, []);
  React.useEffect(() => {
    if (!isAuth && refreshTokenData && cookie) {
      dispatch(authUser());
    }
    if (!cookie && refreshTokenData) {
      dispatch(refreshToken());
    }
    if (cookie && updateTokenSuccess && refreshTokenData && !isAuth) {
      dispatch(authUser());
    }
    dispatch(getIngredients());
  }, [dispatch, refreshTokenData, isAuth, cookie, updateTokenSuccess]);

  const createOrder = (orderData) => {
    dispatch(getOrder(orderData));
    openOrderModal();
  };
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <main className={style.main}>
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients openModal={openIngredientModal} />
                  <BurgerConstructor createOrder={createOrder} />
                </DndProvider>{" "}
              </main>
            }
          />{" "}
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Profile>
                  <Route path="/orders" element={<Orders />} />
                </Profile>
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/ingredients/*"
            element={
              <Modal
                item={currentIngredient}
                title="Детали ингредиента"
                onClose={closeModal}
              >
                <IngredientDetails />
              </Modal>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {orderDetailsOpen && (
        <Modal title="" onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}
export default App;
