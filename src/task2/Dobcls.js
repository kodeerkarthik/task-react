import React, { Component } from 'react';
import Dobfun from './Dobfun';
class Dobcls extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1> 
                <Dobfun dob="23 Dec 1995">karthik</Dobfun>
                <Dobfun dob="10 Oct 1995">Chiru</Dobfun>
                <Dobfun dob="10 Jun 1994">Charvi</Dobfun>
            </div>
        );
    }
}

export default Dobcls;