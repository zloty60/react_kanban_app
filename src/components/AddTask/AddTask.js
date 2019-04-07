import React, { Component } from "react";
import PropTypes from "prop-types";
import OnlyViewTask from "./../../components/Tasks/ListTasks/Task/OnlyViewTask";
import styles from "./AddTask.module.scss";
import CloseButton from "./../buttons/closeButton/CloseButton";

const types = {
  todo: "todo",
  doing: "doing",
  done: "done"
};

class Modal extends Component {
  state = {
    type: types.todo,
    title: "",
    description: "",
    validAlert: false
  };

  handleForm = e => {
    e.preventDefault();
  };

  handleType = type => {
    this.setState({
      type
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleBtn = () => {
    const { title, type, description } = this.state;
    let maxId;
    if (this.props.tasks.length > 0) {
      maxId = Math.max(...this.props.tasks.map(item => item.id));
      maxId++;
    } else {
      maxId = 0;
    }

    if (title !== "" && type !== "" && description !== "") {
      this.props.addTaskFn(maxId, title, type, description);
    } else {
      this.setState({
        validAlert: true
      });
    }
  };

  sortHighestId = () => {
    const arr = [...this.props.tasks];

    function compare(a, b) {
      let comparison = 0;
      a = a.id;
      b = b.id;
      if (a > b) {
        comparison = 1;
      } else if (a < b) {
        comparison = -1;
      }
      return comparison * -1;
    }
    return arr.sort(compare);
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <div className="container">
            <div className="row">
              <div className="col-m-12 col-xl-6">
                <div className="row">
                  <h2 className="col-12 col-m-12">Dodaj zadanie</h2>
                  <div className="col-12 col-m-12">
                    <form onSubmit={this.handleForm}>
                      <input
                        type="text"
                        name="title"
                        placeholder="wpisz tytul zadania"
                        onChange={this.handleInput}
                        value={this.state.title}
                        className={styles.searchForm}
                      />
                      <br />
                      <textarea
                        type="text"
                        name="description"
                        placeholder="wpisz opis"
                        onChange={this.handleInput}
                        value={this.state.description}
                        className={styles.searchForm}
                      />

                      <div className={styles.options}>
                        <p className="col-m-12">Status zadania</p>
                        <div className="row">
                          <div className="col-12 col-m-4">
                            <div className={styles.radioWrapper}>
                              <label>
                                <span>do zrobienia</span>
                                <input
                                  type="radio"
                                  checked={this.state.type === types.todo}
                                  onChange={() => this.handleType(types.todo)}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-m-4">
                            <div className={styles.radioWrapper}>
                              <label>
                                <span>w trakcie</span>
                                <input
                                  type="radio"
                                  checked={this.state.type === types.doing}
                                  onChange={() => this.handleType(types.doing)}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-m-4">
                            <div className={styles.radioWrapper}>
                              <label>
                                <span>zrobione</span>
                                <input
                                  type="radio"
                                  checked={this.state.type === types.done}
                                  onChange={() => this.handleType(types.done)}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-m-12">
                        <button
                          type="button"
                          onClick={this.handleBtn}
                          className={styles.btnAdd}
                        >
                          dodaj
                        </button>
                      </div>
                      {this.state.validAlert && (
                        <p>wszystkie pola musza byc wypelnione</p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
              <div
                className={["col-m-12, col-xl-6", styles.lastTasks].join(" ")}
              >
                <div className="row">
                  <h2 className="col-m-12">Ostatnio dodane zadania</h2>
                  {this.sortHighestId()
                    // jezeli szerokosc urządzenia wieksza niz 1100px to wyswietl 6 taskow
                    .slice(0, window.innerWidth > 1100 ? 6 : 4)
                    .map(el => {
                      return <OnlyViewTask key={el.id} {...el} />;
                    })}
                </div>
              </div>
            </div>
          </div>

          <CloseButton closeFn={this.props.closeModalFn} />
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  closeModalFn: PropTypes.func,
  tasks: PropTypes.array,
  addTaskFn: PropTypes.func
};

export default Modal;
