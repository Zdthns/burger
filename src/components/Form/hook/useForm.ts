import { ReactEventHandler, useState } from "react";
import { TForm } from "../../../utils/types/types";

export function useForm(inputValues: TForm) {
  const [values, setValues] = useState(inputValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}


//  const {values, handleChange, setValues} = useForm({});