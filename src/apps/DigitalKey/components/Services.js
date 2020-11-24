import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Services = () => {
  return (
    <Row
      className="justify-content-around m-0 about-page m-t-vh flex-column"
      name="services">
      <Col xs={12} className="services-page mt-5">
        <Row className="justify-content-around">
          <Col xs={11}>
            <Fade left delay={1000}>
              <p className="h1 titles py-5 text-white">SERVICIOS</p>
            </Fade>
          </Col>
        </Row>
      </Col>
      <Col
        xs={12}
        className="flex-grow-1 d-flex justify-content-center align-items-stretch">
        <Row>
          <Col
            xs={12}
            md={6}
            className="services-page d-flex flex-column justify-content-around text-white">
            <Flip top delay={1500}>
              <p className="h3 titles">Diseño y Ortografía</p>
              <p className="texts h4 px-5 text-justify">
                Para trabajos académicos nos encargamos de darle todo el formato
                que requiera el texto, tipo de letra, tamaño, interlineado,
                sangrías, márgenes, índice, hipervínculos, tablas, imágenes,
                referencias, para que tu(s) documento(s) cumpla(n) con los
                requisitos que te solicitaron además de revisar la ortografía,
                sintaxis y semántica.
              </p>
              <div className="d-flex justify-content-around align-items-center">
                <Image src="./images/digital-key/pencil.svg" width={50} />
                <Image src="./images/digital-key/spellcheck.svg" width={50} />
              </div>
            </Flip>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-around">
            <Flip top delay={1500}>
              <p className="h3 titles">Digitalización</p>
              <p className="texts h4 px-5 text-justify">
                Transformación de documentos físicos a documentos digitales, por
                medio de escaneo o en copia editable digital. La entrega es en
                un archivo .pdf o .doc, si es en .doc te permite hacerle
                modificaciones al texto y/o imágenes.
              </p>
              <div className="d-flex justify-content-around align-items-center">
                <Image src="./images/digital-key/scanner.svg" width={50} />
                <Image src="./images/digital-key/desktop.svg" width={50} />
                <Image src="./images/digital-key/mobile.svg" width={50} />
              </div>
            </Flip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Services;
