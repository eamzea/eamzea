import React from "react";
import { Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link, animateScroll as scroll } from "react-scroll";

const NavDK = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Row className="m-0">
      <Col xs={12} className="d-fixed p-0">
        <Fade big cascade delay={1000}>
          <Navbar bg="light" expand="lg" className="nav-dk">
            <Nav.Link>
              <Image
                src="./images/digital-key/DKLogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Digital Key logo"
                onClick={scrollToTop}
              />
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Fade top cascade>
                <Nav className="mr-auto">
                  <Link
                    activeClass="active-dk"
                    className="texts"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    About Us
                  </Link>
                  <Link
                    activeClass="active-dk"
                    className="texts"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Services
                  </Link>
                  <Link
                    activeClass="active-dk"
                    className="texts"
                    to="advantages"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Advantages
                  </Link>
                  <Link
                    activeClass="active-dk"
                    className="texts"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    Contact
                  </Link>
                </Nav>
              </Fade>
            </Navbar.Collapse>
          </Navbar>
        </Fade>
      </Col>
    </Row>
  );
};

export default NavDK;
