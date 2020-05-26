import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    <Col lg={2} xs={12} className="fix-col">
      <Row className="row-navbar justify-content-between align-items-center">
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1000}>
            <Link to="/">
              <Image
                className="link-home"
                src="./images/home.svg"
                alt="Home page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1250}>
            <Link to="/projects">
              <Image
                className="link-home"
                src="./images/project.svg"
                alt="Projects and hobbies page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1500}>
            <Link to="/academic">
              <Image
                className="link-home"
                src="./images/school.svg"
                alt="Education page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1750}>
            <Link to="/professional">
              <Image
                className="link-home"
                src="./images/work.svg"
                alt="Professional experience page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={2000}>
            <Link to="/information">
              <Image
                className="link-home"
                src="./images/info.svg"
                alt="Information page"
              />
            </Link>
          </Fade>
        </Col>
      </Row>
    </Col>
  );
};

export default Navbar;
