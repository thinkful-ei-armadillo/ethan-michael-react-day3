import React, {Component} from 'react';

class Bomb extends Component{
    state = {
        count: 0
    };

    componentDidMount(){
       const interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
        this.setState({interval: interval});
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    renderDisplay(){
        const {count} = this.state;
        if(count >= 8){
            clearInterval(this.state.interval);
            return 'BOOM!!!!';
        }
        else if(count % 2 === 0){
            return 'tick'
        }
        else{
            return 'tock'
        }
    }

    render(){
        return(
            <div className="bomb">
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

export default Bomb;