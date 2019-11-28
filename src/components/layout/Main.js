import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const Main = ({ children }) => {
  const classses = useStyles();
  return (
    <main className={classses.main}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;

const useStyles = makeStyles({
  main: {
    paddingTop: "90px",
    paddingBottom: "20px"
  }
});
