import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import fundo from "../../img/fundo.jpg"

const Main = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-image: url(${fundo});
    width: 100vw;
    height: 100vh;

    button{
        height: 30px;
        border-radius: 7px;
        border: 1px solid black
    }

    button:hover{
      cursor: pointer;
      color: #fff
    }
`

const Card = styled.div`
    background-color: blueviolet;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button{
        height: 30px;
        border-radius: 7px;
        border: 1px solid black
    }

    button:hover{
      cursor: pointer;
      color: #fff
    }

    p{

    }
`

function ListTripsPage() {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/trips")
        .then((res)=>{
            setTrips(res.data.trips)
        })
    }, []);

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToApplicationPage = () => {
        history.push("/trips/application")
    }


    return (
        <Main>
            <div>
            <button onClick={goToHomePage}>Home</button>
            <button onClick={goToApplicationPage}>Formulário</button>
            </div>
            <div>{trips.map((e)=>{
            return <Card key={e.id}>
                    <p>Nome: {e.name}</p>
                    <p>Destino: {e.planet}</p>
                    <p>Duração: {e.durationInDays}</p>
                    <p>Data: {e.date}</p>
                </Card>
            })}
            </div>
        </Main>
    );
}

export default ListTripsPage
