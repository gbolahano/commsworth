import styled from "styled-components";
import color from '../../constants/color';

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 2 / 3;
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, min-content);
  padding: 40px 0;
  grid-gap: 20px;
  grid-row-gap: 60px;

`;

export const Description = styled.div`
  grid-column: 3 / 12;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 40px max-content 1fr;
  grid-gap: 20px;

  span {
    border-top: 3px solid ${color.darkBlue};
    grid-column: 1 / 2;
    width: 40px;
    margin-top: 10px;
  }
  p {
    color: ${color.darkBlue};
    grid-column: 2 / 3;
    padding-top: 5px;
    font-weight: bold;
    text-transform: uppercas;
    display: block;
    letter-spacing: 2px;
    font-size: 1.8rem;
  }
  div {
    grid-column: 4 / -1;
    font-size: 1.9rem;
    line-height: 1.7;
    margin-left: 20px;
  }

  @media screen and (max-width: 48em) {
    grid-template-columns: 40px 1fr;
    grid-template-rows: min-content min-content;

    justify-items: center;
    span {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-self: start;
    }
    p {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    div {
      grid-column: 1 / -1;
      grid-row: 2 / -1;
    }

  }

`;

export const About = styled.div`
  grid-column: 3 / 12;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 60px;

  figure {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-top-left-radius: 50px;
      box-shadow: 0 2rem 8rem rgba(0,0,0, .2);
    }
  }
  div {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    span {
      display: block;
      margin-bottom: 30px;
      font-size: 2rem;
      font-weight: bold;
      color: ${color.darkBlue};
    }
    p {
      font-size: 1.9rem;
      line-height: 1.7;
    }
  }
  @media screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;

    figure {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
    div {
      grid-column: 1 / -1;
      grid-row: 2 / -1;
    }
  }
`;

export const Abou = styled.div`
  grid-column: 3 / 12;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 60px;
  figure {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    padding-left: 100px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-bottom-left-radius: 50px;
      box-shadow: 0 2rem 8rem rgba(0,0,0, .2);
    }
  }
  div {
    grid-column: 2 / -1;
    grid-row: 1 / -1;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    p {
      font-size: 1.9rem;
      line-height: 1.7;
    }
  }
  @media screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;

    figure {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      padding-left: 0;
    }
    div {
      grid-column: 1 / -1;
      grid-row: 2 / -1;
    }
  }
`;

export const StyledButton = styled.div`
  display: flex;
  cursor: pointer;
  a {
    outline: none;
    color: ${color.brandGreen};
    font-size: 1.7rem;
    letter-spacing: 2px;
    font-weight: bold;
    border: none;
    text-transfomr: uppercase;
    border-bottom: 1px solid ${color.brandGreen};
    margin-right: 15px;
    margin-top: 7px;
  }
  span {
    display: inline-block;
    color: ${color.brandGreen};
    font-size: 3rem;
    transition: 0.3s ease;
  }

  &:hover span {
    margin-left: -10px;
  }
`;