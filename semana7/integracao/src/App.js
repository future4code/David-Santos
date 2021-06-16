
import React from "react";
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista";

export default class app extends React.Component {
  state = {
    telaAtual: "Lista"
  }

  mudaTela = () => {
    switch (this.state.telaAtual){
      case "Cadastro":
        return <Cadastro TelaLista={this.TelaLista}/>
      case "Lista":
        return <Lista TelaCadastro={this.TelaCadastro}/>
      default:
        return <div>Pagina não encontrada</div>
    }
  }

  TelaCadastro = () => {
    this.setState({telaAtual: "Cadastro"})
  }

  TelaLista = () => {
    this.setState({telaAtual: "Lista"})
  }

  render() {
    return (
      <div>
        {this.mudaTela()}
      </div>
    );
  }
}
