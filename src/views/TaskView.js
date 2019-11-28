import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { AppContext } from "../contexts/AppContext";
import TaskViewContextProvider from "../contexts/TaskViewContext";
import TypeTabsNavbar from "../components/task/TypeTabsNavbar";
import TypePanel from "../components/task/TypePanel";
import AddTaskModal from "../components/task/AddTaskModal";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotificationBar from "./../components/feedback/NotificationBar";

function TaskView({ boardName, boards }) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationBarState, setNotificationBarState] = useState(false);
  const [notificationBarMessage, setNotificationBarMessage] = useState("");
  const appContext = useContext(AppContext);
  const { setNavbarTitle } = appContext;
  useEffect(() => setNavbarTitle(boardName));
  const handleClickOpen = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleChangeIndex = (event, newValue) => {
    setTabIndex(newValue);
  };

  const openNotificationBarState = () => setNotificationBarState(true);
  const closeNotificationBarState = () => setNotificationBarState(false);
  const handleNotificationBarMessage = message =>
    setNotificationBarMessage(message);

  const currentBoard = boards.filter(board => board.name === boardName);

  const filterTypeTask = type => {
    if (currentBoard.length > 0) {
      return currentBoard[0].tasks.filter(task => task.type === type);
    } else {
      return [];
    }
  };

  return (
    <TaskViewContextProvider
      value={{
        tabIndex,
        handleChangeIndex,
        boardName,
        inProgressTasks: filterTypeTask("inProgress"),
        toDoTasks: filterTypeTask("todo"),
        doneTasks: filterTypeTask("done"),
        openNotificationBarState,
        handleNotificationBarMessage
      }}
    >
      <TypeTabsNavbar />
      <TypePanel />
      <Fab
        onClick={handleClickOpen}
        color="primary"
        aria-label="add"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <AddTaskModal
        close={handleClose}
        openState={isModalOpen}
        boardName={boardName}
        openNotificationBarState={openNotificationBarState}
        handleNotificationBarMessage={handleNotificationBarMessage}
        currentTasks={currentBoard.length > 0 ? currentBoard[0].tasks : []}
        tabIndex={tabIndex}
      />
      <NotificationBar
        notificationBarMessage={notificationBarMessage}
        state={notificationBarState}
        closeFn={closeNotificationBarState}
      />
    </TaskViewContextProvider>
  );
}

const mapStateToProps = state => {
  return {
    boards: state.AppReducer.boards
  };
};

export default connect(mapStateToProps)(TaskView);

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: "85px",
    left: "50%",
    transform: "translateX(-50%)"
  }
}));
