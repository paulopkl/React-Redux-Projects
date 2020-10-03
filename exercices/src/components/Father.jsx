import React from 'react';

import { childrenWithProps } from '../utils/utils';

const Father = props => {
    return (
        <div>
            <h1>{props.name} {props.lastName}</h1>
            <h2>Sons</h2>
            <ul>
                {childrenWithProps(props)}
            </ul>
        </div>
    );
}

export default Father;