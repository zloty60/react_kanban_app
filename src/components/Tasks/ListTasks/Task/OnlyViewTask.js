import React from "react";
import styles from "./OnlyViewTask.module.scss";
import PropTypes from "prop-types";

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

OnlyViewTask.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default OnlyViewTask;
