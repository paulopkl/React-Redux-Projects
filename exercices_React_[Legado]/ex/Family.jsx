import React from 'react';

import { clone } from './utils/reactUtils';

function Family(props) {
    return (
        <div>
            <h1>Family</h1>
            {clone(props.children, props)}
        </div>
    );
}

export default Family;