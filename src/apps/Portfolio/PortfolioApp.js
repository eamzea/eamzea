import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from './components/ui/Navbar';
import Header from './components/ui/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Professional from './components/Professional';
import Info from './components/Info';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';
import NotFound from './components/ui/NotFound';

const PortfolioApp = () => {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Container fluid className="home-container">
      <Row>
        <Navbar />
        <Col xs={12} lg={{ span: 10, offset: 2 }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/academic" component={Academic} />
            <Route exact path="/professional" component={Professional} />
            <Route exact path="/information" component={Info} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioApp;
