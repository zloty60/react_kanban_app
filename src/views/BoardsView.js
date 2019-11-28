import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import BoardCardContainer from "./../components/board/BoardCardContainer";
import NotificationBar from "../components/feedback/NotificationBar";
import { Grid, Fab, Card, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import AddBoardModal from "../components/board/AddBoardModal";
import BoardCardContextProvider from "../contexts/BoardCardContext";
import { deleteBoard, changeBoardName } from "../redux/actions/actions";
import useCalculateSpacing from "../hooks/useCalculateSpacing";

function BoardsView({ boards, deleteBoard, changeBoardName }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [notificationBarState, setNotificationBarState] = useState(false);
  const [notificationBarMessage, setNotificationBarMessage] = useState("");
  const appContext = useContext(AppContext);
  const { setNavbarTitle } = appContext;
  const classes = useStyles();

  useEffect(() => setNavbarTitle("Wszystkie tablice"), []);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const openNotificationBarStateBoard = () => {
    setNotificationBarState(true);
  };

  const closeNotificationBarState = () => {
    setNotificationBarState(false);
  };

  const handleNotificationBarMessageBoard = message =>
    setNotificationBarMessage(message);

  return (
    <>
      <Grid container spacing={useCalculateSpacing()}>
        {boards.length ? (
          boards.map(board => {
            return (
              <BoardCardContextProvider
                key={board.name}
                value={{
                  ...board,
                  openNotificationBarStateBoard,
                  handleNotificationBarMessageBoard,
                  deleteBoard,
                  changeBoardName
                }}
              >
                <Grid item xs={12} md={6} lg={4} className={classes.card_mb}>
                  <BoardCardContainer />
                </Grid>
              </BoardCardContextProvider>
            );
          })
        ) : (
          <Card className={classes.emptyBoard}>
            <CardHeader title="Brak tablic" />
          </Card>
        )}
      </Grid>
      <Fab
        onClick={handleOpenModal}
        color="primary"
        aria-label="otwórz okno do dodawania tablic"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <AddBoardModal open={isOpenModal} handleClose={handleCloseModal} />
      <NotificationBar
        notificationBarMessage={notificationBarMessage}
        state={notificationBarState}
        closeFn={closeNotificationBarState}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    boards: state.AppReducer.boards
  };
};

export default withRouter(
  connect(mapStateToProps, { deleteBoard, changeBoardName })(BoardsView)
);

const useStyles = makeStyles(theme => ({
  card_mb: {
    marginBottom: theme.spacing(4),
    "&:last-child": {
      marginBottom: "50px"
    }
  },
  fab: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)"
  },
  emptyBoard: {
    width: "100%",
    backgroundColor: "#212121",
    color: "#ffffff"
  }
}));
