import React from 'react';
import ReactDOM from 'react-dom';

import Multi from './components/Multiples';
import Greetings from './components/Greetings';
import First from './components/GoodMorning';
import Father from './components/Father';
import Son from './components/Son';

ReactDOM.render(
    <div>
        {/* <Multi.GoodAfternoon name="Paulo" /> */}
        {/* <Multi.GoodEvening name="Paulo" /> */}
        {/* <Greetings type="Good Morning" name="John" /> */}
        <Father name="Paulo" lastName="Silva">
                <Son name='Paulo' lastName="Almeida" />
                <Son />
                <Son name="Carla" />
        </Father>
    </div>
, document.getElementById('root'));