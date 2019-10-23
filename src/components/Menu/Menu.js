import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";
import searchIcon from "./../../assets/icon/search.svg";

const Menu = ({ openAddModalFn, openSearchdModalFn }) => {
  return (
    <header className={styles.wrapper}>
      <nav className="container">
        <div className="row">
          <div className="col-12 col-m-12">
            <ul className={styles.list}>
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName={styles.linkActive}
                  className={styles.link}
                >
                  do zrobienia
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/doing"
                  activeClassName={styles.linkActive}
                  className={styles.link}
                >
                  w trakcie
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/done"
                  activeClassName={styles.linkActive}
                  className={styles.link}
                >
                  zrobione
                </NavLink>
              </li>
              <li>
                <button onClick={openAddModalFn} className={styles.btn}>
                  dodaj
                </button>
              </li>
              <li>
                <button onClick={openSearchdModalFn} className="">
                  <span className={styles.searchTxt}>szukaj</span>
                  <img
                    src={searchIcon}
                    alt="search icon"
                    className={styles.searchIcon}
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Menu.propTypes = {
  openAddModalFn: PropTypes.func,
  openSearchdModalFn: PropTypes.func
};

export default Menu;
