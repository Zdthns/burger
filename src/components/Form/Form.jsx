import React, { useState } from "react";

import style from "./style.module.css";
import PropTypes from "prop-types";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Form({
  fields,
  buttonText,
  form,
  onChange,
  onSubmit,
  resetForm,
  buttonVisible,
}) {
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
          icon={elem.icon}
        />
      ))}
      <div className={style.buttons}>
        {" "}
        <Button htmlType="submit" type="primary" size="medium">
          {buttonText}
        </Button>
        {buttonVisible && (
          <Button
            htmlType="reset"
            type="primary"
            size="medium"
            onClick={resetForm}
          >
            Отмена
          </Button>
        )}
      </div>
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  buttonText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Form;
