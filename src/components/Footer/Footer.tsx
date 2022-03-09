import styled from 'styled-components';

const FooterStyle = styled.div`
    background-color: #1f1f1f;
    color: #919191;
    padding: 1rem;
    font-family: 'Flexo-Regular', arial, sans-serif;
    font-size: 14px;

    .Footer-content-wrapper {
        margin: 0 auto;
        max-width: 1024px;
        width: auto;
        h1 {
            color: #919191;
            cursor: default;
            font-weight: normal;
        }
        h2 {
            color: #919191;
            cursor: default;
            font-weight: normal;
        }
        a {
            color: #919191;
            text-decoration: none;
            line-height: 1.5;
            &:hover {
                text-decoration: underline;
                color: #0c47b4;
            }
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
            <div className='Footer-content-wrapper'>
                <h1>Pokemon.com Copy made from 3/1/22, 3/9/22</h1>
                <h2>Using react, TypeScript, Styled Components, and react-Slick.</h2>
                <h2>
                    Made by: <a href='www.marcosarosas.dev'>Marcos A Rosas</a>
                </h2>
            </div>
        </FooterStyle>
    );
};

export default Footer;
