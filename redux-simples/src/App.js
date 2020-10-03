import React from 'react';
import './App.css';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';

function App() {

  const handleChange = key => e => {
    // if (key === 'min'){
    //   setMin(Number(e.target.value));
    // } else if (key === 'max') {
    //   setMax(Number(e.target.value));
    // }
  }

  return (
    <div className="App">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo handleChange={handleChange} ></Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
