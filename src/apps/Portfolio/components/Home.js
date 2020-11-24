import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row className="justify-content-center">
      <Col xs={10} className="my-3">
        <RubberBand>
          <p className="titles text-white title-home">FullStack Developer</p>
          <p className="texts text-white text-center text-home">MERN Stack</p>
        </RubberBand>
      </Col>
      <Col xs={10} className="my-3">
        <RubberBand>
          <p className="titles text-white title-home">Mobile Developer</p>
          <p className="texts text-white text-center text-home">React Native</p>
        </RubberBand>
      </Col>
    </Row>
  );
};

export default Home;
