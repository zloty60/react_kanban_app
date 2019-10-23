import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ToDoView from "./views/ToDoView/ToDoView";
import DoingView from "./views/DoingView/DoingView";
import DoneView from "./views/DoneView/DoneView";
import ErrorView from "./views/ErrorView/ErrorView";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import { openAddModal, openSearchdModal } from "./redux/actions/actions";
import AddTask from "./components/AddTask/AddTask";
import Search from "./components/Search/Search";

function App({
  isAddModalOpen,
  openAddModal,
  openSearchdModal,
  isSearcModalhOpen
}) {
  return (
    <HashRouter>
      <>
        <Menu
          openAddModalFn={openAddModal}
          openSearchdModalFn={openSearchdModal}
        />
        <Main>
          <Switch>
            <Route exact path="/" component={ToDoView} />
            <Route path="/doing" component={DoingView} />
            <Route path="/done" component={DoneView} />
            <Route component={ErrorView} />
          </Switch>
        </Main>
        {isAddModalOpen && <AddTask />}
        {isSearcModalhOpen && <Search />}
      </>
    </HashRouter>
  );
}

const mapStateToProps = state => {
  return {
    isAddModalOpen: state.layout.isAddModalOpen,
    isSearcModalhOpen: state.layout.isSearcModalhOpen
  };
};

export default connect(
  mapStateToProps,
  { openAddModal, openSearchdModal }
)(App);
