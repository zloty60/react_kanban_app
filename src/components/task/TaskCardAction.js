import React, { useState, useContext } from "react";
import { TaskViewContext } from "./../../contexts/TaskViewContext";
import { Button, Menu, MenuItem, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function({ openEditForm, openAlert, type, id, changeTypeTask }) {
  const taskViewContext = useContext(TaskViewContext);
  const {
    openNotificationBarState,
    handleNotificationBarMessage,
    boardName
  } = taskViewContext;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTypeTask = (boardName, id, type) => {
    changeTypeTask(boardName, id, type);
    handleClose();
    handleNotificationBarMessage("przeniesiono zadanie");
    openNotificationBarState();
  };

  const options = {
    inProgress: [
      { type: "todo", text: "do zrobienia" },
      { type: "done", text: "zrobione" }
    ],
    todo: [
      { type: "inProgress", text: "w trakcie" },
      { type: "done", text: "zrobione" }
    ],
    done: [
      { type: "inProgress", text: "w trakcie" },
      { type: "todo", text: "do zrobienia" }
    ]
  };

  return (
    <div className={classes.buttonGroups}>
      <Button
        onClick={openAlert}
        className={classes.deleteButton + " " + classes.button}
        variant="contained"
        size="small"
        color="inherit"
        startIcon={<DeleteIcon />}
      >
        usun
      </Button>
      <Button
        onClick={openEditForm}
        variant="contained"
        color="primary"
        size="small"
        className={classes.editButton + " " + classes.button}
        startIcon={<EditIcon />}
      >
        Edytuj
      </Button>
      <Button
        onClick={handleClick}
        variant="contained"
        color="secondary"
        size="small"
        className={classes.statusButton + " " + classes.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        endIcon={<ArrowDropDownIcon />}
      >
        status
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() =>
            handleChangeTypeTask(boardName, id, options[type][0].type)
          }
        >
          {options[type][0].text}
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleChangeTypeTask(boardName, id, options[type][1].type)
          }
        >
          {options[type][1].text}
        </MenuItem>
      </Menu>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
    color: "#ffffff"
  },
  buttonGroups: {
    marginTop: "16px"
  },
  deleteButton: {
    backgroundColor: "#C2185B",
    "&:hover": {
      backgroundColor: "#C2185B"
    }
  },
  editButton: {
    backgroundColor: "#303F9F"
  },
  statusButton: {
    backgroundColor: "#00796B",
    "&:hover": {
      backgroundColor: "#00796B"
    }
  }
}));
