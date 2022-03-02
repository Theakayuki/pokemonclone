import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #424242;
        

    }

    //setup variables for color
    :root {
        --nav-bg-color: #f5f5f5;
        --nav-main-color: #fff;

    }
`;

export default GlobalStyle;
