import React, {Component} from 'react';

class Hello extends Component{
    state = {
        who: 'world'
    };

    render(){
        return (
            <div className="Hello">
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({who: 'friend'})}>Friend</button>
                <button onClick={() => this.setState({who: 'react'})}>React</button>
                <button onClick={() => this.setState({who: 'world'})}>World</button>
            </div>
        )
    }
}

export default Hello;