import Card from '../Ui/Card';
import Login from './Login';
import Sliders from '../Slider/Slider';
import styled from 'styled-components';

const BodyContainerStyle = styled.div`
    background: #ffffff url(${require('../../img/container_bg.png')});
    clear: both;
    display: block;
    margin: 0 auto;
    max-width: 1280px;
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100%;
    margin: 0 auto;
    .Mosaic {
        display: flex;
        background-color: #ffffff;
        width: auto;
        max-width: 1024px;
        margin: 0 auto;
        margin-top: 2em;
        padding: 10px 0;
        border-radius: 5px;
    }
    .column1 {
        max-width: 578px;
        margin: 0 0 0 auto;
        padding-right: 1em;
    }
    .column2 {
        max-width: 266.625px;
        margin: 0 auto 0 0;
    }
    .column3 {
        width: 281.188px;
        &:nth-child(1) {
            margin-right: 1em;
            margin-top: 3rem;
        }
        &:nth-child(3) {
            margin-left: 1rem;
            margin-top: 3rem;
        }
        .text-container {
            margin-top: 1rem;
            float: left;
            h1 {
                color: #919191;
                cursor: default;
                font-size: 187.5%;
                line-height: 125%;
                text-transform: none;
                font-family: 'Flexo-Regular', arial, sans-serif;
                font-weight: normal;
            }
        }
        .News-Container {
            margin-top: 1rem;
            float: left;
            width: 100%;
            font-family: 'Flexo-Medium', arial, sans-serif;
            clear: both;
            display: block;
            width: 100%;
            position: relative;

            .NewsTop {
                background-color: #ee6b2f;
                border-radius: 5px 5px 0 0;
                float: left;
                width: 100%;
                h1 {
                    color: #fff;
                    margin: 0.75em 0.5em 0 1em;
                    margin-bottom: 0.75em;
                    font-size: 22px;
                    font-weight: 400;
                }
            }
            .NewsBottom {
                background-color: #30a7d7;
                border-radius: 0 0 5px 5px;
                float: left;
                width: 100%;
                p {
                    margin: 0.5em 0.5em 0 1em;
                    margin-bottom: 0.5em;
                    font-size: 18px;
                }
                &::before {
                    content: '';
                    background: url(${require('../../img/default-dog-ear.png')}) no-repeat 0 0;
                    height: 2em;
                    width: 2em;
                    position: absolute;
                    z-index: 3;
                    right: -1px;
                    bottom: -1px;
                    transform: rotate(180deg);
                }
            }
            &:hover {
                transition: all 0.5s ease;
                animation: Bumpup 0.1s ease;
            }
        }
    }
    @media (max-width: 1024px) {
        .Mosaic {
            flex-direction: column;
            margin: 0 auto;
            .column1 {
                max-width: 100%;
                margin: 0 auto;
                padding-right: 0;
            }
            .column2 {
                max-width: 100%;
                margin: 0 auto;
                padding-right: 0;
            }
            .column3 {
                width: 100%;
                &:nth-child(1) {
                    margin-right: 0;
                    margin-top: 0;
                }
                &:nth-child(3) {
                    margin-left: 0;
                    margin-top: 0;
                }
                .text-container {
                    margin-top: 0;
                    float: left;
                }
                .News-Container {
                    margin-top: 0;
                    float: left;
                    width: 100%;
                }
            }
        }
    }
`;

const BodyContainer = (props: any) => {
    return (
        <BodyContainerStyle>
            <Login />
            <div className='Mosaic'>
                <div className='column1'>
                    <Card
                        imgName='pokemon-go-168.jpg'
                        Direction='column'
                        title='Say Aloha to a New Season in Pokemon Go'
                        subtitle='More Pok??mon discovered in the Alola region make their debut, kicking off the Season of Alola.'
                        BackGroundColor='#1b53ba'
                        Large
                    />
                    <Card
                        imgName='pokemon-presents-169.jpg'
                        Direction='column'
                        title='New Games and More Shown during the Latest Pok??mon Presents'
                        BackGroundColor='#a4a4a4'
                        half
                    />
                    <Card
                        imgName='pokemon-go-169.jpg'
                        Direction='column'
                        title='Tapu Koko Pok??mon GO Raid Battle Strategy'
                        subtitle='Learn how to catch and utilize the spirited Electric- and Fairy-type Legendary Pok??mon.'
                        BackGroundColor='#4dad5b'
                    />
                </div>
                <div className='column2'>
                    <Card
                        imgName='scarlet-violet-169-en.jpg'
                        Direction='column'
                        title='Watch the Trailer for Pok??mon Scarlet and Pok??mon Violet'
                        BackGroundColor='#e6bc2f'
                        Large
                    />
                    <Card
                        imgName='swsh09-launch-34-en.jpg'
                        Direction='row'
                        title='Sword & Shield-- Brilliant Stars Out Now'
                        BackGroundColor='#B38AEA'
                        Large
                    />
                    <Card
                        imgName='2022-international-challenge-march-169-en.jpg'
                        Direction='column'
                        title='Receive a Shiny Galarian Zapdos in Pok??mon Sword and Pok??mon Shield'
                        Large
                        BackGroundColor='#b32a0a'
                    />
                </div>
            </div>
            <Sliders />
            <div className='Mosaic'>
                <div className='column3'>
                    <Card
                        imgName='pokemon-legends-arceus-169-en.jpg'
                        Direction='column'
                        title=' Exciting New Content for the Pok??mon Legends: Arceus Game'
                        subtitle=' Take on new challenges in the Daybreak (Ver. 1.1.0) update,
                        receive an in-game gift to celebrate Pok??mon Day, and learn
                        about a new animated project. '
                        BackGroundColor='#B38AEA'
                        Large
                    />
                    <Card
                        imgName='pokemon-unite-169.jpg'
                        Direction='column'
                        title='Make Merry Mischief with Hoopa in Pok??mon UNITE'
                        subtitle=' This Ranged Supporter is ready to astonish, trick, and confuse
                        opponents into submission. '
                        BackGroundColor='#ee6b2f'
                        Large
                    />
                </div>
                <div className='column3'>
                    <Card
                        imgName='march-ranked-battle-season-169-en.jpg'
                        Direction='column'
                        title='Battle in the Latest Pok??mon Sword & Shield Ranked Battle Season'
                        subtitle='Battle for rewards and glory through the end of March in the new
                    Ranked Battles season.'
                        BackGroundColor='#313131'
                        Large
                    />
                    <div className='text-container'>
                        <h1>What's New This Week</h1>
                    </div>
                    <Card
                        imgName='season03-announce-169-en.jpg'
                        Direction='column'
                        title='Journey to Johto on Pok??mon TV'
                        subtitle='Relive some of Ash and friends??? earliest adventures when Pok??mon: The Johto Journeys  comes to Pok??mon TV.'
                        BackGroundColor='#30a7d7'
                        Large
                    />
                </div>
                <div className='column3'>
                    <Card
                        imgName='pokemon-unite-170.jpg'
                        Direction='column'
                        title='Pok??mon UNITE Goes Full-Fury for Pok??mon Day'
                        subtitle='Discover new ways to battle, enjoy special log-in bonuses, and
                    more throughout Pok??mon Day and beyond.'
                        BackGroundColor='#1b53ba'
                        Large
                    />
                    <Card
                        imgName='hisuian-growlithe-169-en.jpg'
                        Direction='column'
                        title='Have Hisuian Growlithe Join Your
                    Pok??mon Legends: Arceus Game'
                        subtitle='Visit GameStop to get a code card that will let you receive Hisuian Growlithe and 20 Feather Balls.'
                        BackGroundColor='#E3350D'
                        Large
                    />
                    <div className='News-Container'>
                        <div className='NewsTop'>
                            <h1>View All News</h1>
                        </div>
                        <div className='NewsBottom'>
                            <p>Keep up with all the latest developments!</p>
                        </div>
                    </div>
                </div>
            </div>
        </BodyContainerStyle>
    );
};

export default BodyContainer;
