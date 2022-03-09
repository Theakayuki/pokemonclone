import styled from 'styled-components';

const Dashboard = styled.div`
    position: fixed;
    left: 0;
    top: 161px;
    width: 59px;
    max-width: 1280px;
    height: 45%;
    z-index: 17;
    overflow: hidden;
    @media (min-width: 1281px) and (max-width: 9999px) {
        left: 50%;
        margin-left: -640px;
    }
    .Dashboard-container {
        background-image: url(${require('../../img/profile-nav-repeat-bg.png')});
        background-repeat: repeat-y;
        float: left;
        min-height: 84.25px;
        margin-top: 15px;
        position: relative;
        width: 100%;
        cursor: pointer;
    }
    .Dashboard-container::before {
        background: transparent url(${require('../../img/profile-nav-bg.png')}) left -34px;
        /* background-color: blue; */
        background-size: 100%;
        content: ' ';
        display: block;
        height: 19px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: -15px;
        width: 100%;
    }

    .Login {
        position: absolute;
        width: 57px;
        /* background: #54b564; */
        .Login-bgColor {
            background: #54b564;
            background-repeat: repeat-y;
            float: left;
            min-height: 84.25px;
            /* margin-top: 15px; */
            position: relative;
            width: 100%;
            cursor: pointer;
            /* transform: translateY(-15px); */
        }
        .Login-container {
            display: block;
            padding-bottom: 12.7969px;
            display: block;
            margin: 25% 0;
            background: #54b564;
        }

        .icon {
            border-radius: 17px 17px 17px 17px;
            background: #54b564;
            width: 30px;
            height: 30px;
            margin: 2px auto;
            img {
                width: 35px;
                height: 35px;
                margin: -3px 0 0 -3px;
                margin-bottom: 0.25em;
            }
        }
        .sign-in-text {
            font-size: 10px;
            color: #ffffff;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    .Login::after {
        background: transparent url(${require('../../img/profile-nav-bg.png')}) left -51px;
        content: ' ';
        display: block;
        height: 1px;
        left: 0;
        opacity: 0;
        position: absolute;
        top: -17px;
        width: 100%;
    }
    .Search {
        background-image: url('${require('../../img/profile-nav-search-bg.png')}');
        float: left;
        height: 67px;
        margin: 0 auto;
        margin-top: 0;
        width: 59px;
        text-align: center;
        font-weight: 500;
        button {
            background: transparent;
            border: 0;
            color: #fff;
            font-size: 26.25px;
            height: 67px;
            line-height: 67px;
        }
        button::before {
            font-family: 'icon';
            content: '\f132';
        }
    }
`;

const Login = () => {
    return (
        <Dashboard>
            <div className='Dashboard-container'>
                <div className='Login'>
                    <div className='Login-bgColor'>
                        <div className='Login-container'>
                            <div className='icon'>
                                <img
                                    src={require('../../img/profile-nav-signup.png')}
                                    alt='Sign up'
                                />
                            </div>
                            <div className='sign-in-text'> Log In </div>
                        </div>
                    </div>
                    <div className='Search'>
                        <button className='Search-button'></button>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default Login;
