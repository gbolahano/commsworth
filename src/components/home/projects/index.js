import React from 'react';
import $ from 'jquery';

import projecta from '../../../assets/hero-1.jpg';
import projectb from '../../../assets/hero-2.jpg';
import projectc from '../../../assets/service-2.jpg';
import projectd from '../../../assets/service-1.jpg';
import { Container, Description, Section, StyledButton, Card, Arrow, LeftArrow, RightArrow } from './Styles';

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
        <p>our projects</p>
      </Description>

      <Arrow>
        <LeftArrow onClick={() => scroll(-1)}>&larr;</LeftArrow>
        <RightArrow onClick={() => scroll(1)}>&rarr;</RightArrow>
      </Arrow>

      <Section className="card-container">
        <Card>
          <figure>
            <img src={projectb} />
          </figure>
          <div>
            <h2>Save the Children initiative powered by Chevron</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eum porro. Ex reprehenderit, incidunt maxime voluptatem delectus corporis expedita soluta provident rem molestiae ullam dolor in corrupti nisi culpa deleniti.</p>
          </div>
        </Card>
        <Card>
          <figure>
            <img src={projecta} />
          </figure>
          <div>
            <h2>14th Edition of the SERAS CSR Awards</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eum porro. Ex reprehenderit, incidunt maxime voluptatem delectus corporis expedita soluta provident rem molestiae ullam dolor in corrupti nisi culpa deleniti.</p>
          </div>
        </Card>
        <Card>
          <figure>
            <img src={projectc} />
          </figure>
          <div>
            <h2>Save the Children initiative powered by Chevron</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eum porro. Ex reprehenderit, incidunt maxime voluptatem delectus corporis expedita soluta provident rem molestiae ullam dolor in corrupti nisi culpa deleniti.</p>
          </div>
        </Card>
        <Card>
          <figure>
            <img src={projectd} />
          </figure>
          <div>
            <h2>Save the Children initiative powered by Chevron</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, eum porro. Ex reprehenderit, incidunt maxime voluptatem delectus corporis expedita soluta provident rem molestiae ullam dolor in corrupti nisi culpa deleniti.</p>
          </div>
        </Card>

      </Section>
      <StyledButton>
        <a>View all projects</a>
        <span>&rarr;</span>
      </StyledButton>
    </Container>
   );
}

export default Index;