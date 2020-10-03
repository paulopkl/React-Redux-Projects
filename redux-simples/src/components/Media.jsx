import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Media = props => {

    // console.log(props.min);
    const media = (props.min + props.max) / 2;

    return (
        <Card title="Média de números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{media}</strong>
                </span>
            </div>
        </Card>
    )
}

// Mapeia o Store para ser colocado dentor de PROPS
const mapStateToProps = state => { 
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Media);