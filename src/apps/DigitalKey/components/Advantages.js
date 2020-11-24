import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Advantages = () => {
  return (
    <Row
      className="justify-content-around align-items-start m-0 about-page"
      name="advantages">
      <Col xs={11}>
        <Fade left delay={1000}>
          <p className="h1 titles m-t-vh">VENTAJAS DE LA DIGITALIZACIÓN</p>
        </Fade>
      </Col>
      <Col xs={11} md={10}>
        <Slide left cascade delay={1500}>
          <ol className="advantages-list">
            <li className="texts h5">Centralización de la información.</li>
            <li className="texts h5">
              Conservación de documentos, ya que no se dañan con el paso del
              tiempo.
              <Image
                src="./images/digital-key/fast-forward.svg"
                width={25}
                className="mx-3"
              />
            </li>
            <li className="texts h5">
              Integridad de los documentos ante catástrofes naturales o
              modificación del contenido.
              <Image
                src="./images/digital-key/laptop.svg"
                width={25}
                className="mx-3"
              />
            </li>
            <li className="texts h5">
              Agilidad en las búsquedas de documentos.
              <Image
                src="./images/digital-key/search.svg"
                width={25}
                className="mx-3"
              />
            </li>
            <li className="texts h5">
              Accede de forma segura y rápida a todos tus documentos.
              <Image
                src="./images/digital-key/security.svg"
                width={25}
                className="mx-3"
              />
            </li>
            <li className="texts h5">
              Aumento de la productividad.
              <Image
                src="./images/digital-key/money.svg"
                width={25}
                className="mx-3"
              />
            </li>
            <li className="texts h5">Copias exactas de los documentos.</li>
            <li className="texts h5">Edición de documentos al instante.</li>
            <li className="texts h5">
              Fácil difusión online de los documentos.
              <Image
                src="./images/digital-key/share.svg"
                width={25}
                className="mx-3"
              />
            </li>
            <li className="texts h5">
              Ahorro en costos de transporte, de papel y almacenamiento.
              <Image
                src="./images/digital-key/archive.svg"
                width={25}
                className="mx-3"
              />
            </li>
            <li className="texts h5">Disminución del uso del papel.</li>
            <li className="texts h5">
              Contribuye al mantenimiento y mejora del Medio Ambiente.
            </li>
          </ol>
        </Slide>
      </Col>
    </Row>
  );
};

export default Advantages;
