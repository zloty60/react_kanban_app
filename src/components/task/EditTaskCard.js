import React, { useState, useContext } from "react";
import { Card, CardContent, TextField, Button } from "@material-ui/core";
import { TaskViewContext } from "./../../contexts/TaskViewContext";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";

export default function EditTaskCard({
  title,
  description,
  editTask,
  closeEditForm,
  id
}) {
  const taskViewContext = useContext(TaskViewContext);
  const { boardName } = taskViewContext;
  const classes = useStyles();
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const handleForm = e => {
    e.preventDefault();
  };
  const handleTitleInput = e => {
    setTitleInput(e.target.value);
  };
  const handleDescriptionInput = e => {
    setDescriptionInput(e.target.value);
  };

  const handleConfirmTaskChange = () => {
    editTask(boardName, id, titleInput, descriptionInput);
    closeEditForm();
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.form} onChange={handleForm}>
          <TextField
            fullWidth
            autoFocus={true}
            value={titleInput}
            className={classes.textField}
            onChange={e => handleTitleInput(e)}
          />
          <TextareaAutosize
            className={classes.textArea}
            rows={3}
            rowsMax={6}
            aria-label="maximum height"
            value={descriptionInput}
            onChange={e => handleDescriptionInput(e)}
          />
        </form>
        <Button
          onClick={handleConfirmTaskChange}
          className={classes.confirmButton + " " + classes.button}
          variant="contained"
          size="small"
          color="inherit"
          startIcon={<CheckIcon />}
        >
          potwierdź
        </Button>
        <Button
          onClick={closeEditForm}
          className={classes.cancelButton + " " + classes.button}
          variant="contained"
          size="small"
          color="inherit"
          startIcon={<ClearIcon />}
        >
          anuluj
        </Button>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#212121",
    color: "#ffffff",
    marginBottom: "32px",
    "&:last-child": {
      marginBottom: "95px"
    }
  },
  textArea: {
    width: "100%",
    marginTop: "20px",
    padding: "10px",
    marginBottom: "30px"
  },
  textField: {
    padding: "10px",
    backgroundColor: "#ffffff"
  },
  button: {
    marginRight: theme.spacing(1),
    color: "#ffffff"
  },
  cancelButton: {
    backgroundColor: "#C2185B",
    "&:hover": {
      backgroundColor: "#C2185B"
    }
  },
  confirmButton: {
    backgroundColor: "#00796B",
    "&:hover": {
      backgroundColor: "#00796B"
    }
  }
}));
