import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slide from '../Ui/Slide';
import Slider from 'react-slick';
import styled from 'styled-components';

const SliderStyle = styled.div`
    .Slider-widget {
        padding-top: 2em;
        padding-bottom: 2em;
        position: relative;
        overflow: hidden;
        width: 100%;
        min-height: 21rem;
        .slider-title {
            display: block;
            margin: 0 auto;
            overflow: hidden;
            max-width: 1024px;
            width: 100%;
            .title-position {
                float: left;
                margin-right: -100%;
                margin-left: 7.2525%;
                width: 85.49%;
                .title-box {
                    font-family: 'Flexo-Medium', arial, sans-serif;
                    background: #232323;
                    color: #919191;
                    float: left;
                    font-size: 20px;
                    margin-top: 5px;
                    margin-bottom: 0;
                    position: relative;
                    padding: 11px 20px 8px;
                    text-transform: none;
                    vertical-align: middle;
                    width: auto;
                    border-radius: 5px 5px 0 0;
                    .icon-Pokeball {
                        &:before {
                            content: '\f12a';
                            font-family: 'icon';
                            font-size: 20px;
                            color: #ffffff;
                            display: inline;
                        }
                    }
                    h2 {
                        margin: 0;
                        font-weight: normal;
                        font-family: arial, sans-serif;
                        font-size: 20px;
                        display: inline;
                    }
                }
            }
        }
        .slider-content {
            min-height: 430px;
            background: none;
            border-top: 3px solid #232323;
            clear: both;
            display: block;
            float: left;
            position: relative;
            width: 100%;
            .slider-list {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                height: 100%;
                /* width: 5643px; */
                min-height: 336px;
                margin: 0;
                padding: 0;
                list-style-type: none;
                text-align: center;
                background: transparent url(require('../../img/pokemon-slider-bg.png')) repeat-x 0 0;
                white-space: nowrap;
                /* font-size: 0; */
            }
        }
    }
    .slick-list {
        overflow: visible !important;
    }
    .slick-track {
        width: 8000px !important;
    }

    .slider-More-wrapper {
        margin: 0;
        padding: 0;
        width: 100%;
        .slider-More {
            float: right;
            .slider-More-text {
                background-color: #232323;
                border-radius: 5px;
                border: none;
                clear: both;
                color: #fff;
                cursor: pointer;
                font-size: 105%;
                float: left;
                line-height: 125%;
                margin: 1.5625%;
                padding: 0.75em 1.25em 0.675em;
                vertical-align: middle;
                text-align: center;
                text-transform: none;
                font-family: 'Flexo-Demi', arial, sans-serif;
                width: 12rem;
                margin-right: 14rem;
            }
        }
    }
`;

const PrevArrow = styled.div`
    position: absolute !important;
    top: 45%;
    left: 0px;

    cursor: pointer;
    width: 45px;
    height: 45px;

    background-image: url(${require('../../img/slider-btns.png')}) !important;
    background-size: cover !important;
    background-position: 0 0 !important;
    z-index: 1;
    transform: translateX(40px) scale(2);
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }
    &:before {
        content: '' !important;
    }
`;

const NextArrow = styled.div`
    position: absolute !important;
    top: 45%;
    right: 0px;
    cursor: pointer;
    width: 40px;
    height: 45px;
    background-image: url(${require('../../img/slider-btns.png')}) !important;
    background-size: cover !important;
    background-position: -45px 0 !important;
    z-index: 1;
    transform: translateX(-40px) scale(2);
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }
    &:before {
        content: '' !important;
    }
`;

const Sliders = () => {
    return (
        <SliderStyle>
            <section className='Slider-widget'>
                <div className='slider-title'>
                    <div className='title-position'>
                        <div className='title-box'>
                            <span className='icon-Pokeball'></span>
                            <h2> Featured Pokémon </h2>
                        </div>
                    </div>
                </div>
                <div className='slider-content'>
                    <Slider
                        className='slider variable-width'
                        dots={false}
                        infinite={true}
                        speed={200}
                        slidesToShow={5}
                        slidesToScroll={1}
                        variableWidth={true}
                        centerMode={true}
                        adaptiveHeight={true}
                        rows={1}
                        prevArrow={<PrevArrow />}
                        nextArrow={<NextArrow />}
                    >
                        <Slide
                            BgNumber='033'
                            PokeName='Nidorino'
                            Type1='Poison'
                            Abilities='Poison Point/Rivalry'
                        />
                        <Slide
                            BgNumber='126'
                            PokeName='Magmar'
                            Type1='Fire'
                            Abilities='Flame Body'
                        />
                        <Slide
                            BgNumber='310'
                            PokeName='Manectric'
                            Type1='Electric'
                            Abilities='Static / Lightning Rod'
                        />
                        <Slide
                            BgNumber='410'
                            PokeName='Sheldon'
                            Type1='Rock'
                            Type2='Steel'
                            Abilities='Sturdy'
                        />
                        <Slide
                            BgNumber='472'
                            PokeName='Gliscor'
                            Type1='Ground'
                            Type2='Flying'
                            Abilities='Sand Veil / Hyper Cutter'
                        />
                        <Slide
                            BgNumber='623'
                            PokeName='Golrock'
                            Type1='Ground'
                            Type2='Ghost'
                            Abilities='Iron Fist / Klutz'
                        />
                        <Slide
                            BgNumber='782'
                            PokeName='Jangmo-o'
                            Type1='Dragon'
                            Abilities='Bulletproof / Soundproof'
                        />
                        <Slide
                            BgNumber='799'
                            PokeName='Guzzlord'
                            Type1='Dark'
                            Type2='Dragon'
                            Abilities='Beast Boost'
                        />
                        <Slide
                            BgNumber='826'
                            PokeName='Orbeetle'
                            Type1='Bug'
                            Type2='Psychic'
                            Abilities='Swarm / Frisk'
                        />
                        <Slide
                            BgNumber='852'
                            PokeName='Clobbopus'
                            Type1='Fighting'
                            Abilities='Limber'
                        />
                    </Slider>
                </div>
                <div className='slider-More-wrapper'>
                    <div className='slider-More'>
                        <p className='slider-More-text'>Explore More Pokémon</p>
                    </div>
                </div>
            </section>
        </SliderStyle>
    );
};

export default Sliders;
