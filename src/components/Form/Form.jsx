import React, { useCallback } from "react";

import style from "./style.module.css";
import PropTypes from "prop-types";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Form({ fields, buttonText, form, onChange, onSubmit }) {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      {fields.map((elem) => (
        <Input
          key={`${elem.name}`}
          type={elem.type}
          name={elem.name}
          value={form[elem.name]}
          placeholder={elem.placeholder}
          onChange={onChange}
        />
      ))}
      <Button type="primary" size="medium">
        {buttonText}
      </Button>
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  buttonText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  //resetForm: PropTypes.func.isRequired,
};
export default Form;
