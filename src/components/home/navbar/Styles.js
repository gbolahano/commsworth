import styled, { css } from 'styled-components';

import color from '../../constants/color';

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 1 / 2;
  height: 10vh;
  z-index: 10;
  color: white;
  margin-left: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const NavLinks = styled.ul`
    margin: 0 auto;
    display: flex;
    align-items: center;
    li {
      list-style: none;
      a {
        text-decoration: none;
        color: white;
        font-size: 1.8rem;
        padding: 0 10px;
        transition: background-color .4s ease;
        &:hover {
          color: ${color.brandGreen};
        }

        &:link,
        &:visited {
          text-decoration: none;
        }
      }

    }

  @media screen and (max-width: 75em) {
    position: absolute;
    padding: 30px 0;
    right: 0px;
    height: 90vh;
    top: 10vh;
    background: linear-gradient(0deg, rgba(6,169,77,1) 5%, rgba(76,185,82,1) 43%);
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: height .6s ease-in;
    ${props => props.toggle == true ?
      css`display: flex;`:
      css`display: none;` };

    li {
      a {
        &:hover {
          color: white;
          background-color: #90ee90;
          padding: 10px 15px;
        }
      }
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  margin-right: 3rem;
  div {
    width: 2.5rem;
    background-color: white;
    margin: 5px;
    height: 3px;
  }
  @media screen and (max-width: 75em) {
    display: block;
  }
`;


export const StyledButton = styled.a`
  display: flex;
  margin-left: 10px;
  width: 180px;
  cursor: pointer;
  background-color: ${color.brandGreen};
  padding: 5px 10px !important;
  border-radius: 7px;
  align-items: center;
  p {
    outline: none;
    color: white;
    font-size: 1.3rem !important;
    letter-spacing: 2px;
    font-weight: bold;
    margin-top: 3px;
    border: none;
    margin-right: 15px;
    text-transform: uppercase;
  }
  span {
    display: inline-block;
    color: white;
    font-size: 2.3rem;
    transition: 0.3s ease;
  }
  &:hover span {
    margin-left: -10px;
  }
`;