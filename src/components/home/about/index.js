import React from 'react';

import about  from '../../../assets/about-1.jpg';
import aboutb  from '../../../assets/about-2.jpg';
import { Container, Description, About, Abou, StyledButton} from './Styles';

const Index = () => {
  return (
    <Container>
      <Description>
        <span></span>
        <p>ABOUT US</p>
        <div>
          <b>TCSRN founded in 2006</b>, is a consulting company that helps organiztions to contribute to their societal goals of a philantropic, activist, or
          charitable nature by changing in or supporting volunteering or ethically-oriented practices
        </div>
      </Description>

      <About>
        <figure>
          <img src={about} alt="" srcset=""/>
        </figure>
        <div>
          <span>Our Story</span>
          <p>
          The TruContact CSR Nigeria seed was sown long before the founder; <b>Kenneth Egbas</b> would even conceive the dream of starting a company.
          Life didn't always hand him a fair deal. From his early days and upon gradauation from university
          he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovaion,
          equitable distribution of resources, justice, reduce weastage and help eradicate poverty in Africa. This gave eings to the dream that
          became TruContact CSR Nigeria.
          </p>
        </div>
      </About>

      <Abou>
        <figure>
          <img src={aboutb} alt="" srcset=""/>
        </figure>
        <div>
          <p>
          TCSRN was founded in 2006, and carried out what many have come to acknowledge as trail blazing spadework that led to a rapid growth of whathas become a vibrant and viable corporate social
          responsibility and sustainability induxtry in Nigeria, and Africa
          </p>
          <StyledButton>
            <a>READ FULL STORY</a>
            <span>&rarr;</span>
          </StyledButton>
        </div>
      </Abou>
    </Container>
   );
}

export default Index;