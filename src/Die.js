import React, { Component } from 'react';
import './Die.css';
class Die extends Component{
    constructor(props){
        super(props);
        this.sate = {
            
        }
    }
    render(){
        return(
            <i class={`bx bxs-dice-${this.props.number}`}></i>
        );
    }
}

export default Die;