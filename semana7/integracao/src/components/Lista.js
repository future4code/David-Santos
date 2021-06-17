import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between
`


export default class Lista extends React.Component {
    state = {
        usuarios: []
    }

    lista = () => {
        const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios
      .get(url, {headers: {
        Authorization: "david-ortiz-molina"
      }})
      .then((res) => {
        this.setState({ usuarios: res.data});
      })
      .catch((err) => {
          console.log(err)
        alert("Ocorreu um erro, tente novamente");
      });
  };

  componentDidMount() {
    this.lista();
  }

  removerUsuario = (id) => {
    const url =
  `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {headers: {
        Authorization: "david-ortiz-molina"
      }})
      .then((res)=>{
       alert("Removido com sucesso")
        this.lista()
    })
    .catch((err)=>{
        alert("Ocorreu um erro, tente novamente")
    })
  }
  render() {
    const todos = this.state.usuarios.map((nome) => {
      return <CardUsuario key={nome.id}>
          {nome.name}
          <button onClick={() => this.removerUsuario(nome.id)}>X</button>
          </CardUsuario>;
    });

    return (
      <div>
        <button onClick={this.props.TelaCadastro}>cadastro</button>
        <h1>Lista</h1>
        {todos}
      </div>
    );
  }
}