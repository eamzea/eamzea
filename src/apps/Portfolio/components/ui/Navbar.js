import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Navbar = props => {
  const { pathname } = useLocation();

  return (
    <Col lg={2} xs={12} className="fix-col">
      <Row className="row-navbar justify-content-between align-items-center">
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1000}>
            <Link to="/" className={`${pathname === '/' && 'active-eamz'}`}>
              <Image
                className="link-home"
                src="/images/portfolio/home.svg"
                alt="Home page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1250}>
            <Link
              to="/projects"
              className={`link-home ${
                pathname.includes('projects') && 'active-eamz'
              }`}
            >
              <Image
                className="link-home"
                src="/images/portfolio/project.svg"
                alt="Projects and hobbies page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1500}>
            <Link
              to="/academic"
              className={`${pathname.includes('academic') && 'active-eamz'}`}
            >
              <Image
                className="link-home"
                src="/images/portfolio/school.svg"
                alt="Education page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={1750}>
            <Link
              to="/professional"
              className={`link-home ${
                pathname.includes('professional') && 'active-eamz'
              }`}
            >
              <Image
                className="link-home"
                src="/images/portfolio/work.svg"
                alt="Professional experience page"
              />
            </Link>
          </Fade>
        </Col>
        <Col lg={12} xs={2} className="text-center">
          <Fade left cascade delay={2000}>
            <Link
              to="/information"
              className={`${pathname.includes('information') && 'active-eamz'}`}
            >
              <Image
                className="link-home"
                src="/images/portfolio/info.svg"
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
