import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Orders.module.css";

const Orders = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className={classes.main}>
            <ul className={classes.ul}>
                <li>
                    <NavLink active to="/pending" activeClassName={classes.active} onClick={() => handleClick("Pending")}>Pending</NavLink>
                </li>
                <li>
                    <NavLink to="/accepted" activeClassName={classes.active} onClick={() => handleClick("Accepted")}>Accepted</NavLink>
                </li>
                <li>
                    <NavLink to="/awb-created" activeClassName={classes.active} onClick={() => handleClick("AWB Created")}>AWB Created</NavLink>
                </li>
                <li>
                    <NavLink to="/ready-to-ship" activeClassName={classes.active} onClick={() => handleClick("Ready to ship")}>Ready to ship</NavLink>
                </li>
                <li>
                    <NavLink to="/shipped" activeClassName={classes.active} onClick={() => handleClick("Shipped")}>Shipped</NavLink>
                </li>
                <li>
                    <NavLink to="/completed" activeClassName={classes.active} onClick={() => handleClick("Completed")}>Completed</NavLink>
                </li>
                <li>
                    <NavLink to="/cancelled" activeClassName={classes.active} onClick={() => handleClick("Cancelled")}>Cancelled</NavLink>
                </li>
            </ul>
            {selectedItem && <div className={classes.selectedItem}>{selectedItem}</div>}
        </div>
    );
}

export default Orders;
