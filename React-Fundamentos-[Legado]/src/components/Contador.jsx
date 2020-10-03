import React from 'react';

class components extends React.Component {

    state = {
        numero: this.props.numero || 0,
    }
    
    alterarNumero = (metodo, valor = 1) => event => {
        this.setState({ numero: metodo === '+' ? this.state.numero + valor : this.state.numero - valor })
    }

    maisUm = () => {
        const mais1 = this.alterarNumero('+');
        mais1();
    }

    menosUm = () => {
        const menos1 = this.alterarNumero('-');
        menos1();
    }
    
    render() {   
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={this.alterarNumero('+', 10)}>Inc 10</button>
                <button onClick={this.alterarNumero('-', 10)}>Dec 10</button>
            </div>
        );
    }
}

// Solução 1 para o THIS
// constructor(props) {
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }

// Solução 2 para o THIS
{/* <button onClick={() => this.maisUm()}>Inc</button> */}

// Solução 3 para o THIS
// maisUm = () => {
//     console.log(this);
//     this.props.numero++;
// }

export default components;