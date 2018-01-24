//react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages & Styles
import '../styles/App.css';
import Welcome from './welcome.js';
import loginComponent from '../containers/loginContainer.js';
import Kinder from '../containers/kinderauswahlContainer.js';
import Ebd from '../containers/ebdContainer.js'


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route exact path='/' component={Welcome}/>
            <Route path='/ebd' component={Ebd} />
            <Route path='/Kinder' component={Kinder} />
            <Route path='/loginPath' component={loginComponent} />
          </div>
        </Router>
    );
  }
};

export default App;