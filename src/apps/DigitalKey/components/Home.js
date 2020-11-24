import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <Row className="m-0">
      <Col
        xs={12}
        className="d-flex justify-content-center align-items-center col-home">
        <Fade big delay={1000}>
          <Pulse forever duration={2000} delay={2000}>
            <Image className="img-home" src="./images/digital-key/DKLogo.png" />
          </Pulse>
        </Fade>
      </Col>
    </Row>
  );
};

export default Home;
