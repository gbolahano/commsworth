import styled from "styled-components";
import color from '../../constants/color';

export const Container = styled.div`
  grid-column: full-start / full-end;
  grid-row: 4 / 5;

  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, min-content);
  // grid-gap: 50px;
`;

export const Description = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: flex;
  // grid-template-columns: 40px max-content 1fr;
  grid-gap: 20px;
  justify-content: center;
  margin-bottom: 30px;

  span {
    border-top: 3px solid ${color.darkBlue};
    // grid-column: 1 / 2;
    width: 40px;
    margin-top: 10px;
  }
  p {
    color: ${color.darkBlue};
    // grid-column: 2 / 3;
    padding-top: 5px;
    font-weight: bold;
    display: block;
    letter-spacing: 2px;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  div {
    grid-column: 4 / -1;
    font-size: 1.9rem;
    line-height: 1.7;
    margin-left: 20px;
  }

`;

export const Section = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  height: 100vh;

  // padding: 0 20px;

  display: grid;
  grid-gap: 2rem;

  grid-template-columns: repeat(4, 500px);
  // grid-template-row: minmax(150px, 1fr);

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: none;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Card = styled.div`
  display: inline-block;
  background-color: green;
  position: relative;
  figure {
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    img {
      filter: brightness(50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: 0.6s ease;
    }
    z-index: 1;
    &:hover img {
      transform: scale(1.2);
    }
  }
  div {
    position: absolute;
    // top: calc(50vh - 16.5rem);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 23;
    // padding: 60px;
    h2 {
      font-size: 4rem;
      line-height: 1.2;
    }
    p {
      margin-top: 30px;
      font-size: 1.8rem;
      line-height: 1.4;
    }
  }
`;

export const Arrow = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  margin-bottom: 15px;
  justify-self: end;
`;


export const LeftArrow = styled.a`
  padding: 10px;
  cursor: pointer;
  color: black;
  margin-left: 10px;
  background-color: ${color.blogCardBg};
  margin-right: 4px;
`;

export const RightArrow = styled.a`
  padding: 10px;
  cursor: pointer;
  color: black;
  margin-right: 10px;
  background-color: ${color.blogCardBg};
`;

export const StyledButton = styled.div`
  grid-column: 1 / -1;
  grid-row: 4 / -1;
  margin: 30px 0;
  justify-self: center;
  padding: 10px 40px;
  border-radius: 7px;
  box-sizing: border-box;
  width: 350px;
  display: flex;
  cursor: pointer;
  background-color: ${color.brandGreen};
  color: white;
  a {
    outline: none;
    // color: ${color.brandGreen};
    font-size: 1.7rem;
    letter-spacing: 2px;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid ${color.brandGreen};
    margin-right: 15px;
    margin-top: 10px;
    text-transform: uppercase;
  }
  span {
    display: inline-block;
    // color: ${color.brandGreen};
    font-size: 3rem;
    transition: 0.3s ease;
  }

  &:hover span {
    margin-left: -10px;
  }
`;
