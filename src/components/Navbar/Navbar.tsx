import NavBottom from './NavBottom';
import NavTop from './NavTop';
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    margin: 0 auto;
    padding: 0;
    background-color: var(--nav-bg-color);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    position: relative;
    z-index: 10;
    border-bottom: 2px solid #f0f0f0;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavTop />
            <NavBottom />
        </NavbarContainer>
    );
};

export default Navbar;
