import React from 'react';

function Son(props) {
    return (
        <li>
            {props.name} {props.lastName}
        </li>
    );
}

export default Son;