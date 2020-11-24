import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const Professional = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewPage = (e) => {
    if (e.target.id === "digital") {
      window.open("https://digital-key.herokuapp.com/", "_blank");
    } else if (e.target.id === "promasa") {
      window.open("https://promasa-sjt.herokuapp.com/", "_blank");
    }
  };

  const openFile = () => {
    window.open(
      "https://res.cloudinary.com/dsrp4vbij/image/upload/v1590528830/EAMZ/maikaiDesign_emmed6.pdf",
      "_blank"
    );
  };

  return (
    <Row className="justify-content-center">
      <Col xs={10} className="my-3">
        <RubberBand>
          <p className="titles text-white title-home">
            Professional Experience
          </p>
        </RubberBand>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">JavaScript Developer</p>
        </RubberBand>
        <Flip top delay={500}>
          <p className="titles text-white text-center ids-title">
            Michelada.io
          </p>
          <p className="texts text-white text-center h3">09/2020 - current</p>
          <p className="texts text-white text-center">
            Solve and attend tickets from production web apps.
            <br />
            Implement new functionalities through requirements.
            <br />
            Analyze and re-factorizing unstable code.
            <br />
            Test new components added for development and logic added to
            functionality.
          </p>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">React Developer</p>
        </RubberBand>
        <Flip top delay={500}>
          <p className="titles text-white text-center ids-title">IDS</p>
          <p className="texts text-white text-center h3">04/2020 - 09/2020</p>
          <p className="texts text-white text-center">
            Solve and attend tickets from production web apps.
            <br />
            Implement new functionalities through requirements.
            <br />
            Analyze and re-factorizing unstable code.
            <br />
            Test new components added for development and logic added to
            functionality.
          </p>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">Jr FullStack Developer</p>
        </RubberBand>
        <Flip top delay={600}>
          <p className="titles text-white text-center appwit-title">APPWIT</p>
          <p className="texts text-white text-center h3">11/2019 - 04/2020</p>
          <p className="texts text-white text-center">
            Project 1: Design web page with Illustrator and Adobe Xd
            (wireframes, mockups and prototypes).
            <br />
            Front End development with HTML, CSS, JavaScript, Angular,
            prioritizing the User Experience and boost User Interface.
            <br />
            <br />
            Project 2: Design web page with Illustrator and Adobe Xd
            (wireframes, mockups and prototypes).
            <br />
            Front End development with HTML, CSS, JavaScript, Angular,
            prioritizing the User Experience and boost User Interface.
            <br />
            Back End development with Firebase, Node and Express.
            <br />
            <br />
            Project 3: Design web page with Illustrator and Adobe Xd
            (wireframes, mockups and prototypes).
            <br />
            Front End development with React, prioritizing the User Experience
            and boost User Interface.
            <br />
            Back End development with Node, Express, Sendgrid. Endpoints
            development, authentication with credentials, public REST API.
            Database development (MongoDB).
            <br />
            Firebase connection to manage users images/portfolio.
            <br />
            <br />
            Project 4: Design web page with Illustrator and Adobe Xd
            (wireframes, mockups and prototypes).
            <br />
            Front End development with React, prioritizing the User Experience
            and boost User Interface.
            <br />
            Back End development with Next, Node, Express. Endpoints
            development, authentication with credentials, public REST API.
            <br />
            Database development (MongoDB).
            <br />
          </p>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">Designer</p>
        </RubberBand>
        <Flip top delay={700}>
          <p className="titles text-white text-center maikai-title">Maika'i</p>
          <p className="texts text-white text-center h3">02/2019 - 03/2020</p>
          <p className="texts text-white text-center">
            Brand design
            <br />
            Social media administrator
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <button className="texts eamz-btn maikai-btn" onClick={openFile}>
              See designs
            </button>
          </div>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">Web Developer</p>
        </RubberBand>
        <Flip top delay={800}>
          <p className="titles text-white text-center promasa-title">
            PromasaSJT
          </p>
          <p className="texts text-white text-center h3">02/2019 - 04/2020</p>
          <p className="texts text-white text-center">
            Design web page with Illustrator and Adobe Xd (wireframes, mockups
            and prototypes). Social Media Management (Facebook, Instagram) with
            native tools.
            <br />
            Database development (MongoDB) to manage list of clients.
            <br />
            Front End development with HTML, CSS, JavaScript, Bootstrap, jQuery,
            React, prioritizing the User Experience and boost User Interface.
            <br />
            Test all components used for development and logic added to
            functionality.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/promasaSJT">
              <button id="promasa" className="texts eamz-btn promasa-btn">
                See website
              </button>
            </Link>
          </div>
        </Flip>
      </Col>
      <Col xs={12} className="my-lg-3 margin-bottom-footer">
        <RubberBand>
          <p className="titles text-white h1">Web Developer</p>
        </RubberBand>
        <Flip top delay={900}>
          <p className="titles text-white text-center digitalkey-title">
            Digital Key
          </p>
          <p className="texts text-white text-center h3">05/2018 - 09/2019</p>
          <p className="texts text-white text-center">
            Design bussiness slides, electronic signs and web page with
            Illustrator and Adobe Xd (wireframes, mockups and prototypes) guided
            on Material UI.
            <br />
            Social Media Management (Facebook, Instagram, LinkedIn) with native
            tools. Database development (MongoDB) to manage list of clients.
            <br />
            Front End development with HTML, CSS, JavaScript, Bootstrap, jQuery,
            React, prioritizing the User Experience and boost User Interface.
            <br />
            Test all components used for development and logic added to
            functionality.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/digital-key">
              <button id="digital" className="texts eamz-btn digitalkey-btn">
                See website
              </button>
            </Link>
          </div>
        </Flip>
      </Col>
    </Row>
  );
};

export default Professional;
