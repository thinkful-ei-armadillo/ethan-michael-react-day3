import React, {Component} from 'react';

class RouletteGun extends Component{
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinning: false
    };

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    handleClick = () =>{
        this.setState({
            spinning: true
        })
        this.timeout = setTimeout(() =>{
            let rand = Math.ceil(Math.random() * 8);

            this.setState({
                chamber: rand,
                spinning: false
            })
        }, 2000)      
    }

    renderDisplay(){
        const {chamber, spinning} = this.state;
        const {bulletInChamber} = this.props;
        console.log(typeof chamber);
        console.log(typeof bulletInChamber);
        
        if(spinning){
            return 'spinning the chamber and pulling the trigger! ...'
        }
        else if(chamber === bulletInChamber){
            return 'BANG!!!!'
        }
        else if(chamber !== bulletInChamber){
            return 'you\'re safe!'
        }
    }

    render(){
        return (
            <div className="roulette">
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;