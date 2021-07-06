import './styles.js';
import React, { useState,useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";


const CardPerfil = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img{
    width: 330px;
    height: 500px;
  }
`;


function TelaInicial() {
  const [id, setId] = useState("")
  const [idade, setIdade] = useState(1);
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [bio, setBio] = useState("");  

  useEffect(()=>{
    apresentaPerfil()
  }, [])
  
  const apresentaPerfil = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/david-ortiz-molina/person
      `)
      .then((res) => {
        setId(res.data.profile.id)
        setIdade(res.data.profile.age)
        setNome(res.data.profile.name)
        setFoto(res.data.profile.photo)
        setBio(res.data.profile.bio)
      })
      .catch((err) => {
        alert(err);
      });
  }

  const gostou = () => {
    const body = {
      id: id,
      choice: true,
    }
    axios
      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/david-ortiz-molina/choose-person`, body, {
        headers: {
          Authorization: 'Content-Type: application/json',
        }
      })
      .then((res) => {
        apresentaPerfil()
      })
  }

  const naoGostou = () => {
    const body = {
      id: id,
      choice: false,
    }
    axios
      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/david-ortiz-molina/choose-person`, body, {
        headers: {
          Authorization: 'Content-Type: application/json',
        }
      })
      .then((res) => {
        apresentaPerfil()
      })
  }

  const limpaMatches = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/david-ortiz-molina/clear")
    .then((res)=>{
    })
  }

  return (
    <div className="App">
      <CardPerfil>
        <p>Nome: {nome}, {idade}</p>
        <img src={foto} alt="Alguma coisa"/>
        <p>bio: {bio}</p>
        </CardPerfil>
        <button onClick={gostou}>like</button>
        <button onClick={naoGostou}>deslike</button>
        <button onClick={limpaMatches}>Limpa</button>
    </div>
  );
}

export default TelaInicial;