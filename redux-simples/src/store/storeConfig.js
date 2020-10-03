import { createStore, combineReducers } from 'redux';
import numbersReducers from './reducers/numeros';

const reducers = combineReducers({ // State
    numeros: numbersReducers, // numbersReducers é um reducer que foi movido para outro arquivo
    nomes: function(state, action) { // Isto é um REDUCER
        return ['Ana', 'Bia', 'Carlos']
    }
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;