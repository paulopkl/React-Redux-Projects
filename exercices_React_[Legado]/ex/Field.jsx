import React, { Component } from 'react';

class Field extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label>
                <input type="text" onChange={this.handleChange.bind(this)} value={this.state.value} />
            </div>
        );
    }
}

export default Field;