import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
      return (
            <div className={classes.navbar}>
                  <div className={classes.logo}>Dashboard</div>
                  <ul className={classes.ul}>
                        <li className={classes.li}><FontAwesomeIcon icon={faMoon} /></li>
                        <li className={classes.li}><FontAwesomeIcon icon={faBell} /></li>
                        <li className={classes.li}><img src="df" /></li>
                  </ul>
            </div>
      );
};

export default Header;