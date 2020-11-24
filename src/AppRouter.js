import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PortfolioApp from "./apps/Portfolio/PortfolioApp";
import DigitalKeyApp from "./apps/DigitalKey/DigitalKeyApp";
import "bootstrap/dist/css/bootstrap.min.css";
import PromasaSJTApp from "./apps/PromasaSJT/PromasaSJTApp";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/digital-key" component={DigitalKeyApp} />
        <Route path="/promasaSJT" component={PromasaSJTApp} />
        <Route path="/" component={PortfolioApp} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
