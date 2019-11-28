import React, { useState } from "react";
import { connect } from "react-redux";
import EditTaskCard from "./EditTaskCard";
import TaskCard from "./TaskCard";
import DeleteAlert from "./../alerts/DeleteAlert";
import {
  deleteTask,
  editTask,
  changeTypeTask
} from "./../../redux/actions/actions";

function TaskCardContainer({
  deleteTask,
  editTask,
  changeTypeTask,
  title,
  description,
  id,
  type
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  const openEditForm = () => setIsEdit(true);
  const closeEditForm = () => setIsEdit(false);
  const closeAlert = () => setAlert(false);
  const openAlert = () => setAlert(true);

  return (
    <>
      {isEdit ? (
        <EditTaskCard
          title={title}
          description={description}
          closeEditForm={closeEditForm}
          id={id}
          editTask={editTask}
        />
      ) : (
        <>
          <TaskCard
            title={title}
            description={description}
            openEditForm={openEditForm}
            openAlert={openAlert}
            type={type}
            id={id}
            changeTypeTask={changeTypeTask}
          />
          <DeleteAlert
            alertState={alert}
            openAlert={openAlert}
            closeAlert={closeAlert}
            deleteTask={deleteTask}
            id={id}
            dialogTitle="Czy na pewno chcesz usunać zadanie"
            dialogContetText={title}
          />
        </>
      )}
    </>
  );
}

export default connect(null, {
  deleteTask,
  editTask,
  changeTypeTask
})(TaskCardContainer);
