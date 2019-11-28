import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TaskView from "./TaskView";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class TaskViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardName: "",
      boardTasks: [],
      isCorrectBorder: true
    };
  }

  componentDidMount() {
    this.setState(state => ({
      boardName: this.props.match.params.name,
      boards: this.props.boards
    }));
    this.findBoard();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.setState(state => ({
        boardName: this.props.match.params.name
      }));
      this.findBoard();
    }
  }

  findBoard() {
    const board = this.props.boards.filter(
      board => board.name === this.props.match.params.name
    );

    if (board.length > 0) {
      this.setState(state => ({
        boardTasks: board[0].tasks
      }));
    } else {
      this.setState(state => ({
        boardTasks: [],
        isCorrectBorder: false
      }));
    }
  }

  filterTypeTask(type) {
    return this.state.boardTasks.filter(task => task.type === type);
  }

  render() {
    if (this.state.isCorrectBorder === false) {
      return <Redirect to="/" />;
    }

    return <TaskView boardName={this.state.boardName} />;
  }
}

const mapStateToProps = state => {
  return {
    boards: state.AppReducer.boards
  };
};

export default withRouter(connect(mapStateToProps)(TaskViewContainer));
