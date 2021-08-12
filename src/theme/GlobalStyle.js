import { createGlobalStyle } from "styled-components";
import BebasNeue from "../assets/fonts/BebasNeue-Regular.ttf";
import Roboto from "../assets/fonts/RobotoCondensed-Regular.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
}

@font-face {
    font-family: 'BebasNeue';
    src: url(${BebasNeue}) format('truetype');
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
}

body{
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.bgcColor};
}

`;

export default GlobalStyle;
