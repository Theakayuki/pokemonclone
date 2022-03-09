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

@font-face {
    font-family: 'Flexo-Regular';
    src: url('href="//db.onlinewebfonts.com/c/51ba22ae06790efd464bde752a2cd9d1?family=Flexo');
}
@keyframes Bumpup {
                0% {
                    transform: translateY(0);
                }
                25% {
                    transform: translateY(-5px);
                }
                50% {
                    transform: translateY(-10px);
                }
                100% {
                    transform: translateY(0);
                }
            }
    //setup variables for color
    :root {
        --nav-bg-color: #f5f5f5;
        --nav-main-color: #fff;

    }
`;

export default GlobalStyle;
