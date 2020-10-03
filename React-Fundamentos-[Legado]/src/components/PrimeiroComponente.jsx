import React from 'react';

export default props => 
    <div>
        <h1>{props.valor}</h1>    
        <h1>{props.aBcD}</h1>   
        <h1>{true ? 'Sim' : 'Não'}</h1>   
    </div>

// function Primeiro() {
//   return (
//       <h1>Primeiro Componente!</h1>
//   );
// }

// export default Primeiro;

// export default function() {
//   return (
//       <h1>Primeiro Componente!</h1>
//   );
// }