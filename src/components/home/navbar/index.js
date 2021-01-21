import React, { useState } from "react";

import { Container, Logo, NavLinks, BurgerMenu, StyledButton } from './Styles';

const Index = () => {
  const [showNav, setShowNav] = useState(0);

  const handleToggle = () => {
    if (showNav) {
      setShowNav(0);
      return;
    }
    setShowNav(1);
  }
  return (
    <Container>
      <Logo>TRUCSR</Logo>
      <NavLinks toggle={showNav}>
          <li><a href="">Services</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">CSR Academy</a></li>
          <li><a href="">Publications</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Media</a></li>
          <li>
          <StyledButton>
            <p>Contact us</p>
            <span>&rarr;</span>
          </StyledButton>
          </li>
      </NavLinks>
      <BurgerMenu onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerMenu>

    </Container>
   );
}

export default Index;