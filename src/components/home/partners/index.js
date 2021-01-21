import React from 'react';
import $ from 'jquery';

import ceo from '../../../assets/ceo.jpg';
import nestle from '../../../assets/nestle.jpg';
import firstbank from '../../../assets/firstbank.png';
import gtbank from '../../../assets/gtbank.png';
import lafarge from '../../../assets/lafarge.png';
import act from '../../../assets/act.jpeg';
import chevron from '../../../assets/chevron.jpg';
import dangote from '../../../assets/dangote.png';
import fcmb from '../../../assets/fcmb.png';
import { Container, Description, About, Partners, Partner, Caption, StyledButton} from './Styles';

const Index = () => {
  const scroll = (direction) => {
    let far = $( '.card-container' ).width()/2*direction;
    let pos = $('.card-container').scrollLeft() + far;
    $('.card-container').animate( { scrollLeft: pos }, 1000)
  }
  return (
    <Container>
      <Description>
        <span></span>
        <p>Our partners</p>
        <div>
          Our team seek to help our organiztion navigate this threshold that stands
          between your brands and distinctive innovations, and finding your brands inner sanctum
        </div>
      </Description>

      <Partners onMouseEnter={() => scroll(1)} className="card-container">
        <Partner
          cstart={1}
          cend={2}
          rstart={1}
          rend={2}
        >
          <img src={nestle}/>
        </Partner>
        <Partner
          cstart={2}
          cend={3}
          rstart={1}
          rend={2}
        >
          <img src={firstbank}/>
        </Partner>
        <Partner
          cstart={3}
          cend={4}
          rstart={1}
          rend={2}
        >
          <img src={gtbank}/>
        </Partner>
        <Partner
          cstart={4}
          cend={5}
          rstart={1}
          rend={2}
        >
          <img src={lafarge}/>
        </Partner>
        <Partner
          cstart={5}
          cend={6}
          rstart={1}
          rend={2}
        >
          <img src={chevron}/>
        </Partner>


        <Partner
          cstart={1}
          cend={2}
          rstart={2}
          rend={-1}
        >
          <img src={act}/>
        </Partner>
        <Partner
          cstart={2}
          cend={3}
          rstart={2}
          rend={-1}
        >
          <img src={chevron}/>
        </Partner>
        <Partner
          cstart={3}
          cend={4}
          rstart={2}
          rend={-1}
        >
          <img src={dangote}/>
        </Partner>
        <Partner
          cstart={4}
          cend={5}
          rstart={2}
          rend={-1}
        >
          <img src={fcmb}/>
        </Partner>
        <Partner
          cstart={5}
          cend={6}
          rstart={2}
          rend={-1}
        >
          <img src={gtbank}/>
        </Partner>
      </Partners>

      <About>
        <figure>
          <img src={ceo} alt="" srcset=""/>
        </figure>
        <div>
          <p>
            " Working with TruCSR was the best decision i made for my
              business, most people underestimate the importance of Social
              responsibility in this country, i'm glad we consulted TruCSR "
          </p>
          <span>Mr Kelechi Onuacho</span>
          <Caption>CEO, Nestle</Caption>
        </div>
      </About>
      <StyledButton>
        <a>See More Testimonials</a>
        <span>&rarr;</span>
      </StyledButton>
    </Container>
   );
}

export default Index;