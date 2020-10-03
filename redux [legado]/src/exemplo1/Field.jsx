import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChangeValue } from './fieldActions';

class Field extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.txt}</h1>
                <input type="text" onChange={this.props.ChangeValue} value={this.props.txt} />
            </div>
        );
    }
}

// Pega o 
const mapStateToProps = state => {
    return { txt: state.field.value }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ChangeValue }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Field);