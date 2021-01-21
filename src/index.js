import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'

import App from './App';
import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  * {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;

    @media screen and (max-width: 75em) {
      font-size: 50%;
    }

    // @media screen and (max-width: 59em) {
    //   font-size: 40%;
    // }

    // @media screen and (max-width: 46.25em) {
    //   font-size: 30%;
    // }
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
