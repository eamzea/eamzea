import React from "react";
import { Row, Col } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";

const Professional = () => {
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
          <p className="titles text-white h1">React Developer</p>
        </RubberBand>
        <Flip top delay={2400}>
          <p className="titles text-white text-center ids-title">IDS</p>
          <p className="texts text-white text-center h3">04/2020 - present</p>
          <p className="texts text-white text-center">
            Website maintenance built in React
          </p>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">Jr FullStack Developer</p>
        </RubberBand>
        <Flip top delay={2400}>
          <p className="titles text-white text-center appwit-title">APPWIT</p>
          <p className="texts text-white text-center h3">11/2019 - 04/2020</p>
          <p className="texts text-white text-center">
            Project 1: Create company web page on Angular/NPM/Firebase
            <br />
            Project 2: Create web app on Angular/Firebase/Node/Express
            <br />
            Project 3: Create blog on Mongo/Express/Node/React
            <br />
            Project 4: Create web app on React/Next/Mongo/Express/Firebase/Node
            <br />
          </p>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">Designer</p>
        </RubberBand>
        <Flip top delay={2400}>
          <p className="titles text-white text-center maikai-title">Maika'i</p>
          <p className="texts text-white text-center h3">02/2019 - 03/2020</p>
          <p className="texts text-white text-center">
            Brand design
            <br />
            Social media administrator
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <button className="texts eamz-btn maikai-btn">See designs</button>
          </div>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">Web Developer</p>
        </RubberBand>
        <Flip top delay={2400}>
          <p className="titles text-white text-center promasa-title">
            PromasaSJT
          </p>
          <p className="texts text-white text-center h3">02/2019 - 04/2020</p>
          <p className="texts text-white text-center">
            Create company web page on HTML/CSS/JS/Bootstrap/jQuery
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <button className="texts eamz-btn promasa-btn">See website</button>
          </div>
        </Flip>
      </Col>
      <Col xs={12} className="my-lg-3 margin-bottom-footer">
        <RubberBand>
          <p className="titles text-white h1">Web Developer</p>
        </RubberBand>
        <Flip top delay={2400}>
          <p className="titles text-white text-center digitalkey-title">
            Digital Key
          </p>
          <p className="texts text-white text-center h3">05/2018 - 09/2019</p>
          <p className="texts text-white text-center">
            Create company web page on React/Bootstrap
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <button className="texts eamz-btn digitalkey-btn">
              See website
            </button>
          </div>
        </Flip>
      </Col>
    </Row>
  );
};

export default Professional;
