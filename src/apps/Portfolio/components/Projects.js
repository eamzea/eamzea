import React, { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWindow = (e) => {
    switch (e.target.id) {
      case "FrontRepoLendt":
        return window.open("https://github.com/eamzea/Presta-Front", "_blank");
      case "BackRepoLendt":
        return window.open("https://github.com/eamzea/Presta-Server", "_blank");
      case "FrontRepoCalendar":
        return window.open(
          "https://github.com/eamzea/CalendarMERNApp",
          "_blank"
        );
      case "Calendar":
        return window.open(
          "https://calendar-mern-eamz.herokuapp.com/",
          "_blank"
        );
      case "BackRepoCalendar":
        return window.open(
          "https://github.com/eamzea/CalendarMERNAppBack",
          "_blank"
        );
      case "RepoMedik+":
        return window.open("https://github.com/eamzea/mediApp", "_blank");
      case "Medik+":
        return window.open("https://medikplus.herokuapp.com/", "_blank");
      case "RepoTracker":
        return window.open(
          "https://github.com/eamzea/ReactNavigationGeoApp",
          "_blank"
        );
      case "RepoScratch":
        return window.open(
          "https://github.com/eamzea/ReactNativeScratchApp",
          "_blank"
        );
      case "Instagram":
        return window.open("https://www.instagram.com/eamzdev/", "_blank");
      default:
        return null;
    }
  };

  return (
    <Row className="justify-content-center">
      <Col xs={10}>
        <Bounce delay={500}>
          <p className="titles text-white title-home">Web Projects</p>
        </Bounce>
      </Col>
      <Col xs={12}>
        <Bounce delay={500}>
          <p className="titles text-white h2">Ironhack Projects</p>
        </Bounce>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={500}>
          <p className="titles h3 text-white text-center lendt-title">Lendt</p>
          <p className="texts text-white text-center">
            Web App to search stuffs and contact its owner
          </p>
          <div className="d-flex justify-content-around align-items-center">
            <button
              className="texts eamz-btn lendt-btn"
              id="FrontRepoLendt"
              onClick={openWindow}>
              Front Repo
            </button>
            <button
              className="texts eamz-btn lendt-btn"
              id="BackRepoLendt"
              onClick={openWindow}>
              Back Repo
            </button>
          </div>
          <Image
            src="./images/portfolio/lendt-project.png"
            className="projects-img my-3"
          />
          <Image
            src="./images/portfolio/lendt-project1.png"
            className="projects-img my-3"
          />
        </Flip>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={500}>
          <p className="titles h3 text-white text-center medik-title">Medik+</p>
          <p className="texts text-white text-center">
            Web App to search doctors and schedule an appointment
          </p>
          <div className="d-flex justify-content-around align-items-center">
            <button
              className="texts eamz-btn medik-btn"
              id="RepoMedik+"
              onClick={openWindow}>
              Repo
            </button>
            <button
              className="texts eamz-btn medik-btn"
              id="Medik+"
              onClick={openWindow}>
              Visit
            </button>
          </div>
          <Image
            src="./images/portfolio/medik-project.png"
            className="projects-img my-3"
          />
          <Image
            src="./images/portfolio/medik-project1.png"
            className="projects-img my-3"
          />
        </Flip>
      </Col>
      <Col xs={12}>
        <Bounce delay={500}>
          <p className="titles text-white h2">Personal Projects</p>
        </Bounce>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={500}>
          <p className="titles h3 text-white text-center calendar-title">
            Calendar
          </p>
          <p className="texts text-white text-center">Web to schedule events</p>
          <div className="d-flex justify-content-around align-items-center">
            <button
              className="texts eamz-btn calendar-btn"
              id="FrontRepoCalendar"
              onClick={openWindow}>
              Front Repo
            </button>
            <button
              className="texts eamz-btn calendar-btn"
              id="Calendar"
              onClick={openWindow}>
              Visit
            </button>
            <button
              className="texts eamz-btn calendar-btn"
              id="BackRepoCalendar"
              onClick={openWindow}>
              Back Repo
            </button>
          </div>
          <Image
            src="./images/portfolio/calendar-login.png"
            className="projects-img my-3"
          />
          <Image
            src="./images/portfolio/calendar-view.png"
            className="projects-img my-3"
          />
        </Flip>
      </Col>
      <Col xs={10}>
        <Bounce delay={500}>
          <p className="titles text-white title-home">Mobile projects</p>
        </Bounce>
      </Col>
      <Col xs={12}>
        <Bounce delay={500}>
          <p className="titles text-white h2">React Native Projects</p>
        </Bounce>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={500}>
          <p className="titles h3 text-white text-center mobileApp-title">
            Tracker APP
          </p>
          <p className="texts text-white text-center">
            Mobile App to save our tracks
          </p>
          <div className="d-flex justify-content-center align-items-center my-3">
            <button
              className="texts eamz-btn mobileApp-btn"
              id="RepoTracker"
              onClick={openWindow}>
              Repo
            </button>
          </div>
          <video loop className="videos-projects" controls>
            <source
              src="https://res.cloudinary.com/dsrp4vbij/video/upload/v1590528106/EAMZ/tracker_uykhpt.mp4"
              type="video/mp4"
            />
          </video>
        </Flip>
      </Col>
      <Col lg={6} xs={12} className="text-center">
        <Flip top delay={500}>
          <p className="titles h3 text-white text-center mobileApp-title">
            Scratch Game APP
          </p>
          <p className="texts text-white text-center">Simple Game</p>
          <div className="d-flex justify-content-center align-items-center my-3">
            <button
              className="texts eamz-btn mobileApp-btn"
              id="RepoScratch"
              onClick={openWindow}>
              Repo
            </button>
          </div>
          <video loop className="videos-projects" controls>
            <source
              src="https://res.cloudinary.com/dsrp4vbij/video/upload/v1602122642/EAMZ/ScratchGame_cloim1.mov"
              type="video/mp4"
            />
          </video>
        </Flip>
      </Col>
      <Col xs={12} className="margin-bottom-footer">
        <Row>
          <Col xs={7} className="text-center">
            <Flip top delay={500}>
              <Image
                src="./images/portfolio/instagram-profile.png"
                className="instagram-img my-3"
              />
            </Flip>
          </Col>
          <Col xs={5} className="d-flex flex-column justify-content-center">
            <Bounce delay={500}>
              <p className="titles text-white title-home">Hobbies</p>
              <p className="titles text-white h2">Games</p>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="instagram-btn eamz-btn texts"
                  id="Instagram"
                  onClick={openWindow}>
                  Follow Me !
                </button>
              </div>
            </Bounce>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Projects;