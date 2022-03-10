import styled from 'styled-components';

export const NavItems = styled.li<{
    BColor: string;
    Start?: boolean;
    End?: boolean;
    Content?: string;
}>`
    display: list-item;
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
    width: 14.28571%;
    float: left;
    &.active {
        background-color: ${(props) => props.BColor};
        color: #fff;
        .icon-link {
            color: #fff;
        }
        .title {
            color: #fff;
        }
    }
    &::before {
        content: ' ';
        height: 93px;
        left: 0;
        position: absolute;
        top: 0;
        z-index: 2;
    }
    /* style button to no styling */
    button {
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        height: 87px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        color: #898989;
        .icon-link::before {
            /* content: '\f11f'; */
            content: ${(props) => (props.Content ? props.Content : '')};
        }
        .fill {
            display: block;
            width: 100%;
            height: 0;
            left: 0;
            position: absolute;
        }
        .icon-link {
            display: block;
            font-family: 'icon';
            font-size: 28px;
            position: relative;
            margin: 15px 0 4px;
            text-align: center;
            line-height: 100%;
            padding: 0;
        }
        .title {
            font-size: 14px;
            font-weight: 500;
            line-height: 14px;
            text-align: center;
            margin: 4px 0;
        }
    }
    &:hover {
        background-color: ${(props) => props.BColor};
        color: #fff;
        .icon-link {
            color: #fff;
        }
        .title {
            color: #fff;
        }
    }
    &::after {
        content: ' ';
        height: 6px;
        position: absolute;
        bottom: -6px;
        width: 100%;
        left: 0;
        z-index: 2;
        background-color: ${(props) => props.BColor};
        ${(props) =>
            props.Start &&
            `
            border-radius: 0 0 0 8px;
            `}
        ${(props) =>
            props.End &&
            `
            border-radius: 0 0 8px 0;
            `}
    }
    @media (max-width: 767px) {
        .icon-link::before {
            content: none;
            display: none;
        }
    }
`;
