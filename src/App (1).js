import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Welcome from './welcome.js';
import loginClass from './login.js';
import Ebd from './ebd.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Welcome} />
          <Route path='/ebd' component={Ebd} />
          <Route path='/loginPath' component={loginClass} />
        </div>
      </Router>
    );
  }
}

export default App;