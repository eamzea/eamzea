import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { persianas } from "../utils/images";
import GaleryModal from "../components/ui/Modal";
import Banner from "../components/ui/Banner";

const Persianas = () => {
  const [show, setShow] = useState(false);
  const [imgState, updateImgState] = useState({
    title: "",
    url: "",
  });

  const handleClose = () => setShow(false);

  const handleShow = (url, title) => {
    setShow(true);
    updateImgState(Object.assign({}, imgState, { url, title }));
  };

  let delay = 100;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid>
      <Row className="mt-5 justify-content-center align-items-center">
        <Col xs={11} className="mt-5">
          <p className="h1 promasa-color my-5">PERSIANAS</p>
        </Col>
      </Row>
      <Row className="my-3 justify-content-around align-items-center">
        {show && (
          <GaleryModal show={show} handleClose={handleClose} img={imgState} />
        )}
        {persianas.map((per) => {
          delay = delay + 100;
          return (
            <Col xs={11} md={5} lg={3} className="m-3">
              <Fade top delay={delay}>
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  onClick={() => handleShow(per.url, per.title)}
                >
                  <Image rounded src={per.url} className="persianas-galery" />
                  <p className="promasa-color h4 my-3">{per.title}</p>
                </div>
              </Fade>
            </Col>
          );
        })}
      </Row>
      <Zoom delay={500}>
        <Banner />
      </Zoom>
    </Container>
  );
};

export default Persianas;
