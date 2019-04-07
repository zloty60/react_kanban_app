import React from "react";
import styles from "./Main.module.scss";

const Main = ({ children }) => {
  return (
    <main className={styles.wrapper}>
      <div className="container">{children}</div>
    </main>
  );
};

export default Main;
