import React from "react";
import OnlyViewTask from "./../../components/Tasks/ListTasks/Task/OnlyViewTask";
import styles from "./Search.module.scss";
import CloseButton from "./../../components/buttons/closeButton/CloseButton";
import PropTypes from "prop-types";

const Search = ({ closeFn, tasks, searchTxt, handleSearchTxtFn }) => {
  let isFound = [];

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="col-m-12">
          <input
            type="text"
            onChange={handleSearchTxtFn}
            className={styles.searchForm}
            placeholder="wpisz tytul zadania"
          />
        </div>

        <div className={styles.tasks}>
          <div className="row">
            {tasks.map(task => {
              if (
                task.title.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1
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
      <CloseButton closeFn={closeFn} />
    </div>
  );
};

Search.propTypes = {
  closeFn: PropTypes.func,
  tasks: PropTypes.array,
  handleSearchTxtFn: PropTypes.func
};

export default Search;
