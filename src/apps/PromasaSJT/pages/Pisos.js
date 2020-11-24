import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { pisos } from "../utils/images";
import GaleryModal from "../components/ui/Modal";
import Banner from "../components/ui/Banner";

const Pisos = () => {
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
          <p className="h1 promasa-color my-5">PISOS</p>
        </Col>
      </Row>

      {show && (
        <GaleryModal show={show} handleClose={handleClose} img={imgState} />
      )}
      {pisos.map((piso) => {
        return (
          <Row className="my-3 justify-content-center align-items-center">
            <Col xs={11} className="text-center">
              <p className="h2 promasa-color my-3">{piso.title}</p>
            </Col>
            <Col xs={11}>
              <Row className="my-3 justify-content-around align-items-center">
                {piso.img.map((img) => {
                  delay = delay + 100;
                  return (
                    <Col xs={5} md={4} lg={2} className="m-3">
                      <Fade top delay={delay}>
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          onClick={() => handleShow(img, piso.title)}
                        >
                          <Image
                            rounded
                            src={img}
                            className="persianas-galery"
                          />
                        </div>
                      </Fade>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        );
      })}
      <Zoom delay={500}>
        <Banner />
      </Zoom>
    </Container>
  );
};

export default Pisos;
