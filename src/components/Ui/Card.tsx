import styled from 'styled-components';

const CardStyle = styled.div<{
    Direction?: string;
    BackGroundColor?: string;
    Large?: boolean;
    subtitle?: string;
    half?: boolean;
}>`
    display: flex;
    flex-direction: ${(props) => (props.Direction === 'row' ? 'row' : 'column')};
    justify-content: center;
    ${(props) => props.half && 'margin-right: 1em;'};
    float: left;
    ${(props) =>
        props.Large ? 'max-width: 578px; width: 100%;' : 'max-width: 578px; width: 48.4375%;'};
    background-color: ${(props) => props.BackGroundColor};
    border-radius: 10px;
    overflow: hidden;
    margin-top: 1em;

    img {
        width: 100%;
        ${(props) => (props.Direction === 'row' ? 'width: 40%' : '')};
    }
    h3 {
        /* width: 100%; */
        display: block;
        text-align: left;
        margin: 0;
        padding: 0;
        margin: 0.75em 0.5em 0 1em;
        ${(props) => !props.subtitle && 'margin-bottom: 0.75em;'};
        font-family: 'Flexo-Regular', arial, sans-serif;
        font-size: 22px;
        line-height: 25.7812px;
        font-weight: 400;
        color: #ffffff;
    }
    p {
        font-family: 'Roboto', arial, sans-serif;
        font-size: 100%;
        font-weight: 500;
        line-height: 125%;
        margin-left: 1.25em;
    }
    &:hover {
        transition: all 0.5s ease;
        animation: Bumpup 0.1s ease;
    }
    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`;

type CardProps = {
    children?: any;
    className?: string;
    /** Use the file Name only, we are referencing the img directory */
    imgName: string;
    /** Input the main title/description */
    title?: string;
    /** Input the subtitle */
    subtitle?: string;
    /** Direction of the card, accepts row and column */
    Direction?: string;
    /** Background color of the card, Accepts and css color */
    BackGroundColor?: string;
    /** Large card, apply if card is 100% width */
    Large?: boolean;
    /** Half card, apply if card is 50% width */
    half?: boolean;
};

const Card = ({ imgName, title, subtitle, Direction, BackGroundColor, Large, half }: CardProps) => {
    return (
        <CardStyle
            Direction={Direction}
            BackGroundColor={BackGroundColor}
            Large={Large}
            subtitle={subtitle}
            half={half}
        >
            <img src={require(`../../img/${imgName}`)} alt={imgName} />
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p>}
        </CardStyle>
    );
};

export default Card;
