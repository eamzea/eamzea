import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const Header = () => {
  return (
    <Row className="my-3">
      <Col xs={9} md={9} className="d-flex align-items-center title-name-home">
        <Fade left cascade>
          <p className="h1 text-white titles">Edgar Zea</p>
        </Fade>
      </Col>
      <Col
        xs={3}
        md={3}
        className="d-flex justify-content-center align-items-center p-3">
        <Pulse forever duration={2000}>
          <Image
            className="img-header-home"
            src="/images/portfolio/profile_img.jpg"
          />
        </Pulse>
      </Col>
    </Row>
  );
};

export default Header;
