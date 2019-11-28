import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";
import TaskCardAction from "./TaskCardAction";

export default function TaskCard({
  title,
  description,
  openEditForm,
  openAlert,
  type,
  id,
  changeTypeTask
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <TaskCardAction
          openEditForm={openEditForm}
          openAlert={openAlert}
          type={type}
          id={id}
          changeTypeTask={changeTypeTask}
        />
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#212121",
    color: "#ffffff",
    marginBottom: "32px"
  },
  cardContent: {
    paddingTop: "0",
    color: "#dedede"
  }
}));
