import React from "react";
import { connect } from "react-redux";
import styles from "./Task.module.scss";
import OptionsView from "./OptionsView/OptionsView";
import EditTask from "./../EditTask/EditTask";
import { toggleIsOptionsView } from "./../../../../redux/actions/actions";
import PropTypes from "prop-types";

const Task = ({
  title,
  id,
  type,
  isOptionsView,
  isEdit,
  description,
  toggleIsOptionsView
}) => {
  return (
    <li className={["col-12", "col-m-6", "col-xl-4", styles.mb].join(" ")}>
      <div className={styles.box}>
        <>
          {isEdit ? (
            <EditTask id={id} title={title} description={description} />
          ) : (
            <div>
              <h2 className={styles.title}>{title}</h2>
              <p>{description}</p>
            </div>
          )}
          {isOptionsView && (
            <OptionsView id={id} type={type} isOptionsView={isOptionsView} />
          )}
          <div className={styles.dots}>
            <button onClick={() => toggleIsOptionsView(id)}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </button>
          </div>
        </>
      </div>
    </li>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string,
  isOptionsView: PropTypes.bool,
  isEdit: PropTypes.bool,
  description: PropTypes.string,
  toggleIsOptionsView: PropTypes.func
};

export default connect(
  null,
  { toggleIsOptionsView }
)(Task);
