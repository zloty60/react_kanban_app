import React, { useState } from "react";
import { connect } from "react-redux";
import { closeSearchModal } from "./../../redux/actions/actions";
import OnlyViewTask from "./../../components/Tasks/ListTasks/Task/OnlyViewTask";
import styles from "./Search.module.scss";
import CloseButton from "./../../components/buttons/closeButton/CloseButton";
import PropTypes from "prop-types";

const Search = ({ closeSearchModal, tasks }) => {
  let isFound = [];
  const [inputTxt, setInputTxt] = useState("");
  const getInput = e => {
    setInputTxt(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="col-m-12">
          <input
            type="text"
            onChange={getInput}
            className={styles.searchForm}
            placeholder="wpisz tytul zadania"
          />
        </div>

        <div className={styles.tasks}>
          <div className="row">
            {tasks.map(task => {
              if (
                task.title.toUpperCase().indexOf(inputTxt.toUpperCase()) > -1
              ) {
                isFound.push(true);
                return <OnlyViewTask key={task.id} {...task} />;
              } else {
                isFound.push(false);
              }
              return null;
            })}
            {isFound.indexOf(true) > -1 ? null : (
              <p className="col-m-6">nic nie znaleziono</p>
            )}
          </div>
        </div>
      </div>
      <CloseButton closeFn={closeSearchModal} />
    </div>
  );
};

Search.propTypes = {
  tasks: PropTypes.array,
  closeSearchModal: PropTypes.func
};

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducer.tasks
  };
};

export default connect(
  mapStateToProps,
  { closeSearchModal }
)(Search);
