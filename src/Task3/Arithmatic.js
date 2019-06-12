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
                <b>{this.state.add}</b>                
                <b>{this.state.sub}</b>
                <b>{this.state.mul}</b><br></br>
                <button onClick={this.addition}>Addition</button>
                <button onClick={this.substraction}>Substraction</button>
                <button onClick={this.multiplication}>Multiplication</button>
            </div>
        );
    }
}

export default Arithmatic;