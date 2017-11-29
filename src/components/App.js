//react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//Pages & Styles
import '../styles/App.css';
import Welcome from './welcome.js';
import loginComponent from './login.js';
import Ebd from './ebd.js';
import Kinder from './kinderauswahl.js';
import userStateManager from '../reducers'
import initialStateJSON from '../data/reduxStore.json'

const initialState = 
  {
    text: 'Use Redux'
  }

//Der Reducer übernimmt den aktuellen state und eine action und gibt den neuen state zurück.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return action
    default:
      return state
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
            <Route exact path='/' component={Welcome}/>
            <Route path='/ebd' component={Ebd} />
            <Route path='/Kinder' component={Kinder} />
            <Route path='/loginPath' component={loginComponent} />
          </div>
        </Router>
      </Provider>
    );
  }
};

export default App;