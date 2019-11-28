import React, { createContext } from "react";

export const TaskViewContext = createContext();

export default function TaskViewContextProvider(props) {
  return (
    <TaskViewContext.Provider value={props.value}>
      {props.children}
    </TaskViewContext.Provider>
  );
}
