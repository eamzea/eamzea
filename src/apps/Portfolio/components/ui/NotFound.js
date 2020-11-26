import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Row className="justify-content-center">
      <Col md={6} xs={10}>
        <Image src="./images/portfolio/not-found.png" className="not-found" />
      </Col>
    </Row>
  );
};

export default NotFound;
