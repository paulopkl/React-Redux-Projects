import React from 'react';

function clone(element, props) {
    return React.Children.map(element, elem => React.cloneElement(elem, { ...props }));
}

export { clone };