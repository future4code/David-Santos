import React, {useState} from 'react';
import './App.css';
import TelaInicial from './components/TelaInicial/TelaInicial';
import TelaMatches from './components/TelaMatches/TelaMatches';

function App() {
  const [tela, setTela] = useState("Tela Inicial");
  
  const irParaATelaInicial = () => {
    setTela("Tela Inicial");
  };

  const irParaATelaMatches = () => {
    setTela("Tela Matches");
  };

  const renderizaPagina = () => {
    switch(tela){
      case "Tela Inicial":
        return <TelaInicial/>;
      case "Tela Matches":
        return <TelaMatches/>;
      default:
        <p>Alguma coisa deu errado!</p>;
    }
  }

  return (
    <div className="App">
      <button onClick={irParaATelaInicial}>Inicio</button>
      <button onClick={irParaATelaMatches}>Matches</button>
      {renderizaPagina()}
    </div>
        
  );
}

export default App;
