import React from 'react';
import NavbarHeroes from '../components/ui/Navbar';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import { Container } from 'react-bootstrap';
import SearchScreen from '../components/search/SearchScreen';
import FloatLink from '../../Portfolio/components/ui/FloatLink';

const DashboardRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <NavbarHeroes />
      <Container fluid>
        <Switch>
          <Route exact path={`${path}/marvel`} component={MarvelScreen} />
          <Route exact path={`${path}/hero/:heroId`} component={HeroScreen} />
          <Route exact path={`${path}/dc`} component={DcScreen} />
          <Route exact path={`${path}/search`} component={SearchScreen} />
          <Redirect to={`${path}/marvel`} />
        </Switch>
        <FloatLink />
      </Container>
    </>
  );
};

export default DashboardRoutes;
