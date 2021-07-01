import React, {useState} from 'react';
import './App.css';
import TelaInicial from './components/TelaInicial/TelaInicial';
import TelaMatches from './components/TelaMatches/TelaMatches';

function App() {
  const [tela, setTela] = useState("TelaInicial");

  const irParaTelaInicial = () => {
    setTela("TelaInicial")
  };

  const irParaTelaMatches = () => {
    setTela("TelaMatches")
  };

  const renderizaTela = () => {
    switch (tela) {
      case "TelaInicial":
        return <TelaInicial />;
      case "TelaMatches":
        return <TelaMatches />;
      default:
        return <p>Ué?</p>;
    }
  };

  return (
    <div className="App">
        <button onclick={irParaTelaInicial}>Tela inicial</button>
        <button onclick={irParaTelaMatches}>Tela matches</button>

        {renderizaTela()}
    </div>
        
  );
}

export default App;
