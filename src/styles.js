import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: #1e212d;
    font-family: 'Roboto Mono', monospace;
    color: #fff;
    font-size: 20px;

    .breakLength {
        display: flex;
        justify-content: space-between;
        width: 70%; 
        text-align: center;     
    }
    h3 {
        font-size: 20px;
    }

    .increase-decrease {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        p {
            font-size: 20px;
            margin: 0px 10px;
        }

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }

    .timer {
        width: 70%;
        text-align: center;
        border-top: 1px solid #46507A;  

        h1 {
            border-bottom: 1px solid #46507A;
            padding-bottom: 10px;
            width: 200px;
            margin: auto;
            margin-bottom: 30px;
            font-size: 55px;
            color: ${props => props.secMinutes <= 0 ? 'red' : 'white'};
        }
    }

    .pause-play-refresh {
        button {
            padding: 1px;
            background-color: transparent;
            border: none;
            cursor: pointer;   
        }
        .midbutton {
            margin: 0px 10px
        }
    }
`;