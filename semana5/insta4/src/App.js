import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  state = {
    posts: [
      {
        nome: "paulinha",
        foto: "https://picsum.photos/50/50",
        Post: "https://picsum.photos/50/60"
      },
      {
        nome: "ana",
        foto: "https://picsum.photos/50/70",
        Post: "https://picsum.photos/50/80"
      },
      {
        nome: "Matheus",
        foto: "https://picsum.photos/50/90",
        Post: "https://picsum.photos/50/91"
      }
    ],
    valorInputNome: "",
    valorInpuFoto: "",
    valorInputPost: ""
  };

  addPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputFoto,
      post: this.state.valorInputPost
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novoPosts });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };

  render() {
    const publicados = this.state.posts.map((publicado) => {
      return (
        <MainContainer>
          <Post
            nomeUsuario={publicado.nome}
            fotoUsuario={publicado.foto}
            fotoPost={publicado.post}
          />
        </MainContainer>
      );
    });
    return (
      <div>
        <div>
          <input
            // Mesma lógica do exemplo anterior
            value={this.state.valorInputNome}
            // Repare na função que é passada aqui no onChange
            onChange={this.onChangeInputNome}
            placeholder={"Seu nome"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFoto}
            // E a função também é outra
            onChange={this.onChangeInputFoto}
            placeholder={"Sua foto"}
          />
          <input
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Conteudo da publicação"}
          />
          <button onClick={this.addPost}>Nova postagem</button>
        </div>
        <div>{publicados}</div>
      </div>
    );
  }
}


export default App;
