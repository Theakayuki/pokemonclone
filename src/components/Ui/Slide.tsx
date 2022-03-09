import styled from 'styled-components';

const SlideStyled = styled.div<{ Active?: boolean }>`
    position: relative;
    float: none;
    display: inline-block;
    /* font-size: 0; */
    white-space: nowrap;
    margin: 0 0 0 -4px;
    width: 250px;
    height: 380px;
    background: #616161;
    border-left: 3px solid #232323;
    z-index: 1;
    /* top: 0; */
    vertical-align: top;
    .BG-text {
        font-family: arial, sans-serif;
        display: block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        height: 250px;
        position: static;
        text-align: center;
        font-size: 120px;
        color: #525252;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        padding: 15px 0;
        background: #616161;
    }
    .BG-img {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -125px;
        width: 250px;
        height: 250px;
        /* z-index: 2; */
        opacity: 0.4;
    }
    .Bg-Info {
        position: relative;
        left: 0;
        padding: 20px;
        width: 210px;
        max-height: 90px;
        background: #313131;
        white-space: normal;
        overflow: hidden;
        /* margin-top: 250px; */
        h5 {
            font-family: arial, sans-serif;
            color: #fff;
            font-size: 24px;
            text-transform: none;
            margin: 0;
            margin-bottom: 20px;
            width: 100%;
            span {
                float: right;
            }
        }
        dl {
            ${(props) => (props.Active ? 'opacity: 1;' : 'opacity: 0;')}
            /* opacity: 0; */
            width: 320px;
            font-family: arial, sans-serif;
            dt {
                display: block;
                float: left;
                margin: 0;
                width: 100px;
                text-transform: none;
                font-size: 100%;
                line-height: 110%;
                color: #fff;
                word-wrap: break-word;
            }
            dd {
                margin: 0;
                padding: 0;
                border: 0;
                width: 220px;
                word-wrap: break-word;
                display: block;
                float: left;
                min-height: 20px;
                margin-bottom: 10px;
                span {
                    display: inline-block;
                }
            }
            &:before {
                content: '';
                display: table;
            }
            &:after {
                clear: both;
            }
        }
    }

    .slick-current & {
        width: 360px !important;
        max-width: 360px !important;
        background-color: #525252;
        z-index: 3;
        border-right: 3px solid #232323;

        .BG-img {
            z-index: 2;
            opacity: 1;
            transform: scale(1.25) translateY(-15px);
        }
        .Bg-Info {
            background: #232323;
            width: 320px;
            max-height: 300px;
            min-height: 95px;
            border-radius: 0 0 5px 5px;
            left: -3px;
            padding: 20px 23px 15px 23px;
            position: relative;
            color: #fff;
            dl {
                opacity: 1;
            }
        }
    }
    .Grass {
        background: #7bc043;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Fire {
        background: #ff5b00;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Water {
        background: #00b0ff;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Bug {
        background: #2a4117;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Normal {
        background: #a4a4a4;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Electric {
        background: #ffd800;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Ground {
        background: linear-gradient(180deg, #e0c068 50%, #b8a038 50%);
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Fighting {
        background: #c22e28;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Psychic {
        background: linear-gradient(180deg, #f85888 50%, #eb3349 50%);
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Rock {
        background: #b8a038;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Ice {
        background: #a3e4ff;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Ghost {
        background: #7b62a3;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Dragon {
        background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Dark {
        background: #707070;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Poison {
        background: #a040a0;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
    .Steel {
        background: #b7b7ce;
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
        color: #212121;
    }
    .Flying {
        background: linear-gradient(180deg, #53a4cf 50%, #b7b7ce 50%);
        padding: 4px 6px;
        border-radius: 4px 4px 4px 4px;
    }
`;

type SlideProps = {
    BgNumber: string;
    PokeName: string;
    Type1: string;
    Type2?: string;
    Abilities: string;
    Active?: boolean;
};

const Slide = ({ BgNumber, PokeName, Type1, Type2, Abilities, Active }: SlideProps) => {
    return (
        <SlideStyled Active={Active}>
            <div className='BG-text'>{BgNumber}</div>
            <img className='BG-img' src={require(`../../img/` + BgNumber + `.png`)} alt='bg' />
            <div className='Bg-Info'>
                <h5>
                    {PokeName}
                    <span>{BgNumber}</span>
                </h5>
                <dl>
                    <dt>Type</dt>
                    <dd>
                        <span className={Type1}> {Type1} </span>
                        <> </>
                        <span className={Type2}> {Type2} </span>
                    </dd>
                    <dt>Abilities</dt>
                    <dd>{Abilities}</dd>
                </dl>
            </div>
        </SlideStyled>
    );
};

export default Slide;
