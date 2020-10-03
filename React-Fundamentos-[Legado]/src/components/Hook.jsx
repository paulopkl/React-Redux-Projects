import React, { useState } from 'react';

export default () => {
    const [state, setState] = useState(0);

    return (
        <div>
            <div>Número: {state}</div>
            <button onClick={() => setState(state + 1)}>Inc</button>
            <button onClick={() => setState(state - 1)}>Dec</button>
            <button onClick={() => setState(state + 10)}>Inc 10</button>
            <button onClick={() => setState(state- 10)}>Dec 10</button>
        </div>
    );
}