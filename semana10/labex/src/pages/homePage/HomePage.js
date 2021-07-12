import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import fundo from "../../img/fundo.jpg"

const Main = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${fundo});
    width: 100vw;
    height: 100vh;

    h1{
        color: white;
        font-size: 40px;
    }

    button{
        height: 30px;
        border-radius: 7px;
        background-color: transparent;
        outline: none;
        color: white;
        font-size: 20px;
        border: 20px purple;
    }

    button:hover{
      cursor: pointer;
      color: purple;
    }
`

function HomePage() {

    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/trips/list")
    };

    const goToAdminLogin = () => {
        history.push("/login")
    };

    return (
        <Main>
            <h1>LABEX</h1>
            <div>
            <button onClick={goToTripsPage}>Viagens</button>
            <button onClick={goToAdminLogin}>Area Admin</button>
            </div>
        </Main>
    )
}

export default HomePage
