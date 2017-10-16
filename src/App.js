import React, { Component } from 'react';
import './App.css';
import Navi from './navbar.js';
import Body from './body.js';
import ButtonArea from './buttonarea.js';

class App extends Component {
constructor(props){
  super(props);
  this.state = {temperature: 123};
}

handleClick = () => {
  this.state.temperature += 1;
  this.setState({temperature: 456});
}

  render() {
    return (
      <div className="App">
        <Navi />
        <Body />
        <ButtonArea name="Thomas" handleClick={this.handleClick} />
        <ButtonArea name="Lilly" temperature={this.state.temperature}/>
        <p>{this.state.temperature}</p>
      </div>
    );
  }
}

export default App;