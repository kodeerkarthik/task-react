import React from 'react';
import './Signup.css';
import './App.css';

function Signup() {
  return (
    <div className="center1">
        <div className="body1">
            <h1>Sign Up</h1><br></br>
            <label>Name</label><br></br>
            <input type='text' className="box"></input><br></br>
            <label>Email</label><br></br>
            <input type='text' className="box"></input><br></br>
            <label>Password</label><br></br>
            <input type='password' className="box"></input><br></br>
            <label>Confirm Password</label><br></br>
            <input type='password' className="box"></input><br></br>
            <input type='button' value='create my account'className="button"></input>
        </div>
        </div>
  );
}

export default Signup;
