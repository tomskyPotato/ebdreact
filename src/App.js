import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Welcome from './pages/welcome.js';
import loginClass from './pages/login.js';
import Ebd from './pages/ebd.js';
import Kinder from './pages/kinderauswahl.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeKey: '0',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  
    handleSelect(event) {
      this.setState({
        activeKey: event,
      });
    }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Welcome} />
          <Route path='/ebd' component={Ebd} />
          <Route path='/Kinder' component={Kinder} />
          <Route path='/loginPath' component={loginClass} click={this.handleSelect} />
        </div>
      </Router>
    );
  }
}

export default App;