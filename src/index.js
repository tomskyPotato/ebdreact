//REACT
import React from 'react'
import { render } from 'react-dom'
//REDUX
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
//FILES, Components, Container
import App from './components/App'
import mainReducer from './reducers'

const store = createStore(mainReducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)