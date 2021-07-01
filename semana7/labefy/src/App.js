import React from "react";
import axios from 'axios'
import styled from "styled-components";
import './App.css';

const SuasPlaylists = styled.div`
    border: 1px solid;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr
`

const Conteudo = styled.div`
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    `
    const Listap = styled.div`
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    `
  


const GerenciaPlaylists = styled.div`
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr
`
const GerenciaMusicas = styled.div`

    border: 1px solid;
    padding: 10px;
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr;
`


const CardMusicas = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr
`

const AllPage = styled.div`
  max-height: 250%;
  background-color: red;
`
const Topo = styled.div`
  width: 100%;
  background-color: blue
`
export default class App extends React.Component {
  
  state = {
    playlist: [],
    musicas: [],
    inputPlaylist: "",
    inputMusicName: "",
    inputMusicArtist: "",
    inputMusicUrl: "",
  };

  componentDidMount() {
    this.exibePlaylist();
    /*this.exibeMusicas()*/
  }
  //Cria playlist
  criaPlaylist = () =>{
    
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.inputPlaylist 
  }

    axios
      .post(url,body, {
        headers: {
        Authorization: "david-ortiz-molina"
      }
    })
      .then((res)=>{
        alert("Playlist Criada");
        this.setState({inputMusicName: ""});
        this.setState({inputMusicArtist: ""});
        this.setState({inputMusicUrl: ""});

        this.exibePlaylist()
    })
      .catch((err)=>{
        console.log(err.response.data.message)
    })
  }

  //input para criar a playlist
  onChangePlaylist = (e) =>{
    this.setState({inputPlaylist: e.target.value})
  }
  
  //exibe todas playlists

  exibePlaylist = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios
      .get(url, {
        headers: {
          Authorization: "david-ortiz-molina"
        }
    })
      .then((res) => {
        this.setState({playlist: res.data.result.list})
        console.log(this.setState.playlist)

    })
      .catch((err) => {
        alert(err.response.data.message)
    })
  }

  //Remove playlist por id
  removerPlaylist = (id) => {
    const url =
  `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {headers: {
        Authorization: "david-ortiz-molina"
      }})
      .then((res)=>{
       alert("Removido com sucesso")
        this.exibePlaylist()
    })
    .catch((err)=>{
        alert("Ocorreu um erro, tente novamente")
    })
  }

    //input para adicionar musicas
    onChangeArtist = (e) =>{
      this.setState({inputMusicArtist: e.target.value})
    }
    onChangeUrl = (e) =>{
      this.setState({inputMusicUrl: e.target.value})
    }
    onChangeName = (e) =>{
      this.setState({inputMusicName: e.target.value})
    }
  

  //Adicona musicas
  addMusic = (id) =>{
    
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const body = {
      name: this.state.inputMusicName, 
      artist: this.state.inputMusicArtist,
      url: this.state.inputMusicUrl
  }

    axios
      .post(url,body, {
        headers: {
        Authorization: "david-ortiz-molina"
      }
    })
      .then((res)=>{
        alert("Music adicionada");
        this.setState()
    })
      .catch((err)=>{
        console.log(err.response.data.message)
    })
  }
  //exibe todas as musicas por playlist

  exibeMusicas = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    axios
      .get(url, {
        headers: {
          Authorization: "david-ortiz-molina"
        }
    })
      .then((res) => {
        this.setState({musicas: res.data.result.list})
        console.log(this.setState.musicas)

    })
      .catch((err) => {
        console.log(this.state.playlist)
    })
  }

  render() {

    const listaṔlaylists = this.state.playlist.map((playlist)=>{
      return <div><SuasPlaylists key={playlist.id}>
      {playlist.name}
      <button onClick={() => this.removerPlaylist(playlist.id)}>X</button>
      </SuasPlaylists>
      </div>
    })

    const gerenciaPlaylist = this.state.playlist.map((playlist)=>{
      return <div> <CardMusicas key={playlist.id}>
      <input
        value={this.state.inputMusicName}
        onChange={this.onChangeName}
        placeholder="Nome da Musica"
        />
        <input
        value={this.state.inputMusicArtist}
        onChange={this.onChangeArtist}
        placeholder="Artista"
        />
        <input
        value={this.state.inputMusicUrl}
        onChange={this.onChangeUrl}
        placeholder="Url"
        />
        <button onClick={this.addMusic(playlist.id)}>Add</button>
      </CardMusicas>
      </div> 
    })
    /*const aksjsja = this.state.playlist.map((id) => {
      const allMusic = this.state.musicas.map((musica) => {
        return <div>
          <CardMusicas key = {musica.id}>
            <button onclick={this.exibeMusicas(id.id)}>mostra ai</button>
            {musica.name}

  
          </CardMusicas>
        </div>
      })
      return allMusic
    })*/

    const gerenciaMusicas = this.state.playlist.map((playlist)=>{
      const allMusic = this.state.musicas.map((musica) => {
        return <div>
          <CardMusicas key = {musica.id}>
          <button onclick={this.exibeMusicas(playlist.id)}>mostra ai</button>

          </CardMusicas>
        </div>
      })
      return allMusic
    })

    return (
      <AllPage>
        <Topo>
          <h2>LABEFY</h2>
        </Topo>
        <Conteudo>
        <GerenciaPlaylists> <input
        value={this.state.inputPlaylist}
        onChange={this.onChangePlaylist}
        placeholder="Nome da Playlist"
        />
        <button onClick={this.criaPlaylist}>Cria Playlist</button></GerenciaPlaylists>
       
        <Listap>{listaṔlaylists}</Listap>
        <GerenciaMusicas>{gerenciaMusicas}{gerenciaPlaylist}</GerenciaMusicas>
        </Conteudo>

      </AllPage>
    );
  }
}
