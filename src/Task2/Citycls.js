import React, { Component } from 'react';
import Cityfun from './Cityfun';
class Citycls extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1> 
                <Cityfun city="Kennalu">karthik</Cityfun>
                <Cityfun city="Pandavapura">Chiru</Cityfun>
                <Cityfun city="S.R.Patna">Charvi</Cityfun>
            </div>
        );
    }
}

export default Citycls;