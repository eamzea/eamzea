import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PortfolioApp from './apps/Portfolio/PortfolioApp';
import DigitalKeyApp from './apps/DigitalKey/DigitalKeyApp';
import PromasaSJTApp from './apps/PromasaSJT/PromasaSJTApp';
import HeroesApp from './apps/Heroes/HeroesApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/digital-key" component={DigitalKeyApp} />
        <Route path="/promasaSJT" component={PromasaSJTApp} />
        <Route path="/heroes" component={HeroesApp} />
        <Route path="/" component={PortfolioApp} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
