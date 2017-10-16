import React, { Component } from 'react';
import './App.css';
import Navi from './navbar.js';
import Body from './body.js';
import ButtonArea from './buttonarea.js';

class App extends Component {
constructor(props){
  super(props);
  this.state = {temperature: 0};
}

handleClick = () => {
  let n = this.state.temperature;
  n += 1;
  this.setState({temperature: n});
}

  render() {
    return (
      <div className="App">
        <Navi />
        <Body />
        <ButtonArea name="Thomas" handleClick={this.handleClick} temperature={this.state.temperature}/>
      </div>
    );
  }
}

export default App;