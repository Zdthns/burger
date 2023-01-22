import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user.js";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../../components/profileComponents/NavBar/NavBar";
import OrderPage from "../OrdersPage/OrderPage";
import Caption from "../../components/profileComponents/Caption/Caption";

function Profile() {
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
        <div className={style.nav}>
          {" "}
          <NavBar />
          <Caption />
        </div>
        <div className={style.section_form}>
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
