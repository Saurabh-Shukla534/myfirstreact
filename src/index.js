import React from 'react';
import ReactDOM from 'react-dom';
import Garage from './App.js';

/*const myfirstelement = (
<div>
    <h1>Hello React!</h1>
    <h1>Hello</h1>
    <input type="text" />
    <br /><br />
    <button type="submit">Submit</button>
    </div>
    )

class Car extends React.Component {
    constructor() {
        super();
        this.state={
            color:"red"
        };
    }
    render() {
        return <h3>I have {this.state.color} car!</h3>;
    }
}
function Ford() {
    return <h3>I am Ford!</h3>;
}*/
 const myelement = <Garage quality="professional"/>; 
ReactDOM.render(myelement, document.getElementById('sandy'));