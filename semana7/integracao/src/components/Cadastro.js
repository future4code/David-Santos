import React from "react";
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


export default class Cadastro extends React.Component {
  state = {
    inputNome: "",
    inputEmail: ""
  };

  criaUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(url, body, {headers: {
        Authorization: "david-ortiz-molina"
      }})
      .then((res) => {
        alert("Cadastro concluído");
        this.setState({ inputNome: "" });
        this.setState({ inputEmail: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputNome}
          onChange={this.onChangeNome}
          placeholder="nome"
        />
        <input
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
          placeholder="email"
        />
        <br />
        <button onClick={this.criaUsuario}> Enviar</button>
        <button onClick={this.props.TelaLista}> lista</button>
      </div>
    );
  }
}