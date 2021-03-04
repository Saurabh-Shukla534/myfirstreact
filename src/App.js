import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"automatic",
      year:1964
    };
  }
  changeYear= () => {
    this.setState({year:"1970"});
  }
  changed=(m,b)=>{
    alert(b.type);
  }
    render() {
        return (
        <div>
          <h1>I have {this.props.color} {this.state.type} {this.props.brand.model} car from {this.state.year}!</h1>
          <button onClick={(ev)=>{this.changeYear(); this.changed("Year Changed",ev);}}>Change Year</button>
        </div>  
          );
    }
}
class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qual:"ordinary"
    };
  }
  changeQual= () => {
    this.setState({qual:"extraordinary"});
  }
    render() {
      const carbrand={name: "Ford", model:"Ecosport"};
      return (
        <div>
          <Car brand={carbrand} color="red" />
          <h3>Where is your {this.props.quality} {this.state.qual} Garage?</h3>
          <button type="button" onClick={this.changeQual}>Change Quality</button>
        </div>
      );
    }
  }

  export default Garage;