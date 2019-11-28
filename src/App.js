import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ErrorView from "./views/ErrorView";
import Main from "./components/layout/Main";
import AppContextProvider from "./contexts/AppContext";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import BoardsView from "./views/BoardsView";
import TaskViewContainer from "./views/TaskViewContainer";
import InfoView from "./views/InfoView";

function App({ boards }) {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [navbarTitle, setNavbarTitle] = useState("");

  return (
    <HashRouter>
      <AppContextProvider value={{ navbarTitle, setNavbarTitle }}>
        <Navbar setIsOpenSearch={setIsOpenSearch} />
        <Main>
          <Switch>
            <Route exact path="/" component={BoardsView} />
            <Route exact path="/tablice/:name" component={TaskViewContainer} />
            <Route exact path="/informacje" component={InfoView} />
            <Route component={ErrorView} />
          </Switch>
        </Main>
        <Search
          setIsOpenSearch={setIsOpenSearch}
          isOpenSearch={isOpenSearch}
          boards={boards}
        />
      </AppContextProvider>
    </HashRouter>
  );
}

const mapStateToProps = state => {
  return {
    boards: state.AppReducer.boards
  };
};

export default connect(mapStateToProps)(App);
