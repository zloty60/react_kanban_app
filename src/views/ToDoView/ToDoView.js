import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ListTasks from "./../../components/Tasks/ListTasks/ListTasks";
import useFilterTypeTask from "./../../hooks/useFilterTypeTask";
import PropTypes from "prop-types";

function ToDoView({ tasks }) {
  return <ListTasks tasks={useFilterTypeTask(tasks, "todo")} />;
}

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer.tasks
  };
};

ToDoView.propTypes = {
  tasks: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(ToDoView));
