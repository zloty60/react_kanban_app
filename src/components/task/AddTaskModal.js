import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Button,
  Grid,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  TextField,
  DialogContent,
  DialogContentText,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
  makeStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { createTask } from "../../redux/actions/actions";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import useSetUniqueId from "../../hooks/useSetUniqueId";

function AddTaskModal({
  openState,
  close,
  createTask,
  boardName,
  currentTasks,
  openNotificationBarState,
  handleNotificationBarMessage,
  tabIndex
}) {
  const breakPoint = useMediaQuery("(min-width:1280px)");
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [radioValue, setRadioValue] = useState("inProgress");

  const setCurrentPanel = () => {
    if (tabIndex === 0) {
      setRadioValue("inProgress");
    }
    if (tabIndex === 1) {
      setRadioValue("todo");
    }
    if (tabIndex === 2) {
      setRadioValue("done");
    }
  };

  useEffect(() => {
    setCurrentPanel();
  }, [tabIndex]);

  const handleChange = event => {
    setRadioValue(event.target.value);
  };
  const handleAddTask = () => {
    createTask(
      boardName,
      useSetUniqueId(currentTasks),
      title,
      radioValue,
      description
    );
    close();
    setTitle("");
    setDescription("");
    handleNotificationBarMessage("dodano zadanie");
    openNotificationBarState();
  };

  return (
    <Dialog
      fullScreen
      fullWidth
      open={openState}
      onClose={close}
      TransitionComponent={Transition}
      className={classes.dialog}
      style={{ left: "auto" }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Typography>Dodaj zadanie</Typography>
            <IconButton color="inherit" onClick={close} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText>Tytuł zadania</DialogContentText>
        <TextField
          autoComplete="off"
          autoFocus
          margin="dense"
          id="name"
          fullWidth
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <DialogContentText className={classes.description}>
          Opis zadania
        </DialogContentText>
        <TextareaAutosize
          className={classes.textArea}
          rows={breakPoint ? 8 : 5}
          rowsMax={breakPoint ? 8 : 6}
          aria-label="maximum height"
          value={description}
          onChange={e => setDescription(e.target.value)}
          autoComplete="off"
        />
        <FormControl className={classes.formControl}>
          <FormLabel component="legend">Status zadania</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.raddioGroup}
            value={radioValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="inProgress"
              control={<Radio color="primary" />}
              label="w trakcie"
            />
            <FormControlLabel
              value="todo"
              control={<Radio color="primary" />}
              label="do zrobienia"
            />
            <FormControlLabel
              value="done"
              control={<Radio color="primary" />}
              label="zrobione"
            />
          </RadioGroup>
        </FormControl>
        <div className={classes.btnGtoup}>
          <Button
            disabled={title.length && description.length > 0 ? false : true}
            onClick={handleAddTask}
            color="primary"
          >
            Dodaj
          </Button>
          <Button onClick={close} color="secondary">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default connect(null, { createTask })(AddTaskModal);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  dialog: {
    maxWidth: "600px",
    width: "100%"
  },
  appBar: {
    position: "relative"
  },
  dialogContent: {
    marginTop: "50px"
  },
  description: {
    marginTop: "50px"
  },
  textArea: {
    border: "2px solid #a9a9a9",
    padding: "10px",
    marginBottom: "30px",
    width: "100%"
  },
  formControl: {
    marginTop: "25px",
    width: "100%"
  },
  raddioGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btnGtoup: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px"
  }
}));
