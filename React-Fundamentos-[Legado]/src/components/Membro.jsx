import React from 'react';

export default props => {
  return (
      <h1>
            {props.nome}
            <strong> {props.sobrenome} </strong>
            {props.numero}
      </h1>
  );
}