import React, { useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

const Contact = () => {
  const [dataState, setDataState] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataState(Object.assign({}, dataState, { [name]: value }));
  };

  const isReady = () => {
    if (
      dataState.name !== "" &&
      dataState.email !== "" &&
      dataState.subject !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const openWindow = (e) => {
    switch (e.target.name) {
      case "email":
        return (window.location.href = "mailto:dgtalkey@outlook.com");
      case "facebook":
        return window.open("https://www.facebook.com/dgtlky", "_blank");
      case "instagram":
        return window.open("https://www.instagram.com/dgtalkey/", "_blank");
      default:
        return null;
    }
  };

  const openWindowP = (e) => {
    switch (e.target.getAttribute("name")) {
      case "email":
        return (window.location.href = "mailto:dgtalkey@outlook.com");
      case "facebook":
        return window.open("https://www.facebook.com/dgtlky", "_blank");
      case "instagram":
        return window.open("https://www.instagram.com/dgtalkey/", "_blank");
      default:
        return null;
    }
  };

  return (
    <Row
      className="justify-content-around m-0 about-page m-t-vh"
      name="contact">
      <Col xs={11}>
        <Fade left delay={1000}>
          <p className="h1 titles m-t-vh">CONTACTO</p>
        </Fade>
      </Col>
      <Col xs={11}>
        <Row className="flex-column align-items-center services-page rounded">
          <Col xs={12} md={6} className="my-3">
            <RubberBand>
              <p className="titles text-center text-white h3 my-3">
                Déjanos tus datos
              </p>
            </RubberBand>
          </Col>
          <Col xs={12} md={6}>
            <Flip top delay={1000}>
              <InputGroup className="my-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="name">Nombre</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Edgar"
                  aria-label="Name"
                  name="name"
                  aria-describedby="name"
                  onChange={handleChange}
                />
              </InputGroup>
            </Flip>
          </Col>
          <Col xs={12} md={6}>
            <Flip top delay={1100}>
              <InputGroup className="my-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="email">Correo</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="edgar@edgar.com"
                  aria-label="Email"
                  name="email"
                  aria-describedby="email"
                  onChange={handleChange}
                />
              </InputGroup>
            </Flip>
          </Col>
          <Col xs={12} md={6}>
            <Flip top delay={1200}>
              <InputGroup className="my-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="subject">Comentarios</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  name="subject"
                  className="textarea-info"
                  onChange={handleChange}
                />
              </InputGroup>
            </Flip>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center my-3">
            {isReady() ? (
              <Bounce top>
                <button className="texts digitalkey-btn ready-btn px-5 py-3">
                  Enviar
                </button>
              </Bounce>
            ) : (
              <Fade big>
                <Button variant="light" size="sm" disabled className="texts">
                  Enviar
                </Button>
              </Fade>
            )}
          </Col>
        </Row>
      </Col>
      <Col xs={11}>
        <Row>
          <Col xs={12} md={4}>
            <Flip top cascade delay={1500}>
              <div className="d-flex flex-column align-items-center">
                <Image
                  src="./images/digital-key/email.svg"
                  width={50}
                  className="my-3 img-social"
                  name="email"
                  onClick={openWindow}
                />
                <p
                  className="texts h5 social-link"
                  onClick={openWindowP}
                  name="email">
                  dgtalkey@outlook.com
                </p>
              </div>
            </Flip>
          </Col>
          <Col xs={12} md={4}>
            <Flip top cascade delay={1500}>
              <div className="d-flex flex-column align-items-center">
                <Image
                  src="./images/digital-key/facebook.svg"
                  width={50}
                  className="my-3 img-social"
                  name="facebook"
                  onClick={openWindow}
                />
                <p
                  className="texts h5 social-link"
                  onClick={openWindowP}
                  name="facebook">
                  @dgtlky
                </p>
              </div>
            </Flip>
          </Col>
          <Col xs={12} md={4}>
            <Flip top cascade delay={1500}>
              <div className="d-flex flex-column align-items-center">
                <Image
                  src="./images/digital-key/instagram.svg"
                  width={50}
                  className="my-3 img-social"
                  name="instagram"
                  onClick={openWindow}
                />
                <p
                  className="texts h5 social-link"
                  onClick={openWindowP}
                  name="instagram">
                  @dgtalkey
                </p>
              </div>
            </Flip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Contact;
