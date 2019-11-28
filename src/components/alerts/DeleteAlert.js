import React, { useContext } from "react";
import { TaskViewContext } from "./../../contexts/TaskViewContext";
import { BoardCardContext } from "./../../contexts/BoardCardContext";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

export default function DeleteAlert({
  alertState,
  closeAlert,
  deleteTask,
  id,
  dialogContetText,
  dialogTitle,
  deleteItem,
  type
}) {
  const taskViewContext = useContext(TaskViewContext);
  const boardCardContext = useContext(BoardCardContext);
  const handleDeleteItem = e => {
    if (type === "board") {
      const {
        openNotificationBarStateBoard,
        handleNotificationBarMessageBoard,
        name
      } = boardCardContext;
      deleteItem(name, e);
      handleNotificationBarMessageBoard("Usunięto tablice");
      openNotificationBarStateBoard();
    } else {
      const {
        openNotificationBarState,
        handleNotificationBarMessage,
        boardName
      } = taskViewContext;
      deleteTask(boardName, id);
      handleNotificationBarMessage("Usunięto zadanie");
      openNotificationBarState();
    }
  };
  return (
    <Dialog
      open={alertState}
      onClose={closeAlert}
      aria-labelledby={dialogContetText}
    >
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogContetText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={e => closeAlert(e)} color="primary">
          anuluj
        </Button>
        <Button onClick={e => handleDeleteItem(e)} color="secondary">
          usuń
        </Button>
      </DialogActions>
    </Dialog>
  );
}
