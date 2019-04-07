import React from "react";
import AppContext from "./../../../../context";
import styles from "./Task.module.scss";
import OptionsView from "./OptionsView/OptionsView";
import EditTask from "./../EditTask/EditTask";

const Task = ({ title, id, type, isOptionsView, isEdit, description }) => {
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
            <AppContext.Consumer>
              {context => (
                <button onClick={() => context.toggleIsOptionsViewFn(id)}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </button>
              )}
            </AppContext.Consumer>
          </div>
        </>
      </div>
    </li>
  );
};

export default Task;
