import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Main from "../../components/Main/Main";
import Menu from "../../components/Menu/Menu";
import DoingView from "../DoingView/DoingView";
import DoneView from "../DoneView/DoneView";
import ToDoView from "../ToDoView/ToDoView";
import ErrorView from "../ErrorView/ErrorView";
import AddTask from "../../components/AddTask/AddTask";
import "../../styles/index.scss";
import Search from "./../../components/Search/Search";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        title: "Formularz",
        type: "todo",
        description: "Dodać w formularzach w aplikacji walidacje",
        isEdit: false,
        isOptionsView: false
      },
      {
        id: 1,
        title: "Data utworzenia",
        type: "todo",
        description: "Dodać do każdego zadania date utworzenia",
        isEdit: false,
        isOptionsView: false
      },
      {
        id: 2,
        title: "Filtrowanie zadań",
        type: "todo",
        description:
          "Dodać filtrowanie dla zadań alfabetycznie , najnowsze, najstarsze",
        isEdit: false,
        isOptionsView: false
      },
      {
        id: 3,
        title: "Animacje",
        type: "todo",
        description: "Dodać animacje do apki",
        isEdit: false,
        isOptionsView: false
      },
      {
        id: 4,
        title: "Refaktoryzacja kodu",
        type: "doing",
        description:
          "Podzielić aplikację na więcej komponentów wielokrotnego użytku",
        isEdit: false,
        isOptionsView: false
      },
      {
        id: 5,
        title: "Firebase",
        type: "todo",
        description:
          "Zintegrować aplikację z Firebase aby zadania mogły się zapisywać na serwerze",
        isEdit: false,
        isOptionsView: false
      },
      {
        id: 6,
        title: "Priorytetowe zadania",
        type: "todo",
        description: "wyswietlaja sie jako pierwsze i mają inny kolor",
        isEdit: false,
        isOptionsView: false
      },
      {
        id: 7,
        title: "podstawowa funkcjonalność",
        type: "done",
        description: "dodawanie , usuwanie , edytowanie ,przenoszenie zadan",
        isEdit: false,
        isOptionsView: false
      }
    ],
    isModalOpen: false,
    isFilterOpen: false,
    searchTxt: ""
  };

  filterTypeTask = typeTask => {
    return this.state.tasks.filter(task => task.type === typeTask);
  };

  copyTasksArray = () => [...this.state.tasks];

  findTaskId = (id, tasks) => tasks.findIndex(task => task.id === id);

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  openSearchForm = () => {
    this.setState({
      isFilterOpen: true
    });
  };

  closeSearchForm = () => {
    this.setState({
      isFilterOpen: false,
      searchTxt: ""
    });
  };

  deleteTask = id => {
    const tasks = this.copyTasksArray();
    const index = this.findTaskId(id, tasks);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  addTask = (
    id,
    title,
    type,
    description,
    isEdit = false,
    isOptionsView = false
  ) => {
    const item = {
      id,
      title,
      type,
      description,
      isEdit,
      isOptionsView
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, item]
    }));
    this.closeModal();
  };

  changeTypeTask = (id, type) => {
    const tasks = this.copyTasksArray();
    const index = this.findTaskId(id, tasks);
    tasks[index].type = type;
    this.setState({
      tasks
    });
    this.toggleIsOptionsView(id);
  };

  changeToEditTask = id => {
    const tasks = this.copyTasksArray();
    const index = this.findTaskId(id, tasks);
    tasks[index].isEdit = true;
    this.setState({
      tasks
    });
    this.toggleIsOptionsView(id);
    return true;
  };

  confirmEditTask = (id, title, description) => {
    const tasks = this.copyTasksArray();
    const index = this.findTaskId(id, tasks);
    tasks[index].isEdit = false;
    tasks[index].title = title;
    tasks[index].description = description;
    this.setState({
      tasks
    });
  };

  cancelEditTask = id => {
    const tasks = this.copyTasksArray();
    const index = this.findTaskId(id, tasks);
    tasks[index].isEdit = false;
    this.setState({
      tasks
    });
  };

  toggleIsOptionsView = id => {
    const tasks = this.copyTasksArray();
    const index = this.findTaskId(id, tasks);
    tasks[index].isOptionsView = !this.state.tasks[index].isOptionsView;
    this.setState({
      tasks
    });
  };

  handleSearchTxt = e => {
    this.setState({
      searchTxt: e.target.value
    });
  };

  render() {
    const { isModalOpen, tasks, isFilterOpen, searchTxt } = this.state;
    const {
      filterTypeTask,
      openModal,
      closeModal,
      deleteTask,
      changeTypeTask,
      changeToEditTask,
      confirmEditTask,
      toggleIsOptionsView,
      openSearchForm,
      closeSearchForm,
      cancelEditTask,
      handleSearchTxt
    } = this;

    const contextElements = {
      tasks: tasks,
      filterTypeTaskFn: filterTypeTask,
      deleteTaskFn: deleteTask,
      changeTypeTaskFn: changeTypeTask,
      changeToEditTaskFn: changeToEditTask,
      confirmEditTaskFn: confirmEditTask,
      toggleIsOptionsViewFn: toggleIsOptionsView,
      cancelEditTaskFn: cancelEditTask,
      handleSearchTxtFn: handleSearchTxt
    };

    return (
      <HashRouter>
        <AppContext.Provider value={contextElements}>
          <Menu openModalFn={openModal} openSearchFormFn={openSearchForm} />
          <Main>
            <Switch>
              <Route exact path="/" component={ToDoView} />
              <Route path="/doing" component={DoingView} />
              <Route path="/done" component={DoneView} />
              <Route component={ErrorView} />
            </Switch>
          </Main>
          {isModalOpen && (
            <AddTask
              closeModalFn={closeModal}
              tasks={tasks}
              addTaskFn={this.addTask}
            />
          )}
          {isFilterOpen && (
            <Search
              closeFn={closeSearchForm}
              tasks={tasks}
              searchTxt={searchTxt}
              handleSearchTxtFn={handleSearchTxt}
            />
          )}
        </AppContext.Provider>
      </HashRouter>
    );
  }
}

export default App;
