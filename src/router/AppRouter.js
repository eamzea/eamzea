import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PortfolioApp from '../apps/Portfolio/PortfolioApp';
import DigitalKeyApp from '../apps/DigitalKey/DigitalKeyApp';
import PromasaSJTApp from '../apps/PromasaSJT/PromasaSJTApp';
import HeroesApp from '../apps/Heroes/HeroesApp';
import JournalApp from '../apps/Journal/JournalApp';
import 'animate.css';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/digital-key" component={DigitalKeyApp} />
        <Route path="/promasaSJT" component={PromasaSJTApp} />
        <Route path="/heroes" component={HeroesApp} />
        <Route path="/journal" component={JournalApp} />
        <Route path="/" component={PortfolioApp} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
