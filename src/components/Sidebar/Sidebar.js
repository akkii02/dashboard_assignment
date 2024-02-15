import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faBoxes, faClipboardList, faShippingFast, faTv } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.list}>
        <li>
          <NavLink to="/" activeClassName={classes.activeLink} exact>
            <FontAwesomeIcon icon={faGauge} />
            <span className={classes.text}>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory" activeClassName={classes.activeLink}>
            <FontAwesomeIcon icon={faBoxes} />
            <span className={classes.text}>Inventory</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" activeClassName={classes.activeLink}>
            <FontAwesomeIcon icon={faClipboardList} />
            <span className={classes.text}>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/shipping" activeClassName={classes.activeLink}>
            <FontAwesomeIcon icon={faShippingFast} />
            <span className={classes.text}>Shipping</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/channel" activeClassName={classes.activeLink}>
            <FontAwesomeIcon icon={faTv} />
            <span className={classes.text}>Channel</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;