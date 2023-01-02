import React from "react";
import { logoutUser } from "../../../services/actions/user";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { NavLink, Routes, Route } from "react-router-dom";
import Profile from "../../../pages/Profile/Profile";
import OrderInfo from "../../feedComponents/OrderInfo/OrderInfo";
import Test from "../Test";

function NavBar() {
  const dispatch = useDispatch();
  const setActive = ({ isActive }) =>
    isActive ? style.activeLink : style.link;

  const logout = () => {
    console.log("выход");
    dispatch(logoutUser());
  };
  return (
    <>
      <nav className={style.nav}>
        <NavLink to="/profile">Профиль</NavLink>
        <NavLink to="/profile/orders" className={setActive}>
          История заказов
        </NavLink>
        <button
          type="button"
          className={`${style.button} text text_type_main-medium text_color_inactive`}
          onClick={logout}
        >
          Выход
        </button>
      </nav>
      <Routes>
        <Route
          index
          element={
            <Profile>
              <Route to="order" element={<Test />} />
            </Profile>
          }
        />

        {/*<Route path="/order/:id" element={<></>} />*/}
      </Routes>
    </>
  );
}

export default NavBar;
