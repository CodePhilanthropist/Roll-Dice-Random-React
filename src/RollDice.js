import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component{
    static defaultProps = {
        sides: ["1", "2", "3", "4", "5", "6"]
    };
    constructor(props){
        super(props);
        this.state = {
            die1: '1',
            die2: '2',  
            rolling : false
        }
        this.roll = this.roll.bind(this);
    }
    roll(){
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        this.setState({die1: newDie1, die2: newDie2, rolling : true});

        setTimeout(()=> {this.setState({rolling:false})}, 500);
    }
    render(){
        return (
            <div>
                <Die number={this.state.die1}/>
                <Die number={this.state.die2}/>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling' : 'Click rolling'}
                </button>
            </div>
        );
    }
}

export default RollDice;