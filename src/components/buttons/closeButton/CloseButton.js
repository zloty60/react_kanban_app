import React from "react";
import styles from "./CloseButton.module.scss";
import closeIcon from "./../../../assets/icon/close.svg";
import PropTypes from "prop-types";

const CloseButton = ({ closeFn }) => {
  return (
    <button onClick={closeFn} className={styles.btnClose}>
      <img src={closeIcon} alt="ikona zamykania" />
    </button>
  );
};

CloseButton.propTypes = {
  tasks: PropTypes.func
};

export default CloseButton;
