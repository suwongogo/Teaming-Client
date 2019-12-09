import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  
  html, body, header, footer, section, article,
  h1, h2, h3, h4, h5, h6, p, main, aside, table, thead, tbody, tr, th, td,
   ul, li, img, form, input, label, span, nav, a, button {
    font-size: 16px;
    box-sizing: border-box;
    font-weight: 400;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none
  }

  a{
    text-decoration:none;
    color:inherit;
  };
  *{
    box-sizing:border-box;
  };
`;

export default GlobalStyle;
