import "./index.css";
import React from "react";
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "david-ortiz-molina"
  }
};

export default class app extends React.Component {
  state = {
    nomeUsuario: [],
    inputNome: "",
    inputEmail: ""
  };

  criaUsuario = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    };

    axios
      .post(url, body, headers)
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

  lista = () => {
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data.result)
        this.setState({ nomeUsuario: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  componentDidMount() {
    this.lista();
  }
  render() {
    const todos = this.state.nomeUsuario.map((nome) => {
      return <li key={nome.id}>{nome.nome}</li>;
    });
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
        <a href="./components/ListaDeUsuarios">{todos}</a>
      </div>
    );
  }
}
