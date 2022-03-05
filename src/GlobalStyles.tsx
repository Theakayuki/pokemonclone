import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    body {
        background: #424242 url(${require('./img/body_bg.png')});
        margin: 0;
        padding: 0;
        

    }

}   
// add font face icon from icon folder
@font-face {
    font-family: 'icon';
    src: local('icon'), url(${require('./font/icons.woff')}) format('woff');
    font-weight: normal;
    font-style: normal;
}

    //setup variables for color
    :root {
        --nav-bg-color: #f5f5f5;
        --nav-main-color: #fff;

    }
`;

export default GlobalStyle;
