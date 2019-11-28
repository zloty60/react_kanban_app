import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { BoardCardContext } from "./../../contexts/BoardCardContext";
import { Card, TextField, Fab, makeStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import useIsCorrectBoardName from "./../../hooks/useIsCorrectBoardName";

function BoardCardEdit({ setIsEdit, boards }) {
  const classes = useStyles();
  const boardCardContext = useContext(BoardCardContext);
  const { name, changeBoardName } = boardCardContext;

  const [cardName, setCardName] = useState(name);
  const handleInput = e => {
    setCardName(e.target.value);
  };

  const handleSubmit = e => {
    if (name === cardName) {
      changeBoardName(name, cardName);
      setIsEdit(false);
    }
    if (useIsCorrectBoardName(boards, cardName) && cardName.length > 0) {
      changeBoardName(name, cardName);
      setIsEdit(false);
    }
    e.preventDefault();
  };

  const handleHellperText = () => {
    if (name === cardName) {
      return true;
    } else {
      if (useIsCorrectBoardName(boards, cardName) && cardName.length > 0) {
        return true;
      }
    }
    return false;
  };

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={e => handleSubmit(e)}>
        <TextField
          placeholder="wpisz cos"
          helperText={handleHellperText() ? null : "nieprawidłowa nazwa"}
          error={handleHellperText() ? false : true}
          fullWidth
          autoFocus={true}
          value={cardName}
          onChange={e => handleInput(e)}
        />
        <Fab
          size="small"
          aria-label="potwierdz"
          className={classes.fab}
          disabled={handleHellperText() ? false : true}
          onClick={e => handleSubmit(e)}
        >
          <CheckIcon />
        </Fab>
      </form>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    boards: state.AppReducer.boards
  };
};

export default connect(mapStateToProps)(BoardCardEdit);

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#ffffff",
    fontSize: "24px"
  },
  card_mb: {
    marginBottom: theme.spacing(4)
  },
  form: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    color: "#ffffff"
  },
  fab: {
    marginLeft: "12px",
    backgroundColor: "#00897b",
    width: "36px",
    height: "36px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#00897b"
    }
  }
}));
