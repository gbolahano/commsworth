import styled from "styled-components";
import color from '../../constants/color';

export const Container = styled.div`
  grid-column: col-start 2 / center-end;
  grid-row: 6 / 7;

  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  grid-gap: 50px;
  margin-bottom: 50px;
`;

export const Description = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: flex;
  // grid-template-columns: 40px max-content 1fr;
  grid-gap: 20px;
  justify-content: center;

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

export const Blog = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

`;

export const BlogCard = styled.div`
  display: grid;
  background-color: indigo;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 62.5em) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;

    figure {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
  }

  figure {
    grid-column: 1 / 2;
    img {
      filter: brightness(50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }


`;

export const BlogCardBody = styled.div`
  grid: 2 / -1;
  @media screen and (max-width: 62.5rem) {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
  background-color: ${color.blogCardBg};
  padding: 30px 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, min-content);
  grid-gap: 30px;
`;

export const Date = styled.p`
  text-transform: uppercase;
  color: ${color.date};
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 10px;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  line-height: 1.2;
  color: ${color.darkBlue};
`;

export const Caption = styled.div`
  font-size: 2rem;
  line-height: 1.4;
  margin-bottom: 30px;
  color: ${color.caption};
`;

export const StyledButton = styled.div`
  // justify-self: end;
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

  &:hover span {
    margin-left: -10px;
  }
`;

