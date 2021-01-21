import React from 'react';

import servicea from '../../../assets/service-1.jpg';
import serviceb from '../../../assets/service-2.jpg';
import servicec from '../../../assets/service-3.jpg';
import serviced from '../../../assets/service-4.jpg';
import { Container, Description, Services, StyledButton, Card, CardBody} from './Styles';

const Index = () => {
  return (
    <Container>
      <Description>
        <span></span>
        <p>Our Services</p>
        <div>
          <b>TCSRN founded in 2006</b>, is a consulting company that helps organiztions to contribute to their societal goals of a philantropic, activist, or
          charitable nature by changing in or supporting
        </div>
      </Description>

      <Services>

        <Card>
          <figure>
            <img src={servicea} />
          </figure>
          <CardBody>
            <h2>Consulting</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatem quam, porro harum, beatae voluptatum necessitatibus doloribus nostrum obcaecati illum quod iure totam exercitationem vero assumenda quibusdam nemo et eaque.</p>
            <StyledButton>
              <a>WORK WITH US</a>
              <span>&rarr;</span>
            </StyledButton>
          </CardBody>
        </Card>
        <Card>
          <figure>
            <img src={servicec} />
          </figure>
          <CardBody>
            <h2>Impact Measurement & Accessment</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatem quam, porro harum, beatae voluptatum necessitatibus doloribus nostrum obcaecati illum quod iure totam exercitationem vero assumenda quibusdam nemo et eaque.</p>
            <StyledButton>
              <a>WORK WITH US</a>
              <span>&rarr;</span>
            </StyledButton>
          </CardBody>
        </Card>
        <Card>
          <figure>
            <img src={serviced} />
          </figure>
          <CardBody>
            <h2>Engagement Design</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatem quam, porro harum, beatae voluptatum necessitatibus doloribus nostrum obcaecati illum quod iure totam exercitationem vero assumenda quibusdam nemo et eaque.</p>
            <StyledButton>
              <a>WORK WITH US</a>
              <span>&rarr;</span>
            </StyledButton>
          </CardBody>
        </Card>
        <Card>
          <figure>
            <img src={serviceb} />
          </figure>
          <CardBody>
            <h2>Strategy</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium voluptatem quam, porro harum, beatae voluptatum necessitatibus doloribus nostrum obcaecati illum quod iure totam exercitationem vero assumenda quibusdam nemo et eaque.</p>
            <StyledButton>
              <a>WORK WITH US</a>
              <span>&rarr;</span>
            </StyledButton>
          </CardBody>
        </Card>

      </Services>
    </Container>
   );
}

export default Index;