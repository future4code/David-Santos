import './styles.js';
import React, {useState, useEffect} from 'react';
import axios from "axios"
import styled from "styled-components";


const Matches = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  div{
    width: 300px;
    border: 2px solid black;
    display: flex;
    align-itens: center;
    justify-content: space-between
  }
`;

function TelaMatches() {
  
  const [todosMatches, setTodosMatches] = useState([]);

  useEffect(() => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/david-ortiz-molina/matches`)
      .then((res) => {
       setTodosMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <Matches>{todosMatches.map((e)=>{
      return <div key={e.id}><img src={e.photo}/><p>{e.name}</p></div>
    })}</Matches>
  );
}

export default TelaMatches;