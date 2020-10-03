import React, { Component } from 'react';

class Geetings extends Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {
            type: 'Good Morning!',
            name: 'Paulo'
        }
    }

    changeValue(e, val) {
        let i = 1;
        setInterval(() => {
            this.setState({ type: ++i })
        }, 1000);
        this.setState({ [val]: e.target.value });
    }

    render() {
        const { type, name } = this.state;
        return (
            <div>
                <h1>{type} {name}!</h1>
                <hr/>
                <input type="text" placeholder="Type...." value={this.state.type} 
                    onChange={e => this.changeValue(e, 'type')} />
                <input type="text" placeholder="Name...." value={this.state.name} 
                    onChange={e => this.changeValue(e, 'name')} />
            </div>
        )
    }
}

export default Geetings;