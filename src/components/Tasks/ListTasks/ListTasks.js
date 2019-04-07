import React from "react";
import Task from "./Task/Task";
import PropTypes from "prop-types";

const ListTasks = ({ tasks }) => {
  return (
    <>
      {tasks.length ? (
        <ul className="row">
          {tasks.map(task => {
            return <Task key={task.id} {...task} />;
          })}
        </ul>
      ) : (
        <p>Tabilca jest pusta dodaj cos</p>
      )}
    </>
  );
};

ListTasks.propTypes = {
  tasks: PropTypes.array
};

export default ListTasks;
