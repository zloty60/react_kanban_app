import React, { useContext } from "react";
import { connect } from "react-redux";
import { TaskViewContext } from "../../contexts/TaskViewContext";
import TaskCardContainer from "./TaskCardContainer";
import { Typography, Box, Grid, makeStyles } from "@material-ui/core";
import TaskCardEmpty from "./TaskCardEmpty";
import { useTheme } from "@material-ui/core/styles";
import useCalculateSpacing from "../../hooks/useCalculateSpacing";

function TypePanel() {
  const theme = useTheme();
  const taskViewContext = useContext(TaskViewContext);
  const { tabIndex, inProgressTasks, toDoTasks, doneTasks } = taskViewContext;
  const classes = useStyles();

  return (
    <>
      <TabPanel value={tabIndex} index={0} dir={theme.direction}>
        <Grid container spacing={useCalculateSpacing()} className={classes.mb}>
          {inProgressTasks.length > 0 ? (
            inProgressTasks.map(task => (
              <Grid item xs={12} md={6} lg={4} key={task.id}>
                <TaskCardContainer {...task} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <TaskCardEmpty />
            </Grid>
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={tabIndex} index={1} dir={theme.direction}>
        <Grid container spacing={useCalculateSpacing()} className={classes.mb}>
          {toDoTasks.length > 0 ? (
            toDoTasks.map(task => (
              <Grid item xs={12} md={6} lg={4} key={task.id}>
                <TaskCardContainer {...task} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <TaskCardEmpty />
            </Grid>
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={tabIndex} index={2} dir={theme.direction}>
        <Grid container spacing={useCalculateSpacing()} className={classes.mb}>
          {doneTasks.length > 0 ? (
            doneTasks.map(task => (
              <Grid item xs={12} md={6} lg={4} key={task.id}>
                <TaskCardContainer {...task} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <TaskCardEmpty />
            </Grid>
          )}
        </Grid>
      </TabPanel>
    </>
  );
}

const mapStateToProps = state => {
  return {
    boards: state.AppReducer.boards
  };
};

export default connect(mapStateToProps)(TypePanel);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

const useStyles = makeStyles({
  mb: {
    marginBottom: "55px"
  }
});
