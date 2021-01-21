import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Caption, StyledButton} from './Styles';
import hero from '../../../assets/hero-1.jpg';
import herob from '../../../assets/hero-2.jpg';

const Index = () => {
  return (
    <Container>
      <Carousel
        showThumbs={false}
        dynamicHeight={false}
        showStatus={false}
        infiniteLoop={true}
        >
        <Caption>
          <img src={herob}/>
          <div>
            <h2>We are in the business of <em>sustainability</em></h2>
            <p>
              <b>TCSRN founded in 2006,</b> is a consulting company that helps
              organiztions to contribute to their societal goals of a philanthropic,
              activist, or charitable nature by engaging in or supporting
              volunteering or ethically-oriented practices
            </p>
            <StyledButton>
              <a>Explore Site</a>
              <span>&darr;</span>
            </StyledButton>
          </div>
        </Caption>
        <Caption>
          <img src={hero}/>
          <div>
            <h2>
              14th Edition of the SERAS CSR Awards
            </h2>
            <p>
              The Story of The SERAS began in 2007 when the very
              first edition held at Lagos, Nigeria. It'll be holding this
              year at Raddison Blu on the 2nd of February, 2021
            </p>
            <StyledButton>
              <a>Make Reservation</a>
              <span>&rarr;</span>
            </StyledButton>
          </div>
        </Caption>
      </Carousel>
    </Container>
   );
}

export default Index;