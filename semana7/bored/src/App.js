import './App.css';
import React from "react";
import axios from "axios";
import styled from "styled-components";

// Styled component named StyledButton


const Centro = styled.div`
  width: 100%;
  height: 100vh;
  background-color: cyan;
  display: flex
`;

const Conteudo = styled.div`
  width: 90%;
  height: 100%;
`;

const Menu = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
`;

const Botao = styled.button`
  width: 100%;
  height: 7%;
  background-color: rgba(10, 23, 55, 0.5)
`;

const imagem = styled.img`
  width: 400px;
  height: 384px;
`;



export default class App extends React.Component {
  state = {
    activity: {},
  }

  getActivity = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=recreational")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria2 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=education")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria3 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=relaxation")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria4 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=music")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria5 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=charity")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria6 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=social")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria7 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=cooking")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria8 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=busywork")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  categoria9 = () => {
    axios
      .get("http://www.boredapi.com/api/activity?type=diy")
      .then((res) => {
        console.log(res.data);
        this.setState({activity: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {activity, type, participants, price } = this.state.activity
    return (
      <div className="App">
        <Centro>
          <Conteudo>
          <h1>Está entediado?</h1>
          <button onClick={this.getActivity}>Clique aqui!</button>
          <h3>Atividade</h3>
          <p>Nome: {activity} </p>
          <p>Tipo: {type}</p>
          <p>Participantes: {participants} </p>
          <p>Preço: ${price} </p>
          </Conteudo>
          <imagem src={require('./bored.png')} alt="Cade?"/>
          <Menu>
            <p>Categorias</p>
            <Botao onClick={this.categoria}>aaa</Botao>
            <Botao onClick={this.categoria2}>aaa</Botao>
            <Botao onClick={this.categoria3}>aaa</Botao>
            <Botao onClick={this.categoria4}>aaa</Botao>
            <Botao onClick={this.categoria4}>aaa</Botao>
            <Botao onClick={this.categoria5}>aaa</Botao>
            <Botao onClick={this.categoria6}>aaa</Botao>
            <Botao onClick={this.categoria7}>aaa</Botao>
            <Botao onClick={this.categoria8}>aaa</Botao>
            <Botao onClick={this.categoria9}>aaa</Botao>
          </Menu>
        </Centro>
      </div>
    );
  }
}