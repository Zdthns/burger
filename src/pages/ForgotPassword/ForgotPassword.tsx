import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import Form from "../../components/Form/Form";
import { TFields, useAppDispatch } from "../../utils/types/types";
import { requestCode } from "../../services/actions/user";
import Caption from "../../components/caption/Caption";
import { useForm } from "../../components/Form/hook/useForm";

const ForgotPassword: React.FC = () => {
  //const [form, setForm] = useState({ email: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fields: TFields[] = [
    { name: "email", placeholder: "Укажите e-mail", type: "email" },
  ];

  //const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //  setForm({ ...form, [evt.target.name]: evt.target.value });
  //};
  const { values, handleChange, setValues } = useForm({ email: "" });

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(requestCode(values.email));
    return navigate("/resetpassword", { state: { from: location } });
  };

  return (
    <section className={style.wrapper}>
      <h1>Восстановление пароля</h1>
      <Form
        fields={fields}
        buttonText="Восстановить"
        form={values}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className={style.caption}>
        <Caption />
      </div>
    </section>
  );
};
export default ForgotPassword;
