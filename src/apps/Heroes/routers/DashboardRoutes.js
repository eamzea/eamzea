import React from 'react';
import NavbarHeroes from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import { Container } from 'react-bootstrap';
import SearchScreen from '../components/search/SearchScreen';
import FloatLink from '../../Portfolio/components/ui/FloatLink';

const DashboardRoutes = () => {
  return (
    <>
      <NavbarHeroes />
      <Container fluid>
        <Switch>
          <Route exact path={`/heroes/marvel`} component={MarvelScreen} />
          <Route exact path={`/heroes/hero/:heroId`} component={HeroScreen} />
          <Route exact path={`/heroes/dc`} component={DcScreen} />
          <Route exact path={`/heroes/search`} component={SearchScreen} />
          <Redirect to={`/heroes/marvel`} />
        </Switch>
        <FloatLink />
      </Container>
    </>
  );
};

export default DashboardRoutes;
