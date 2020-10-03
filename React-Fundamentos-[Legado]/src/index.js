import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PrimeiroComponente from './components/PrimeiroComponente';
// import { CompA as A, CompB as B } from './components/DoisComponentes';
// import A, { CompB as B } from './components/DoisComponentes';
// import MultiElementos from './components/MultiElementos';
// import FamiliaSilva from "./components/FamiliaSilva";
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import ComponenteComFuncao from './components/ComponenteComFuncao';
// import Pai from './components/Pai';
// import ComponenteClasse from './components/ComponenteClasse';
import Contador from './components/Contador';
import Hook from './components/Hook';

ReactDOM.render(<div>
    {/* <MultiElementos /> */}
    {/* <PrimeiroComponente valor="Valor passado por props" aBcD={Math.random() * 100} /> */}
    {/* <A valor={3} /> */}
    {/* <B valor={6} /> */}
    {/* <FamiliaSilva sobrenome="Ricardo" /> */}
    {/* <Familia sobrenome="Pereira" numero={123}>
      <Membro nome="Andre" />
      <Membro nome="Mariana" />
      <Membro nome="André" />
      <Membro nome="Bernard" />
    </Familia> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Pai /> */}
    {/* <ComponenteClasse valor="Sou uma classe component" /> */}
    <Contador numero={2} />
    <Hook />
</div>, document.getElementById('root'));