import React from 'react';
import './Signin.css';
import './App.css';

function Signin() {
  return (
    <div className="App">
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

export default Signin;
