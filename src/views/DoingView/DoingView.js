import React from "react";
import AppContext from "../../context";
import ListTasks from "./../../components/Tasks/ListTasks/ListTasks";

const DoingView = () => (
  <AppContext.Consumer>
    {context => <ListTasks tasks={context.filterTypeTaskFn("doing")} />}
  </AppContext.Consumer>
);

export default DoingView;
