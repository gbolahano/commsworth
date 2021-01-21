import React from 'react';
import { Container, Section, FooterNav, Address} from './Styles';

const Index = () => {
  return (
    <Container>
      <Section>
        <FooterNav>
          <h2>Customer Service</h2>
          <ul>
            <li>FAQs</li>
            <li>Customer Service</li>
          </ul>
        </FooterNav>
        <FooterNav>
          <h2>Business</h2>
          <ul>
            <li>Careers</li>
            <li>Partner with Us</li>
            <li>Investor Relations</li>
          </ul>
        </FooterNav>
        <FooterNav>
          <h2>Company</h2>
          <ul>
            <li>About Us </li>
            <li>Services</li>
            <li>Partners</li>
            <li>Customer Stories</li>
            <li>Contact Us</li>
          </ul>
        </FooterNav>
        <Address>
          <p>Lagos Nigeria</p>
          <p>30, Shakiru Anjorin Street, Road 39, Off</p>
          <p>Admirality Way, Lekki Phase 1, Lekki, Lagos</p>
          <p>Phone: +234 123 4456</p>
          <div>
            icons
          </div>
        </Address>

      </Section>
    </Container>
   );
}

export default Index;