import styled from 'styled-components';

const NavBarTop = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.253);
    z-index: 1;
    .banner {
        max-width: 57rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .button {
            vertical-align: middle;
            padding: 9px 10px 8px 10px;
            transition: all 0.2s ease-in-out;
        }
        .button:hover {
            animation-name: bounce;
            animation-duration: 475ms;
        }
        .active {
            background-color: var(--nav-main-color);
            /* setup box shadow from the left and right sides */
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.26),
                0 -0.125rem 0.25rem rgba(0, 0, 0, 0.24);
        }
        .active:hover {
            animation-name: none;
        }
        .promotion-wrapper {
            display: flex;
            transition: all 0.5s ease;
            .promotion {
                transition: all 0.5s ease;
                margin: 6px 0 6px 7px;
                background-color: #fff;

                div {
                    height: 50px;
                    width: 176px;
                    position: relative;
                    box-shadow: inset 1px 1px 0px 1px rgb(0 0 0 / 20%);
                    /* opacity: 0.999; */
                }
            }
            .promotion:hover {
                opacity: 1 !important;
            }
        }
        .promotion-wrapper:hover > .promotion {
            opacity: 0.2;
            background-image: image(require('../../img/unite-176x50.jpg'));
        }
    }
    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        20% {
            transform: translateY(10px);
        }
        30% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(6px);
        }
        60% {
            transform: translateY(0);
        }
        80% {
            transform: translateY(4px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

const NavTop = () => {
    return (
        <NavBarTop>
            <div className='banner'>
                <div className='button active'>
                    <img src={require('../../img/logo-pokemon-79x45.png')} alt='Pokemon.com' />
                </div>
                <div className='button'>
                    <img
                        src={require('../../img/logo-pokemoncenter-79x45.png')}
                        alt='Pokemon Center Shop'
                    />
                </div>
                <div className='button'>
                    <img src={require('../../img/logo-tcgo-79x45.png')} alt='Pokemon TCG Play' />
                </div>
                <div className='promotion-wrapper'>
                    <div className='promotion'>
                        <div
                            style={{
                                backgroundImage: `url(${require('../../img/legends-arceus-176x50-us.jpg')})`,
                            }}
                        >
                            {/* <img
                        src={require('../../img/legends-arceus-176x50-us.jpg')}
                        alt='Arceus'
                    /> */}
                        </div>
                    </div>
                    <div className='promotion'>
                        <div
                            style={{
                                backgroundImage: `url(${require('../../img/swsh09-gus-175-en.jpg')})`,
                            }}
                        >
                            {/* <img
                        src={require('../../img/swsh09-gus-175-en.jpg')}
                        alt='Brilliant Star'
                    /> */}
                        </div>
                    </div>
                    <div className='promotion'>
                        <div
                            style={{
                                background: `url(${require('../../img/unite-176x50.jpg')})`,
                            }}
                        >
                            {/* <img
                        src={require('../../img/unite-176x50.jpg')}
                        alt='Pokemon Unite'
                    /> */}
                        </div>
                    </div>
                </div>
            </div>
        </NavBarTop>
    );
};

export default NavTop;
