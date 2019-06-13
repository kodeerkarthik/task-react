import React, { Component } from 'react';
import './Arithmatic.css';
class Arithmatic extends Component {
    // constructor(props){
    // super(props);
    state={
        add: 10,
        sub: 10,
        mul: 10
    // };
}
addition=()=>{
    this.setState(
        {add:this.state.add =this.state.add + 5}
    )
}
substraction=()=>{
    if(this.state.sub>0)
    this.setState(
        {sub:this.state.sub =this.state.sub - 5}
    )
}
multiplication=()=>{
    this.setState(
        {mul:this.state.mul =this.state.mul * 5}
    )
}
    render() {
        return (
            <div>
                <b class='bld'>{this.state.add}</b>                
                <b class='bld'>{this.state.sub}</b>
                <b class='bld'>{this.state.mul}</b><br></br>
                <button class='btn' onClick={this.addition}>Addition</button>
                <button class='btn' onClick={this.substraction}>Substraction</button>
                <button class='btn' onClick={this.multiplication}>Multiplication</button>
            </div>
        );
    }
}

export default Arithmatic;