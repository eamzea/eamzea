import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Pulse from "react-reveal/Pulse";
import "../../PromasaSJT.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Row className="m-0 mt-5 mb-1 banner-container">
      <Col
        xs={12}
        className="p-0 d-flex justify-content-around align-items-center flex-column">
        <p className="promasa-color banner-txt text-center h1 mb-5 p-5">
          PRESUPUESTO
          <br />
          SIN COSTO
        </p>
        <Pulse forever duration={2000} delay={500}>
          <Link to="/promasaSJT/contacto">
            <Button size="lg" className="banner-btn">
              CONTÁCTANOS
            </Button>
          </Link>
        </Pulse>
      </Col>
    </Row>
  );
};

export default Banner;
