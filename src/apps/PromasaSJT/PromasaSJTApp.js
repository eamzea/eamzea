import React, { useEffect } from "react";
import "./PromasaSJT.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NavP from "./components/ui/NavP";
import FooterP from "./components/ui/FooterP";
import Home from "./pages/Home";
import Persianas from "./pages/Persianas";
import Pisos from "./pages/Pisos";
import Alfombras from "./pages/Alfombras";
import Contacto from "./pages/Contacto";
import FloatLink from "../Portfolio/components/ui/FloatLink";

const PromasaSJTApp = () => {
  const { path } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <NavP />
        <Col xs={12} className="p-0">
          <Switch>
            <Route exact path={`${path}`} component={Home} />
            <Route path={`${path}/persianas`} component={Persianas} />
            <Route path={`${path}/pisos-laminados`} component={Pisos} />
            <Route path={`${path}/alfombras`} component={Alfombras} />
            <Route path={`${path}/contacto`} component={Contacto} />
          </Switch>
        </Col>
        <FloatLink />
        <FooterP />
      </Row>
    </Container>
  );
};

export default PromasaSJTApp;
