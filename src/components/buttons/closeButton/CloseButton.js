import React from "react";
import styles from "./CloseButton.module.scss";
import closeIcon from "./../../../assets/icon/close.svg";

const CloseButton = ({ closeFn }) => {
  return (
    <button onClick={closeFn} className={styles.btnClose}>
      <img src={closeIcon} alt="ikona zamykania" />
    </button>
  );
};

export default CloseButton;
