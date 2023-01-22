import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import style from "../style.module.css";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

function HomePage({ openIngredientModal, createOrder }) {
  //const dispatch = useDispatch();

  //const currentIngredient = useSelector(
  //  (state) => state.ingredientDetails.currentIngredient
  //);
  //const ingredientDetailsVisible = useSelector(
  //  (state) => state.modals.ingredientDetailsVisible
  //);
  //const orderVisible = useSelector((state) => state.modals.orderVisible);
  //const order = useSelector((state) => state.order.order);

  //React.useEffect(() => {
  //  dispatch(getIngredients());
  //}, [dispatch]);

  //const closeIngredientDetails = () => {
  //  dispatch(closeIngredientDetailsModals());
  //};
  //const closeOrderDetails = () => {
  //  dispatch(closeOrderDetailsModals());
  //};

  //const openOrderModal = () => {
  //  dispatch(openOrderDetailsModals());
  //};

  //const openIngredientModal = (item) => {
  //  dispatch(addIngredientData(item));
  //  dispatch(openIngredientDetailsModals());
  //};

  //const createOrder = (orderData) => {
  //  dispatch(getOrder(orderData));
  //  openOrderModal();
  //};

  return (
    <>
      <main className={style.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients openModal={openIngredientModal} />
          <BurgerConstructor openOrderDetails={createOrder} />
        </DndProvider>
      </main>
    </>
  );
}
export default HomePage;
{
  /*<Routes>
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
        </Routes>*/
}
