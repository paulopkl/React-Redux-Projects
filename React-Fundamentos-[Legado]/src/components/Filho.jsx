import React from 'react';

export default props => {
  return (
      <div>
          <button onClick={() => props.notificarSaida('Shopping')}>
              Vou Sair
            </button>
      </div>
  );
}