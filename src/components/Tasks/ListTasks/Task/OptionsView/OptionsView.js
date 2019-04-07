import React from "react";
import AppContext from "./../../../../../context";
import styles from "./OptionsView.module.scss";

const OptionsView = ({ id, type }) => {
  return (
    <AppContext.Consumer>
      {context => (
        <>
          <div className={styles.options}>
            <ul>
              <li>
                <button onClick={() => context.deleteTaskFn(id)}>usun</button>
              </li>
              <li>
                <button onClick={() => context.changeToEditTaskFn(id)}>
                  edytuj
                </button>
              </li>
              {type === "todo" ? (
                <>
                  <li>
                    <button
                      onClick={() => context.changeTypeTaskFn(id, "doing")}
                    >
                      w trakcie
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => context.changeTypeTaskFn(id, "done")}
                    >
                      zrobiono
                    </button>
                  </li>
                </>
              ) : null}
              {type === "doing" ? (
                <>
                  <li>
                    <button
                      onClick={() => context.changeTypeTaskFn(id, "todo")}
                    >
                      do zrobienia
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => context.changeTypeTaskFn(id, "done")}
                    >
                      zrobiono
                    </button>
                  </li>
                </>
              ) : null}
              {type === "done" ? (
                <>
                  <li>
                    <button
                      onClick={() => context.changeTypeTaskFn(id, "doing")}
                    >
                      w trakcie
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => context.changeTypeTaskFn(id, "todo")}
                    >
                      do zrobienia
                    </button>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
          <div
            className={styles.layer}
            onClick={() => context.toggleIsOptionsViewFn(id)}
          />
        </>
      )}
    </AppContext.Consumer>
  );
};

export default OptionsView;
