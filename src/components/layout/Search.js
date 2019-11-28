import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  AppBar,
  Box,
  IconButton,
  InputBase,
  Slide,
  Container,
  Grid,
  makeStyles
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import useCalculateSpacing from "../../hooks/useCalculateSpacing";

function Search({ isOpenSearch, setIsOpenSearch, boards }) {
  const [searchTxt, setSearchTxt] = useState("");
  const [foundBoards, setFoundBoards] = useState(boards);

  useEffect(() => {
    setFoundBoards(boards);
  }, [boards]);

  const searchBoard = e => {
    setSearchTxt(e.target.value);
    setFoundBoards(
      boards.filter(
        board =>
          board.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
      )
    );
  };
  const classes = useStyles();
  const handleCloseSearch = () => {
    setIsOpenSearch(false);
    setSearchTxt("");
    setFoundBoards(boards);
  };

  return (
    <Dialog
      fullScreen
      open={isOpenSearch}
      onClose={handleCloseSearch}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Container>
          <Box display="flex" alignItems="center">
            <InputBase
              autoFocus={true}
              className={classes.input}
              placeholder="wpisz nazwe tablicy"
              inputProps={{ "aria-label": "wpisz nazwe tablicy" }}
              value={searchTxt}
              onChange={e => searchBoard(e)}
            />
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseSearch}
              aria-label="zamknij formularz wyszukiwania"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
      <div className={classes.searchContent}>
        <Container>
          <Grid container spacing={useCalculateSpacing()}>
            {foundBoards.length > 0 ? (
              foundBoards.map(board => (
                <Grid key={board.name} item xs={12} md={6} lg={4}>
                  <Link
                    to={{
                      pathname: `/tablice/${board.name}`
                    }}
                    className={classes.link}
                    onClick={handleCloseSearch}
                  >
                    <div className={classes.searchCard}>{board.name}</div>
                  </Link>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <div className={classes.searchCard}>nic nie znaleziono</div>
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    </Dialog>
  );
}

export default Search;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    paddingLeft: "8px",
    borderRadius: "4px"
  },
  searchContent: {
    marginTop: "28px"
  },
  searchCard: {
    borderRadius: "4px",
    backgroundColor: "#ececec",
    padding: "16px"
  },
  link: {
    display: "block",
    marginBottom: "20px",
    transition: "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);"
    }
  }
}));
