import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const FooterP = () => {
  return (
    <Row className="promasa-footer m-0 py-3">
      <Col xs={4} className="d-none d-md-block">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Image
            src="/images/promasaSJT/promasa-logo-white.png"
            width={"50%"}
          />
        </div>
      </Col>
      <Col xs={12} md={8} className="p-0">
        <Row className="my-3 mx-0">
          <Col xs={12}>
            <p className="titles h4 text-white text-center">QUIÉNES SOMOS</p>
          </Col>
        </Row>
        <Row className="justify-content-around align-items-center">
          <Col xs={5}>
            <p className="texts text-white footer-text">
              UNA EMPRESA QUE MIRA AL FUTURO CON LIDERAZGO Y ENFOQUE EN EL MEJOR
              SERVICIO, SE PREOCUPA POR SATISFACER LAS NECESIDADES DEL CLIENTE
              AL DISTRIBUIR Y PROPORCIONAR DE MANERA OPORTUNA Y EFICIENTE
              PRODUCTOS Y SERVICIOS ACORDE A SUS NECESIDADES.
            </p>
          </Col>
          <Col xs={5}>
            <p className="texts text-white footer-text">
              LA EXPERIENCIA DE PROMASA SJT COMERCIAL, ESTA SUSTENTADA EN EL
              MERCADO DESDE HACE MAS DE DOS DECADAS AL INICIAR OPERACIONES EN LA
              CIUDAD DE MEXICO. PROPORCIONA UNA ALTERNATIVA CON VENTAJAS
              COMPETITIVAS EN TIEMPO Y COSTO PARA LAS DIVERSAS NECESIDADES DE
              DISTINTOS SECTORES.
            </p>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Row className="my-3 justify-content-around align-items-center">
          <Col xs={12} md={3}>
            <div className="d-flex flex-column justify-content-around align-items-center">
              <Image src="/images/promasaSJT/email.svg" width={50} />
              <p className="texts text-white">promasasjt@hotmail.com</p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="d-flex flex-column justify-content-around align-items-center">
              <Image src="/images/promasaSJT/facebook.svg" width={50} />
              <p className="texts text-white">Facebook</p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="d-flex flex-column justify-content-around align-items-center">
              <Image src="/images/promasaSJT/instagram.svg" width={50} />
              <p className="texts text-white">Instagram</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FooterP;
