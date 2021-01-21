import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];
  grid-template-rows: 100vh repeat(6, min-content);
  // grid-gap: 2rem;
`