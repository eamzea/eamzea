import React from "react";
import { Row, Col, Image, Carousel } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <Row className="m-0">
        <Col xs={12} className="p-0 carousel-section">
          <Fade delay={500}>
            <Carousel interval={2000} touch slide>
              <Carousel.Item>
                <Image
                  className="img-carousel"
                  src="./images/promasaSJT/galeria1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="img-carousel"
                  src="./images/promasaSJT/galeria2.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="img-carousel"
                  src="./images/promasaSJT/galeria3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="img-carousel"
                  src="./images/promasaSJT/galeria4.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="img-carousel"
                  src="./images/promasaSJT/galeria5.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="img-carousel"
                  src="./images/promasaSJT/galeria6.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Fade>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center m-0">
        <Col xs={12} md={6}>
          <div className="d-flex flex-column">
            <div className="border-divider py-5">
              <Fade left delay={500}>
                <p className="titles display-4 m-5 text-center promasa-color">
                  Promasa SJT
                  <br />
                  Comercial
                </p>
              </Fade>
            </div>
            <div className="border-divider py-5">
              <Fade left delay={550}>
                <p className="texts text-center h3 m-5">
                  Persianas / Pisos Laminados / Toldos / Alfombras / Pasto
                  sintético / Motorizadas / Cortinas / Puertas Plegables / Deck
                </p>
              </Fade>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="p-0">
          <Row className="justify-content-around align-items-center my-5 mx-0">
            <Col xs={3} className="p-0">
              <Fade right delay={550}>
                <Image
                  src="./images/promasaSJT/galeriaHome1.png"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
            <Col xs={3} className="p-0">
              <Fade right delay={600}>
                <Image
                  src="./images/promasaSJT/galeriaHome2.jpg"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
            <Col xs={3} className="p-0">
              <Fade right delay={650}>
                <Image
                  src="./images/promasaSJT/galeriaHome3.jpg"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
          </Row>
          <Row className="justify-content-around align-items-center my-5 mx-0">
            <Col xs={3} className="p-0">
              <Fade right delay={700}>
                <Image
                  src="./images/promasaSJT/galeriaHome4.jpg"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
            <Col xs={3} className="p-0">
              <Fade right delay={750}>
                <Image
                  src="./images/promasaSJT/galeriaHome5.jpg"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
            <Col xs={3} className="p-0">
              <Fade right delay={800}>
                <Image
                  src="./images/promasaSJT/galeriaHome6.jpg"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
          </Row>
          <Row className="justify-content-around align-items-center my-5 mx-0">
            <Col xs={3} className="p-0">
              <Fade right delay={850}>
                <Image
                  src="./images/promasaSJT/galeriaHome7.jpg"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
            <Col xs={3} className="p-0">
              <Fade right delay={900}>
                <Image
                  src="./images/promasaSJT/galeriaHome8.png"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
            <Col xs={3} className="p-0">
              <Fade right delay={950}>
                <Image
                  src="./images/promasaSJT/galeriaHome9.jpg"
                  className="galery-home-img"
                />
              </Fade>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center m-0">
        <Col xs={12}>
          <Fade top delay={500}>
            <p className="display-4 titles promasa-color text-center">
              NUESTROS CLIENTES
            </p>
          </Fade>
        </Col>
        <Col xs={12}>
          <Row className="justify-content-around align-items-center my-5">
            <Col xs={3} md={2}>
              <Fade delay={500}>
                <Image
                  src="./images/promasaSJT/cliente1.jpg"
                  className="img-fluid"
                />
              </Fade>
            </Col>
            <Col xs={3} md={2}>
              <Fade delay={600}>
                <Image
                  src="./images/promasaSJT/cliente2.png"
                  className="img-fluid"
                />
              </Fade>
            </Col>
            <Col xs={3} md={2}>
              <Fade delay={700}>
                <Image
                  src="./images/promasaSJT/cliente3.jpg"
                  className="img-fluid"
                />
              </Fade>
            </Col>
            <Col xs={3} md={2}>
              <Fade delay={800}>
                <Image
                  src="./images/promasaSJT/cliente4.jpg"
                  className="img-fluid"
                />
              </Fade>
            </Col>
          </Row>
          <Row className="justify-content-around align-items-center my-5">
            <Col xs={3} md={2}>
              <Fade delay={900}>
                <Image
                  src="./images/promasaSJT/cliente5.png"
                  className="img-fluid"
                />
              </Fade>
            </Col>
            <Col xs={3} md={2}>
              <Fade delay={1000}>
                <Image
                  src="./images/promasaSJT/cliente6.jpg"
                  className="img-fluid"
                />
              </Fade>
            </Col>
            <Col xs={3} md={2}>
              <Fade delay={1100}>
                <Image
                  src="./images/promasaSJT/cliente7.png"
                  className="img-fluid"
                />
              </Fade>
            </Col>
            <Col xs={3} md={2}>
              <Fade delay={1200}>
                <Image
                  src="./images/promasaSJT/cliente8.png"
                  className="img-fluid"
                />
              </Fade>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
