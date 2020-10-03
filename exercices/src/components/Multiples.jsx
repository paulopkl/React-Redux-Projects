import React from 'react';

const GoodAfternoon = props => {
    return (
        <h1>Good Afternoon {props.name}</h1>
    );
}

const GoodEvening = props => {
    return (
        <h1>Good Evening {props.name}</h1>
    );
}

export default { GoodAfternoon, GoodEvening };