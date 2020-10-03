import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// import Field from './exemplo1/Field';
// import fieldReducer from './exemplo1/fieldReducer';
import counterReducer from './exemplo2/counterReducer';
import Counter from './exemplo2/Counter';

const reducers = combineReducers({
    // field: fieldReducer,
    counter: counterReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        {/* <Field initialValue="Teste" /> */}
        <Counter />
    </Provider>
, document.getElementById('root'));