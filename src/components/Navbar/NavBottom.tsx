import { useEffect, useState } from 'react';

import { NavItems } from './NavItems';
import styled from 'styled-components';

// import { useIntersectionObserver } from 'usehooks-ts';

const NavBottomContainer = styled.div<{ Scrolled: boolean }>`
    ${(props) => (props.Scrolled ? 'height: 57px; ' : 'height: 87px; ')}
    width: 100%;
    background-color: var(--nav-main-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${(props) =>
        props.Scrolled &&
        `
        position: fixed;
        top: 0;
        `}

    .menu-wrap {
        max-width: 1024px;
        width: 895px;
        vertical-align: baseline;
        ul {
            padding: 0;
            margin: 0 auto;
            width: 100%;
            list-style: none;
            li {
                ${(props) => (props.Scrolled ? 'margin: auto 0; ' : '')}
                ${(props) => (props.Scrolled ? 'height: 57px; ' : 'height: 87px; ')}
                .menu-link {
                    ${(props) => (props.Scrolled ? 'height: 57px; ' : 'height: 87px; ')}
                    ${(props) => (props.Scrolled ? 'justify-content: center; ' : '')}
                }
            }
        }
    }
    @media (max-width: 1024px) {
        max-width: 100%;
        height: 57px !important;
        .menu-wrap {
            ul {
                li {
                    margin: 0 auto;
                    height: 57px !important;
                    .menu-link {
                        height: 57px !important;
                        justify-content: center;
                        .title {
                            font-size: 0.6rem;
                        }
                    }
                }
            }
        }
    }
`;

const NavBottom = () => {
    //setup useEffect that will check when the window is scrolled, once it is scrolled, it will run the function that will update state isScrolled
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 64) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavBottomContainer Scrolled={isScrolled}>
            <div className='menu-wrap'>
                <ul>
                    <NavItems BColor='#919191' className='active' Start Content='"\f11f"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            {!isScrolled && <span className='icon-link'></span>}
                            <span className='title'>Home</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#e3350d' Content='"\f12a"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            {!isScrolled && <span className='icon-link'></span>}
                            <span className='title'>Pokédex</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#d56723' Content='"\f121"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            {!isScrolled && <span className='icon-link'></span>}
                            <span className='title'>Video Games & Apps</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#e6bc2f' Content='"\f109"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            {!isScrolled && <span className='icon-link'></span>}
                            <span className='title'>Trading Card Game</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#4dad5b' Content='"\f12c"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            {!isScrolled && <span className='icon-link'></span>}
                            <span className='title'>Pokémon TV</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#30a7d7' Content='"\f112"'>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            {!isScrolled && <span className='icon-link'></span>}
                            <span className='title'>Play! Pokémon Events</span>
                        </button>
                    </NavItems>
                    <NavItems BColor='#1b53ba' Content='"\f138"' End>
                        <button className='menu-link'>
                            <span className='fill'></span>
                            {!isScrolled && <span className='icon-link'></span>}
                            <span className='title'>News</span>
                        </button>
                    </NavItems>
                </ul>
            </div>
        </NavBottomContainer>
    );
};

export default NavBottom;
