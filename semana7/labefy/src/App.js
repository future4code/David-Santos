import React from "react";
import axios from 'axios'

export default class App extends React.Component {
  
  state = {
    playlist: [],
    inputPlaylist: ""
  };

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
        this.setState({inputPlaylist: ""});
        this.exibePlaylist()
    })
      .catch((err)=>{
        console.log(err.response.data.message)
    })
  }

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

    })
      .catch((err) => {
        alert(err.response.data.message)
    })
  }

  onChangePlaylist = (e) =>{
    this.setState({inputPlaylist: e.target.value})
  }

  render() {

    const playlist = this.state.playlist.map((playlist)=>{
      return <li key={playlist.name}>{playlist.name}</li>
    })

    return (
      <div>
        <input
        value={this.state.inputPlaylist}
        onChange={this.onChangePlaylist}
        placeholder="Nome da Playlist"
        />
        <button onClick={this.criaPlaylist}>bbb</button>
        {playlist}
      </div>
    );
  }
}
