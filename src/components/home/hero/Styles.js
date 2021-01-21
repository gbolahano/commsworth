import styled from 'styled-components';

import color from '../../constants/color';

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 1 / 2;
  z-index: 5;
  height: 100vh;

`

export const Caption = styled.div`
  height: 100vh;
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(50%);
  }
  div {
    position: absolute;
    top: calc(50vh - 15rem);
    left: 12rem;
    z-index: 3;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50vw;
    letter-spacing: 2px;
    text-align: left;
    h2 {
      font-size: 5rem;
      margin-bottom: 30px;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.6;
    }
  }
  @media screen and (max-width: 64em) {
    div {
      h2 {
        font-size: 4rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 44.12em) {
    div {
      h2 {
        font-size: 3rem;
      }
    }
  }
  @media screen and (max-width: 36.25em) {
    div {
      // h2 {
      //   font-size: 3rem;
      // }
      p {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 23.75em) {
    div {
      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }

`;

export const StyledButton = styled.a`
  margin-top: 40px;
  display: flex;
  cursor: pointer;
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
`;