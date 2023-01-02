import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user.js";

import NavBar from "../../components/profileComponents/NavBar/NavBar";

function Profile() {
  const { user } = useSelector((store) => store.user);
  const [form, setForm] = React.useState({
    name: user.name,
    login: user.email,
    password: "",
  });
  const dispatch = useDispatch();

  const fields = [
    { name: "name", placeholder: "", type: "text" },
    { name: "login", placeholder: "", type: "text" },
    { name: "password", placeholder: "", type: "password" },
  ];

  const onChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getUpdateUser(form));
  };

  return (
    <section className={style.profile_wrapper}>
      <div>
        <NavBar />
        <p className={style.profile_caption}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form
          fields={fields}
          buttonText="Сохранить"
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
}
export default Profile;
