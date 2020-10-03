import React from 'react';
import Membro from './Membro';

export default props => {
  return (
      <div>
          <Membro nome="Rafael" sobrenome={props.sobrenome} />
          <Membro nome="Paulo" sobrenome={props.sobrenome} />
          <Membro nome="Pedro" sobrenome={props.sobrenome} />
          <Membro nome="Ana" sobrenome={props.sobrenome} />
      </div>
  );
}