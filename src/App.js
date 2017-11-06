import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Welcome from './pages/welcome.js';
import loginClass from './pages/login.js';
import Ebd from './pages/ebd.js';
import Kinder from './pages/kinder.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Welcome} />
          <Route path='/ebd' component={Ebd} />
          <Route path='/kinder' component={Kinder} />
          <Route path='/loginPath' component={loginClass} />
        </div>
      </Router>
    );
  }
}

export default App;