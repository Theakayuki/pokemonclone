import NavTop from './NavTop';
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: var(--nav-bg-color);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

    .nav-bottom {
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavTop />
            <div className='nav-bottom'></div>
        </NavbarContainer>
    );
};

export default Navbar;
