import React from "react";
import styles from "./OnlyViewTask.module.scss";

const OnlyViewTask = ({ title, type }) => {
  return (
    <div className="col-12 col-m-6">
      <div className={styles.task}>
        <p className={styles.title}>{title}</p>
        <p>status: {type}</p>
      </div>
    </div>
  );
};

export default OnlyViewTask;
