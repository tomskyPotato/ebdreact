import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import mainReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(mainReducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)