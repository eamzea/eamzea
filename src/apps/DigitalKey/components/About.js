import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Row
      className="justify-content-center align-items-center m-0 about-page"
      name="about">
      <Col xs={11}>
        <Fade left delay={1000}>
          <p className="h1 titles">SOBRE NOSOTROS</p>
        </Fade>
      </Col>
      <Col xs={12} md={5}>
        <Fade left cascade delay={1000}>
          <div>
            <p className="texts h4 my-5 text-justify">
              Digital Key está constituida como una empresa mexicana enfocada a
              facilitar la gestión de documentos por medio de vías digitales
              ofreciendo sus servicios a cualquier sector empresarial y al
              público en general; promoviendo el retiro del uso de papel.
            </p>
            <p className="texts h4 my-5 text-justify">
              En Digital Key nos dedicamos a las digitalizaciones de documentos
              físicos, esto se refiere a convertir estos archivos en documentos
              digitales, ya sea solo escaneando o haciendo copias editables
              digitales.
            </p>
            <p className="texts h4 my-5 text-justify">
              Esto te ayuda en que si tienes algún documento en papel nosotros
              nos encargamos de entregártelo en un archivo .pdf o .doc, si es en
              .doc te permite hacerle modificaciones al texto y/o imágenes.
            </p>
          </div>
        </Fade>
      </Col>
      <Col md={5} className="d-none d-md-block">
        <Flip top>
          <div className="d-flex flex-1 justify-content-center align-items-center">
            <Image src="./images/digital-key/blue.png" width={250} />
          </div>
        </Flip>
      </Col>
    </Row>
  );
};

export default About;
