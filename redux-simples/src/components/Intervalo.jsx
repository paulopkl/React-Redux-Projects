import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import { changeMinimalNumber, changeMaximumNumber } from '../store/actions/numeros';

function Intervalo(props) {

    const handleChange = key => e => {
        if(key === 'min') {
            props.changeMinimal(+e.target.value);
        } else if (key === 'max') {
            props.changeMaximum(+e.target.value);
        }
    }

    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={props.min} onChange={handleChange('min')} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={props.max} onChange={handleChange('max')} />
                </span>
            </div>
        </Card>
    )
}

// Isso vai mapear o estado universal para as propriedades do componente
function mapStateToProps(state) { // Esse state é o state que foi declarado pelo combineReducers
    return { // Retorna um objeto que vai para PROPS
        min: state.numeros.min, 
        max: state.numeros.max
    }
}

// Isso vai mapear as funções de Action para as propriedades do componente
// O dispatch distribui a substituição do estado para todos os componentes
function mapDispatchToProps(dispatch) { 
    return { // Action Creator -> Action 
        changeMinimal: (newNumber) => { 
            const action = changeMinimalNumber(newNumber);
            dispatch(action);
        },
        changeMaximum: (newNum) => {
            const action = changeMaximumNumber(newNum);
            dispatch(action);  
        }
    }
}

const IntervaloRedux = connect(mapStateToProps, mapDispatchToProps)(Intervalo);

export default IntervaloRedux;