import { createGlobalStyle } from 'styled-components';
import RoobertRegular from './roobert-regular.woff2';
import RoobertSemiBold from './roobert-semibold.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roobert';
    src: url(${RoobertRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roobert';
    src: url(${RoobertSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  body {
    font-family: 'Roobert', sans-serif !important;
    margin: 0;
    padding: 0;
  }
`;
