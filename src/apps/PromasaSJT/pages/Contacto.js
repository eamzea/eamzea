import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

const Contacto = () => {
  const [formState, updateFormState] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleInfo = (e) => {
    const { name, value } = e.target;
    updateFormState(Object.assign({}, formState, { [name]: value }));
  };

  const isReady = () => {
    if (
      formState.name !== "" &&
      formState.email !== "" &&
      formState.phone !== "" &&
      formState.comments !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container fluid>
      <Row className="mt-5 justify-content-around align-items-stretch">
        <Col xs={11} md={5} className="mt-5">
          <p className="promasa-color h1 my-3">UBICACIÓN</p>
          <p className="promasa-color location-txt">
            Sur 69-A #4164 Local B
            <br />
            Viaducto Piedad
            <br />
            Iztacalco, 08200
            <br />
            Ciudad de México
            <br />
            55301789 / 55196944
            <br />
            promasasjtcomercial@hotmail.com
          </p>
        </Col>
        <Col xs={11} md={5} className="mt-5">
          <p className="promasa-color h1 my-3">DUDAS</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="promasa-color h4">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Pérez"
                className="contact-form"
                name="name"
                onChange={handleInfo}
                className="contact-form"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="promasa-color h4">Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="5511223344"
                className="contact-form"
                name="phone"
                onChange={handleInfo}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="promasa-color h4">Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="juan@gmail.com"
                className="contact-form"
                name="email"
                onChange={handleInfo}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="promasa-color h4">Comentarios</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Escribe aquí tus comentarios"
                className="contact-textarea contact-form"
                name="comments"
                onChange={handleInfo}
              />
            </Form.Group>

            {isReady() ? (
              <Button size="lg" className="banner-btn">
                Enviar
              </Button>
            ) : (
              <Button size="lg" className="banner-btn" disabled>
                Enviar
              </Button>
            )}
          </Form>
        </Col>
      </Row>
      <Row className="my-5 justify-content-center align-items-center">
        <Col xs={11}></Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div id="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.263911306122!2d-99.13159078509078!3d19.40099994671767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1feee7dcccff5%3A0x48c1ab37c7a98716!2sPromasa+STJ!5e0!3m2!1ses-419!2smx!4v1552598795633"
              style={{
                border: "0",
              }}
              width="100%"
              height="700"
              frameborder="0"
              allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
