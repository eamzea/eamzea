import React, { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";

const Academic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row className="justify-content-center">
      <Col xs={10} className="my-3">
        <RubberBand>
          <p className="titles text-white title-home">Academic Experience</p>
        </RubberBand>
      </Col>
      <Col xs={12} lg={6} className="my-3">
        <RubberBand>
          <p className="titles text-white h1">FullStack Web Developer</p>
        </RubberBand>
        <Flip top delay={500}>
          <p className="titles text-white text-center ironhack-title">
            Ironhack
          </p>
          <p className="texts text-white text-center h3">2019 - 2020</p>
          <Image
            src="./images/portfolio/ironhack.png"
            className="academic-imgs align-self-center"
          />
        </Flip>
      </Col>
      <Col xs={12} lg={6} className="my-lg-3 margin-bottom-footer">
        <RubberBand>
          <p className="titles text-white h1">Psychologist Degree</p>
        </RubberBand>
        <Flip top delay={500}>
          <p className="titles text-center unitec-title">UNITEC</p>
          <p className="texts text-white text-center h3">2013 - 2016</p>
          <Image
            src="./images/portfolio/psique.png"
            className="academic-imgs my-3 align-self-center"
          />
        </Flip>
      </Col>
    </Row>
  );
};

export default Academic;
