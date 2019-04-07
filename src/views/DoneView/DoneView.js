import React from "react";
import AppContext from "../../context";
import ListTasks from "./../../components/Tasks/ListTasks/ListTasks";

const DoneView = () => (
  <AppContext.Consumer>
    {context => <ListTasks tasks={context.filterTypeTaskFn("done")} />}
  </AppContext.Consumer>
);

export default DoneView;
