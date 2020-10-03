import React from 'react';
import ReactDOM from 'react-dom';
import { First, Second } from './Component';
import JonesFamily from './JonesFamily';
import Family from './Family';
import Member from './Member';
import ClassComponent from './ClassComponent';
import Field from './Field';

ReactDOM.render(
    // <Family lastName="Willian">
    //     <Member name="Gary" />
    //     <Member name="Henry" />
    //     <Member name="katy" />
    // </Family>
    // <ClassComponent initialValue={10} label="Counter" />
    <Field initialValue="Test" />
, document.getElementById('app'));