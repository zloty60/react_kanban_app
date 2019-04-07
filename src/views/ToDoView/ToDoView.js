import React from "react";
import AppContext from "../../context";
import ListTasks from "./../../components/Tasks/ListTasks/ListTasks";

const ToDoView = () => (
  <AppContext.Consumer>
    {context => <ListTasks tasks={context.filterTypeTaskFn("todo")} />}
  </AppContext.Consumer>
);

export default ToDoView;
