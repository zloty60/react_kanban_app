import React from "react";
import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";

export default function TaskCardEmpty() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <CardHeader title="brak zadań" />
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
  }
}));
