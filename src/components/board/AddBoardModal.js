import React, { useState } from "react";
import { connect } from "react-redux";
import { createBoard } from "../../redux/actions/actions";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  DialogTitle,
  Button
} from "@material-ui/core";
import useIsCorrectBoardName from "./../../hooks/useIsCorrectBoardName";

function AddBoardModal({ open, handleClose, createBoard, boards }) {
  const [value, setValue] = useState("");
  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleCreateBoard = boardName => {
    createBoard(boardName);
    handleClose();
    setValue("");
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="sm">
      <DialogTitle>Nowa tablica</DialogTitle>
      <DialogContent>
        <DialogContentText>Podaj nazwę nowej tablicy</DialogContentText>
        <TextField
          autoComplete="off"
          error={!useIsCorrectBoardName(boards, value)}
          value={value}
          onChange={e => handleInput(e)}
          autoFocus
          margin="dense"
          id="name"
          fullWidth
          helperText={
            useIsCorrectBoardName(boards, value)
              ? null
              : "nieprawidłowa nazwa tablicy"
          }
        />
      </DialogContent>
      <DialogActions>
        <Button
          disabled={!useIsCorrectBoardName(boards, value) || value.length === 0}
          onClick={() => handleCreateBoard(value)}
          color="primary"
        >
          Dodaj
        </Button>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => {
  return {
    boards: state.AppReducer.boards
  };
};

export default connect(mapStateToProps, { createBoard })(AddBoardModal);
