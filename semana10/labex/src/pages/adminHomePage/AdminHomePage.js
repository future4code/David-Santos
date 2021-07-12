import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import axios from "axios";
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
    width: 400px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

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


function AdminHomePage() {

    const history = useHistory();

    const useProtectedPage = () => {    
      useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          alert("Não está logado!!!");
          history.push("/login");
        }
      }, []);
    };

    useProtectedPage();

    const goToCreateTripPage = () => {
        history.push("/trips/create")
    }

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/trips")
        .then((res)=>{
            setTrips(res.data.trips)
        })
    }, [trips]);

    const deleteTrip = (id) => {

      const token = localStorage.getItem('token')
        const header ={
            headers: {
                auth: token
            }
        }

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/trips/${id}`, header)
        .then((response)=>{
          alert("Removido com sucesso")
        })
        .catch((error)=>{
          alert("Deu errado, tente novamente")
        })
    }

   

    return (
        <Main>
            <button onClick={goToCreateTripPage}>Nova viagem</button>
            <div>{trips.map((e)=>{
            return <Card key={e.id}>
              <div>
                <p>Nome: {e.name}</p>
                <p>Planeta: {e.planet}</p>
              </div>
              <button onClick={()=>deleteTrip(e.id)}>Excluir</button>
              </Card>
            })}
            </div>
        </Main>
    )
}

export default AdminHomePage
