import styled from "styled-components";
import color from '../../constants/color';

export const Container = styled.div`
  grid-column: col-start 2 / center-end;
  grid-row: 3 / 4;
  padding-top: 50px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  grid-gap: 50px;
`;

export const Description = styled.div`
  grid-column: 1 / -1;
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

export const Services = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, 300px);


  figure {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      transition: 0.5s ease;
    }
    &:hover img {
      transform: scale(1.3);
    }
  }
`;

export const CardBody = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 20px;
  background-color: ${color.darkBlue};
  padding: 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  h2 {
    color: white;
    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: 2px;
  }
  p {
    color: white;
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${color.serviceText};
  }
`;

export const StyledButton = styled.div`
  justify-self: end;
  display: flex;
  cursor: pointer;
  width: 220px;
  a {
    outline: none;
    color: ${color.greenButtonText};
    font-size: 1.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid ${color.greenButtonText};
    margin-right: 15px;
    margin-top: 7px;
  }
  span {
    display: inline-block;
    color: ${color.greenButtonText};
    font-size: 3rem;
    transition: 0.3s ease;
  }

  &:hover span {
    margin-left: -10px;
  }
`;

