import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

const NavP = () => {
  const { url } = useRouteMatch();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
      <Link to={`${url}`}>
        <Fade top>
          <Image
            src="/images/promasaSJT/promasa-logo-white.png"
            width="125"
            className="d-inline-block align-top"
            alt="Promasa SJT logo"
            onClick={scrollToTop}
          />
        </Fade>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end">
        <Nav>
          <Fade top delay={250}>
            <div className="prevent-fail-nav">
              <Link to={`${url}`} className="navlink text-white">
                INICIO
              </Link>
              <Link to={`${url}/persianas`} className="navlink text-white">
                PERSIANAS
              </Link>
              <Link
                to={`${url}/pisos-laminados`}
                className="navlink text-white">
                PISOS
              </Link>
              <Link to={`${url}/alfombras`} className="navlink text-white">
                ALFOMBRAS
              </Link>
              <Link to={`${url}/contacto`} className="navlink text-white">
                CONTACTO
              </Link>
            </div>
          </Fade>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavP;
