import React, { useState, useContext } from "react";
import { BoardCardContext } from "./../../contexts/BoardCardContext";
import {
  Card,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteAlert from "./../../components/alerts/DeleteAlert";
import { Link } from "react-router-dom";

export default function BoardCard({ setAnchorEl, anchorEl, handleIsEdit }) {
  const classes = useStyles();
  const [alert, setAlert] = useState(false);
  const openMenu = Boolean(anchorEl);

  const closeMenu = event => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };
  const handleClick = event => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const openDeleteAlert = (name, event) => {
    closeMenu(event);
    setAlert(true);
  };
  const closeAlert = event => {
    event.stopPropagation();
    event.preventDefault();
    setAlert(false);
  };
  const handleDeleteBoard = (name, event) => {
    deleteBoard(name);
    event.stopPropagation();
    event.preventDefault();
  };
  const boardCardContext = useContext(BoardCardContext);
  const {
    name,
    openNotificationBarState,
    handleNotificationBarMessage,
    deleteBoard
  } = boardCardContext;
  return (
    <Link to={`/tablice/${name}`}>
      <Card className={classes.card}>
        <CardHeader
          title={name}
          action={
            <IconButton onClick={e => handleClick(e)} aria-label="settings">
              <MoreVertIcon className={classes.icon} />
            </IconButton>
          }
        />
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={openMenu}
          onClose={e => closeMenu(e)}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: 200
            }
          }}
        >
          <MenuItem
            key={"Usuń"}
            selected={"Usuń" === "Pyxis"}
            onClick={e => openDeleteAlert(name, e)}
          >
            Usuń
          </MenuItem>
          <MenuItem
            key={"Edytuj"}
            selected={"Edytuj" === "Pyxis"}
            onClick={e => handleIsEdit(e)}
          >
            Edytuj
          </MenuItem>
        </Menu>
        <DeleteAlert
          type={"board"}
          alertState={alert}
          closeAlert={closeAlert}
          boardName={name}
          deleteItem={handleDeleteBoard}
          dialogTitle="Czy na pewno chcesz usunać tablice"
          dialogContetText={name}
          openNotificationBarState={openNotificationBarState}
          handleNotificationBarMessage={handleNotificationBarMessage}
        />
      </Card>
    </Link>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: "#212121",
    color: "#ffffff",
    "&:hover": {
      boxShadow:
        "0px 4px 6px -1px rgba(0,0,0,0.9), 0px 6px 7px 0px rgba(0,0,0,0.75), 0px 3px 12px 0px rgba(0,0,0,0.65);"
    }
  },
  icon: {
    color: "#ffffff"
  },
  card_mb: {
    marginBottom: theme.spacing(4)
  }
}));
