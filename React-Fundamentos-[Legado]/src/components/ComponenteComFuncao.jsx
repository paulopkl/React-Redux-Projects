import React from 'react';

export default function() {

    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia'];

    let num = Math.random();

    const gerarItens = itens => {
      return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {num.toFixed(3)*100}
            {gerarItens(aprovados)}
        </ul>
    );
}