import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Body from './body.js';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Body />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;