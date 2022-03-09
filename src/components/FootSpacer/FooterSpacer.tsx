import styled from 'styled-components';

const FooterSpacerStyle = styled.div`
    clear: both;
    display: block;
    height: 36px;
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    .footer-notch {
        float: left;
        margin-right: -100%;
        width: 85.49%;
        margin-left: 7.2525%;
        background-color: #fff;
        height: 6px;
        position: relative;
        &:before,
        &:after {
            content: '';
            height: 6px;
            position: absolute;
            bottom: 0;
            width: 12px;
        }

        &:before {
            left: -11px;
            background: transparent url(${require('../../img/notch-top-left.png')}) no-repeat;
        }
        &:after {
            right: -11px;
            background: transparent url(${require('../../img/notch-top-right.png')}) no-repeat;
        }
    }
`;

const FooterSpacer = () => {
    return (
        <FooterSpacerStyle>
            <span className='footer-notch'></span>
        </FooterSpacerStyle>
    );
};

export default FooterSpacer;
