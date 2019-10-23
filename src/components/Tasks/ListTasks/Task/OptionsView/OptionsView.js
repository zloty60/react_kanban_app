import React from "react";
import styles from "./OptionsView.module.scss";
import { connect } from "react-redux";
import {
  toggleIsOptionsView,
  deleteTask,
  editTask,
  changeTypeTask
} from "./../../../../../redux/actions/actions";
import PropTypes from "prop-types";

const OptionsView = ({
  id,
  type,
  toggleIsOptionsView,
  deleteTask,
  editTask,
  changeTypeTask
}) => {
  return (
    <>
      <div className={styles.options}>
        <ul>
          <li>
            <button onClick={() => deleteTask(id)}>usun</button>
          </li>
          <li>
            <button onClick={() => editTask(id)}>edytuj</button>
          </li>
          {type === "todo" ? (
            <>
              <li>
                <button onClick={() => changeTypeTask(id, "doing")}>
                  w trakcie
                </button>
              </li>
              <li>
                <button onClick={() => changeTypeTask(id, "done")}>
                  zrobiono
                </button>
              </li>
            </>
          ) : null}
          {type === "doing" ? (
            <>
              <li>
                <button onClick={() => changeTypeTask(id, "todo")}>
                  do zrobienia
                </button>
              </li>
              <li>
                <button onClick={() => changeTypeTask(id, "done")}>
                  zrobiono
                </button>
              </li>
            </>
          ) : null}
          {type === "done" ? (
            <>
              <li>
                <button onClick={() => changeTypeTask(id, "doing")}>
                  w trakcie
                </button>
              </li>
              <li>
                <button onClick={() => changeTypeTask(id, "todo")}>
                  do zrobienia
                </button>
              </li>
            </>
          ) : null}
        </ul>
      </div>
      <div className={styles.layer} onClick={() => toggleIsOptionsView(id)} />
    </>
  );
};

export default connect(
  null,
  { toggleIsOptionsView, deleteTask, editTask, changeTypeTask }
)(OptionsView);

OptionsView.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  toggleIsOptionsView: PropTypes.func,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  changeTypeTask: PropTypes.func
};
