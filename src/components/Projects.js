import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";

const Home = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={10}>
        <RubberBand delay={2100}>
          <p className="titles text-white title-home">Projects</p>
        </RubberBand>
      </Col>
      <Col xs={12}>
        <RubberBand delay={2200}>
          <p className="titles text-white h2">Ironhack Projects</p>
        </RubberBand>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={2300}>
          <p className="titles h3 text-white text-center lendt-title">Lendt</p>
          <p className="texts text-white text-center">
            Web App to search stuffs and contact its owner
          </p>
          <div className="d-flex justify-content-around align-items-center">
            <Button
              variant="light"
              size="sm"
              className="texts"
              onClick={() => {
                window.open("https://github.com/eamzea/Presta-Front", "_blank");
              }}
            >
              Front Repo
            </Button>
            <Button
              variant="light"
              size="sm"
              className="texts"
              onClick={() => {
                window.open("https://lendt.herokuapp.com/", "_blank");
              }}
            >
              Visit
            </Button>
            <Button
              variant="light"
              size="sm"
              className="texts"
              onClick={() => {
                window.open(
                  "https://github.com/eamzea/Presta-Server",
                  "_blank"
                );
              }}
            >
              Back Repo
            </Button>
          </div>
          <Image
            src="./images/lendt-project.png"
            className="projects-img my-3"
          />
          <Image
            src="./images/lendt-project1.png"
            className="projects-img my-3"
          />
        </Flip>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={2400}>
          <p className="titles h3 text-white text-center medik-title">Medik+</p>
          <p className="texts text-white text-center">
            Web App to search doctors and schedule an appointment
          </p>
          <div className="d-flex justify-content-around align-items-center">
            <Button
              variant="light"
              size="sm"
              className="texts"
              onClick={() => {
                window.open("https://github.com/eamzea/mediApp", "_blank");
              }}
            >
              Repo
            </Button>
            <Button
              variant="light"
              size="sm"
              className="texts"
              onClick={() => {
                window.open("https://medikplus.herokuapp.com/", "_blank");
              }}
            >
              Visit
            </Button>
          </div>
          <Image
            src="./images/medik-project.png"
            className="projects-img my-3"
          />
          <Image
            src="./images/medik-project1.png"
            className="projects-img my-3"
          />
        </Flip>
      </Col>
      <Col xs={10}>
        <RubberBand delay={2500}>
          <p className="titles text-white title-home">Mobile projects</p>
        </RubberBand>
      </Col>
      <Col xs={12}>
        <RubberBand delay={2600}>
          <p className="titles text-white h2">React Native Projects</p>
        </RubberBand>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={2700}>
          <p className="titles h3 text-white text-center lendt-title">
            Tracker APP
          </p>
          <p className="texts text-white text-center">
            Mobile App to save our tracks
          </p>
          <Button variant="light" size="sm" className="texts my-3">
            Repo
          </Button>
          <video loop autoPlay className="videos-projects">
            <source src="./images/tracker.mp4" type="video/mp4" />
          </video>
        </Flip>
      </Col>
      <Col xs={12} className="margin-bottom-footer">
        <Row>
          <Col xs={4} className="d-flex flex-column justify-content-center">
            <RubberBand delay={2800}>
              <p className="titles text-white title-home">Hobbies</p>
              <p className="titles text-white h2">Games</p>
              <Button variant="light" size="sm" className="texts my-3">
                Follow Me !
              </Button>
            </RubberBand>
          </Col>
          <Col xs={8} className="text-center">
            <Flip top delay={2900}>
              <Image
                src="./images/instagram-profile.png"
                className="instagram-img my-3"
              />
            </Flip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
