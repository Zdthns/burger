import { FC, useState } from "react";
import style from "./style.module.css";
import Form from "../../components/Form/Form";
import { getUpdateUser } from "../../services/actions/user";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/profileComponents/NavBar/NavBar";
import OrderPage from "../OrdersPage/OrderPage";
import Caption from "../../components/profileComponents/Caption/Caption";
import {
  TFields,
  TForm,
  TUser,
  useAppDispatch,
  useAppSelector,
} from "../../utils/types/types";
import { useForm } from "../../components/Form/hook/useForm";

const Profile: FC = () => {
  const { user } = useAppSelector((store) => store.user);
  const [buttonVisible, setButtonVisible] = useState(false);

  //const [form, setForm] = useState<TForm>({
  //  name: user.name,
  //  login: user.email,
  //  password: "",
  //});
  const dispatch = useAppDispatch();

  const fields: TFields[] = [
    { name: "name", placeholder: "имя", type: "text", icon: "EditIcon" },
    { name: "login", placeholder: "логин", type: "text", icon: "EditIcon" },
    {
      name: "password",
      placeholder: "пароль",
      type: "password",
      icon: undefined,
    },
  ];

  //const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //  setForm({ ...form, [evt.target.name]: evt.target.value });
  //  setButtonVisible(true);
  //};

  const { values, handleChange, setValues } = useForm({
    name: user.name,
    login: user.email,
    password: "",
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(getUpdateUser(values));
    setButtonVisible(false);
  };

  const resetForm: () => void = () => {
    return (
      setValues({
        ...user,
        name: user.name,
        login: user.email,
        password: "",
      }),
      setButtonVisible(false)
    );
  };
  const handlerClick: () => void = () => {
    setButtonVisible(true);
  };
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
                  form={values}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                  resetForm={resetForm}
                  buttonVisible={buttonVisible}
                  handlerClick={handlerClick}
                />
              }
            />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};
export default Profile;
