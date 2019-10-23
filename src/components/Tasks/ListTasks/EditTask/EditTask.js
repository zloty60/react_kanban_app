import React, { Component } from "react";
import { connect } from "react-redux";
import AppContext from "./../../../../context";
import style from "./EditTask.module.scss";
import {
  confirmTask,
  canceEditTask
} from "./../../../../redux/actions/actions";

class EditTask extends Component {
  state = {
    title: this.props.title,
    description: this.props.description
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCancel = () => {
    this.setState({
      title: this.props.title,
      description: this.props.description
    });
    this.context.cancelEditTaskFn(this.props.id);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
          className={style.editTitle}
        />
        <textarea
          name="description"
          type="text"
          onChange={this.handleInput}
          value={this.state.description}
          className={style.editDescription}
        />
        <button
          onClick={() =>
            this.props.confirmTask(
              this.props.id,
              this.state.title,
              this.state.description
            )
          }
          className={style.editBtn}
        >
          zatwierdz
        </button>
        <button
          onClick={() => this.props.canceEditTask(this.props.id)}
          className={style.cancelBtn}
        >
          anuluj
        </button>
      </div>
    );
  }
}

EditTask.contextType = AppContext;

export default connect(
  null,
  { confirmTask, canceEditTask }
)(EditTask);
