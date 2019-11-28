import React from "react";
import {
  SnackbarContent,
  Snackbar,
  IconButton,
  useMediaQuery,
  makeStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function NotificationBar({
  state,
  closeFn,
  notificationBarMessage
}) {
  const classes = useStyles();
  const breakPoint = useMediaQuery("(min-width:600px)");
  return (
    <Snackbar
      open={state}
      autoHideDuration={1500}
      anchorOrigin={
        breakPoint
          ? { vertical: "bottom", horizontal: "left" }
          : { vertical: "top", horizontal: "center" }
      }
      onClose={closeFn}
    >
      <SnackbarContent
        className={classes.snackbarContent}
        message={notificationBarMessage}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={closeFn}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
}

const useStyles = makeStyles(theme => ({
  snackbarContent: {
    backgroundColor: "#347537",
    textTransform: "uppercase"
  }
}));
