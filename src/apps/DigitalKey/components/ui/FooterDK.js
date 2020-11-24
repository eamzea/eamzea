import React from "react";
import { Row, Col } from "react-bootstrap";

const FooterDK = () => {
  return (
    <Row className="footer m-0 justify-content-center py-5">
      <Col xs={11} className="my-3">
        <p className="texts h4 text-white text-center">
          &copy; Digital Key 2018
        </p>
      </Col>
    </Row>
  );
};

export default FooterDK;
