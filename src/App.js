import React, { Component } from 'react';
import './App.css';
import Navi from './navbar.js';
import Body from './body.js';
import ButtonArea from './buttonarea.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        <Body />
        <ButtonArea />
      </div>
    );
  }
}

export default App;