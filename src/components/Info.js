import React, { useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const Info = () => {
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

  const openFile = () => {
    window.open(
      "https://res.cloudinary.com/dsrp4vbij/image/upload/v1590528649/EAMZ/EAMZ-FullStack_oyq6k7.pdf",
      "_blank"
    );
  };

  const openWindow = (e) => {
    switch (e.target.name) {
      case "linkedin":
        return window.open("https://www.linkedin.com/in/eamzea/", "_blank");
      case "github":
        return window.open("https://github.com/eamzea", "_blank");
      case "insta":
        return window.open("https://www.instagram.com/eamzdev/", "_blank");
      default:
        return null;
    }
  };

  return (
    <Row className="justify-content-center">
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-center text-white title-info">Let's talk</p>
        </RubberBand>
      </Col>
      <Col xs={10} lg={4}>
        <Flip top delay={1000}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="name">Your Name</InputGroup.Text>
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
      <Col xs={10} lg={4}>
        <Flip top delay={1100}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="email">Your Email</InputGroup.Text>
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
      <Col xs={10}>
        <Flip top delay={1200}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="subject">
                What are you looking?
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              name="subject"
              placeholder="I have an excellent business idea"
              className="textarea-info"
              onChange={handleChange}
            />
          </InputGroup>
        </Flip>
      </Col>
      <Col xs={12} className="d-flex justify-content-center align-items-center">
        {isReady() ? (
          <Bounce top>
            <button className="texts eamz-btn ready-btn px-5 py-3">
              I'm Ready
            </button>
          </Bounce>
        ) : (
          <Fade big>
            <Button variant="light" size="sm" disabled className="texts">
              Not Ready
            </Button>
          </Fade>
        )}
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-center text-white title-info">
            Social Accounts
          </p>
        </RubberBand>
      </Col>
      <Col xs={12} className="d-flex justify-content-around align-items-center">
        <Flip top delay={1400}>
          <div>
            <button
              name="github"
              className="texts eamz-btn github-btn px-5 py-3"
              onClick={openWindow}
            >
              <Image
                name="github"
                src="./images/github-icon.png"
                className="social-icon"
              />
            </button>
          </div>
          <div>
            <button
              name="linkedin"
              className="texts eamz-btn linkedin-btn px-5 py-3"
              onClick={openWindow}
            >
              <Image
                name="linkedin"
                src="./images/linkedin-icon.png"
                className="social-icon"
              />
            </button>
          </div>
          <div>
            <button
              name="insta"
              className="texts eamz-btn instagram-btn px-5 py-3"
              onClick={openWindow}
            >
              <Image
                name="insta"
                src="./images/instagram-icon.png"
                className="social-icon"
              />
            </button>
          </div>
        </Flip>
      </Col>
      <Col xs={12} className="my-3">
        <RubberBand>
          <p className="titles text-center text-white title-info">
            Are you looking my resume?
          </p>
        </RubberBand>
      </Col>
      <Col
        xs={12}
        className="margin-bottom-footer d-flex justify-content-center align-items-center"
      >
        <Flip top delay={1400}>
          <button className="texts cv-btn eamz-btn" onClick={openFile}>
            Click Me
          </button>
        </Flip>
      </Col>
    </Row>
  );
};

export default Info;
