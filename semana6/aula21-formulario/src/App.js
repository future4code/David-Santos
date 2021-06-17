import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: "mensagens" });
  };

  render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
          case 3:
            return <Etapa3 />;
          case 4:
            return <Etapa4 />;
      }
    };  
    return(

    <div>
      {renderizaEtapa()}
      <button>Proxima Pagina</button>
    </div>
    
    )

  }
}
