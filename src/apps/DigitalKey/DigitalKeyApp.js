import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import NavDK from './components/ui/NavDK';
import FooterDK from './components/ui/FooterDK';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import FloatLink from '../Portfolio/components/ui/FloatLink';

import 'bootstrap/dist/css/bootstrap.min.css';
import './DigitalKey.css';

const DigitalKeyApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="p-0">
      <NavDK />
      <Home />
      <About />
      <Services />
      <Advantages />
      <Contact />
      <FooterDK />
      <FloatLink />
    </Container>
  );
};

export default DigitalKeyApp;
