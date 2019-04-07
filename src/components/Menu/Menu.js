import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";
import searchIcon from "./../../assets/icon/search.svg";

const Menu = ({ openModalFn, openSearchFormFn }) => {
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
                  do zrobionia
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
                <button onClick={openModalFn} className={styles.btn}>
                  dodaj
                </button>
              </li>
              <li>
                <button onClick={openSearchFormFn} className="">
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
  openModalFn: PropTypes.func,
  openSearchFormFn: PropTypes.func
};

export default Menu;
