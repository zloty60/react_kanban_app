import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ListTasks from "./../../components/Tasks/ListTasks/ListTasks";
import useFilterTypeTask from "./../../hooks/useFilterTypeTask";
import PropTypes from "prop-types";

function DoingView({ tasks }) {
  return <ListTasks tasks={useFilterTypeTask(tasks, "doing")} />;
}

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer.tasks
  };
};

DoingView.propTypes = {
  tasks: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(DoingView));
