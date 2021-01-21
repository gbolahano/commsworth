import React from 'react';
import { Container } from './Styles';

import Navbar from './navbar';
import Hero from './hero';
import About from './about';
import Services from './services';
import Projects from './projects';
import Partners from './partners';
import Blog from './blog';
import Footer from './footer';

const Index = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Partners />
      <Blog />
      <Footer />
    </Container>
   );
}

export default Index;