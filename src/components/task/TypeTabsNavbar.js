import React, { useContext } from "react";
import { TaskViewContext } from "../../contexts/TaskViewContext";
import { AppBar, Tabs, Tab, makeStyles } from "@material-ui/core";

export default function TypeTabsNavbar() {
  const taskViewContext = useContext(TaskViewContext);
  const classes = useStyles();
  const { tabIndex, handleChangeIndex } = taskViewContext;

  return (
    <AppBar className={classes.appBar}>
      <Tabs
        value={tabIndex}
        onChange={handleChangeIndex}
        variant="fullWidth"
        aria-label="menu do przełączania stanu zadan"
      >
        <Tab label="w trakcie" {...a11yProps(0)} />
        <Tab label="Do zrobienia" {...a11yProps(1)} />
        <Tab label="Zrobione" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    bottom: "0",
    top: "auto"
  }
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}
