//react
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//redux
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

//Pages & Styles
import './styles/App.css';
import Welcome from './components/welcome.js';
import loginClass from './components/login.js';
import Ebd from './components/ebd.js';
import Kinder from './components/kinderauswahl.js';
import userStateManager from './reducers'
import initialStateJSON from './data/reduxStore.json'

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
            <Route path='/loginPath' component={loginClass} />
          </div>
        </Router>
      </Provider>
    );
  }
};

export default App;