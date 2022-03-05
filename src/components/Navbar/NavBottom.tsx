import { NavItems } from './NavItems';
import styled from 'styled-components';

const NavBottomContainer = styled.div`
    height: 87px;
    width: 100%;
    background-color: var(--nav-main-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .menu-wrap {
        max-width: 1024px;
        width: 895px;
        vertical-align: baseline;
        ul {
            padding: 0;
            margin: 0 auto;
            width: 100%;
            list-style: none;
        }
    }
`;

const NavBottom = () => {
    return (
        <NavBottomContainer>
            <div className='menu-wrap'>
                <ul>
                    <NavItems BColor='#919191' className='active' Start Content='"\f11f"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            <span className='icon-link'></span>
                            <span className='title'>Home</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#e3350d' Content='"\f12a"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            <span className='icon-link'></span>
                            <span className='title'>Pokédex</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#d56723' Content='"\f121"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            <span className='icon-link'></span>
                            <span className='title'>Video Games & Apps</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#e6bc2f' Content='"\f109"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            <span className='icon-link'></span>
                            <span className='title'>Trading Card Game</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#4dad5b' Content='"\f12c"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            <span className='icon-link'></span>
                            <span className='title'>Pokémon TV</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#30a7d7' Content='"\f112"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            <span className='icon-link'></span>
                            <span className='title'>Play! Pokémon Events</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#1b53ba' Content='"\f138"' End>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            <span className='icon-link'></span>
                            <span className='title'>News</span>
                        </button>
                    </NavItems>
                </ul>
            </div>
        </NavBottomContainer>
    );
};

export default NavBottom;
