import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import style from "../style.module.css";

import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import Modal from "../../components/Modal/Modal";

import { getIngredients } from "../../services/actions/ingredients.js";
import { getOrder } from "../../services/actions/order.js";
import { addIngredientData } from "../../services/actions/ingredient.js";
import {
  openIngredientDetailsModals,
  closeIngredientDetailsModals,
  openOrderDetailsModals,
  closeOrderDetailsModals,
} from "../../services/actions/modals.js";

function HomePage() {
  const dispatch = useDispatch();

  const currentIngredient = useSelector(
    (state) => state.ingredientDetails.currentIngredient
  );
  const ingredientDetailsVisible = useSelector(
    (state) => state.modals.ingredientDetailsVisible
  );
  const orderVisible = useSelector((state) => state.modals.orderVisible);
  const order = useSelector((state) => state.order.order);

  const closeIngredientDetails = () => {
    dispatch(closeIngredientDetailsModals());
  };
  const closeOrderDetails = () => {
    dispatch(closeOrderDetailsModals());
  };

  const openOrderModal = () => {
    dispatch(openOrderDetailsModals());
  };

  const openIngredientModal = (item) => {
    dispatch(addIngredientData(item));
    dispatch(openIngredientDetailsModals());
  };

  const createOrder = (orderData) => {
    dispatch(getOrder(orderData));
    openOrderModal();
  };

  return (
    <>
      <main className={style.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients openModal={openIngredientModal} />
          <BurgerConstructor openOrderDetails={createOrder} />
        </DndProvider>
        <Routes>
          {" "}
          {Boolean(orderVisible) && (
            <Modal header={""} onClose={closeOrderDetails}>
              <OrderDetails orderNumber={order.number} />
            </Modal>
          )}
          {Boolean(ingredientDetailsVisible) && (
            <Route path="/ingredients/:id">
              <Modal
                ingredient={currentIngredient}
                header="Детали ингредиента"
                onClose={closeIngredientDetails}
              >
                <IngredientDetails currentIngredient={currentIngredient} />
              </Modal>
            </Route>
          )}
        </Routes>
      </main>
    </>
  );
}
export default HomePage;
