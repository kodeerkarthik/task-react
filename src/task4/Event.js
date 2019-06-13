import React, { Component } from 'react';
import './Event.css'

class Event extends Component {
    constructor(props) {
    super(props);
    this.state = {
    name: '',
    name1:'',
    name2:'karthik'
    };
}
handleChange=(event) =>{
    this.setState({name: event.target.value});
}
handleChange1=(event) =>{
    this.setState({name1: event.target.value});
}
nameChange=()=>{
    this.setState({name1:this.state.name2})
}
    
render() {
    return (
        <form >
            <h1>{this.state.name}</h1>
            <input class='task4input' type='text' onChange={this.handleChange} ></input>
            <h1>{this.state.name1}</h1>
            <input class='task4input' type='text' onChange={this.handleChange1} ></input><br></br>
            <input class='btn' type="button" value="Submit" onClick={this.nameChange} ></input>
        </form>
        );
    }
}

export default Event;


