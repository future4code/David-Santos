import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import fundo from "../../img/fundo.jpg";
import axios from "axios"

const Main = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${fundo});
    width: 100vw;
    height: 100vh;
`


const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      alert("Não está logado!!!");
      history.push("/login");
    }
  }, []);
};

function TripDetailsPage() {
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/david-ortiz-molina/trip/ZL92zHymPMtJ28AIh2r6",
          {
            headers: {
              auth: token
            }
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log("Deu erro: ", error.response);
        });
    }, []);
    return (
        <Main>
           <h1> Desisto </h1>
        </Main>
    )
}

export default TripDetailsPage
