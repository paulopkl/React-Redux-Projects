import React from 'react';

function Member(props) {
    return (
        <div>{props.name} <strong>{props.lastName}</strong></div>
    );
}

export default Member;