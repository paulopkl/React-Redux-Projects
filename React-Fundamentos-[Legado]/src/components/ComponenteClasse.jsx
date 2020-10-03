import React, { Component } from "react";

class ComponenteClasse extends Component {

    componentDidMount() {

    }

    componentWillUpdate() {

    }

    render() {
        return (
            <div>
                <h1>{this.props.valor || 'valor Padrão'}</h1>
            </div>
        )
    }
}

export default ComponenteClasse;