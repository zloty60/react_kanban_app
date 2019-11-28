import React, { useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Grid,
  useScrollTrigger,
  Slide,
  makeStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

function Navbar(props) {
  const classes = useStyles();
  const appContext = useContext(AppContext);
  const { navbarTitle } = appContext;
  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed">
        <Container>
          <Toolbar className={classes.Toolbar}>
            <Grid container alignItems="center" justify="space-between">
              <IconButton color="inherit" component={AdapterLink} to="/">
                <HomeIcon />
              </IconButton>
              <Typography className={classes.navbarTitle}>
                {navbarTitle}
              </Typography>
              <div>
                <IconButton
                  color="inherit"
                  aria-label="link do strony informacyjnej"
                  component={AdapterLink}
                  to="/informacje"
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  onClick={() => props.setIsOpenSearch(true)}
                  color="inherit"
                  aria-label="szukaj na stronie"
                >
                  <SearchIcon />
                </IconButton>
              </div>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default connect(null)(Navbar);

function HideOnScroll(props) {
  const trigger = useScrollTrigger({ threshold: 57 });
  return <Slide in={!trigger}>{props.children}</Slide>;
}

const useStyles = makeStyles(theme => ({
  Toolbar: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  navbarTitle: {
    whiteSpace: "nowrap",
    maxWidth: "130px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "400px"
    }
  }
}));
