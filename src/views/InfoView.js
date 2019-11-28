import React, { useContext, useEffect } from "react";
import { AppContext } from "./../contexts/AppContext";
import {
  Paper,
  Typography,
  makeStyles,
  List,
  ListItem,
  Box
} from "@material-ui/core";

export default function InfoView() {
  const appContext = useContext(AppContext);
  const { setNavbarTitle } = appContext;
  const classes = useStyles();
  useEffect(() => setNavbarTitle("Informacje"));

  return (
    <Box className={classes.box}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Działanie aplikacji
        </Typography>
        <List>
          <ListItem className={classes.ListItem}>
            Aplikacja służy do tworzenia tablic typu Kanban
          </ListItem>
          <ListItem className={classes.ListItem}>
            Strona główna to widok wszystkich dostępnych tablic, klikając na
            daną tablice , przechodzimy do szczegółowego widoku tablicy gdzie
            widoczne są zadania
          </ListItem>
          <ListItem className={classes.ListItem}>
            Zadania mogę mieć jeden z trzech statusów ( w trakcie , do zrobienia
            , zrobione)
          </ListItem>
          <ListItem className={classes.ListItem}>
            Do zmiany statusu zadania służy button status
          </ListItem>
          <ListItem className={classes.ListItem}>
            Klikając w lupe pokazuje się widok wyszukiwarki tablic
          </ListItem>
        </List>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Użyte technologie :
        </Typography>
        <List>
          <ListItem className={classes.ListItem}>React</ListItem>
          <ListItem className={classes.ListItem}>Redux</ListItem>
          <ListItem className={classes.ListItem}>Material-UI</ListItem>
          <ListItem className={classes.ListItem}>React Router</ListItem>
        </List>
      </Paper>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "16px 10px",
    backgroundColor: "#212121",
    color: "#ffffff",
    marginBottom: "35px"
  },
  ListItem: {
    paddingLeft: "0px",
    paddingRight: "0px",
    color: "#dedede"
  },
  box: {
    maxWidth: "650px",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: "70px"
    }
  }
}));
