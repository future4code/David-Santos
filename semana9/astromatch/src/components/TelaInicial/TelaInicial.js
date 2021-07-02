import './styles.js';
import React, { useState,useEffect} from 'react';
import axios from "axios"

function TelaInicial() {
  const [id, setId] = useState("");
  const [idade, setIdade] = useState(1);
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [bio, setBio] = useState("");
  const [escolha, setEscolha] = useState()
  
  const gostou = () => {
    setEscolha(true)
  }

  const naoGostou = () => {
    setEscolha(false)
  }

  useEffect(() => {
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
  }, [escolha]);

  /*useEffect(() => {
    const body = {
      id: id,
      choice: escolha
    }
    axios
      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/david-ortiz-molina/choose-person`, body, {
        headers: {
          Authorization: 'Content-Type: application/json',
        }
      })
      .then((res) => {
        console.log(res.data.isMatch)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [escolha]);*/

  return (
    <div className="App">
      <p>Nome: {nome}</p>
      <p>idade: {idade}</p>
      <p>bio: {bio}</p>
      <img src={foto} alt="Alguma coisa"/>
      <button onClick={gostou}>like</button>
      <button onClick={naoGostou}>deslike</button>
    </div>
  );
}

export default TelaInicial;