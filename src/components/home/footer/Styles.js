import styled from "styled-components";
import color from '../../constants/color';

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 7 / 8;

  background-color: ${color.darkBlue};

  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
`;

export const Section = styled.div`
  grid-column: 3 / 15;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  padding: 40px 10px;
  grid-gap: 8rem;

  `;

export const FooterNav = styled.div`
  h2 {
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: bold;
  }
  ul {
    list-style: none;
    li {
      color: ${color.serviceText};
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${color.serviceText};
  font-size: 1.4rem;
  white-space: nowrap;
  & > * {
    margin-bottom: 10px;
  }
  p:first-of-type {
    text-transform: uppercase;
  }
`;