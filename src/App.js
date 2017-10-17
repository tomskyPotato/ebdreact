import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navi from './navbar.js';
import Body from './body.js';
import ButtonArea from './buttonarea.js';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navi />
            <Body />
            <ButtonArea />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;