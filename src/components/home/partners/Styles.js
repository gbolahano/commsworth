import styled from "styled-components";

import color from '../../constants/color';

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 5 / 6;

  background-color: ${color.blogCardBg};
  padding: 50px 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, min-content);
  grid-gap: 40px;
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
    text-transform: uppercas;
    font-weight: bold;
    display: block;
    letter-spacing: 2px;
    font-size: 1.8rem;
  }
  div {
    grid-column: 4 / -1;
    font-size: 1.9rem;
    line-height: 1.7;
    margin-left: 20px;
    color: ${color.partnerText};
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

export const Partners = styled.div`
  grid-column: 3 / 12;
  grid-row: 2 / 3;

  display: grid;
  grid-gap: 3rem;

  padding: 10px 10px;

  grid-template-columns: repeat(7, 230px);
  grid-template-rows: repeat(2, 120px);
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  // overflow-y: none;
  white-space: none;
`;

export const Partner = styled.div`
  // display: inline-block;
  // height: 120px;
  grid-column: ${props => props.cstart / props.cend};
  grid-row: ${props => props.rstart / props.rend};
  background-color: white;
  box-shadow: 0 2rem 4.5rem rgba(0,0,0, .15);
  img {
    width: 100%;
    height: 100%;
    object-fit: center;
    display: block;
  }
`;

export const About = styled.div`
  margin-top: 30px;
  grid-column: 4 / 12;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 220px;

  grid-gap: 40px;
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
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: bold;
      color: ${color.darkBlue};
    }
    p {
      font-size: 2.2rem;
      font-weight: bold;
      color: ${color.partnerText};
      line-height: 1.5;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;

    figure {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      height: 300px;
    }
    div {
      grid-column: 1 / -1;
      grid-row: 2 / -1;
    }
  }
`;

export const Caption = styled.div`
  color: ${color.date};
  font-size: 1.4rem;
`;

export const StyledButton = styled.div`
  display: flex;
  cursor: pointer;
  grid-column: 8 / 12;
  grid-row: 4 / -1;
  @media screen and (max-width: 56.25em) {
    grid-column: 4 / 12;
  }
  a {
    outline: none;
    color: ${color.brandGreen};
    font-size: 1.7rem;
    letter-spacing: 2px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid ${color.brandGreen};
    margin-right: 15px;
    margin-top: 7px;
    text-transform: uppercase;
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