import style from "./modalOverlay.module.css";
import PropTypes from "prop-types";
import { FC } from "react";

type PropTypes = {
  onClick: () => void;
};
const ModalOverlay: FC<PropTypes> = ({ onClick }) => {
  return <div className={style.container} onClick={onClick}></div>;
};

export default ModalOverlay;
