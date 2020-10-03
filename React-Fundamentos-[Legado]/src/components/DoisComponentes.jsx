import React from 'react';

const CompA = props => {
  return (
    <h1>Primeiro diz: {props.valor}</h1>
  );
}

const CompB = props => {
  return (
    <h1>Segundo diz: {props.valor}</h1>
  );
}

// export { CompA, CompB };
export { CompA, CompB };
export default CompA;

// export const CompA = props => {
//   return (
//     <h1>Primeiro diz: {props.valor}</h1>
//   );
// }

// export const CompB = props => {
//   return (
//     <h1>Segundo diz: {props.valor}</h1>
//   );
// }
