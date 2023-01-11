import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user.js";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../../components/profileComponents/NavBar/NavBar";
import OrderPage from "../OrdersPage/OrderPage";

function Profile() {
  const location = useLocation();
  const isOrders = location.pathname.includes("orders");

  function textCaption(isOrders) {
    if (isOrders) {
      return "В этом разделе вы можете просмотреть свою историю заказов";
    } else {
      return " В этом разделе вы можете изменить свои персональные данные";
    }
  }
  const { user } = useSelector((store) => store.user);
  const [buttonVisible, setButtonVisible] = useState(false);

  const [form, setForm] = useState({
    name: user.name,
    login: user.email,
    password: "",
  });
  const dispatch = useDispatch();

  const fields = [
    { name: "name", placeholder: "имя", type: "text", icon: "EditIcon" },
    { name: "login", placeholder: "логин", type: "text", icon: "EditIcon" },
    { name: "password", placeholder: "пароль", type: "password", icon: "" },
  ];

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
    setButtonVisible(true);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getUpdateUser(form));
  };

  function resetForm(e) {
    e.preventDefault();
    setForm({ ...user, name: user.name, login: user.email, password: "" });
    setButtonVisible(false);
  }
  return (
    <section className={style.section}>
      <div className={style.profile_wrapper}>
        <div>
          <div className={style.nav}>
            {" "}
            <NavBar />
          </div>

          <p className={style.profile_caption}>{textCaption(isOrders)}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route
              path="/"
              element={
                <Form
                  fields={fields}
                  buttonText="Сохранить"
                  form={form}
                  onChange={onChange}
                  onSubmit={onSubmit}
                  resetForm={resetForm}
                  buttonVisible={buttonVisible}
                />
              }
            />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}
export default Profile;
