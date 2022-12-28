import style from "./modalOverlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ onClick }) {
  return <div className={style.container} onClick={onClick}></div>;
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ModalOverlay;
