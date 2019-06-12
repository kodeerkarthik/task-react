import React, { Component } from 'react';
import Agefun from './Agefun';
import Citycls from './Citycls';
import Dobcls from './Dobcls';
import Lifecycle from './Lifecycle';
class Agecls extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.title}</h1> 
                <Agefun age="23">karthik</Agefun>
                <Agefun age="23">Chiru</Agefun>
                <Agefun age="24">Charvi</Agefun> 
                <Citycls/>
                <Dobcls/>
                <Lifecycle/>
            </div>
        );
    }
}

export default Agecls;