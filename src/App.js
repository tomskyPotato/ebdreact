import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';
import Welcome from './pages/welcome.js';
import loginClass from './pages/login.js';
import Ebd from './pages/ebd.js';
import Kinder from './pages/kinderauswahl.js';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  number: 7
}

//Der Reducer übernimmt den aktuellen state und eine action und gibt den neuen state zurück.
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return initialState.number + 1
    case 'DECREMENT':
      return initialState.number - 1
    default:
      return initialState
  }
}

//Im store sind alle states gespeichert und können abgerufen werden
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path='/' component={Welcome} />
            <Route path='/ebd' component={Ebd} />
            <Route path='/Kinder' component={Kinder} />
            <Route path='/loginPath' component={loginClass} />
          </div>
        </Router>
      </Provider>
    );
  }
};

export default App;