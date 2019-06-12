import React, { Component } from 'react';
import './Signin.css';

class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'Karthik'
        }
        console.log('Lifecycle constructor')
    }
    componentDidMount(){
        console.log('lifecycle component did mount');
    }
    componentWillMount(){
        console.log('lifecycle component will mount')
    }
    render() {
        return (
            <div>
                <div className="center">  
                    <h1>SIGN IN</h1><br></br>
                    <input type='text' className="box1" placeholder="Email address"></input><br></br>
                    <input type='text' className="box1" placeholder="Password"></input><br></br>
                    <input type='button' value='Log in'className="button1"></input>
                    <p>Forgot your password?</p>
                </div>
            </div>
        );
    }
}

export default Lifecycle;