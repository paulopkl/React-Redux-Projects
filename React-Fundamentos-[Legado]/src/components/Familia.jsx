import React from 'react';
import { filhosComProps } from '../utils/utils';

export default props => {
  return (
      <div>
          {filhosComProps(props)}
          {/* {React.Children.map(props.children, componenteFilho => {
              return React.cloneElement(componenteFilho, { ...props })
          })} */}
          {/* {React.cloneElement(props.children, { ...props })} */}
          {/* {React.cloneElement(props.children, props)} */}
          {/* {React.cloneElement(props.children, { sobrenome: props.sobrenome })} */}
          {/* {props.children} */}
      </div>
  );
}