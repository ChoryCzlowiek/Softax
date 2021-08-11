import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
