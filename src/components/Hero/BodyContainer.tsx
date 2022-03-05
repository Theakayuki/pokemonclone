import styled from 'styled-components';

const BodyContainerStyle = styled.div`
    background: #ffffff url(${require('../../img/container_bg.png')});
    clear: both;
    display: block;
    margin: 0 auto;
    max-width: 1280px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    h1 {
        color: black;
    }
`;

const BodyContainer = (props: any) => {
    return (
        <BodyContainerStyle>
            <div className='Login'></div>
            {props.children}
        </BodyContainerStyle>
    );
};

export default BodyContainer;