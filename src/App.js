import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Main/Dashboard";
import Inventory from "./components/Main/Inventory";
import Shipping from "./components/Main/Shipping";
import Channel from "./components/Main/Channel";
import Outlet from "./components/Outlet/Outlet";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Navbar/Header";
import Orders from "./components/Main/Orders/Orders";
import classes from "./App.module.css";
import Pending from "./components/Main/Orders/Pending/Pending";

const App = () => {
  return (
    <Outlet>
      <Header />
      <div className={classes.container}>
      <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/shipping">
            <Shipping />
          </Route>
          <Route path="/channel">
            <Channel />
          </Route>
          <Route path="/pending"> 
          <Pending/>
          </Route>
        </Switch>
      </div>
    </Outlet>
  );
};

export default App;
