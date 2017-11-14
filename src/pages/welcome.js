import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { createStore } from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(reducer)

const divStyle = {
  textAlign: 'center',
}

export default class Welcome extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.setState({
      activeKey: event,
    });
    store.dispatch({ type: 'INCREMENT' });
  }

  render(){
    return(
      <div style={divStyle}>
        <Jumbotron style={divStyle}>
            <h1>Willkommen bei EBD</h1>
            <p>Willkommen beim Entwicklungsbeobachtungs und Dokumentationstool!</p>
            <br/>
            <Button href="/loginPath" bsStyle="primary" type="submit">Anmelden</Button>
            <br/>
            <br/>
            <p><Button bsStyle="default" href="/">Registrieren</Button></p>
            <p><Button bsStyle="default" onClick={this.handleClick}>{store.getState()}</Button></p>
        </Jumbotron>
      </div>
    );
  }
}