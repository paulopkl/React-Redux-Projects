import React from 'react';
import Member from './Member';

function Family(props) {
    return (
        <div>
            <Member name="Noah" lastName="Jones" />
            <Member name="James" lastName="Jones" />
            <Member name="Ethan" lastName="Jones" />
            <Member name="Alexander" lastName="Jones" />
        </div>
    );
}

export default Family;